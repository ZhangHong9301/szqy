package com.bonc.szqy.modules.pages.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.bonc.szqy.common.utils.RequestUtil;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.bonc.szqy.modules.pages.service.ProvService;


@Controller
@RequestMapping("Prov")
public class ProvController {

    private static Logger logger = LoggerFactory.getLogger(ProvController.class);

    @Autowired
    ProvService provService;

    @RequestMapping("/province-overview")
    public String provPage(HttpSession session, HttpServletRequest request) {

        if (null == session || null == session.getAttribute("userInfo_areaId")
                || StringUtils.isBlank(session.getAttribute("userInfo_areaId") + "")) {
            logger.info("ProvController.provPage() 用户session为空，跳转登录页... IP:{}", RequestUtil.getIpAddr(request));
            return "forward:/login";
        }
        return "/modules/page/province-overview";
    }

    /**
     * 短信排行榜Top5
     *
     * @return
     */
    @RequestMapping(value = "/getSmsLeaderboard", produces = "text/html;charset=utf-8")
    @ResponseBody
    public String getSmsLeaderboard(HttpSession session) {

        Map<String, Object> map = new HashMap<String, Object>();
        Map<String, Object> param = new HashMap<String, Object>();
        String areaCode = session.getAttribute("userInfo_areaId") + "";
        logger.info("ProvController.getSmsLeaderboard() login_id={}, areaId={} 短信排行榜Top5",
                session.getAttribute("userInfo_loginId"), areaCode);
        if (areaCode == null || areaCode.isEmpty()) {

        } else {
            if (areaCode.length() == 3) {
                param.put("cityCode", areaCode);
                param.put("countryCode", "");
            } else if (areaCode.length() == 4) {
                param.put("cityCode", "");
                param.put("countryCode", areaCode);
            }

        }

        try {
            List<Map<String, Object>> list = provService.getMapper().smsCountTop5(param);
            logger.info("ProvController.getSmsLeaderboard() 短信排行榜Top5，{}", list);
            if (list.isEmpty()) {
                map.put("statusCode", 2);
                map.put("data", 0);

            } else {
                map.put("statusCode", 0);
                map.put("data", list);

            }
        } catch (Exception e) {
            e.printStackTrace();
            map.put("statusCode", 1);
            map.put("data", null);
            logger.error("ProvController.getSmsLeaderboard() 异常{}", e.getMessage());
        }

        return JSON.toJSONString(map);
    }


    /**
     * 当日发送量
     *
     * @return
     */
    @RequestMapping(value = "/smsCountByDay", produces = "text/html;charset=utf-8")
    @ResponseBody
    public String smsCountByDay(HttpSession session) {
        Map<String, Object> map = new HashMap<String, Object>();
        Map<String, Object> param = new HashMap<String, Object>();
        String areaCode = (String) session.getAttribute("userInfo_areaId");

        logger.info("ProvController.smsCountByDay() 当日发送量，{}", areaCode);
        if (areaCode == null || areaCode.isEmpty()) {

        } else {
            if (areaCode.length() == 3) {
                param.put("cityCode", areaCode);
                param.put("countryCode", "");
            } else if (areaCode.length() == 4) {
                param.put("cityCode", "");
                param.put("countryCode", areaCode);
            }

        }

        try {
            List<Map<String, Object>> list = provService.getMapper().smsCountByDay(param);
            logger.info("ProvController.smsCountByDay() 当日发送量，{}", list);
            if (list.isEmpty()) {
                map.put("statusCode", 2);
                map.put("data", 0);

            } else {
                map.put("statusCode", 0);
                map.put("data", list.get(0).get("sms_num").toString());

            }
        } catch (Exception e) {
            e.printStackTrace();
            map.put("statusCode", 1);
            map.put("data", null);
            logger.error("ProvController.smsCountByDay() 异常，{}", e.getMessage());

        }
        return JSON.toJSONString(map);
    }


    /**
     * 年累计发送量
     *
     * @return
     */
    @RequestMapping(value = "/smsCountByYear", produces = "text/html;charset=utf-8")
    @ResponseBody
    public String smsCountByYear(HttpSession session) {
        Map<String, Object> map = new HashMap<String, Object>();
        Map<String, Object> param = new HashMap<String, Object>();
        String areaCode = (String) session.getAttribute("userInfo_areaId");
        logger.info("ProvController.smsCountByYear() 年累计发送量，{}", areaCode);
        if (areaCode == null || areaCode.isEmpty()) {

        } else {
            if (areaCode.length() == 3) {
                param.put("cityCode", areaCode);
                param.put("countryCode", "");
            } else if (areaCode.length() == 4) {
                param.put("cityCode", "");
                param.put("countryCode", areaCode);
            }

        }

        try {
            List<Map<String, Object>> list = provService.getMapper().smsCountByYear(param);
            logger.info("ProvController.smsCountByYear() 年累计发送量，{}", list);
            if (list.isEmpty()) {
                map.put("statusCode", 2);
                map.put("data", 0);

            } else {
                map.put("statusCode", 0);
                map.put("data", list.get(0).get("sms_num").toString());

            }
        } catch (Exception e) {
            e.printStackTrace();
            map.put("statusCode", 1);
            map.put("data", null);
            logger.error("ProvController.smsCountByYear() 异常，{}", e.getMessage());
        }
        return JSON.toJSONString(map);
    }


    /**
     * 分钟级别获取短信量
     *
     * @return
     */
    @RequestMapping(value = "/smsCountByTime", produces = "text/html;charset=utf-8")
    @ResponseBody
    public String smsCountByTime(HttpSession session) {
        Map<String, Object> map = new HashMap<String, Object>();
        Map<String, Object> param = new HashMap<String, Object>();
        String areaCode = (String) session.getAttribute("userInfo_areaId");
        if (areaCode == null || areaCode.isEmpty()) {

        } else {
            if (areaCode.length() == 3) {
                param.put("cityCode", areaCode);
                param.put("countryCode", "");
            } else if (areaCode.length() == 4) {
                param.put("cityCode", "");
                param.put("countryCode", areaCode);
            }

        }

        try {
            List<Map<String, Object>> list = provService.getMapper().smsCountByTime(param);
            System.out.println("分钟级别获取短信量" + list.get(0).get("sms_num").toString());
            if (list.isEmpty()) {
                map.put("statusCode", 2);
                map.put("data", 0);

            } else {
                map.put("statusCode", 0);
                map.put("data", list.get(0).get("sms_num").toString());

            }
        } catch (Exception e) {
            e.printStackTrace();
            map.put("statusCode", 1);
            map.put("data", null);

        }

        return JSON.toJSONString(map);
    }


    /**
     * 客流趋势
     *
     * @return
     */
    @RequestMapping(value = "/flowTrend", produces = "text/html;charset=utf-8")
    @ResponseBody
    public String flowTrend(HttpSession session) {
        Map<String, Object> map = new HashMap<String, Object>();
        Map<String, Object> param = new HashMap<String, Object>();
        String areaCode = (String) session.getAttribute("userInfo_areaId");
        if (areaCode == null || areaCode.isEmpty()) {

        } else {
            if (areaCode.length() == 3) {
                param.put("cityCode", areaCode);
                param.put("countryCode", "");
            } else if (areaCode.length() == 4) {
                param.put("cityCode", "");
                param.put("countryCode", areaCode);
            }

            try {
                List<Map<String, Object>> list = provService.getMapper().flowTrend(param);

                if (list.isEmpty()) {
                    map.put("statusCode", 2);
                    map.put("data", 0);

                } else {
                    map.put("statusCode", 0);
                    map.put("data", list);

                }
            } catch (Exception e) {
                e.printStackTrace();
                map.put("statusCode", 1);
                map.put("data", null);

            }


        }
        return JSON.toJSONString(map);
    }

    /**
     * 游客旅游时长
     *
     * @return
     */
    @RequestMapping(value = "/cusPlayTime", produces = "text/html;charset=utf-8")
    @ResponseBody
    public String cusPlayTime(HttpSession session) {
        Map<String, Object> map = new HashMap<String, Object>();
        Map<String, Object> param = new HashMap<String, Object>();
        String areaCode = (String) session.getAttribute("userInfo_areaId");
        if (areaCode == null || areaCode.isEmpty()) {

        } else {
            if (areaCode.length() == 3) {
                param.put("cityCode", areaCode);
                param.put("countryCode", "");
            } else if (areaCode.length() == 4) {
                param.put("cityCode", "");
                param.put("countryCode", areaCode);
            }

        }

        try {
            List<Map<String, Object>> list = provService.getMapper().cusPlayTime(param);

            if (list.isEmpty()) {
                map.put("statusCode", 2);
                map.put("data", 0);

            } else {
                map.put("statusCode", 0);
                map.put("data", list);

            }
        } catch (Exception e) {
            e.printStackTrace();
            map.put("statusCode", 1);
            map.put("data", null);

        }

        return JSON.toJSONString(map);
    }


    /**
     * 游客驻留分析
     *
     * @return
     */
    @RequestMapping(value = "/cusStayTime", produces = "text/html;charset=utf-8")
    @ResponseBody
    public String cusStayTime(HttpSession session) {
        Map<String, Object> map = new HashMap<String, Object>();
        Map<String, Object> param = new HashMap<String, Object>();
        String areaCode = (String) session.getAttribute("userInfo_areaId");
        if (areaCode == null || areaCode.isEmpty()) {

        } else {
            if (areaCode.length() == 3) {
                param.put("cityCode", areaCode);
                param.put("countryCode", "");
            } else if (areaCode.length() == 4) {
                param.put("cityCode", "");
                param.put("countryCode", areaCode);
            }

        }

        try {
            List<Map<String, Object>> list = provService.getMapper().cusStayTime(param);

            if (list.isEmpty()) {
                map.put("statusCode", 2);
                map.put("data", 0);

            } else {
                map.put("statusCode", 0);
                map.put("data", list);

            }
        } catch (Exception e) {
            e.printStackTrace();
            map.put("statusCode", 1);
            map.put("data", null);

        }

        return JSON.toJSONString(map);
    }


    /**
     * 旅客来源top10
     *
     * @return
     */
    @RequestMapping(value = "/cusLandTop", produces = "text/html;charset=utf-8")
    @ResponseBody
    public String cusLandTop(HttpSession session) {
        Map<String, Object> map = new HashMap<String, Object>();
        Map<String, Object> param = new HashMap<String, Object>();
        String areaCode = (String) session.getAttribute("userInfo_areaId");
        if (areaCode == null || areaCode.isEmpty()) {

        } else {
            if (areaCode.length() == 3) {
                param.put("cityCode", areaCode);
                param.put("countryCode", "");
            } else if (areaCode.length() == 4) {
                param.put("cityCode", "");
                param.put("countryCode", areaCode);
            }

        }

        try {
            List<Map<String, Object>> list = provService.getMapper().cusLandTop(param);

            if (list.isEmpty()) {
                map.put("statusCode", 2);
                map.put("data", 0);

            } else {
                map.put("statusCode", 0);
                map.put("data", list);

            }
        } catch (Exception e) {
            e.printStackTrace();
            map.put("statusCode", 1);
            map.put("data", null);

        }

        return JSON.toJSONString(map);
    }


    /**
     * 当日累计客流+实施新增+净增客流
     *
     * @return
     */
    @RequestMapping(value = "/allDayFlow", produces = "text/html;charset=utf-8")
    @ResponseBody
    public String allDayFlow(HttpSession session) {
        Map<String, Object> map = new HashMap<String, Object>();
        Map<String, Object> param = new HashMap<String, Object>();
        String areaCode = (String) session.getAttribute("userInfo_areaId");
        if (areaCode == null || areaCode.isEmpty()) {

        } else {
            if (areaCode.length() == 3) {
                param.put("cityCode", areaCode);
                param.put("countryCode", "");
            } else if (areaCode.length() == 4) {
                param.put("cityCode", "");
                param.put("countryCode", areaCode);
            }

        }

        try {
            List<Map<String, Object>> list = provService.getMapper().allDayFlow(param);
            //System.out.println("当日累计客流+实施新增+净增客流"+list.get(0).toString());
            if (list.size()==1 && list.get(0)== null||list.size()==0) {
                map.put("statusCode", 2);
                Map<String, Object> dataMap = new HashMap<>();
                dataMap.put("dangriLeijiKeliu",0);
                dataMap.put("shishiXinzeng",0);
                dataMap.put("jingzengKeliu",0);
                map.put("data", dataMap);

            } else {
                map.put("statusCode", 0);
                map.put("data", list.get(0));

            }
        } catch (Exception e) {
            e.printStackTrace();
            map.put("statusCode", 1);
            map.put("data", null);

        }

        return JSON.toJSONString(map);
    }


    /**
     * 实时新增-----此接口不要
     *
     * @return
     */
    @RequestMapping(value = "/nowIncrFlow", produces = "text/html;charset=utf-8")
    @ResponseBody
    public String nowIncrFlow(HttpSession session) {
        Map<String, Object> map = new HashMap<String, Object>();
        Map<String, Object> param = new HashMap<String, Object>();
        String list_session = (String) session.getAttribute("areaCode");   //获取登录用户所属地区的编码
        if (list_session.isEmpty() || list_session == null) {

        } else {
            if (list_session.length() == 3) {
                param.put("cityCode", list_session);
                param.put("countryCode", "");
            } else if (list_session.length() == 4) {
                param.put("cityCode", "");
                param.put("countryCode", list_session);
            }

        }
        try {
            List<Map<String, Object>> list = provService.getMapper().nowIncrFlow(param);
            if (list.isEmpty()) {
                map.put("statusCode", 2);
                map.put("data", 0);
                map.put("msg", "查无数据");
            } else {
                map.put("statusCode", 0);
                map.put("data", list);
                map.put("msg", "查询成功");
            }
        } catch (Exception e) {
            e.printStackTrace();
            map.put("statusCode", 1);
            map.put("data", null);
            map.put("msg", e.getMessage());
        }
        return JSON.toJSONString(map);
    }


    /**
     * 净增客流----------此接口不要
     *
     * @return
     */
    @RequestMapping(value = "/onlyIncrFlow", produces = "text/html;charset=utf-8")
    public String onlyIncrFlow(HttpSession session) {
        Map<String, Object> map = new HashMap<String, Object>();
        Map<String, Object> param = new HashMap<String, Object>();
        String list_session = (String) session.getAttribute("areaCode");   //获取登录用户所属地区的编码
        if (list_session.isEmpty()) {
            param.put("areaCode", "kaj02565464865fajfaj");//企业ID
        } else {
            param.put("areaCode", list_session);
        }
        try {
            List<Map<String, Object>> list = provService.getMapper().onlyIncrFlow(param);
            if (list.isEmpty()) {
                map.put("statusCode", 2);
                map.put("data", 0);
                map.put("msg", "查无数据");
            } else {
                map.put("statusCode", 0);
                map.put("data", list);
                map.put("msg", "查询成功");
            }
        } catch (Exception e) {
            e.printStackTrace();
            map.put("statusCode", 1);
            map.put("data", null);
            map.put("msg", e.getMessage());
        }

        return JSON.toJSONString(map);
    }


    /**
     * 热力图
     *
     * @return
     */
    @RequestMapping(value = "/getHeatMap", produces = "text/html;charset=utf-8")
    @ResponseBody
    public String getHeatMap(HttpSession session) {
        Map<String, Object> map = new HashMap<String, Object>();
        List<Map<String, Object>> listResult = new ArrayList<Map<String, Object>>();

        Map<String, Object> mapResult = new HashMap<String, Object>();
        Map<String, Object> param = new HashMap<String, Object>();
        Map<String, Object> param1 = new HashMap<String, Object>();
        try {
            String areaCode = (String) session.getAttribute("userInfo_areaId");
            if (areaCode == null || areaCode.isEmpty()) {

            } else {
                if (areaCode.equals("851")) {/*
                param.put("cityCode","");
				param.put("countryCode","");*/
                    mapResult.put("mapLevel", "province");
                    mapResult.put("mapCode", "999");
                    List<Map<String, Object>> list = provService.getMapper().getHeatMap(param);
                    System.out.println("78787878787878" + list);
                    if (list.isEmpty()) {
                        map.put("statusCode", 2);
                        map.put("data", 0);

                    } else {

                        for (Map<String, Object> listChild : list) {
                            Map<String, Object> map1 = new HashMap<String, Object>();
                            map1.put("value", listChild.get("out_num"));
                            map1.put("name", listChild.get("city_name"));
                            listResult.add(map1);

                        }
                        mapResult.put("value", listResult);
                        map.put("statusCode", 0);
                        map.put("data", mapResult);
                    }
                } else if (areaCode.length() == 3) {
                    param.put("cityCode", areaCode);
                    param.put("countryCode", "");
                    mapResult.put("mapLevel", "city");
                    mapResult.put("mapCode", areaCode);
                    List<Map<String, Object>> list = provService.getMapper().getHeatMap(param);
                    System.out.println("555595959595959" + list);
                    if (list.isEmpty()) {
                        map.put("statusCode", 2);
                        map.put("data", 0);

                    } else {

                        for (Map<String, Object> listChild : list) {
                            Map<String, Object> map1 = new HashMap<String, Object>();
                            map1.put("value", listChild.get("out_num"));
                            map1.put("name", listChild.get("COUNTY_NAME"));
                            listResult.add(map1);

                        }
                        mapResult.put("value", listResult);
                        map.put("statusCode", 0);
                        map.put("data", mapResult);
                    }


                } else if (areaCode.length() == 4) {
                    param1.put("countryCode", areaCode);
                    String CiTYCODE = provService.getMapper().getCityCode(param1);
                    param.put("cityCode", CiTYCODE);
                    param.put("countryCode", "");
                    mapResult.put("mapLevel", "city");
                    mapResult.put("mapCode", CiTYCODE);
                    List<Map<String, Object>> list = provService.getMapper().getHeatCTMap(param);
                    System.out.println("89898989898989" + list);
                    if (list.isEmpty()) {
                        map.put("statusCode", 2);
                        map.put("data", 0);

                    } else {

                        for (Map<String, Object> listChild : list) {
                            Map<String, Object> map1 = new HashMap<String, Object>();
                            map1.put("value", listChild.get("out_num"));
                            map1.put("name", listChild.get("COUNTY_NAME"));
                            listResult.add(map1);

                        }
                        mapResult.put("value", listResult);
                        map.put("statusCode", 0);
                        map.put("data", mapResult);
                        System.out.println("78787878787878" + mapResult);
                    }
                }

            }

 
			/*List<Map<String, Object>> list = provService.getMapper().getHeatMap(param);
            System.out.println("省地图"+list);
			if (list.isEmpty()) {
				map.put("statusCode", 2);
				map.put("data", 0);
				
			} else {
				
				for(Map<String,Object> listChild : list){
						Map<String, Object> map1 = new HashMap<String, Object>();
						map1.put("value", listChild.get("out_num"));
						map1.put("name", listChild.get("COUNTY_ID"));
						listResult.add(map1);
						
					}
					mapResult.put("value",listResult);
					map.put("statusCode", 0);
					map.put("data", mapResult);
			}*/
        } catch (Exception e) {
            e.printStackTrace();
            map.put("statusCode", 1);
            map.put("data", null);

        }

        return JSON.toJSONString(map);
    }


    /**
     * 迁移图
     *
     * @return
     */
    @RequestMapping(value = "/getQianYiMap", produces = "text/html;charset=utf-8")
    @ResponseBody
    public String getQianYiMap(HttpSession session) {
        Map<String, Object> map = new HashMap<String, Object>();
        Map<String, Object> param = new HashMap<String, Object>();
        String areaCode = (String) session.getAttribute("userInfo_areaId");
        if (areaCode == null || areaCode.isEmpty()) {

        } else {
            if (areaCode.length() == 3) {
                param.put("cityCode", areaCode);
                param.put("countryCode", "");
            } else if (areaCode.length() == 4) {
                param.put("cityCode", "");
                param.put("countryCode", areaCode);
            }

        }
        try {
            List<Map<String, Object>> list = provService.getMapper().getQianYiMap(param);
            if (list.isEmpty()) {
                map.put("statusCode", 2);
                map.put("data", 0);

            } else {
                map.put("statusCode", 0);
                map.put("data", list);

            }
        } catch (Exception e) {
            e.printStackTrace();
            map.put("statusCode", 1);
            map.put("data", null);

        }

        return JSON.toJSONString(map);
    }
}

