// import "./styles.css";

// console.log("aaaaa");

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// let = val2 ="let変数を再宣言";

// //constで定義したオブジェクトはプロパティの変更が可能

// const val4 = {
//   name: "suguru",
//   age: 30,
// };
// console.log(val4);

// val4.name ="卓";
// val4.address ="兵庫"
// console.log(val4);

// //constで定義した配列はプロパティの変更が可能
// const val5 =['dog', 'cat'];

// val5[0] = 'bird'
// val5.push("monky")
// console.log(val5)

/**
 * テンプレート文字列
 */

//  const name = "suguru";
//  const age = 30;

//  //私の名前はすぐるです。年齢は30歳です。

//  //従来の方法
//  const message1 = "私の名前は" + name + "です。年齢は" +age+ "歳です。;"
//  console.log(message1)

//  //テンプレート文字列を用いた方法　　　　　⇦こちらを使用する
//  const message2 = `私の名前は${name}です。年齢は${age}歳です！`;
//  console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function funk1(str){
//   return str;
// // }
// const funk1 = funktion(str) {
//   return str;
// }

// console.log(funk1("funk1です"));

//アロー関数

// const funk2 = (str) => str

// console.log(funk2("funkだよ"));

// const funk3 = (num1, num2) => {
//   return num1 + num2;
// }

// console.log(funk3(10, 20));

/**
 * 分割代入
 */
// const myprofile = {
//   name: "suguru",
//   age: 30
// }
// const message1 = `私の名前は${myprofile.name}です。年齢は${myprofile.age}です`;
// console.log(message1);

// const{ name, age } = myprofile;
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message1);

//配列の代入
// const myprofile = ["suguru", 30 ];
// const message3 = `私の名前は${myprofile[0]}です。${myprofile[1]}歳です`;
// console.log(message3);

// const[name, age] = myprofile
// const message4 =`私の名前は${name}です。${age}歳でっせ`;
// console.log(message4);

/**
 * デフォルト値、引数など
//  */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);

// sayHello("s");
// sayHello();

/**
 * スプレッド構文 「...」
 */
//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1)

// const sumFunk = (num1, num2) => console.log(num1 + num2);
// // sumFunk(arr1[0], arr1[1]);
// sumFunk(...arr1)  //====>下記のコピーと仕組みは同じ

// const array1 = ['a','b','c']
// console.log(...array1)

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;

// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // //配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6)
// console.log(arr4 === arr6) //false　になる！値は同じだけど全く同じではない　参照を受け継がない！
// arr6[0] = 33;
// console.log(arr6); //[33, 20] arr6の値は変更されるが
// console.log(arr4); //[10, 20] arr4の値は変更されない！！

// const arr7 =[...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;　//= でコピーすると
// console.log(arr8); //[10, 20]
// arr8[0] = 100;
// console.log(arr8); //[100, 20]
// console.log(arr4); //[100, 20] arr4も変更してしまうので、=でのコピーはふさわしくない

/**
 * mapやfilterを使った配列の処理
 */

const nameArr = ["仁志", "清水", "高橋", "松井"];
//forを使って
// for(let index = 0;
//       index < nameArr.length;
//       index++
//       )
//       console.log(`${index + 1}番目は${nameArr[index]}です`);

//mapを使って
// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2)

//indexを使用する時は第2引数にindexを設置する
// nameArr.map((name, index) => console.log(`${index + 1 }番目は${name}です`));

//filterを使って
// const numArr1 = [1, 2, 3, 4, 5]
// const newNumArr = numArr1.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(newNumArr);

//自分以外には「さん」をつける
// const newNameArr = nameArr.map((name) => {
//   if (name === "松井") {
//      return name
//   } else {
//      return `${name}さん`
//   }
// });

// console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件　？　 条件がTRUEとき　：　条件がFALSEのとき
// const num1 = 3 < 0 ? "trueです" : "falseです";
// // console.log(num1)
// const num = "1300";

// const formattedNum = typeof num === 'number' ? num : "数値を入れてください";
// console.log(formattedNum);

//関数を返すreturnの中でも三項演算子が使える
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です';
// }
// console.log(checkSum(120, 90))

/**
 * 論理演算子の本当の意味を知ろう
 */
// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1又は2はtrueになります")
// }

// if (flag1 && flag2) {
//   console.log("1も2もtrueになります")
// }

// ||は　左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// // &&は　左側がtrueなら右側を返す
// const num2 = 40;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
