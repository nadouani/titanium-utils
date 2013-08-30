exports.TiUtils = function(){
    
    var TiUtils = {};
    
    TiUtils.isArray = function(v){
        return toString.apply(v) === '[object Array]';
	};
       
    TiUtils.isEmpty = function(v, allowBlank){
        return v === null || v === undefined || ((TiUtils.isArray(v) && !v.length)) || (!allowBlank ? v === '' : false);
    };
    
    TiUtils.isDefined = function(v){
        return typeof v !== 'undefined';
    };
    
    TiUtils.apply = function(o, c){
        if(o && c && typeof c == 'object'){
            for(var p in c){
                o[p] = c[p];
            }
        }
        return o;
    };
    
    TiUtils.each = function(array, fn, scope){
        if(TiUtils.isEmpty(array, true)){
            return;
        }
        if(!TiUtils.isArray(array)){
            array = [array];
        }
        for(var i = 0, len = array.length; i < len; i++){
            if(fn.call(scope || array[i], array[i], i, array) === false){
                return i;
            }
        }
    };
    
    TiUtils.pluck = function(arr, prop){
        var ret = [];
        TiUtils.each(arr, function(v) {
            ret.push( v[prop] );
        });
        return ret;
    };
    
    TiUtils.cropPrefix = function(str, prefix, toLowerCase){
        if(TiUtils.isEmpty(str)){
            return;
        }
        
        if (str.indexOf(prefix) !== 0) {
            return str;
        }

        var result = str.substr(prefix.length);
        if(toLowerCase === true){
            result = result.charAt(0).toLowerCase() + result.slice(1);
        }
        return result;
    }; 
    
    TiUtils.getPrefixed = function(o, prefix){
        if(TiUtils.isEmpty(prefix) || !(o && typeof o == 'object')){
            return o;
        }
        var res = {};
        for(var p in o){
            if(p.indexOf(prefix) === 0){
                res[TiUtils.cropPrefix(p, prefix, true)] = o[p];
            }
        }
        return res;
    };
    
    return TiUtils;
};