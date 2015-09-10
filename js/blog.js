$(function(){
    Parse.$ = jQuery;

    Parse.initialize("ZMnzRQkMCF7c0YN57snOmEEGhs2EXLp2LxZhUC2g", "ZndjZJvoTNz5WBSuLSqkEVHvIJkSauyB0Bzb9iX6");

    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();

    testObject.save({foo: "bar"}).then(function(object) {
        alert("yay! it worked");
    });

});