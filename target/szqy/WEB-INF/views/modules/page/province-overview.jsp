<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta charset="utf-8"/>
    <title>数字黔游</title>
    <!--<link rel="stylesheet" href="http://api.map.baidu.com/library/TrafficControl/1.4/TrafficControl_min.css"/>-->
    <link rel="stylesheet" href="<%=request.getContextPath()%>/static/css/universal.css"/>
    <link rel="stylesheet" href="<%=request.getContextPath()%>/static/css/index.css" media="all"/>
    <link rel="stylesheet" href="<%=request.getContextPath()%>/static/css/province-overview.css"/>

</head>
<body style="display:flex; flex-direction: column; text-shadow: 0 1px 1px rgba(0, 0, 0, .5);">
<!--背景星空特效开始-->
<div id="demo">
    <div class="canvaszz"></div>
    <canvas id="canvas"></canvas>
</div>
<!--背景星空特效结束-->

<!--页眉开始-->
<div style="flex:7%;
            background-color: rgba(29, 51, 80, 0.8);
            display:flex;
            justify-content: space-between;
            align-items: center;">
    <div style="position:relative">
        <!--<img src="img/yidong.png" alt="">-->
        <h3 style="color:white;
	               position: absolute;
	               top: calc(40% - 1.17em/2);
	               left: 5%;
	               z-index: 1;">数 字 黔 游</h3>
        <img src="<%=request.getContextPath()%>/static/img/xiantiao.png">
    </div>
    <div>
        <img src="<%=request.getContextPath()%>/static/img/shujupian.png"/>
    </div>
</div>
<!--页眉结束-->

<!--菜单开始-->
<div class="menu">
    <div class="menubox">
        <img src="<%=request.getContextPath()%>/static/img/menuanniu01.png" class="anniu01"/>
        <img src="<%=request.getContextPath()%>/static/img/menuanniu.png" class="anniu">
        <ul class="xuanxiang">
            <!--<li><a href="index.html">首页</a></li>-->
            <!--<li><a href="xiangqingye01.html">实时客流量展示</a></li>-->
            <!--<li><a href="xiangqingye02.html">历史客流量展示</a></li>-->
        </ul>
    </div>
</div>
<!--菜单滑动效果开始-->
<!--<script>
    $('.anniu').hide()
    $('.anniu01').mouseenter(function () {
        $('.menu').animate({
            "left": 0
        }, 600);
        $('.anniu').show();
    })
    $('.menu').mouseleave(function () {
        $('.menu').animate({
            "left": -250
        }, 600);
        $('.anniu').hide()
    })
</script>-->
<!--菜单滑动效果结束-->
<!--菜单结束-->

<div style="flex:93%; display:flex; padding: 10px;">
    <!--第一列开始-->
    <div style="flex:calc(38% - 10px);
                display:flex;
                flex-direction: column;">
        <div style="flex:calc(66.6% - 10px);
                    background-image: url(<%=request.getContextPath()%>/static/img/fangkuangbig.png);
	                background-size: 100% 100%;
                    position: relative;">
            <div id="youkeGuishudiFenxi" style="height: 100%;"></div>
            <div class="colorRectangle"></div>
        </div>

        <div style="flex:calc(33.3%);
                    margin-top:10px;
                    background-image: url(<%=request.getContextPath()%>/static/img/fangkuangsamll.png);
	                background-size: 100% 100%;
                    position: relative;">
            <div id="lvkeLaiyuanTop10" style="height: 100%;"></div>
            <div class="colorRectangle"></div>
        </div>
    </div>
    <!--第一列结束-->
    <!--第二列开始-->
    <div style="flex:calc(38% - 10px);
                margin-left: 10px;
                display:flex;
                flex-direction: column;">
        <div style="flex:calc(66.6% - 10px);
                    background-image: url(<%=request.getContextPath()%>/static/img/fangkuangbig.png);
	                background-size: 100% 100%;
                    position: relative;">
            <div id="shengwaiLvke" style="height: 100%;"></div>
            <div class="colorRectangle"></div>
        </div>

        <div style="flex:calc(33.3%);
                    margin-top:10px;
                    background-image: url(<%=request.getContextPath()%>/static/img/fangkuangsamll.png);
	                background-size: 100% 100%;
                    display:flex;">
            <div style="flex:50%; position: relative;">
                <div id="youkeLvyouShichang" style="height: 100%;"></div>
                <div class="colorRectangle"></div>
            </div>
            <div style="flex:50%; position: relative;">
                <div id="youkeZhuliuFenxi" style="height: 100%;"></div>
                <div class="colorRectangle"></div>
            </div>
        </div>
    </div>
    <!--第二列结束-->
    <!--第三列开始-->
    <div style="flex:calc(24% - 20px);
                margin-left: 10px;
                display:flex;
                flex-direction: column;">
        <div style="flex:calc(33.3% - 10px);
                    margin-bottom:10px;
                    background-image: url(<%=request.getContextPath()%>/static/img/fangkuangsamll.png);
	                background-size: 100% 100%;
                    display: flex;">
                <span style="flex: 50%;
                             display: flex;
                             flex-direction: column;
                             justify-content: center;
                             align-items: flex-start;
                             margin: 10px;">
                    <div class="bgblue" style="flex: 33.3%;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                                width: 100%;">
                        <div class="num-title" ><span>当日累计客流</span></div>
                        <div class="num" style="color: #fff;margin-top: 6px;" id="dangriLeijiKeliu">55136</div>
                    </div>
                    <div class="bgblue" style="flex: 33.3%;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                                width: 100%;">
                        <div class="num-title"><span>实时新增</span></div>
                        <div class="num"  style="color: #fff;margin-top: 6px;" id="shishiXinzeng">1072</div>
                    </div>
                    <div class="bgblue" style="flex: 33.3%;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                                width: 100%;">
                        <div class="num-title"><span>净增客流/一刻</span></div>
                        <div class="num"  style="color: #fff;margin-top: 6px;" id="jingzengKeliu">986</div>
                    </div>
                </span>
            <span style="flex: 50%;
                         display: flex;
                         justify-content: center;
                         align-items: center;
                         margin: 10px;
                         position: relative;">
                   <!-- <div class="num-title" style="flex: 15%;">短  信  发  送  情  况</div>-->

               <!-- <div class="line"></div>-->

                    <div style="flex: 85%;
                                height: 100%;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;">
                        <div class="bgblue" style="flex: 33.3%;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: center;
                                    align-items: center;">
                            <span style="color: #fff;font-size: 14px;">当前消息发送量</span>
                            <span class="num" style="color: #fff;margin-top: 6px;" id="dangqianXiaoxiFasongliang">55136</span>
                        </div>
                        <div class="bgblue" style="flex: 33.3%;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: center;
                                    align-items: center;">
                            <span style="color: #fff;font-size: 14px;">今日累计发送量</span>
                            <span class="num" style="color: #fff;margin-top: 6px;" id="jinriLeijiFasongliang">55136</span>
                        </div>
                        <div class="bgblue" style="flex: 33.3%;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: center;
                                    align-items: center;">
                            <span style="color: #fff;font-size: 14px;">今年累计发送量</span>
                            <span class="num" style="color: #fff;margin-top: 6px;" id="jinnianLeijiFasongliang">55136</span>
                        </div>
                    </div>
                </span>
        </div>

        <div style="flex:calc(33.3% - 10px);
                    margin-bottom:10px;
                    background-image: url(<%=request.getContextPath()%>/static/img/fangkuangsamll.png);
	                background-size: 100% 100%;
                    position: relative;">
            <div id="keliuQushi" style="height: 100%;"></div>
            <div class="colorRectangle"></div>
        </div>

        <div style="flex:calc(33.3%);
                    background-image: url(<%=request.getContextPath()%>/static/img/fangkuangsamll.png);
	                background-size: 100% 100%;
                    position: relative;">
            <div id="duanxinFasongPaihang" style="height: 100%;"></div>
            <div class="colorRectangle"></div>
        </div>
    </div>
    <!--第三列结束-->
</div>

<script type="text/javascript" src="<%=request.getContextPath()%>/static/framework/jQuery/jquery-3.3.1.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/framework/Vue/vue-2.5.16.js"></script>

<script type="text/javascript" src="<%=request.getContextPath()%>/static/plugin/Lodash/lodash-4.17.10.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/plugin/Custom/getEchartUnit.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/plugin/Custom/ajaxGlobal.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/plugin/Custom/dynamicLoadJS.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/plugin/ECharts/echarts-4.0.4.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/plugin/Map/offline/country/china.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/plugin/Map/offline/country/province/guiZhou.js"></script>

<script type="text/javascript" src="<%=request.getContextPath()%>/static/js/url.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/js/start.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/js/mapCountry.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/js/map.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/js/pie.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/js/line.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/js/bar.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/static/js/num.js"></script>



</body>
</html>