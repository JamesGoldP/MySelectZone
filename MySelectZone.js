/**
 *  
 *  selectZone 类
 *
 */
 function MySelectZone(){

	this.sourceSelect = arguments[0] ? arguments[0] : null;	
	this.targetSelect = arguments[1] ? arguments[1] : null;	

 	/**
     * 加载options列表
     * @param   array  	 object
     * @param   string   text
     * @param   string   value
     */
 	this.loadOptions = function (object, text, value){
 		this.createOptions(object, this.sourceSelect, text, value);
 	}	

 	/**
     * 增加options从左往右
     * @param  boolean all
     *
     */
 	this.addItem = function(all){
 		this.moveOptions(this.sourceSelect, this.targetSelect, all);
 	}

 	/**
     * 增加options从右往左
     * @param  boolean all
     *
     */
 	this.dropItem = function(all){
 		this.moveOptions(this.targetSelect, this.sourceSelect, all);
 	}

 	/**
     * 增加options
     * @param   array  	 object
     *
     */
 	this.moveOptions = function(source, target, all){
	    var sourceSelectLength = source.options.length;
	    if(sourceSelectLength==0){
	        alert('没有选中值');
	        return false;
	    }
        var selOptions = new Array();
	    sourceSelectLength = sourceSelectLength-1;
	    for( var i = sourceSelectLength;i >=0;i-- ){
	    	//过滤不是全选而且没有选择的值
	    	if(!source.options[i].selected && all==false) continue;

	    	//过滤已经存在的值
	    	var exist = false;
	    	for(var j;j<target.length;j++){
	    		if(source.options[i].value==target.options[j].value){
	    			exist = true;
	    		}
	    	}
	    	//如果不存在,则增加
	    	if(!exist){
	    		selOptions[selOptions.length] = source.options[i];
	    		source.options[i] = null;
	    	}
	    }
	    this.createOptions(selOptions, target, 'text', 'value'); 
 	}

 	this.createOptions = function(object, position, text, value){
 		//写法A
        for (var i = 0; i < object.length; i++) {
            var opt = document.createElement("OPTION");
            opt.value = object[i][text];
            opt.text =  object[i][text];
            position.options.add(opt);
        }
	    //写法B,每次会重置目标select的option
 		// for( var i = 0;i<object.length;i++ ){
	    //          var optionObject = new Option(object[i][text], object[i][value]);
	    //          position.options[i] = optionObject;
	    //      }	 	
    }

 }