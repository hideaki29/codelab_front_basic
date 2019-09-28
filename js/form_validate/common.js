document.getElementById("submit").onclick = function () {
  var name = document.getElementsByName("name");
  var err_name = document.getElementById("err-name");
  var kana = document.getElementsByName("kana");
  var err_kana = document.getElementById("err-kana");
  var tel = document.getElementsByName("tel");
  var err_tel = document.getElementById("err-tel");
  var mit = document.getElementsByName("mail");
  var err_mit = document.getElementById("err-mail");

  if (name[0].value == "") {
    err_name.textContent = "名前が未入力です。";
    return false;
  }

  if (kana[0].value.match(/^[ァ-ヶー　]*$/) != kana[0].value) {
    err_kana.textContent = "全角カナで入力してください。";
    console.log("windows");
    return false;
  }

  if (tel[0].value.match(/^[0-9]+$/) != tel[0].value) {
    err_tel.textContent = "電話番号がハイフンなして入力してください。";
    return false;
  }

  if (mit[0].value.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) != mit[0].value) {
    err_mit.textContent = "メールアドレスの形式ではありません。";
    return false;
  }

  else {
    return true;
  }
}



//  function check(){
//    if (mail_form.mail.value == ""){
//   var mit = document.getElementById("mail");
//        //条件に一致する場合(メールアドレスが空の場合)
//        mit.textContent = "メールアドレスの形式ではありません。";   //エラーメッセージを出力
//        return false;    //送信ボタン本来の動作をキャンセルします
//    }else{
//        //条件に一致しない場合(メールアドレスが入力されている場合)
//        return true;    //送信ボタン本来の動作を実行します
//    }
//  }