QUnit.module('tests');


var tiUtils = new TiUtils(); 

test( "Test isArray()", function() {
    ok(!tiUtils.isArray(undefined));
    ok(!tiUtils.isArray(null));
    ok(!tiUtils.isArray(""));
    ok(!tiUtils.isArray(1));
    ok(!tiUtils.isArray(true));
    ok(!tiUtils.isArray(false));
    ok(!tiUtils.isArray(new Date()));
    ok(tiUtils.isArray([]));
    ok(tiUtils.isArray([1])); 
});

test( "Test cropPrefix()", function() {
    ok(!tiUtils.cropPrefix());
    
    ok('top' === tiUtils.cropPrefix('containerTop', 'container', true));
    ok('Top' === tiUtils.cropPrefix('containerTop', 'container'));
    ok('containerTop' === tiUtils.cropPrefix('containerTop', null, true));

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



