package com.bonc.szqy.modules.pages.dao;

import java.util.List;
import java.util.Map;

import com.bonc.szqy.common.persistence.annotation.MyBatisDao;

@MyBatisDao
public interface ProvMapper {
	/* 短信排行榜Top5 */
	List<Map<String, Object>> smsCountTop5(Map<String, Object> param);
	
	/*当日发送量*/
	List<Map<String, Object>> smsCountByDay(Map<String, Object> param);
	
	/*年累计发送量*/
	List<Map<String, Object>> smsCountByYear(Map<String, Object> param);
	
	/*分钟级别获取短信量*/
	List<Map<String, Object>> smsCountByTime(Map<String, Object> param);
	
	/*客流趋势*/
	List<Map<String, Object>> flowTrend(Map<String, Object> param);
	
	/*游客旅游时长*/
	List<Map<String, Object>> cusPlayTime(Map<String, Object> param);
	
	/*游客驻留时长*/
	List<Map<String, Object>> cusStayTime(Map<String, Object> param);
	
	/*游客来源Top10*/
	List<Map<String, Object>> cusLandTop(Map<String, Object> param);
	
	/*当日累计客流+实施新增客流+净增客流*/
	List<Map<String, Object>> allDayFlow(Map<String, Object> param);
	
	/*省地图*/
	List<Map<String, Object>> getHeatMap(Map<String, Object> param);

	/*市地图  区县级用*/
	List<Map<String, Object>> getHeatCTMap(Map<String, Object> param);
	
	String getCityCode(Map<String, Object> param);
	
	
	
	/*迁移图*/
	List<Map<String, Object>> getQianYiMap(Map<String, Object> param);

	/*实施新增客流*/
	List<Map<String, Object>> nowIncrFlow(Map<String, Object> param);
	
	/*净增客流*/
	List<Map<String, Object>> onlyIncrFlow(Map<String, Object> param);
}

