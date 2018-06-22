package com.bonc.szqy.common.utils;

import java.util.Calendar;

public class DateUtils {
	public static long StringToSeconds(String dateString){
		int yy =Integer.valueOf(dateString.substring(0,4));
		int mm =Integer.valueOf(dateString.substring(4,6));
		int dd =Integer.valueOf(dateString.substring(6,8));
		
		Calendar calen =Calendar.getInstance();
		calen.set(yy, mm-1, dd);
		
		return 0;
	}
	
	
	
	public static void main(String[] args){
		long nn =StringToSeconds("20160902");
	}
}
