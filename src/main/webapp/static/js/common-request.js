/*****************************************************************
                  jQuery Ajax封装通用类    
*****************************************************************/
$(function(){
	/**
	 * 
	 */
	jQuery.ajaxRequestObj=function(obj) {
		if(obj.checkSession == undefined && !checkSessionFull(obj.iframe)) {
			return;
		}
		jQuery.ajaxRequest(
				obj.url, 
				obj.data, 
				obj.async,
				obj.type, 
				obj.successfn, 
				obj.errorfn,
				obj.dataType,
				obj.successAlert,
				obj.closeWindow);
	}
	
    /**
     * ajax封装
     * url 发送请求的地址
     * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
     * async 默认值: true。默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。
     *       注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
     * type 请求方式("POST" 或 "GET")， 默认为 "GET"
     * dataType 预期服务器返回的数据类型，常用的如：xml、html、json、text
     * successfn 成功回调函数
     * errorfn 失败回调函数
     */
    jQuery.ajaxRequest=function(url, data, async, type, successfn, errorfn, dataType, successAlert, closeWindow) {
        if(async == undefined) {
    		async = true;
    	}
        if(data == undefined) {
    		data = {"date": new Date().getTime()};
    	}
        if(type == undefined) {
        	type = "post";
    	}
        if(dataType == undefined) {
        	dataType = "json";
    	}
        $.ajax({
            type: type,
            async: async,
            data: data,
            url: url,
            dataType: dataType,
            success: function(d){
            	//alert("ajax:" + d);
                successfn(d);
                if(successAlert == 1) {
                	topwindow.showSuccessAlert();
                }
                if(closeWindow == 1) {
                	topwindow.closeWindow();
                }
                if(getTopcontext().find(".myFocus").length > 0) {
                	getTopcontext().find(".myFocus").focus();
                }
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
            	if(errorfn != undefined) {
            		errorfn(XMLHttpRequest, textStatus, errorThrown);
            	} else {
            		alert(XMLHttpRequest.status);
            	}
            	//将当前可操作页面下的submit按钮设置为可以点击
            	$topcontextDiv.find("[type='submit']").removeAttr("disabled");
    		},
        });
    };
    
    /**
     * ajax封装
     * url 发送请求的地址
     * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
     */
    jQuery.postData=function(url, data) {
    	alert(data);
        data = (data==null || data=="" || typeof(data)=="undefined")? {"date": new Date().getTime()} : data;
        $.ajax({
            type: "post",
            data: data,
            url: url,
            dataType: "json"
        });
    };
    
    /**
     * ajax封装
     * url 发送请求的地址
     * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
     * successfn 成功回调函数
     */
    jQuery.postDataSuccess=function(url, data, successfn) {
        data = (data==null || data=="" || typeof(data)=="undefined")? {"date": new Date().getTime()} : data;
        $.ajax({
            type: "post",
            data: data,
            url: url,
            dataType: "json",
            success: function(d){
                successfn(d);
            }
        });
    };
    
    /**
     * ajax封装
     * url 发送请求的地址
     * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
     * dataType 预期服务器返回的数据类型，常用的如：xml、html、json、text
     * successfn 成功回调函数
     * errorfn 失败回调函数
     */
    jQuery.postDataSF=function(url, data, successfn, errorfn) {
        data = (data==null || data=="" || typeof(data)=="undefined")? {"date": new Date().getTime()} : data;
        $.ajax({
            type: "post",
            data: data,
            url: url,
            dataType: "json",
            success: function(d){
                successfn(d);
            },
            error: function(e){
                errorfn(e);
            }
        });
    };
});