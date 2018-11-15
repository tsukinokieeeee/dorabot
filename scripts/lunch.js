// Description:
//   飯決めてくれるbot

module.exports = function(robot) {

      var foodarray = ["チャーハン","ラーメン","サンドイッチ","マクド","定食","魚","唐揚げ","カレー","天丼","焼肉","うどん","そば","パスタ","コンビニ弁当"];
      var gobi = ["食え","、どう？","とかどうすか","でも食っとけ","はいかがでしょうか。","の気分じゃない?","食べたら?"];

      robot.respond(/昼飯|ランチ|昼ご飯|昼ごはん|昼御飯/i, function(msg) {

            var response = msg.random(foodarray) + msg.random(gobi);
            msg.send(response);
      });
};
