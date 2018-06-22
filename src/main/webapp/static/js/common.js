/**
 * 验证表单是否改变
 */

var before;
var later;

var beforeKeys =new Array(); //键值数组(前)
var laterKeys =new Array(); //键值数组(后)
/**
 * 相同返回true   不同返回false
 * 传入表单改变前后的数据字符串
 */
function MainFun(obj1,obj2){
	before =obj1; //改变之前的数据
	later =obj2; //改变之后的数据
	getKey();
	if(judearr()){
		return juede();
	}else{
		return false;
	}
	  
	
}

function judearr(){
	if(beforeKeys.length != laterKeys.length) return false ;
	for(var i=0;i<beforeKeys.length;i++){
		if(beforeKeys[i] !=laterKeys[i]) return false ;
	}
	return true ;
}

function juede(){
	for(var i=0;i<beforeKeys.length;i++){
		if(getDataType(before[beforeKeys[i]]) ==getDataType(later[beforeKeys[i]])){
			var datatype =getDataType(later[beforeKeys[i]]);
			switch(datatype){
				case 'Object':{
					if(!MainFun(before[beforeKeys[i]],later[beforeKeys[i]]))
						return fase ;
					break ;
				}
				case 'Array':{
					for(var i=0;i<before[beforeKeys[i]].length;i++){
						if(before[beforeKeys[i]][i] !=later[beforeKeys[i]][i])
							return false ;
					}
					break ;
				}
				default :{
					if(before[beforeKeys[i]]!=later[beforeKeys[i]]){
						
						return false ;
					}
				}
			}
		}
		
	}
	return true ;
}


var juedarr =function(arr1,arr2){
	
}

/**
 * 获取数据类型
 */
var getDataType = function(o){ 
    if(typeof o == 'object'){ 
        if( typeof o.length == 'number' ){ 
            return 'Array';  
        }else{ 
            return 'Object';     
        } 
    }else{ 
        return 'no object'; 
    } 
}; 


/**
 * 获取键值
 */
function getKey(){
	var i=0;
	for(var key in before){
		beforeKeys[i]=key;
		i++;
	}
	i=0;
	for(var key in later){
		laterKeys[i]=key;
		i++;
	}
}
