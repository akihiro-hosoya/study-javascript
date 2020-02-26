/*
document.write("<p>UTF-8で記述された外部ファイル</p>");

let num = 10;
document.write("<p>" + num + "</p>");



//alert("こんにちは\nお元気ですか");
//document.write("<p>" + (1/0) + "</p>");


// 16進数
let sum = Ox2a + Oxc5;
document.write('<p>合計は' + sum + 'です</p>');
*/

// 不動小数点リテラル
let n1 = 0.148;
let n2 = 2.4e-3;
document.write('<p>' + n1 + '</p>');
document.write('<p>' + n2 + '</p>');

var person = {name:'山田', old:20};
document.write('<p>' + person.name + '</p>');
var pref = ['東京都', '大阪府', '北海道'];
for (var i=0; i<pref.length; i++){
    document.write('<p>' + pref[i] + '</p>');
}


// 変数
// 変数 = 値;
var num1 = 1;

num1 = num1*2;
document.write('<p>' + num1 + '</p>');
num1 = num1*2;
document.write('<p>' + num1 + '</p>');
num1 = num1*2;
document.write('<p>' + num1 + '</p>');
num1 = num1*2;
document.write('<p>' + num1 + '</p>');


// var文
var num2, name2; // 複数

var num3;
var pref1, pref2;
num = 10;
pref1 = "東京都";
pref2 = "千代田区";
document.write('<p>' + pref1 + pref2 + "</p>");

// 変数の初期化
// 変数を宣言すると同時にその変数に対して初期値を代入します。
// このように宣言と同時に初期値を代入することを変数の初期化とい

// 未定義値(undefined)
// 変数に値がない場合はデフォルトで未定義値が入っている
var str;
alert(str);

// 参照型の値を変数へ代入
// 基本データ型の場合には、値の実体そのものが変数に格納されていましたので、
// 別の変数に代入した場合には値そのものが複製され値は同じだけど別のものとして格納されています
var num5;
num5 = 20;
var num6;
num6 = 20;

// オブジェクト型の値の場合には、どちらの変数も同じ1つのオブジェクトを見ている
// その為、どちらの変数からでも同じオブジェクトに対して変更を加えることができ、
// どちらかの変数によって加えられた変更は他の変数にも影響を与えることになる
var obj1;
obj1 = ['東京都', '大阪府', '北海道'];
var obj2;
obj2 = obj1;
document.write("<p>obj1 : " + obj1 + "</p>");
document.write("<p>obj2 : " + obj2 + "</p>");

obj2[2] = '福岡県';
document.write("<p>obj1 : " + obj1 + "</p>");
document.write("<p>obj2 : " + obj2 + "</p>");



// 演算子

// インクリント演算子・デクリント演算子
var num7 = 12;
document.write("<p>num7 = " + num7 + "</p>");
num++;
document.write("<p>num7 = " + num7 + "</p>");
num--;
document.write("<p>num7 = " + num7 + "</p>");

// 前置と後置
var num8 = 7, num9;
num9 = num8++;
alert(num8);    /* 8を表示 */
alert(num9);    /* 7を表示 */
var num8 = 7, num9;
num9 = ++num8;
alert(num8);    /* 8を表示 */
alert(num9);    /* 8を表示 */

// 代入演算子
var pref;
alert(pref = "東京都"); /* 東京都を表示 */

// 多重代入
// 変数1 = 変数2 = 変数3 = 値;
// 左から順に処理される

var num10;
num10 = 10;
num10 += 8;  // num10 = num10 + 8; 
document.write('<p> num10 = ' + num10 + '</p>');

// 関係演算子
if ('abc' > 'ABC'){
    document.write("<p>abc は ABC より大きいです</p>");
}else{
    document.write("<p>abc は ABC より大きくありません</p>");
}

// 三項演算子
var num;;
var sign;
num11 = 20;
sign = num11>=0 ? "正" : "負";
document.write("<p>" + num11 + "は" + sign + "</p>");


// typeog演算子
// typeof演算子は対象となる値のデータ型を表す文字列を返す
document.write("<p>");
document.write("typeof 1 = " + (typeof 1) + "<br />");
document.write("typeof 'Hello' = " + (typeof 'Hello') + "<br />");
document.write("typeof true = " + (typeof true) + "<br />");
document.write("typeof null = " + (typeof null) + "<br />");
document.write("typeof NaN = " + (typeof NaN) + "<br />");
document.write("typeof undefined = " + (typeof undefined) + "<br />");
document.write("typeof オブジェクト = " + (typeof person) + "<br />");
document.write("typeof 配列 = " + (typeof pref) + "<br />");
document.write("typeof 関数 = " + (typeof plus) + "<br />");
document.write("</p>");

var num100 = 15;
if(typeof num100==="number"){
    document.write('<p>変数の値は数値型です</p>');
}


// 文字列の連結
var str2;
str2 = "目覚まし" + "時計";
var str3;
str3 = ""