var topwindow = {
	i : 2000,
	showWindow : function(obj) {
		var $window;
		jQuery.ajaxRequestObj({
			url : obj.url,
			data : obj.data,
			dataType : "html",
			//async : false,
			successfn : function(returnHtml) {
				topwindow.i++
				var i = topwindow.i;
				var title = "";
				var width = 700; 
				if(obj.width != undefined) {
					width = obj.width;
				}
				if(obj.title != undefined) {
					title = obj.title;
				}
				var left = ($(window).width() - width)/2;
				var html = "";
				html += "<div id=\"fullBackground" + i + "\" class=\"fullBackground\" style=\"z-index:" + i + "\">";
					html += "<div class=\"modal-content\" style=\"top:50px;left:" + left + "px;width:" + width + "px;\">";
						html += "<div class=\"modal-header\">";
							html += "<button type=\"button\" class=\"close\">";
								html += "<i class=\"confirm-close fa fa-times\"></i>";	
							html += "</button>"
							html += "<h4 class=\"modal-title\">";
								html += "<i class=\"ace-icon fa fa-users white\"></i> ";
								html += title
							html += "</h4>"
						html += "</div>"
						html += "<div class=\"modal-body\">";	
						html += returnHtml;
						html += "</div>";
					html += "</div>";
				html += "</div>";
				$topcontextDiv.append(html);
				$window = $("#fullBackground" + i);
				$window.find(".close").click(function(){
					topwindow.closeWindow();
				})
				if(obj.fun != undefined) {
					obj.fun($window);
				}
			}
		});
		//return $window;
	},
	closeWindow : function() {
		var $window = $("#fullBackground" + topwindow.i);
		$window.remove();
		topwindow.i--;
	},
	showSuccessAlert : function() {
		var html = "<div id=\"topsuccessAlertDiv\" class=\"alert alert-success\" style=\"width: 100px;z-index:1111;position: absolute;font-size:12px;\">操作成功！</div>";
		$("body").append(html);
		var left = ($(window).width() - $("#topsuccessAlertDiv").width())/2;
		$("#topsuccessAlertDiv").offset({ top: 200, left: left });
		setTimeout(function(){
			$("#topsuccessAlertDiv").remove();
		},2000);
	},
	showQrAlert : function(obj) {
		topwindow.i++
		var i = topwindow.i;
		var html = "";
		html += "<div id=\"fullBackground" + i + "\" class=\"fullBackground\" style=\"z-index:" + i + "\">";
			html += "<div class=\"modal-content\">";
				html += "<div class=\"modal-header\">"; 
					html += "<button type=\"button\" class=\"close\">"; 
						html += "<i class=\"confirm-close fa fa-times\"></i>";
					html += "</button>";
					html += "<h4 class=\"modal-title\">" + obj.title + "</h4>";
				html += "</div>";	
				html += "<div class=\"modal-body\" style=\"text-align:center;\">";
					html += "<button class=\"btn btn-xs btn-primary\">确定</button>&nbsp&nbsp&nbsp&nbsp";
					html += "<button class=\"btn btn-xs btn-warning\">取消</button>"; 
				html += "</div>";
			html += "</div>";
		html += "</div>";
		$("body").append(html);
		var width = 200;
		var $window = $("#fullBackground" + i);
		var $modalContent = $window.find(".modal-content");
		$modalContent.width(width);
		var left = ($(window).width() - $modalContent.width())/2;
		$modalContent.offset({ top: 100, left: left });
		$window.find(".btn-primary").focus();
		$window.find(".btn-primary").click(function(){
			obj.qrFun();
			topwindow.closeWindow();
		});
		$window.find(".btn-warning").click(function(){
			topwindow.closeWindow();
		})
		$window.find(".close").click(function(){
			topwindow.closeWindow();
		})
	}
} 
