/**
 * @module tiutils-core
 */

/**
 * @constructor
 * @alias module:tiutils-core
 */
function TiUtils(){}

/**
 * A method that returns true if the passed value is an array.
 * It returns false otherwise
 * 
 * @param {Array} array the object to verify
 */
TiUtils.prototype.isArray = function(array){
    return toString.apply(array) === '[object Array]';
};

/**
 * A mehtod that returns true is the passed parameter is null, undefined, or an empty array.
 * If allowBlank is false, then return true if the value param is an empty string.
 *  
 * @param {Object} v the value to be verified
 * @param {Boolean} allowBlank if true, then the empty string is considered as not empty
 */
TiUtils.prototype.isEmpty = function(v, allowBlank){
    return v === null || v === undefined || ((this.isArray(v) && !v.length)) || (!allowBlank ? v === '' : false);
}; 
 
/**
 * A method that returns true id the value is not undefined
 * 
 * @param {Object} value
 */
TiUtils.prototype.isDefined = function(value){
    return typeof value !== 'undefined';
};

/**
 * A method that copy the properties of a config object into a destination object.
 * 
 * @param {Object} dest destination object, the reveiver of the properties
 * @param {Object} config object to copy in the destination object
 * @param {Object} defaults object that contains the de default values
 */
TiUtils.prototype.apply = function(o, c, defaults){
    if(defaults){
        this.apply(o, defaults);
    }
    if(o && c && typeof c == 'object'){
        for(var p in c){
            o[p] = c[p];
        }
    }
    return o;
};

TiUtils.prototype.each = function(array, fn, scope){
    if(this.isEmpty(array, true)){
        return;
    }
    if(!this.isArray(array)){
        array = [array];
    }
    for(var i = 0, len = array.length; i < len; i++){
        if(fn.call(scope || array[i], array[i], i, array) === false){
            return i;
        }
    }
};

TiUtils.prototype.pluck = function(arr, prop){
    var ret = [];
    this.each(arr, function(v) {
        ret.push( v[prop] );
    });
    return ret;
};

TiUtils.prototype.cropPrefix = function(str, prefix, toLowerCase){
    if(this.isEmpty(str)){
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

TiUtils.prototype.getPrefixed = function(o, prefix){
    if(this.isEmpty(prefix) || !(o && typeof o == 'object')){
        return o;
    }
    var res = {};
    for(var p in o){
        if(p.indexOf(prefix) === 0){
            res[this.cropPrefix(p, prefix, true)] = o[p];
        }
    }
    return res;
};

module.exports = TiUtils;