// 繰り返し処理
var sum = 0;
for (var i=1; i<=10; i++){
    sum += i;
}
document.write('<p>' + sum + '</p>');

// for文
/*
for(初期化式; 条件式; 変化式;)
    実行する文
for(初期化式; 条件式; 変化式;){
    実行する文1;
    実行する文2;
    ・・・
}
*/
// 評価した結果がtrueなら再度次の文を実行し、falseだった場合にはfor文を終了

// 条件式だけを記述したfor文
var sum2 = 0;
var count = 0;
for(; count<2;){
    sum2 += 2;
    count++;
}
document.write('<p>' + sum2 + '</p>');

// 初期化式と変化式
var sum3 = 0;
var count2;
for (count2=0; count2<2;){
    sum3+=2;
    count2;
}


//
var num = 1;

document.write("<p>");
for (var i = 0; i < 10; i++){
    num *= 2;
    document.write("i = " + i + ", num = " + num + "<br />");

    if (num >= 100){
    break;
    }
}
document.write("</p>");