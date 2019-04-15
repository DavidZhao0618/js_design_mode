var Book = function(auther,title,type){
	if(this instanceof Book){
		this.auther = auther;
		this.title = title;
		this.type = type;
	}else{
		return new Book(auther,title,type)
	}
	this.read=()=>{
		console.log('reading...')
	}
	this.price=()=>{
		console.log('10$')
	}
	
}
var a = new Book('zhaozz','haha','js')
console.log(a.read())
