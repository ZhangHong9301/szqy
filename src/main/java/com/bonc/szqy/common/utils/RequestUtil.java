package com.bonc.szqy.common.utils;

import javax.servlet.http.HttpServletRequest;

public class RequestUtil {

    public static String getIpAddr(HttpServletRequest request) {
        String ip;
        if (null != request){
            ip = request.getHeader("x-forwarded-for");
            if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
                ip = request.getHeader("Proxy-Client-IP");
            }
            if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
                ip = request.getHeader("WL-Proxy-Client-IP");
            }
            if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
                ip = request.getRemoteAddr();
            }
        } else {
            ip = "0.0.0.0";
        }
        return ip;
    }
}
