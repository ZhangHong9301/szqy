<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<!-- <meta http-equiv="X-UA-Compatible" content="IE=8"> -->
<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,Chrome=1" />


<link rel="stylesheet" href=<%=request.getContextPath()%>/static/ace/css/bootstrap.css>
<link rel="stylesheet" href=<%=request.getContextPath()%>/static/ace/css/font-awesome.css>
<link rel="stylesheet" href=<%=request.getContextPath()%>/static/ace/css/jquery-ui.css>
<link rel="stylesheet" href=<%=request.getContextPath()%>/static/ace/css/datepicker.css>
<link rel="stylesheet" href=<%=request.getContextPath()%>/static/ace/css/select2.css>
<link rel="stylesheet" href=<%=request.getContextPath()%>/static/ace/css/chosen.css>
<link rel="stylesheet" href=<%=request.getContextPath()%>/static/ace/css/ui.jqgrid.css>
<link rel="stylesheet" href=<%=request.getContextPath()%>/static/ace/css/tipped.css></script>
<link rel="stylesheet" href=<%=request.getContextPath()%>/static/ace/css/ace-fonts.css>
<link rel="stylesheet" href=<%=request.getContextPath()%>/static/ace/css/ace-skins.css>
<link rel="stylesheet" href=<%=request.getContextPath()%>/static/ace/css/ace.css class="ace-main-stylesheet" id="main-ace-style">
<link rel="stylesheet" href=<%=request.getContextPath()%>/static/plugin/bootstrapvalidator/css/bootstrapValidator.css></script>
<link rel="stylesheet" href=<%=request.getContextPath()%>/static/css/topwindowApp.css>
<%-- <link rel="stylesheet" href=<%=request.getContextPath()%>/static/zTree/css/metroStyle/metroStyle.css>
<link rel="stylesheet" href=<%=request.getContextPath()%>/static/zTree/css/zTreeStyle/zTreeStyle.css>
 --%>
<script src=<%=request.getContextPath()%>/static/ace/js/ace-extra.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/jquery.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/chosen.jquery.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/jquery.slimscroll.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/bootstrap.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/select2.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/jqGrid/jquery.jqGrid.src.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/jqGrid/i18n/grid.locale-cn.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/ace/elements.scroller.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/ace/elements.colorpicker.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/ace/elements.fileinput.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/ace/elements.typeahead.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/ace/elements.wysiwyg.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/ace/elements.spinner.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/ace/elements.treeview.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/ace/elements.wizard.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/ace/elements.aside.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/ace/ace.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/ace/ace.ajax-content.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/ace/ace.touch-drag.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/ace/ace.sidebar.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/ace/ace.sidebar-scroll-1.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/ace/ace.submenu-hover.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/ace/ace.widget-box.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/ace/ace.settings.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/ace/ace.settings-rtl.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/ace/ace.settings-skin.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/ace/ace.widget-on-reload.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/ace/ace.searchbox-autocomplete.js></script>
<script src=<%=request.getContextPath()%>/static/js/base.js></script>
<script src=<%=request.getContextPath()%>/static/js/common-request.js></script>
<script src=<%=request.getContextPath()%>/static/js/common-check.js></script>
<script src=<%=request.getContextPath()%>/static/js/bonc-ace-dropdown.js></script>
<script src=<%=request.getContextPath()%>/static/js/My97DatePicker/WdatePicker.js></script>
<script src=<%=request.getContextPath()%>/static/js/topwindowApp.js></script>
<script src=<%=request.getContextPath()%>/static/plugin/bootstrapvalidator/js/bootstrapValidator.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/dataTables/jquery.dataTables.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/dataTables/jquery.dataTables.bootstrap.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/date-time/bootstrap-datepicker.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/date-time/bootstrap-datepicker.zh-CN.min.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/date-time/daterangepicker.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/date-time/moment.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/date-time/bootstrap-datetimepicker.js></script>
<script src=<%=request.getContextPath()%>/static/ace/js/tipped.js></script><%-- 
<script src=<%=request.getContextPath()%>/static/zTree/js/jquery.ztree.all-3.5.js></script>
<script src=<%=request.getContextPath()%>/static/zTree/js/jquery.ztree.all-3.5.min.js></script>
<script src=<%=request.getContextPath()%>/static/zTree/js/jquery.ztree.core-3.5.js></script>
<script src=<%=request.getContextPath()%>/static/zTree/js/jquery.ztree.core-3.5.min.js></script>
<script src=<%=request.getContextPath()%>/static/zTree/js/jquery.ztree.excheck-3.5.js></script>
<script src=<%=request.getContextPath()%>/static/zTree/js/jquery.ztree.excheck-3.5.min.js></script>
<script src=<%=request.getContextPath()%>/static/zTree/js/jquery.ztree.exedit-3.5.js></script>
<script src=<%=request.getContextPath()%>/static/zTree/js/jquery.ztree.exedit-3.5.min.js></script>
<script src=<%=request.getContextPath()%>/static/zTree/js/jquery.ztree.exedit.js></script>
<script src=<%=request.getContextPath()%>/static/zTree/js/jquery.ztree.exhide-3.5.js></script>
<script src=<%=request.getContextPath()%>/static/zTree/js/jquery.ztree.exhide-3.5.min.js></script>
 --%>

<link rel="stylesheet"
	href="<%=request.getContextPath()%>/static/modules/login/login.css" />
<script type="text/javascript"
	src="<%=request.getContextPath()%>/static/modules/login/login.js"></script><%-- 
	<script type="text/javascript" src="<%=request.getContextPath()%>/static/js/jquery-2.1.1.js"></script> --%>
	<script type="text/javascript"
	src="<%=request.getContextPath()%>/static/modules/login/background.js"></script>
<script type="text/javascript"
	src="<%=request.getContextPath()%>/static/js/md5.js"></script>


<title>登陆页面</title>
<style type="text/css">
body {
 background:#000!important;
  min-height: 100%;
  padding-bottom: 0;
  font-family: 'Open Sans';
  font-size: 13px;
  color: #393939;
  line-height: 1.5;
}

.login-box {
    width: 50%;
    max-width: 288px;
    height: 323px;
    margin-top: 70px;
    vertical-align: middle;
    background: rgba(35,104,188,0.3)!important;
    margin-left: -200px;
    position: absolute;
    border: 2px solid #2f81b7;
}
.stybut span {
	width: auto;
	height: 28px;
	background: #338cb7;
	display: inline-block;
	padding: 5px;
	margin-left: 5px;
	color: #fff;
	line-height: 18px;
	border-radius: 2px;
	cursor: pointer;
	border: 1px solid #bbb;
}

.stybut span:HOVER {
	background: #339fb7;
	border: 1px solid #ccc;
}
.bg-clouds{
position: absolute;
}

.tittop{
position: absolute;
font-size: 30px;
font-family: '微软雅黑';
color:#fff;
font-weight: 600;
width: 520px;
height: 50px;
top:-20px;
z-index: 3;
}

.bg-clouds {
    left: 17%;
    float: left;
    margin-top: 45px;
}

 .form-control{
  background: #fff!important;
  color:#2668bc!important;
} 
</style>
</head>
<body>
  <canvas id="canvasbg" style="position:absolute;z-index:0;top:0"></canvas>
	<div align="left" style="left: 20px;top: 20px;position: absolute;">
		<img src="<%=request.getContextPath()%>/static/img/logo_mo.png">
	</div>

	<div class="box" align="center">


		<div class="logintext" align="left">
			 <span style="visibility: hidden;">数 字 黔 游 系 统</span> 
			<!-- <div style="float:right;font-size:18px;color:#fff;margin-right:20px;">
			<a href="../showViewing/daping.jsp" target="_blank" style="color:#fff">访问大屏</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<a href="../mapset/heatmap/Heatmap.jsp" target="_blank" style="color:#fff">访问热力图</a>
	</div> -->
			<!--<span class="t2">随心所欲管理每个系统</span>-->
		</div>
		<div class="bg-clouds"">
		     <div class='tittop'>数   字   黔   游  系   统 </div>
			<img src="<%=request.getContextPath()%>/static/img/cru.png" style = "position: absolute;top:-400%;width: 528px;height: 560px;"><br>

		</div>

		<div class="login-box" align="center">
			<div class="login-title text-center">
				<h1>
					<small>登录</small>
				</h1>
			</div>
			<div class="login-content login-mag">
				<div class="form">
					<form id="loginForm" method="post" autocomplete="off">
						<div class="form-group">
							<div class="col-sm-10 col-sm-offset-1">
								<div class="input-group">
									<span class="input-group-addon"><span
										class="glyphicon glyphicon-user"></span></span> <input type="text"
										id="username" name="username" class="form-control" maxlength="30"
										placeholder="用户名">
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="col-sm-10 col-sm-offset-1">
								<div class="input-group">
									<span class="input-group-addon"><span
										class="glyphicon glyphicon-lock"></span></span> <input
										type="password" id="password" name="password"
										class="form-control" placeholder="密码">
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="col-sm-10 col-sm-offset-1">
								<div class="input-group"
									style="margin: 0px 0px 10px 0px !important;">
									<input type="text" id="code" name="code" class="form-control" maxlength="64"
										style="width: 72px; padding: 1px 12px;" />
									<img id="imgObj"
										alt="验证码" src="<%=request.getContextPath()%>/login/validateCode"
										style="margin-left: 10px;" onclick="changeImg()" /> <a
										href="#" onclick="changeImg()" style="color: #eee;margin-left: 6px;display: inline-block;">换一张</a>
									<!-- <button type="button" onclick="changeImg1()"
										style="margin-top: 2px; font-size: 15px; margin-left: 10px"
										value="获取验证码">获取验证码</button> -->
								</div>
							</div>
						</div>

						<div class="form-group">
							<div class="col-sm-10 col-sm-offset-1">
								<div class="input-group"
									style="height: 20px; margin: 0px 0px 5px 0px !important;">
									<span></span> <span id="errmsg" style="color: red;"></span>
								</div>
							</div>
						</div>
						<div class="form-group form-actions">
							<div class="col-sm-10 col-sm-offset-1">
								<!-- 						<button class="btn btn-block btn-success" onclick="doLogin()">登录</button> -->
								<!-- <button type="submit" class="btn btn-block btn-primary"
									id="submitBtn">下一步</button>  -->
								<button type="submit" class="btn btn-block btn-primary"
									id="nextBtn">登录</button>

							</div>
						</div>


					</form>
				</div>
			</div>
			<div class="login-content seng-msg" style="display: none;">
				<div class="form">
					<div class="form-group" style="height: 25px;">
						<div class="col-sm-10 col-sm-offset-1">
							<div class="input-group">
								<span style="color: #fff; margin-top: 15px; display: block;">您好，动态口令短信已发送您的手机，请注意查收</span>
							</div>

						</div>
					</div>
					<div class="form-group">
						<div class="col-sm-10 col-sm-offset-1">
							<div class="input-group">
								<span class="input-group-addon">用户名：</span> <input type="text"
									id="usernames" name="usernames" class="form-control">
							</div>
						</div>
					</div>
					<div class="form-group">
						<div class="col-sm-10 col-sm-offset-1">
							<div class="input-group">
								<span class="input-group-addon">短信码：</span> <input type="text"
									id="checkCode" name="checkCode" class="form-control">
							</div>
						</div>
					</div>
					<div class="form-group">
						<div class="col-sm-10 col-sm-offset-1">
							<div class="input-group stybut">
								<span style="margin-left: 0px;">重新发送短信</span> <span id="back">返回</span>
								<span id="submitBtn">登录</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>



	<div class="modal fade" id="confirmModal" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content col-xs-4 col-xs-offset-4"
				style="margin-left: 30%; width: 66.666%;">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						<i class="confirm-close fa fa-times"></i>
					</button>
					<h4 class="modal-title">提示</h4>
				</div>
				<div class="modal-body col-xs-9 col-xs-offset-2"
					style="margin-left: 0; width: 100%;">
					<div id="content" style="margin-bottom: 20px"></div>
					<div style="text-align: center">
						<button class="btn btn-xs btn-primary" id="confirmBtnModal"
							style="margin-right: 10%">确定</button>
						<button class="btn btn-xs btn-warning" id="cancelBtnModal">取消</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div align="center" style="    color: #ffffff;
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 30px;">Copyright2015-2016 中国移动 版权所有</div>
</body>
<script type="text/javascript">
	
</script>
</html>