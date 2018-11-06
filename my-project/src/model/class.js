	//类
function Person(name,age){
	this.name = name;
	this.age = age;
}
Person.prototype.showName = function() {
	return '名字为: ${this.name}';
};
Person.prototype.showAge = function() {
	return '名字为: ${this.age}';
};
let p1 =  new Person('Strive',18);
console.log(p1.showName());
console.log(p1.showAge());


Object.assign(Person.prototype,{
	showName(){
		return '名字为: ${this.name}';
	},
	showAge(){
		return '名字为: ${this.age}';
	}
});
console.log(p1.showName());
console.log(p1.showAge());
//类
let aaa = 'strive'
let bbb = 'method'
class Person{
	constructor(name,age){
		console.log('狗杂函数执行了，${name},${age}');
		this.name = name;
		this.age = age;
	}
	showName(){
		return '名字为: ${this.name}';
	}
	static aaa(){

	}
	showAge(){
		return '名字为: ${this.age}';
	}
	[aaa+bbb](){
		return '随便了...';
	}
}
let p1 =  new Person('Strive',18);
console.log(p1.showName()，p2.showAge());
console.log(p1[aaa+bbb]());
console.log(p1.strivemethod ());
console.log(Person.aaa ());
//原始继承
function Person(name){
	this.name = name;
}
Person.prototype.showName = function() {
	return '名字是：${this.name}';
}
Student.prototype = new Person();//继承方法 
//子类
function Student(name,skill){
	Person.call(this,name);
	this.skill = skill;
}
//调用	
let stu1 = new Student('Strive','逃学');
console.log(stu1.name);


//es 继承

class Person{
	constructor(name,age){
		this.name = name;
	}
	showName(){
		return '名字为: ${this.name}';
	}
}
//子类
class Student extends Person{
	constructor(namne,skill){
		super(name);
		super(showName());//父级的方法执行；
		this.skill = skill;
	}
	showSkill(){
		return '哥们:${this.skill}'
	}
}
//调用	
let stu1 = new Student('Strive','逃学');
console.log(stu1.showName());


//拖拽
