package com.bonc.szqy.common.utils;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class LoginFilter implements Filter {

	@Override
	public void destroy() {

	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {

		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse resp = (HttpServletResponse) response;
		// 获得当前请求的URI
		String nowPath = req.getRequestURI();
		System.out.println("****登录验证******");
		System.out.println("当前userInfo："+req.getSession().getAttribute("userInfo_loginId"));
		System.out.println(nowPath.indexOf("Login"));
		System.out.println(nowPath.indexOf("login"));
		System.out.println("****登录验证******");
		if (req.getSession().getAttribute("userInfo_loginId") == null || req.getSession().getAttribute("userInfo_loginId").equals("")) {
			//判断获取的路径不为空且不是访问登录页面或执行登录操作时跳转
			if (nowPath != null && !nowPath.equals("")
					&& (nowPath.indexOf("Login") < 0 && nowPath.indexOf("login") < 0)) {
				resp.sendRedirect(req.getContextPath() + "/login");
				return;
			}

		}
		//已通过验证，用户访问继续  
		chain.doFilter(req, resp);
		return;
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {

	}

}
