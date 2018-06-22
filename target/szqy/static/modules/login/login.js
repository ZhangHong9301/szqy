$(function() {
	/*
	 * $("sendSMS").click(function() { sendSMS(); })
	 */
	/*
	 * $("#submitBtn").click(function(){ var sessionCode='<%=Session["checkCode"]
	 * %>'; var checkCode = $("#checkCode").val();
	 * console.log(sessionCode+"******"+checkCode); })
	 */
	/*
	 * $('#back').click(function() { $(".login-mag").css("display", "block");
	 * $(".seng-msg").css("display", "none"); changeImg(); $("#code").val("");
	 * $('#nextBtn').removeAttr("disabled"); })
	 */
	$("#code").focus(function() {
		$("#errmsg").html("");
	})
	$('#loginForm').bootstrapValidator(
			{
				message : '输入不正确',
				feedbackIcons : {
					valid : 'glyphicon glyphicon-ok light-green',
					invalid : 'glyphicon glyphicon-remove light-red',
					validating : 'glyphicon glyphicon-refresh'
				},
				fields : {
					username : {
						validators : {
							notEmpty : {
								message : '请输入用户名'
							},
							regexp : {
								regexp : /^[a-zA-Z0-9_]+$/,
								message : '用户名称输入错误'
							}
						}
					},
					password : {
						validators : {
							notEmpty : {
								message : '请输入登录密码'
							}
						}
					}
				},
				submitHandler : function(validator, form, submitButton) {
					var username = $("#username").val();
					var password = $.md5($("#password").val());
					var code = $("#code").val();
					if (code == "" || code == null) {
						$("#errmsg").html("请输入验证码");
						$('#nextBtn').removeAttr("disabled");
						return;
					}
					var data = {
						"userName" : username,
						"password" : password,
						"code" : code
					};
					$.postDataSF($.cxt + "/login", data, loginSuccess,
							loginFailed);
					function loginSuccess(data) {
						// 判断该用户是否有菜单权限
						if (data.auth != 0) {
							if (data.errorCode == 8) {
								alert('服务器连接失败!');
								return;
							}

							$("#errmsg").html(data.msg);
							$('#nextBtn').removeAttr("disabled");
							changeImg();
						} else {
							/*$('#confirmModal').modal('show');
							$('#content').html("该用户没有权限！");
							$('#confirmBtnModal').off();
							// 确认框确定按钮(删除)
							$('#confirmBtnModal').bind('click', function() {

								$('#confirmModal').modal('hide');
								$('#content').html("");
							})*/
							
							
							window.location.href="/szqy/Prov/province-overview";
							
						}

						$('#nextBtn').removeAttr("disabled");
					}
					function loginFailed(data) {
					}
				}
			});

	$('#cancelBtnModal').bind("click", function() {
		$('#confirmModal').modal('hide');
	})
});

// 发送验证码
/*
 * function sendSMS() { var data; $.ajax({ url : $.cxt + '/checkCode', type :
 * "POST", async : false, success : function(json) { data = $.parseJSON(json); } })
 * return data; }
 */

function changeImg1() {
	$.ajax({
		url : $.cxt + '/sendCode',
		type : "POST",
		async : true,
		data : {
			"userName" : $("#username").val()
		},
		success : function(json) {
			var data = $.parseJSON(json);
			if (data.success) {
				alert("短信发送成功，请注意查收");
			} else {
				alert("短信发送失败，请重新发送");
				$('#nextBtn').removeAttr("disabled");
				return;
			}
		}
	});
}

// 刷新图片
function changeImg() {
	var imgSrc = $("#imgObj");
	var src = imgSrc.attr("src");
	imgSrc.attr("src", changeUrl(src));
}

// 为了使每次生成图片不一致，即不让浏览器读缓存，所以需要加上时间戳
function changeUrl(url) {
	var timestamp = (new Date()).valueOf();
	var index = url.indexOf("?", url);
	if (index > 0) {
		url = url.substring(0, url.indexOf("?", url));
	}
	if ((url.indexOf("&") >= 0)) {
		url = url + "×tamp=" + timestamp;
	} else {
		url = url + "?timestamp=" + timestamp;
	}
	return url;
}
