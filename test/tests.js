QUnit.module('tests');

var tiUtils = new TiUtils();

test( "Test isEmpty()", function(){
    
    ok(tiUtils.isEmpty(null), "'null' is empty");
    ok(tiUtils.isEmpty(undefined), "'undefined' is empty");
    ok(tiUtils.isEmpty([]), "[null] is empty");
    ok(tiUtils.isEmpty('', false, "empty string is empty is blank is not allowed"));
    ok(!tiUtils.isEmpty('', true, "empty string is not empty is blank is allowed"));
    ok(!tiUtils.isEmpty(0), "0 is not empty");
    
});

test( "Test isDefined()", function(){
    
    ok(!tiUtils.isDefined(), "'undefined' is undefined");
    ok(!tiUtils.isDefined(undefined), "'undefined' is undefined");
    ok(tiUtils.isDefined(null), "'null' is defined");
    ok(tiUtils.isDefined(''), "empty string is defined");
    ok(tiUtils.isDefined('value'), "string value is defined");
    ok(tiUtils.isDefined(1), "1 is defined");
    ok(tiUtils.isDefined([]), "[] is defined");
    ok(tiUtils.isDefined([1]), "[1] is defined");
    ok(tiUtils.isDefined({}), "empty object is defined");
    ok(tiUtils.isDefined(true), "true is defined");
    ok(tiUtils.isDefined(false), "false is defined");
    
});

test( "Test isArray()", function() {
    ok(!tiUtils.isArray(undefined), "'undefined' is not an array");
    ok(!tiUtils.isArray(null), "'null' is not an array");
    ok(!tiUtils.isArray(""), "emptry string is not an array");
    ok(!tiUtils.isArray(1), "number 1 is not an array");
    ok(!tiUtils.isArray(true), "true is not an array");
    ok(!tiUtils.isArray(false), "false is not an array");
    ok(!tiUtils.isArray(new Date()), "Date is not an array");
    ok(tiUtils.isArray([]), "[] is an erray");
    ok(tiUtils.isArray([1]), "[1] is an array"); 
    ok(tiUtils.isArray([1, 2]), "[1, 2] is an array"); 
    ok(tiUtils.isArray([true, false]), "[true, false] is an array"); 
    ok(tiUtils.isArray(["foo", "bar"]), "['foo', 'bar'] is an array"); 
});

test( "Test cropPrefix()", function() {
    ok(!tiUtils.cropPrefix());
    
    ok('top' === tiUtils.cropPrefix('ctTop', 'ct', true), "crop 'ctTop' using 'ct' prefix gives 'top'");
    ok('Top' === tiUtils.cropPrefix('ctTop', 'ct'), "crop 'ctTop' using 'ct' prefix gives 'Top'");
    ok('ctTop' === tiUtils.cropPrefix('ctTop', null, true), "crop 'ctTop' using null prefix gives 'ctTop'");
    ok('ctTop' === tiUtils.cropPrefix('ctTop'), "crop 'ctTop' using 'undefined' prefix gives 'ctTop'");
});

test( "Test getPrefixed()", function() {
    ok(!tiUtils.getPrefixed());
    
    var o1 = {
        ctTop: 10,
        ctLeft: 10,
        top: 1,
        left:1,
        backgroundColor: '#000'  
    };
    
    var prefixed = tiUtils.getPrefixed(o1, 'ct'); 
    
    ok(prefixed !== undefined);
    ok(prefixed !== null);
    ok(prefixed.top === 10);
    ok(prefixed.left === 10);
    ok(prefixed.Top === undefined);
    ok(prefixed.Left === undefined);
    ok(prefixed.backgroundColor === undefined);

});
