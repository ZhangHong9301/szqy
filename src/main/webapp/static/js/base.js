/**
 * 扩展Jquery命名空间
 */
$(function(){
	$.cxt=getContextPath();
})
/**
 * 获取工程上下文路径
 * @returns
 */
function getContextPath() {
    var pathName = document.location.pathname;
    var index = pathName.substr(1).indexOf("/");
    var result = pathName.substr(0,index+1);
    return result;
}

/*把表单转成json,并且name为key,value为值*/
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined){
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

/**
 * session检查
 * @param iframe 如果是iframe里session过期则需要传此参数
 */
function checkSessionFull(iframe) {
	var rtn = true;
//	$.ajax({
//		type : "get",
//		async : false,
//		url : $.cxt + "/index/checkSession",
//		success : function(json) {
//			var data = $.parseJSON(json);
//			if (data.code == '0') {
//				rtn = true;
//			}
//		}
//	});
	if(!rtn) {
		var $sessionExpire = $('#sessionExpire');
		if(iframe != undefined) {
			$sessionExpire = $('#sessionExpire', iframe)
		}
		$sessionExpire.modal({
			backdrop : 'static',
			keyboard : false,
			show : true
		});
	}
	//alert(rtn);
	alert();
	return rtn;
}

/**
 * session检查
 */
function checkSession() {
	var rtn = false;
//	$.ajax({
//		type : "get",
//		async : false,
//		url : $.cxt + "/index/checkSession",
//		success : function(json) {
//			var data = $.parseJSON(json);
//			if (data.code == '0') {
//				rtn = true;
//			}
//		}
//	});
	return true;
}
//获取当前可以操作的div
var getTopcontext = function() {
	var i = topwindow.i;
	if(i == 100) {
		return $topcontextDiv;
	} else {
		return $("#fullBackground" + i);
	}
}

var getSystemConfigByType = function(obj) {
	jQuery.ajaxRequestObj({
		url : $.cxt + "/systemConfig/getByType",
		data : {codeType : obj.type},
		async : obj.async == undefined ? true : false,
		successfn : function(msg) {
			obj.fun(msg);
		}
	})
}