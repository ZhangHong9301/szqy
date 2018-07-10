/**
 * Copyright &copy; 2012-2016 <a href="https://github.com/thinkgem/jeesite">JeeSite</a> All rights reserved.
 */
package com.bonc.szqy.modules.user.web;

import com.bonc.szqy.common.utils.RequestUtil;
import com.bonc.szqy.common.utils.ValidateCode;
import com.bonc.szqy.modules.user.entity.User;
import com.bonc.szqy.modules.user.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;



@Controller
public class UserController {
	
	private static Logger logger = LoggerFactory.getLogger(UserController.class);
	
	/**验证码接口系统id**/
	public static String SYSTEMCODEID="5c0e2c94141e4d1ea7ef4c0bde80549d"; 
	/**加密key**/
	public static String codeKey = "1234!@#$";
	/**加密默认的key**/
	public static String defaultcodeKey="1qaz$RFV";


	@Autowired
	private UserService userService;


	@RequestMapping("/login")
	public String loginPage() {

		return "/modules/user/login";
	}

	@RequestMapping(value = "/login/validateCode")
	public String validateCode(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// 设置响应的类型格式为图片格式
		response.setContentType("image/jpeg");
		// 禁止图像缓存。
		response.setHeader("Pragma", "no-cache");
		response.setHeader("Cache-Control", "no-cache");
		response.setDateHeader("Expires", 0);

		HttpSession session = request.getSession();

		ValidateCode vCode = new ValidateCode(80, 31, 4, 8);
		session.setAttribute("code", vCode.getCode());
		logger.info("UserController.userLogin() IP: {} 生成图形验证：{}", RequestUtil.getIpAddr(request), vCode.getCode());
		vCode.write(response.getOutputStream());
		return null;
	}

	/**
	 * 登陆控制层
	 * 
	 * @param userName
	 * @param password
	 * @param session
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public Map<String, String> userLogin(String userName,String password,String code, HttpSession session) {
		logger.debug("UserController.userLogin() userName={}，password={}, code={}",userName, password, code);

		String sesscode = (String) session.getAttribute("code");
		Map<String, String> loginStatus = new HashMap<String, String>();
		if (StringUtils.isBlank(userName) || 50<userName.length()){
			loginStatus.put("auth", "-1");
			loginStatus.put("errorCode", "10");
			loginStatus.put("msg", "用户名或密码有误！");
			logger.info("UserController.userLogin() userName={}，password={}, code={} 用户名或密码有误！", userName, password, code);
			return loginStatus;
		}
		if(!code.toUpperCase().equals(sesscode.toUpperCase())){
			loginStatus.put("auth", "-1");
			loginStatus.put("errorCode", "9");
			loginStatus.put("msg", "验证码有误！");
			logger.info("UserController.userLogin() userName={}，password={}, code={}, realCode={} 验证码有误！", userName, password, code, sesscode);
			return loginStatus;
		}
		int resultValue = 4;
		try {
			User user = userService.selectByLoginName(userName);
			if (null != user && StringUtils.isNoneBlank(user.getPassword())) {
				if (user.getPassword().toLowerCase().trim().equals(password)) {
					resultValue = 0;
				} else {
					resultValue = 4;
				}
				session.setAttribute("userInfo_areaId",user.getAreaId());
				session.setAttribute("userInfo_loginId",user.getLoginId());
			} else {

				loginStatus.put("auth", "" + resultValue);
				loginStatus.put("errorCode", "8");
				loginStatus.put("msg", "用户名或密码有误！");
				logger.info("UserController.userLogin() userName={}，password={}, code={} 用户名或密码有误！", userName, password, code);
				return loginStatus;
			}

			String resultName = "";
			if (resultValue != 0) {
				resultName = "用户名或密码有误！";
			} 
			loginStatus.put("auth", "" + resultValue);
			loginStatus.put("errorCode", resultName);
			loginStatus.put("msg", resultName);

			logger.info("UserController.userLogin() userName={}，password={}, code={} {}。", userName, password, code, resultName);
		} catch (Exception e) {
			e.printStackTrace();
			loginStatus.put("auth", "" + resultValue);
			loginStatus.put("errorCode", "8");
			loginStatus.put("msg", e.getMessage());
			logger.error("UserController.userLogin() userName={}，password={}, code={}, 异常：{}", userName, password, code, e.getMessage());

		}
		return loginStatus;
	}

	/**
	 * 登陆控制层
	 * @return
	 */
	@RequestMapping(value = "/logout")
	public String logout(HttpSession session,HttpServletRequest request, HttpServletResponse response) throws IOException {
		if (null != session && null != session.getAttribute("userInfo_loginId")){
			session.removeAttribute("userInfo_loginId");
			session.removeAttribute("userInfo_areaId");
		}
		response.setHeader("Pragma", "no-cache");
		response.setHeader("Cache-Control", "no-cache");
		response.setDateHeader("Expires", -1);
		/*response.sendRedirect(request.getContextPath() + "/login.jsp");*/
		return "redirect:/login";
	}

	/**
	* @Description: 更改用户密码
	* @param: [userName, password]  
	* @Return: java.lang.String
	* @Author: Mr.Zhang 
	* @Date: 2018/6/21 16:35
	*/
	@RequestMapping(value = "/changePwd",method = RequestMethod.GET,produces = "text/html;charset=utf-8")
	public String changePwd(@RequestParam("userName")String userName,
						 @RequestParam("password")String password){
		Map<String, Object> respMap = new HashMap<>();
		ObjectMapper objectMapper = new ObjectMapper();
		String respJSONString = null;
		try{
			//更改用户密码
			userService.replacePwdByUsername(userName,password);
			respMap.put("success",0);
			respMap.put("msg","更改成功");
			respJSONString = objectMapper.writeValueAsString(respMap);
		}catch(Exception e){
			respMap.put("success",1);
			respMap.put("msg","更改失败");

		}
		return respJSONString;

	}

}
