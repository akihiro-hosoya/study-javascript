// 関数
function dispMsg(str){
    document.write("<p>");
    document.write(str);
    document.write("</p>");
}

dispMsg("Hello");
document.write('<p>Good morinmg</p>');
dispMsg("bye");

dispCopyright();

function dispCopyright(){
    document.write("<p>Copyright (c) 2009 xxx. All RightsReserved.</p>");
}

/*
function 関数名(引数1, 引数2, ...){
    実行される処理1;
    実行される処理2;
}

関数名(引数1, 引数2, ...);
*/


// return
function menseki(r){
    return;
}
function enshu(r){
    return 2*3.14*r;
}
var r=10;

document.write("<p>");
document.write("半径 = " + r + "<br />");
document.write("円周 = " + enshu(r) + "<br />");
document.write("面積 = " + menseki(r));
document.write("</p>");


// 関数リテラル
// 関数リテラルは関数を一度定義してその関数を呼び出す場合と違い関数名を付ける必要がありません。
// 例えば一度しか使われないような関数を一つ一つ定義していくと、関数名が他の関数や変数名とかぶっていないかどうかを
// 気にしなくてはなりません。関数リテラルであれば関数名を使用しませんのでその心配が不要
var heikin = (function(x, y){return (x+y)/2;});
document.write("<p>");
document.write("平均 = " + heikin(10, 8));
document.write("</p>");



// グローバル関数
// parseInt関数　・　文字列を整数に変換
/*
parseInt(str)
parseInt(str, int)
str 対象の文字列　/ int 基数 
戻り値：変換された数値
*/
function print(str){
    document.write(str + "<br />");
}

document.write("<p>");
print("parseInt('10') = " + parseInt("10"));
print("parseInt('2008year') = " + parseInt("2008year"));
print("parseInt('-77point') = " + parseInt("-77point"));
print("parseInt('Book170') = " + parseInt("Book170")); // 文字列の先頭の文字が数値でない文字だった場合にはNaNを
print("parseInt('0x3F_01') = " + parseInt("0x3F_01", 16));

// 進数の基数を指定します。指定できる値は「2」「8」「10」「16
print("parseInt('11', 2) = " + parseInt("11", 2));
print("parseInt('11', 8) = " + parseInt("11", 8));
print("parseInt('11', 10) = " + parseInt("11", 10));
print("parseInt('11', 16) = " + parseInt("11", 16));

print("parseInt('') = " + parseInt(""));
document.write("</p>");


// parseFloat関数　文字列を数値に変換
/*
parseFloat(str)
str 対象の文字列
戻り値：変換された数値
*/
document.write("<p>");
print("parseFloat('10') = " + parseFloat("10"));
print("parseFloat('-2008year') = " + parseFloat("-2008year"));
print("parseFloat('0x3F') = " + parseFloat("0x3F"));
print("parseFloat('4F') = " + parseFloat("4F"));
print("parseFloat('18.26B') = " + parseFloat("18.26B"));
print("parseFloat('2.4e-3') = " + parseFloat("2.4e-3"));
print("parseFloat('2.4ea') = " + parseFloat("2.4ea"));
print("parseFloat('Book170') = " + parseFloat("Book170"));
print("parseFloat('') = " + parseFloat(""));
document.write("</p>");


// isNaN関数　NaNかどうか調べる
/*
isNaN(val)
val 対象の値
戻り値：対象の値がNaNならtrue, それ以外ならFalse
*/
function nanCheck(val){
    if(isNaN(val)){
        document.write('o ' + val + "<br />");
    }else{
        document.write("x " + val + "<br />")
    }
}
document.write("<p>");
document.write("NaN?<br />");
nanCheck(10);
nanCheck(NaN);
nanCheck(Infinity);
nanCheck(null);
nanCheck(undefined);
nanCheck("39");
nanCheck("10nen");
nanCheck(parseInt("10nen"));
nanCheck(true);
nanCheck(false);
nanCheck([10, 9]);
nanCheck(new Number(87));
document.write("</p>");


// isFinite関数　対象の数値が有限の値かそれとも無限大の値かどうか調べる
/*
isFinite(num)
num 対象の値
戻り値：対象の値が有限値ならtrue, それ以外ならfalse
*/
function finiteCheck(val){
    if (isFinite(val)){
        document.write("○ " + val + "<br />");
    }else{
        document.write("× " + val + "<br />");
    }
}

document.write("<p>");
document.write("isFinite?<br />");
finiteCheck(10);
finiteCheck(3.14);
finiteCheck(2.4e-3);
finiteCheck(Infinity);
finiteCheck(-Infinity);
finiteCheck(Number.POSITIVE_INFINITY);
finiteCheck(Number.NEGATIVE_INFINITY);
finiteCheck(Number.MAX_VALUE);
finiteCheck(Number.MIN_VALUE);
finiteCheck(NaN);
document.write("</p>");





// Objectクラス
// コンストラクタ関数
/*
Object() / Object(val)
Objectクラスのオブジェクトを生成
val：基本データの型
*/
var obj = new Object();
obj.width = 100;
obj.height = 80;

document.write("<p>");
for (var pname in obj){
    print(pname + " = " + obj[pname]);
}
document.write("</p>");

// constructorプロパティ
// オブジェクトのコンストラクタ関数への参照
function classcheck(func){
    if (func == Object){
    document.write("Object Class<br />");
    }else if (func == Array){
    document.write("Array Class<br />");
    }else if (func == String){
    document.write("String Class<br />");
    }else{
    document.write("Other<br />");
    }
}

var obj = new Object();
var ary = new Array();
var num_obj = new Number(20);
var str_obj = new Object("Hello");

document.write("<p>");
classcheck(obj.constructor);
classcheck(ary.constructor);
classcheck(num_obj.constructor);
classcheck(str_obj.constructor);
document.write("</p>");


// toStringメソッド　対象のオブジェクトを文字列に変換した結果を返す
/*
toString()
戻り値：オブジェクトの文字列表現
*/
function print(obj){
    document.write(obj.toString() + "<br />");
}
var obj = new Object();
obj.width = 100;
var ary = new Array("Tokyo", "Osaka");
var num_obj = new Number(20);
var str_obj = new Object("Hello");

document.write("<p>");
print(obj);
print(ary);
print(num_obj);
print(str_obj);
document.write("</p>");


// toLocalStringメソッド　対象のオブジェクトを文字列に変換した結果を返す
/*
toLocalString()
戻り値：オブジェクトの文字列表現・現在のロケールに応じた形式で変換を行った結果を返す
*/
var obj = new Object();
obj.width = 100;
var d = new Date();
var num_obj = new Number(1820000);

document.write("<p>");
print(obj.toString());
print(obj.toLocaleString());
print(d.toString());
print(d.toLocaleString());
print(num_obj.toString());
print(num_obj.toLocaleString());
document.write("</p>");


// valueOfメソッド　対象のオブジェクトの基本データ型の値を返す
/*
valueOf()
戻り値：オブジェクトの基本データ型の値。基本データ型の値が無ければオブジェクトそのものを返す
*/
var obj = new Object();
var num_obj = new Number(45);
var str_obj = new String("Hello");
var bool_obj = new Boolean(true);
var ary = new Array();
var d = new Date();

document.write("<p>");
print("Object.valueOf --> " + typeof obj.valueOf());
print("Number.valueOf --> " + typeof num_obj.valueOf());
print("String.valueOf --> " + typeof str_obj.valueOf());
print("Boolean.valueOf --> " + typeof bool_obj.valueOf());
print("Array.valueOf --> " + typeof ary.valueOf());
print("Date.valueOf --> " + typeof d.valueOf());
document.write("</p>");


// toFixedメソッド　対象のNumberクラスのオブジェクトを文字列に変換する場合に、小数点以下の桁数を指定して変換した値を返す
/*
toFixed(int)
int: 小数点以下の桁数
戻り値：Numberクラスのオブジェクトが表す数値の文字列表現
例外：RangeError  小数点以下の桁数にあまりに範囲を超えた数値を指定した場合
*/
document.write("<p>");
var num_obj = new Number(15.784);
print(num_obj.toFixed(0));
print(num_obj.toFixed(1));
print(num_obj.toFixed(2));
print(num_obj.toFixed(3));
print(num_obj.toFixed(4));
print(num_obj.toFixed(5));

try{
    print(num_obj.toFixed(1000));
}catch(e){
    print(e);
}
document.write("</p>");


// toExponentialメソッド　
// 対象のNumberクラスのオブジェクトを文字列に変換する場合に、小数点以上の桁数を1桁とし
// 小数点以下の桁数を指定した桁数にした指数形式で変換した値を返す
/*
toExponential(int)
int: 小数点以下の桁数
戻り値：Numberクラスのオブジェクトが表す数値の文字列表現
例外：RangeError  小数点以下の桁数にあまりに範囲を超えた数値を指定した場合
*/
document.write("<p>");
var num_obj = new Number(135.7);
print(num_obj.toExponential(0));
print(num_obj.toExponential(1));
print(num_obj.toExponential(2));
print(num_obj.toExponential(3));
print(num_obj.toExponential(4));

var num_obj2 = new Number(0.00274);
print(num_obj2.toExponential(0));
print(num_obj2.toExponential(1));
print(num_obj2.toExponential(2));
print(num_obj2.toExponential(3));
print(num_obj2.toExponential(4));

try{
    print(num_obj.toExponential(1000));
}catch (e){
    print(e);
}
document.write("</p>");


// toPrecisionメソッド　
// 対象のNumberクラスのオブジェクトを文字列に変換する場合に、有効桁数を指定して変換した値を返す
/*
toPrecision(int)
int: 有効桁数
戻り値：Numberクラスのオブジェクトが表す数値の文字列表現
例外：RangeError  小数点以下の桁数にあまりに範囲を超えた数値を指定した場合
*/
document.write("<p>");
var num_obj = new Number(176.54);
print(num_obj.toPrecision(1));
print(num_obj.toPrecision(2));
print(num_obj.toPrecision(3));
print(num_obj.toPrecision(4));
print(num_obj.toPrecision(5));
print(num_obj.toPrecision(6));
print(num_obj.toPrecision(7));

try{
    print(num_obj.toPrecision(0));
}catch (e){
    print(e);
}
try{
    print(num_obj.toPrecision(1000));
}catch (e){
    print(e);
}
document.write("</p>");



// Stringクラス　Stringクラスのオブジェクトを生成
// コンストラクタ関数
// String(val) val:文字列または文字列以外の値
var str_obj;
document.write("<p>");
str_obj = new String("Hello");
print(str_obj);
str_obj = new String(122);
print(str_obj);
document.write("</p>");

// lengthプロパティ
// s.length 文字列の長さを取得
var str_obj;
document.write("<p>");
str_obj = new String("Hello");
print(str_obj + "の長さは" + str_obj.length + "です");
str_obj = new String("おはようございます");
print(str_obj + "の長さは" + str_obj.length + "です");
document.write("</p>");

// toStringメソッド　対象のStringクラスのオブジェクトを文字列に変換した結果を返す
// toString()
// 戻り値：Stringメソッドのオブジェクトが表す文字列の文字列表現
document.write("<p>");
var str_obj = new String("Good Morning.");
print(str_obj.toString());
print(str_obj);
document.write("</p>");

// valueOfメソッド Stringクラスのオブジェクトの基本データ型の値を返す
// 戻り値:Stringクラスのオブジェクトが表す文字列
document.write("<p>");
var str_obj = new String("こんにちは。");
print(str_obj.valueOf());
print(str_obj);
document.write("</p>");

// cocnatメソッド　文字列に引数に指定した文字列を連結した新しい文字列を返す
// concat(val1, val2, ...)
// val:連結する値
// 戻り値:連結された新しい文字列
document.write("<p>");
var str_obj = new String("東京都");
var str = str_obj.concat("千代田区", "大手町");
print(str_obj);
print(str);
document.write("</p>");

// sliceメソッド 文字列の中の指定された範囲の部分文字列を返す
/*
slice(start[, end])
start 開始インデックス / end 終了インデックス
戻り値:指定された範囲の部分文字列
*/
document.write("<p>");
var str_obj = new String("Thank you");
print(str_obj);
print("slice(0, 1) --> " + str_obj.slice(0, 1));
print("slice(0, 2) --> " + str_obj.slice(0, 2));
print("slice(0, 5) --> " + str_obj.slice(0, 5));
print("slice(3, 7) --> " + str_obj.slice(3, 7));
print("slice(0) --> " + str_obj.slice(0));
print("slice(6) --> " + str_obj.slice(6));
print("slice(-9, -4) --> " + str_obj.slice(-9, -4));
print("slice(-8, 4) --> " + str_obj.slice(-8, 4));
print("slice(5, 0) --> " + str_obj.slice(5, 0));
document.write("</p>");

// substringメソッド 文字列の中の指定された範囲の部分文字列を返す
/*
substart(start[, end])
start 開始インデックス / end 終了インデックス
戻り値:指定された範囲の部分文字列
*/
document.write("<p>");
var str_obj = new String("Thank you");
print(str_obj);
print("substring(0, 1) --> " + str_obj.substring(0, 1));
print("substring(0, 2) --> " + str_obj.substring(0, 2));
print("substring(0, 5) --> " + str_obj.substring(0, 5));
print("substring(3, 7) --> " + str_obj.substring(3, 7));
print("substring(0) --> " + str_obj.substring(0));
print("substring(6) --> " + str_obj.substring(6));
print("substring(5, 0) --> " + str_obj.substring(5, 0));
document.write("</p>");

/*sliceメソッドとsubstringメソッドはほぼ同じ働きをしますが、
sliceメソッドはインデックスに負の値を指定することができます。
またsubstringメソッドの場合は1番目の引数が2番目の引数よりも大きくても
自動的に値を入れ替えて処理します。
*/

// substrメソッド

// charAtメソッド 文字列の中の指定された位置の文字を返す
/*
int インデックス
戻り値　指定された位置の文字
*/
document.write("<p>");
var str_obj = new String("2009年度");
print(str_obj);
print("charAt(0) --> " + str_obj.charAt(0));
print("charAt(1) --> " + str_obj.charAt(1));
print("charAt(2) --> " + str_obj.charAt(2));
print("charAt(3) --> " + str_obj.charAt(3));
print("charAt(4) --> " + str_obj.charAt(4));
print("charAt(5) --> " + str_obj.charAt(5));
print("charAt(6) --> " + str_obj.charAt(6));
document.write("</p>");

// charCodeAtメソッド 指定された位置にある文字の文字コードを返す
// charCodeAt(int)
// 戻り値:指定された位置の文字の文字コード(整数)

// toLowerCaseメソッド　小文字に変換
// toLowerCase()
// toUppererCaseメソッド　大文字に変換
// toUpperCase()

// indexOfメソッド 指定した文字列が含まれるかどうか検索し、含まれていた場合は最初の見つかった位置を返す
/* 
indexOf(str[, start])
str 検索対象 / start 検索開始位置
戻り値: 指定した文字列が含まれていた場合は最初に見つかった位置。
       見つからなかった場合は-1を返す。
*/
function slicestr(start){
    print("開始位置 : " + start);
    var index = str_obj.indexOf(substr, start);
    print("出現位置 : " + index);
    str1 = str_obj.slice(0, index);
    str2 = str_obj.slice(index, index + substr.length);
    str3 = str_obj.slice(index + substr.length);
    print(str1 + "[" + str2 + "]" + str3);
}

var str_obj = "東京,大阪,神奈川,大阪,東京,大阪";
var substr = "大阪";

document.write("<p>");
print("対象文字列 : " + str_obj);
print("検索文字列 : " + substr);
document.write("</p>");

document.write("<p>");
slicestr(0);
document.write("</p>");
document.write("<p>");
slicestr(8);
document.write("</p>");


// lastIndexOfメソッド 対象の文字列の中に指定した文字列が含まれるかどうかを
// 文字列の最後から検索し、含まれていた場合は最初の見つかった位置を返す
/*
lastIndexOf(str[, start])
戻り値:指定した文字列が含まれていた場合は最初に見つかった位置。見つからなかった場合は-1を返す。
*/



// Booleanクラス コンストラクタ関数は次の1つが用意
/*
Boonlean(val)
val : 論理値または論理値以外の値
*/
var bool_obj;
document.write("<p>");
bool_obj = new Boolean(true);
print(bool_obj);
bool_obj = new Boolean(1);
print(bool_obj);
bool_obj = new Boolean(0);
print(bool_obj);
document.write("</p>");
// toStringクラス
// valueOfクラス



// Arrayクラス
// Array() Array(int) Array(val1, val2, ..., valn)
/*
int:要素の数 / val:要素の値
例外 : RangeError  要素の数に負の値か最大の数を越えた値を指定した場合
*/
document.write("<p>");
var ary = new Array("東京", "大阪", "名古屋");
for (var i = 0 ; i < ary.length ; i++){
    print("array[" + i + "] = " + ary[i]);
}
document.write("</p>");

document.write("<p>");
try{
    var ary2 = new Array(-1);
}catch(e){
    print(e);
}
document.write("</p>");

// lengthプロパティ a.length
// 配列の最後のインデックス+1を返す

// toStringメソッド　toString()
// オブジェクトを文字列に変換した結果を返す

// toLocaleStringメソッド　toLocaleDtring()
// Arrayクラスのオブジェクトが表す数値のロケールに応じた文字列表現

// joinメソッド　join() / join(str)
/*
str  連結する時のセパレータ文字列
戻り値：間に連結された文字列
*/

// sortメソッド sort() / sort(func)
// オブジェクトの各要素をアルファベット順に並べ替え
/*
func  並べ替えを決定するための関数
戻り値：対象のArrayクラスのオブジェクトへの参照
*/

// reverseメソッド reverse()
// 各要素を現在と逆の順序に並べ替え
/*
戻り値：対象のArrayクラスのオブジェクトへの参照
*/

// sliceメソッド　slice(start[, end])
// 配列の中の指定された範囲の部分配列を返す
/*
start  開始インデックス
end  終了インデックス
戻り値:指定された範囲の部分配列戻り値
*/



// Dateクラス
// コンストラクタ関数
/*
Date()
Date(ms)
Date(str)
Date(year, month[, day, hour, min, sec, ms])

ms  日付と時刻をミリ秒で指定
str  日付と時刻を表す文字列で指定
year  年
month  月
day  日
hour  時
min  分
sec  秒
ms  ミリ秒

Dateクラスの内部では、1970年1月1日0時0分0秒(UTC)を起点とした経過ミリ秒という数値だけを持っているようです。
その値を呼び出されるメソッドに応じて現地時間のタイムゾーンで表示したりします。
*/
document.write("<p>");
print(new Date());
print(new Date(18000));
print(new Date("2009/08/10 14:24:32"));
print(new Date("2009/08/10 14:24:32 GMT-0800"));
print(new Date("2009/08/10 14:24:32 UTC-0800"));
print(new Date(2005, 3));
document.write("</p>");


// toStringメソッド toString()
// Dateクラスのオブジェクトを文字列に変換した結果を返す
// 戻り値：Dateクラスのオブジェクトが表す日付/時刻の文字列表現

// toDateStringメソッド  toDateStringメソッド
// Dateクラスのオブジェクトの文字列に変換した結果の中で日付部分を返す
// 戻り値：Dateクラスのオブジェクトが表す日付の文字列表現

// toTimeStringメソッド toTimeStringメソッド
// Dateクラスのオブジェクトの文字列に変換した結果の中で時刻部分を返す
// 戻り値：Dateクラスのオブジェクトが表す日付の文字列表現

// toLocaleString / toLocaleDateString / toLocaleTimeStringメソッド
/*
Dateクラスのオブジェクトを文字列に変換した結果を返します。
この時、現在のロケールに応じた形式で変換を行った結果を返す
年月日がつく
*/

// toUTCString / toGMTStringメソッド
// タイムゾーンとして現地時間ではなくUTC/GMTを使う

// valueOfメソッド
// 例：現在の日時/時刻が1970年1月1日0時0分0秒(UTC)から1,249,922,682,928ミリ秒経過したことを表している

// UTCメソッド　Date.UTC(year, month[, day, hour, min, sec, ms])
// UTCタイムゾーンで指定した日付/時刻の値をミリ秒形式の値に変換した値を返す

// parseメソッド  Date.parse(str)　
// 与えられた値から日付/時刻の値を解析し、取得した日付/時刻の値をミリ秒形式の値に変換した値を返す





// Mathクラス
// Mathクラス定数
/*
・対数
Math.E         自然対数の底e
Math.LN10      eを底とする10の対数
Math.LN2       eを底とする2の対数
Math.LOG10E    10を底とするeの対数
Math.LOG2E     2を底とするeの対数
・円周率
Math.PI        円周率π
・平方根
Math.SQRT2      2の平方根
Math.SQRT1_2    1/2の平方根
*/

// abs関数　Math.abs(val)
// 絶対値を計算しその結果を返す

// round関数　Math.round(val)
// 戻り値：引数を四捨五入を計算した値

// ceil関数  Math.ceil(val)
// 小数点以下の切り上げ

// floor関数　Math.floor(val)
// 引数の小数点以下の値を切り捨てた結果

// max関数 Math.max(val1, val2, ...)
// 複数の値の中で最大の値を返す

// min関数  Math.min(val1, val2, ...)
// 複数の値の中で最小の値を返す

// random関数  Math.ramdom()
// 戻り値:0.0以上1.0未満の乱数

// sqrt関数　　Math.sqrt()
// 平方根を計算

// pow関数　　Math.pow(x, n)
/*
x 底
n 指数
戻り値：xのn乗を計算した結果
*/

// log関数　Math.log(val)
// 自然対数を計算した結果を返す

// exp関数 Math.exp(val)
// eの累乗を計算した結果を返す





// Functionクラス
// コンストラクタ関数
/*
Function(arg1, arg2, ..., argn, body)
arg : 引数  /  val : 関数の本体
例外：SyntaxError  関数本体の中に構文エラーがあった場合
*/

// f.length
// 関数定義で宣言された引数の数を返す

// f.prototype
// クラスのプロトタイプオブジェクトへの参照を返す

// toStringメソッド
// toString()
// 戻り値：Functionクラスのオブジェクトが表す配列の文字列表現
function plus(num1, num2){
    return num1 + num2;
}

document.write("<p>");
print(plus.toString());
var minus = function(num1, num2){return num1 - num2;};
print(minus.toString());
document.write("</p>");



// Argumentsクラス
// arguments.length 関数に渡された引数の数を返す
// arguments.callee 関数への参照を返す
document.write("<p>");
var func = function(n){
　　　if (n == 0){
    return 1;
　　　}else{
    return n * arguments.callee(n - 1);
　　　}
};
print(func(2));
print(func(3));
print(func(4));
print(func(5));
document.write("</p>");




// confirm 確認ダイアログ
function kakunin(){
    ret = confirm("Googleへ移動します。よろしいですか？");
    if (ret == true){
    　  location.href = "http://www.google.co.jp/";
    }
}


// prompt 入力ダイアログ
function kakunin2(){
    ret = prompt("URLを入力", "http://www.google.co.jp/");
    if (ret != null){
        location.href = ret;
    }
}