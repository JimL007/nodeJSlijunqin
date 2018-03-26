
console.log("hello word");



{
    var a = 10;
    let b = 11;  //let有作用域  只在当前代码段有效
}

var a = [];
for(let i = 0; i < 10; i++){
    a[i] = function () {
        console.log(i);
    }
}
a[6]();

for(let j = 0; j<10;j++){
    for(let k = 0; k<2;k++){
        console.log(j);
    }
}