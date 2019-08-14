// 'use strict';
// 例題 コンソールに数値「1」を出力してください。
console.log(1);


// 配列問題
// 変数programを宣言し、配列の要素として「HTML」「CSS」「JavaScript」「PHP」を代入してください.
// 変数programをコンソールに表示してください。
var program = ["「HTML」", "「CSS」", "「JavaScript」", "「PHP」"];
console.log(program);

// 配列問題(インデックス)
// 変数programの要素のうち、CSSのみコンソールに表示してください。
var program = ['HTML', 'CSS', 'JavaScript', 'PHP'];
console.log(program[1]);

// 配列問題(入れ子)
// 以下の変数carsの要素アクアのみコンソールに表示してください。
var cars = ['トヨタ', ['プリウス', 'クラウン', 'アクア'], 'ニッサン', 'ホンダ'];
console.log(cars[0, 1][2]);

// 配列問題(要素の個数)
// 変数carsの要素の個数を取得し、コンソールに表示してください。
var cars = ['トヨタ', ['プリウス', 'クラウン', 'アクア'], 'ニッサン', 'ホンダ'];
console.log(cars.length);


// 配列問題(for文との組み合わせ)
// 変数carsの要素をfor文を使い全て表示してください。
var cars = ['トヨタ', ['プリウス', 'クラウン', 'アクア'], 'ニッサン', 'ホンダ'];
cars.forEach(function (code) {
  console.log(code);
});


// 配列問題(要素の追加)
// 変数carsの配列末尾に文字列「スバル」を追加してください。
// 追加後、for文を使い、結果をコンソールに表示してください。
var cars = ['トヨタ', ['プリウス', 'クラウン', 'アクア'], 'ニッサン', 'ホンダ'];
cars.push('スバル');
cars.forEach(function (code) {
  console.log(code);
});


// 配列問題(要素の更新)
// 変数carsの要素「クラウン」の値を「セルシオ」に更新してください。
// 更新後、for文を使い、結果をコンソールに表示してください。
var cars = ['トヨタ', ['プリウス', 'クラウン', 'アクア'], 'ニッサン', 'ホンダ'];
cars[0, 1][1] = 'セルシオ';
var code = cars[0, 1][1];
cars.forEach(function (code) {
  console.log(code);
});

// 配列問題(要素の削除)
// 変数carsの配列末尾の要素(スバル)を削除してください。
// 削除後、for文を使い、結果をコンソールに表示してください。
var cars = ['トヨタ', ['プリウス', 'クラウン', 'アクア'], 'ニッサン', 'ホンダ'];
cars.push('スバル');
cars.forEach(function (code) {
  console.log(code);
});
cars.pop();
cars.forEach(function (code) {
  console.log(code);
});

// 配列問題(indexof)
// indexOfメソッドを使い、変数carsに「ダイハツ」という要素が存在する場合は「ダイハツはあります。」、存在しない場合は「ダイハツはありません。」というメッセージをコンソールに表示してください。
var cars = ['トヨタ', ['プリウス', 'クラウン', 'アクア'], 'ニッサン', 'ホンダ'];
if (cars.indexOf('ダイハツ') >= 0) {
  console.log('ダイハツはあります。');
}
if (cars.indexOf('ダイハツ') == -1) {
  console.log('ダイハツはありません。');
}


// オブジェクト問題
// 変数dogを宣言し、オブジェクトを作成しましょう。以下の名前と値を代入してください。
// 名前:type 値:Bulldog
// 名前:length 値:80
var dog = new Object();
dog.type = 'Bulldog';
dog.length = 80;
console.log(dog);

// オブジェクト問題
// 変数dogの名前「type」の値をコンソールに表示してください。
var dog = new Object();
dog.type = 'Bulldog';
dog.length = 80;
console.log(dog.type);

// オブジェクト問題(値の更新)
// 変数dogのlengthの値を90に更新してください。
// 更新後、結果をコンソールに表示してください。
var dog = new Object;
dog.type = 'Bulldog';
dog.length = 80;
dog.length = 90;
console.log(dog.length);



// オブジェクト問題(プロパティの追加)
// 変数dogにプロパティ(名前:bark、値：Bow!!)を追加してください。
// 追加後、結果をコンソールに表示してください。
var dog = new Object;
dog.type = 'Bulldog';
dog.length = 80;
dog.length = 90;
dog.bark = 'Bow!!';
console.log(dog);

// オブジェクト問題(for..in文)
// 変数dogをfor..in文を使い、下の結果と同じなるように名前と値をコンソールに全て表示してください。
// ↓表示される結果
// type:Bulldog
// length:90
// bark:Bow!!
var dog = new Object;
dog.type = 'Bulldog';
dog.length = 80;
dog.length = 90;
dog.bark = 'Bow!!';
for (var code in dog){
  console.log(code+":"+dog[code]);
}


// オブジェクト問題(プロパティの削除)
// 変数dogのtypeプロパティを削除しましょう。
// 結果をfor..in文を使いコンソールに表示し、プロパティが削除されたことを確認してください。
var dog = new Object;
dog.type = 'Bulldog';
dog.length = 80;
dog.length = 90;
dog.bark = 'Bow!!';
delete dog.type;
for (var code in dog){
  console.log(code+":"+dog[code]);
}


// 関数問題
// 関数messageを定義し、関数内にコンソールを表示する処理を記載してください。その後、関数messageを実行してください。
function message(){
  console.log('コンソール')
}
message();

// 関数問題(引数)
// 関数plusCalcを定義し、足し算の結果をコンソールに表示してください。また引数は2つ取り、返り値は使わないものとする。その後、関数pulsCalcを実行してください。
function plusCalc(a,b){
  console.log(a+b)
}
plusCalc(9,22);

// 関数問題(返り値)
// 関数multipliedCalcを定義し、掛け算の結果を返り値とする関数を作成してください。引数は2つ取るものとする。
function multipliedCalc(a,b){
 return a*b;
}
console.log(multipliedCalc(9,5));


// 関数問題(オブジェクト)
// 以下の変数humanにメッセージを表示するmesメソッドを追加し、メソッドを実行してください。
// コンソールに表示する結果は以下となること。
// 私の名前はJimです
var human = {
  name: 'Jim',
  weight: 180,
  message:function(){
    console.log('私の名前は'+this.name+'です');
  }
};
human.message();
// 関数問題(ローカル変数、グローバル変数)
// 以下の変数fruitの出力結果が異なる理由を記載してください。
// 理由：console.log(fruit)については最初に宣言している変数について表示している、console.log(getFruitName());については関数にて宣言している変数が表示される。

var fruit = 'りんご';

function getFruitName() {
  var fruit = 'バナナ';
  return fruit;
}

console.log(getFruitName()); // バナナ
console.log(fruit); // りんご

// 関数問題(ローカル変数、グローバル変数)
// 以下の変数countryの出力結果が同じとなる理由を記載してください。
// 理由：　country = '日本';については変数として宣言されておらず出力結果が同じになっており、出力結果として関数として宣言しているものが出力結果となる。
country = '日本';

function getCountryName() {
  country = 'アメリカ';
  return country;
}

console.log(getCountryName()); // アメリカ
console.log(country); // アメリカ

// 関数問題(即時関数)
// 以下の記述を即時関数で囲んでください。またES2015以前の環境では即時関数を使ったほうが良い理由を記載してください。
// 理由ほかの変数に影響が出ないようにするため
(function (){
var shop = 'コンビニ';
console.log(shop);}());

// 関数問題(無名関数)
// 以下の関数を無名関数に書き換えて実行してください。
var greet =function(name){
  return name;
}
console.log(greet('Jim'));
