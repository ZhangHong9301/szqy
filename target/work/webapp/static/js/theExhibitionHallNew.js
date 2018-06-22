var domByexhibition = document.getElementById("exhibition");
var lsykqs_15_cByexhibition = echarts.init(domByexhibition);
function isEmptyObject(obj) {  
	var hasProp=true;
	if (obj==null){    
		hasProp=false;
	}
	return hasProp;
}
function getthisexhibition(){
	
	//处理viewId
	var viewId="";
	//把viewId转换成字符串格式，以逗号隔开
	for(var i = 0;i < root_option.host_venue.length;i++){
		if(root_option.host_venue.length - i > 1){
			viewId = viewId + root_option.host_venue[i].key +",";
		}else{
			viewId = viewId + root_option.host_venue[i].key;
		}
	}
	//获取省内来源数据
	$.post(p+"/scenic/getRealTimeData",
	{viewSpotStr:viewId,startDate:root_option.start_date.replace(/-/g,""),endDate:root_option.end_date.replace(/-/g,"")},
	function(d){
		if(d.success && d.data != null){
			var showName=[];
			var showNum=[];
			var showApp=[];
			var shishirenshu=0;
			var zongjirenshu=0;
			var yucerenshu=0;
			for(var i=0;i<d.data.length;i++){
				showName[i] = d.data[i].GRID_NAME;
				showNum[i] = d.data[i].REALTIME_NUM;
			}
			//排序
 			for(var i = 0;i < showNum.length-1;i++){
 				for(var j = i+1;j < showNum.length;j++){
  					if(parseInt(showNum[i])>parseInt(showNum[j])){
 						var n = showApp[i];
 						showApp[i] = showApp[j];
 						showApp[j] = n;
 						var m = showNum[i];
 						showNum[i] = showNum[j];
 						showNum[j] = m;
 					}
 				}
 			}
			var option = {
					title:{
						text: '区域客流排行',
						textStyle: {
							color: '#98C0D9',
							fontSize: 15
						}
					},
					//color: ['#3398DB'],
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'line' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					yAxis: [{
						splitLine:{show: false},
						axisLine:{
			                lineStyle:{
			                    color:'#B6B9C0',
			                }
			            },
						axisLabel: {
							show: true,
							textStyle: {
								color: '#B6B9C0'
							}
						},
						type: 'category',
						data: showName,
						axisTick: {
							alignWithLabel: true
						}
					}],
					xAxis: [{
						splitLine:{show: false},
						axisLine:{
			                lineStyle:{
			                    color:'#FFF',
			                }
			            },
						axisLabel: {
							show: false,
							textStyle: {
								color: '#fff'
							}
						},
						type: 'value'
					}],
					//backgroundColor: '#ffffff',
					series: [{
						name: '渠道量',
						type: 'bar',
						data: showNum,
						label: {
							normal: {
								show: true,
								position: 'insideRight',
								textStyle: {
									color: 'white' //color of value
								}
							}
						},
						itemStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
									offset: 0,
									color: 'lightBlue' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#3398DB' // 100% 处的颜色
								}], false)
							}
						}
					}]
				};
			lsykqs_15_cByexhibition.setOption(option, true);	
		}
	},"JSON");
	
};