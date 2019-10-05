// 問題の答え
// 問題1：アメリカ合衆国
// 問題2：鳥取県
// 問題3：長野県

document.getElementById("answer").onclick = function () {
  var radio1 = document.getElementsByName("question1");
  var radio2 = document.getElementsByName("question2");
  var radio3 = document.getElementsByName("question3");
  var answer_num = 0;
  for (let i = 0; i < radio1.length; i++)
  //上記の処理でvalueの値のチェックしている項目をチェックする
  {
    if (radio1[i].checked)
    //上記の処理にてradio1がしっかりとチェックされているか確認する
    {
      if (radio1[i].value == 2)
      //上記の処理にて答えアメリカ合衆国のvalueの値が2になっているかいないかを確認する
      {
        answer_num = ++answer_num;
//上記の処理にて選択されている値が正解であればanswer_numに1追加する
      }
    }
  }
  for (let i = 0; i < radio2.length; i++) {
    if (radio2[i].checked) {
      if (radio2[i].value == 3) {
        answer_num = ++answer_num;
      }
    }
  }
  for (let i = 0; i < radio3.length; i++) {
    if (radio3[1].checked) {
      if (radio3[i].value == 2)
        answer_num = ++answer_num;
    }
  } alert("正解率は" + Math.floor(answer_num / 3 * 100) + "%でした");
}
