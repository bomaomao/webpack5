console.log('JS基础内容')


/* 
    1.基础数据类型 及 判断typeof instanceof
    （1）基础数据类型：undefined number string object function symbol
    （2）通过typeof判断基础数据类型，通过instanceof可以判断具体属于哪一类实例（区分array与object），通过symbol为对象增加唯一类型标识
 */
// *** （1）typeof
console.log('特殊元素：', typeof (NaN), typeof (null), typeof ([1, 2, 3])) //=> number object object

// ***（2）instanceof
var obj = {}; console.log(obj instanceof Object); //=> true; 
var arr = []; console.log(arr instanceof Array); //=> true;
var fn = function () { }; console.log(fn instanceof Function); //=> true;

// ***（3）Symbol
// Symbol 不是对象，是基础数据类型，不可以new
// var sy = new Symbol(); //=>TypeError: Symbol is not a constructor
var sym = Symbol('该变量的描述内容')
console.log(sym, sym.description) //=> Symbol(该变量的描述内容) '该变量的描述内容'

// Symbol.for() 类似单例模式，首先会在全局搜索被登记的 Symbol 中是否有该字符串参数作为名称的 Symbol 值，
// 如果有即返回该 Symbol 值，若没有则新建并返回一个以该字符串参数为名称的 Symbol 值，并登记在全局环境中供搜索。
let yellow = Symbol("Yellow");
let yellow1 = Symbol.for("Yellow");
console.log(yellow === yellow1);      // false

let yellow2 = Symbol.for("Yellow");   // 表示的是全局中描述为Yellow的对象，与yellow1相同
console.log(yellow1 === yellow2);     // true

// Symbol.keyFor() 返回一个已登记的 Symbol 类型值的 key ，用来检测该字符串参数作为名称的 Symbol 值是否已被登记
console.log('已登记的Symbol--', Symbol.keyFor(yellow), Symbol.keyFor(yellow1)) //=>  undefined Yellow

/*
 2.变量提升 
 解析器会先解析代码，然后把声明的变量的声明提升到最前，这就叫做变量提升。
*/

function show() {
    console.log('输出',web); //=> undefined 不会报错
    if(web) {
        var web = 4; //=> var表示声明和赋值，会进行变量提升
    }
}

// show()等价于show1()

function show1() {
    var web; //=> var表示声明和赋值，代码解析阶段会进行变量提升
    console.log('输出',web); //=> undefined 不会报错
    if(web) {
        web = 4; 
    }
}

show();
show1();

/* 
    3.let，const临时性死区TDC
*/
function showLet() {
    console.log('输出let定义变量：',web1); //=>报错 ReferenceError: Cannot access 'web1' before initialization
    let web1 = '2'; // let必须声明在上面
}

// showLet();

console.log('输出let定义变量：',webLet2); //=>报错 ReferenceError: webLet2 is not defined 
function showLet1() {
    let webLet2 = '2'; // let声明在函数内部,造成TDC
}
showLet1();

/* 
    4.全局污染 window 与 var
    使用var定义的全局变量相当于直接挂载在window对象上
 */

window.data //=> undefined
var data = 1;
window.data //=> 1

/* 
    5.块作用域{}  =>与函数作用域相同
 */
let blockData = 7;
{
    let blockData = 9;
    console.log(blockData) //=>9
}
console.log(blockData) //=>7

var blockData1 = 7;
{
    var blockData1 = 9;
    console.log(blockData1) //=>9
}
console.log(blockData1) //=>9

var blockData3 = 7;
console.log(blockData3); //=>7
{
    var blockData3 = 9;
    console.log(blockData1); //=>9
}

/* 
    6.立即执行函数
   创建一个独立的作用域。这个作用域里面的变量，外面访问不到（避免了变量污染）
*/

//第一种写法
(function(){ 
    //...
 })();
 //第二种写法
 (function(){ 
    // ...
 }());
 //错误的写法
 function (){ 
     //... 
 }();　　　　//报错： Uncaught SyntaxError: Unexpected to


 var liList = ul.getElementsByTagName('li')
for(var i=0; i<6; i++){
  liList[i].onclick = function(){
    alert(i) // // 为什么 alert 出来的总是 6，而不是 0、1、2、3、4、5
  }
}

var liList = []
for(var i = 0;i < 6; i++) {
    setTimeout(() =>{
       console.log(i) // 6个6
    }, 200)
    
}

var liList = []
for(var i = 0;i < 6; i++) {
    liList[i] = function a(){
        console.log(i) // 0、1、2、3、4、5
    }
    liList[i]();
    
}

//因为输出的 i 是全局作用域的，当循环结束后 i 的值是 6，所以输出的 i 就是6


// 用立即执行函数可以解决这个问题。
var liList = ul.getElementsByTagName('li')
for(var i=0; i<6; i++){
  (function(j){
    liList[j].onclick = function(){
      alert(j) // 0、1、2、3、4、5
    }
  })(i)
}
/* 因为 JS 中调用函数传递参数都是值传递 ，所以当立即执行函数执行时，
首先会把参数 i 的值复制一份，然后再创建函数作用域来执行函数，
循环5次就会创建5个作用域，所以每个 li 元素访问的都是不同作用域的 i 的值 */

// 绑定到全局
(function(){var $ = (window.$ = {}); $.web='hdsj'}.bind(window)());
console.log($) //{web: "hdsj"}