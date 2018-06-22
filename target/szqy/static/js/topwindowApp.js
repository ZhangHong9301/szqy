var topwindowApp = {
	showWindowApp : function(obj) {
		//系统id
		var appId = obj.data.appId;
		//sessionId
		var key = obj.data.key
		//后台根据sessionId和appId获取菜单权限
		if(checkSessionFull(parent.document)) {
			 $.ajax({
				type : "get",
				url : $.cxt + "/getAuth/" + appId + "/" + key,
				dataType: "json",
				success : function(msg) {
					var appObj = msg.data[0]
					//显示隐藏的延时
					var showSleep = 500;
					//弹出窗宽度
					var width = $(parent.document).width();
					//弹出窗高度，-48为减去iframe父页面系统头部分
					var height = $(parent.document).height() - 48;
					var html = "";
					html += "<div id=\"topwindowApp_" + appId + "_" + key + "\" class=\"topwindowApp\" style=\"width:" + width+ "px;height:" + height + "px\">";
						/*html += "<div id=\"topwindowAppHeader\" class=\"topwindowAppHeader\">";
							html += "<div class=\"topwindowAppHeaderRight\">";
								html += "<a href=\"#\" class=\"topwindowAppHeaderRightA\">";
									html += "<i class=\"fa fa-minus-square bigger-150\" aria-hidden=\"true\"></i>";
								html += "</a>";
								html += "<a href=\"#\" class=\"topwindowAppHeaderRightA\">";
									html += "<i class=\"fa fa-times bigger-150\" aria-hidden=\"true\"></i>";
								html += "</a>";
							html += "</div>";
						html += "</div>";
						html += "<hr style=\"margin-bottom: 1px;margin-top: 1px;\">";*/
						html += "<div id=\"topwindowAppMenu\" class=\"topwindowAppMenu\">";
							html += "<nav class=\"navbar navbar-default\">";
								html += "<div class=\"navbar-header\">";
									html += "<a class=\"navbar-brand\"></a>";
								html += "</div>"
								html += "<div class=\"collapse navbar-collapse\" style=\"float:left;\">";
									html += "<ul class=\"nav navbar-nav\">";
									html += "</ul>";
								html += "</div>";
								html += "<div style=\"float:right;\">";
									html += "<a href=\"#\" class=\"navbar-brand\">";
										html += "<i class=\"fa fa-times bigger-150\" aria-hidden=\"true\"></i>";
									html += "</a>";
								html += "</div>"
							html += "</a>";
							html += "</nav>";
						html += "</div>";
						html += "<iframe frameborder=\"0\" width=\"100%\"></iframe> ";
					html += "</div>";
					$("body", parent.document).append(html);
					//获取窗口app的div
					var $windowApp = $("#topwindowApp_" + appId + "_" + key, parent.document);
					$windowApp.show(showSleep, function(){
						topwindowApp.getWindowContent($windowApp, appObj);
					});
					//删除按钮点击事件
					$windowApp.find(".fa-times").click(function(){
						$windowApp.hide(showSleep, function(){
							$windowApp.remove();
						});
					})
				}
			})
		}
	},
	getWindowContent : function($windowApp, appObj) {
		//获取窗口app的头部分
		var $windowHeader = $windowApp.find("#topwindowAppHeader");
		//获取窗口app的菜单部分
		var $windowMenu = $windowApp.find("#topwindowAppMenu");
		//递归动态生成菜单
		//返回值有四个属性
		//baseUrl基础的url
		//indexUrl首页url
		//menuHtml菜单动态拼装的html代码
		//appName系统名称
		var returnObj = topwindowApp.createMenu(appObj);
		var baseUrl = returnObj.baseUrl;
		var indexUrl = returnObj.indexUrl;
		var menuHtml = returnObj.menuHtml;
		var appName = returnObj.appName;
		//给菜单头添加appName
		$windowMenu.find(".navbar-brand:first").html(appName);
		//没有菜单html代码则直接跳出方法
		if(menuHtml == undefined) {
			return;
		}
		//给菜单提添加html代码
		$windowMenu.find(".nav").html(menuHtml);
		//获取窗口app的iframe
		var $windowIframe = $windowApp.find("iframe");
		//设置iframe为首页url
		$windowIframe.attr("src", baseUrl + indexUrl);
		//设置iframe的高度，-1为hr的高度
		$windowIframe.height($windowApp.height() - $windowHeader.height() - $windowMenu.height());
		//1级菜单鼠标进入事件
		$windowMenu.find("nav li.dropdown").mouseover(function(){
			//将1级菜单下的第一个.dropdown-menu显示出来
			$(this).find(".dropdown-menu:first").show();
		});
		//1级菜单鼠标离开事件
		$windowMenu.find("nav li.dropdown").mouseleave(function(){
			//将1级菜单下的第一个.dropdown-menu隐藏起来
			$(this).find(".dropdown-menu:first").hide();
		});
		//li的.ddchildren菜单的鼠标进入事件
		$windowMenu.find(".ddchildren").mouseover(function(event){
			//将.ddchildren下的第一个.dmchildren显示
			$(this).find(".dmchildren:first").show();
		});
		//li的.ddchildren菜单的鼠标离开事件
		$windowMenu.find(".ddchildren").mouseleave(function(){
			//将.ddchildren下的第一个.dmchildren隐藏
			$(this).find(".dmchildren:first").hide();
		});
		//菜单中所有a标签的点击事件
		$windowMenu.find("a").click(function(){
			if(checkSessionFull(parent.document)) {
				//校验session成功
				var url = $(this).attr("url");
				if(url != "undefined" && url != undefined) {
					$windowIframe.attr("src", baseUrl + url);
				}
			}
		})
	},
	createMenu : function(appObj) {
		var html = ""
		//创建菜单后的返回值
		var returnObj = {};
		//设置返回的系统名称
		returnObj.appName = appObj.name;
		//系统下没有菜单返回空对象
		if(appObj.children == undefined) {
			return returnObj;
		}
		//基础的url
		var baseUrl = topwindowApp.getBaseUrl(appObj.path);
		//首页的url，为菜单第一个有path的url
		var indexUrl = ""
		//循环appObj
		for(var i = 0; i < appObj.children.length; i++) {
			//获取module
			var moduleObj = appObj.children[i];
			//将整个菜单的第一个页面作为首页显示，如果indexUrl已经有值则不再赋值
			if(moduleObj.path != undefined && indexUrl == "") {
				indexUrl = moduleObj.path;
			}
			if(moduleObj.children == undefined) {
				//如果module里没有childeren
				html += "<li><a href=\"#\" url=\"" + moduleObj.path + "\">" + moduleObj.name + "</a></li>";
			} else {
				//如果module里有childeren
				html += "<li class=\"dropdown\"><a href=\"#\" url=\"" + moduleObj.path + "\">" + moduleObj.name + " <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i></a>";
				html += "<ul class=\"dropdown-menu\">";
				for(var j = 0; j < moduleObj.children.length; j++) {
					//获取菜单
					var menuObj = moduleObj.children[j];
					//递归菜单方法
					html += topwindowApp.createMenudg(menuObj, indexUrl);
				}
				html += "</ul>";
				html += "</li>"
			}
		}
		returnObj.baseUrl = baseUrl;
		returnObj.indexUrl = indexUrl;
		returnObj.menuHtml = html;
		return returnObj;
	},
	createMenudg : function(menuObj, indexUrl) {
		var html = ""
		//将整个菜单的第一个页面作为首页显示，如果indexUrl已经有值则不再赋值
		if(menuObj.path != undefined && indexUrl == "") {
			indexUrl = menuObj.path;
		}
		if(menuObj.children == undefined) {
			//如果menuObj中没有children
			html += "<li><a href=\"#\" url=\"" + menuObj.path + "\">" + menuObj.name + "</a></li>"
		} else {
			//如果menuObj中有children
			html += "<li class=\"dropdown ddchildren\"><a href=\"#\" url=\"" + menuObj.path + "\">" + menuObj.name + " <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i></a>";
			html += "<ul class=\"dropdown-menu dmchildren\">";
			for(var i = 0; i < menuObj.children.length; i++) {
				var menuObjTemp = menuObj.children[i];
				//递归菜单方法
				html += topwindowApp.createMenudg(menuObjTemp);
			}
			html += "</ul>";
			html += "</li>"
		}
		return html;
	},
	getBaseUrl : function(path) {
		path = path + "/"
		var num = 0;
		//默认path是以http://开头的
		var j = 4;
		//如果没有http://开头则j为2
		if(path.indexOf("http://") == -1) {
			j = 2;
		}
		//循环查找对应的/的位置
		for(var i = 0; i < j; i++) {
			num = path.indexOf("/", num + 1);
		}
		return baseUrl = path.substring(0, num + 1); 
	}
} 
