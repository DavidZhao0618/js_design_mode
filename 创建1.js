var myMethods = function(){};
myMethods.prototype.addMethod = function(name,fn){
	this[name] = fn;
	return this;
};
var a = new myMethods();
a.addMethod('hello',function(){
	console.log('hello')
}).addMethod('hellow',function(){
	console.log('hellow')
})
a.hello()
a.hellow()

// ---------------------------------------------

var myMethods = function(){};
myMethods.fn = myMethods.prototype={
	addMethod : function(name,fn){
		this[name] = fn;
		return this;
	}
}
myMethods.addMethod = myMethods.fn.addMethod;
// myMethods.fn= myMethods ;

myMethods.addMethod('hello111',function(){
	console.log('hello')
})
var a = new myMethods();
a.addMethod('hello',function(){
	console.log('hello')
}).addMethod('hellow',function(){
	console.log('hellow')
})
a.hello()
// a.hello111()
a.hellow()
myMethods.hello111()

