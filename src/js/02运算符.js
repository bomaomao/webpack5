/* 
    1.前置与后置运算符
*/
let a = 1;
console.log(++a); //=> 2
let ass = 1;
console.log(ass++); //=>1

/* 
    2.switch 
    如果没有遇到break，则会一直向下执行
*/
 let mes = '医生';
 switch(mes) {
    case '医生':
        console.log('他是一个医生');
    case '护士':
        console.log('他是一个护士');
    default:
        console.log('输出默认值');
        break;
    case 'ggg': 
        console.log('999')
 }
 //=>他是一个医生 他是一个护士 输出默认值


