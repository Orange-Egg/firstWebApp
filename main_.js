//JavaScript
//「ほめてもらう」ボタンを押したときの動作
const resultMsg = () => {
    //ほめるメッセージの配列msgsを用意する
    var msgs = [
        "今日も笑顔がステキですね！",
        "今日の服装コーディネート、洗練されていて決まってますね。",
        "いつも真面目で尊敬します。",
        "毎日あいさつしてくださって、とてもうれしいです！",
        "一生懸命取り組む姿にあこがれています。",
        "どうしてそんなにイケイケなんですか！？いやあ～シビれますね。",
        "こんな私なんかに時々コーヒーをおごってくれてありがとうございます。",
        "そういえば今日の星座占い第1位でしたよ～！きっといいことありそうですね。",
        "この前のプレゼン、凄すぎて鳥肌が立ちましたよ！どんだけ頭の回転が早いんですかwww",
        "余裕のある大人って感じで、いい歳の取り方してるんだろうなと憧れています。"
    ];

    //メッセージを配列から選び、textareaに表示
    document.getElementById("message").value = msgs[Math.floor(Math.random()*msgs.length)];
    
    //ユーザ名を表示
    var username = document.getElementById("username").value;
    username = username + " さん、";
    document.getElementById("output_username").innerHTML = username;

    //「今日もがんばろう」メッセージを表示 (block=表示)
    const hidden = document.getElementById("hidden");  
    hidden.style.display = "block";
}

//「リセットする」ボタンを押したときの動作
const resetMsg = () => {    
    document.form1.reset();
    output_username.style.display = "none";
    hidden.style.display = "none";    
}