
$(function(){
	var portalLoginId = $("#portalLoginId").val();
	if(portalLoginId != null && portalLoginId != "" && portalLoginId != undefined && portalLoginId != "null"){
		$.ajax({
		       type: "post",
		       url : $.cxt+"/index/portalToSubSystem",
		       dataType: "json",
		       data: {portalLoginId:portalLoginId},
		       async: false,
		       success: function(data){}
		   });
	}
	
});