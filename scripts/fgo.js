// Description:
// マシュbot

module.exports = function(robot) {

var gobi = ["「戦闘です。マスター、指示を」",
"「武装完了……行きます先輩！」",
"「ステータスアップ……頑張ります」",
"「最大火力、発揮します」",
"「シールドエフェクト、発揮します」",
"「はい」",
"「了解です」",
"「行きます」",
"「真名、偽装登録――行けます」",
"「はっ！」",
"「ふっ！」",
"「やあっ！」",
"「これで、倒れて！」",
"「宝具、展開します……！」",
"「うああ！」",
"「うっ！」",
"「ごめん……なさい……」",
"「だめ……まだ、戦わなく、ちゃ……」",
"「戦闘終了。何とかなりましたね」",
"「見事な采配です……先輩」"];

      robot.respond(/fgo/i, function(msg) {

            var response = msg.random(gobi);
            msg.send({
      as_user: false,
      text: response,
      username: "マシュ",
      icon_url: "https://www.google.co.jp/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwijgI3S-LrgAhUIabwKHZONCPMQjRx6BAgBEAU&url=http%3A%2F%2Fstartcos.com%2Fcharacter%2Ffgo-matthew%2F&psig=AOvVaw3lWd-H8p1REfnRjauL2DSq&ust=1550224016055973",
            });
      });
};


