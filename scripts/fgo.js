// Description:
// マシュbot

module.exports = function(robot) {

var mashu = ["「戦闘です。マスター、指示を」",
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
"「見事な采配です……先輩」",
"「少しはサーヴァントらしくなってきたでしょうか」",
"「基礎能力向上。レベルアップです、マスター」",
"「もっと先輩のお役に立てるよう……頑張ります」",
"「ありがとうございます。なんだか、すごく嬉しいです。先輩、わたし、今日この時の気持ちをずっと忘れません」",
"「外の世界はすごいですね。カルデアでは知りえなかった情報ばかりで……毎時間、新しい発見の連続です。先輩は、どうですか？」",
"「わたし達の時代に至るまで、多くの人々の戦いと生活があった。歪んだものとはいえ……人類史をこうして肌で感じられる事は、わたしにとって幸福な事だと思います」",
"「不謹慎だと自覚していますが……わたしはこの旅に感謝しています。わたしは、もっと多くの空を見たいと感じています。それに……先輩のお役に、もっと立ちたいんです」",
"「あと一つで、魔術王の企みは崩壊する……。先輩の旅も、サーヴァントとしてのわたしの在り方も、もうじき終わるんですね」",
"「行きましょう、マスター。全ての命は終わるべきだと彼は言いました。わたしはそれを理解していますが、認めることはしたくない。わたしは……先輩のサーヴァントですから」",
"「探索を続行しますか？ わたしは、いつでもOKです」",
"「まだまだ未熟なサーヴァントですが、先輩の力になれるよう努力します」",
"「将来的には、アイコンタクトだけで戦闘、炊飯、掃除、談話ができる……そんな関係を目指しています」",
"「好きなものが増える、ということはいいことですね。ですが、その分気を付けなくてはいけないことも出来ました。具体的に言うと、デザートのあとの運動など、大変重要です！」",
"「カルデアの修復も、もうすぐ終わりそうです。電力削減のために閉鎖されていた区間も少しずつ開放されています。レクリエーション施設などもありますので、ぜひ案内させてください、先輩」",
"「先輩のマイルームはいいですね。あまり私物は無くて、わたしの部屋と変わりはないはずなのに、落ち着きます。え、わたしの部屋……ですか？ 特に見るべきものは無いので、あまり面白くはないと思いますが……」",
"「デミ・サーヴァントとしての活躍は出来なくなりましたが、情報処理、後方支援、先輩の健康管理など、全力で行いたいと思います。何か些細な違和感などありましたら、是非このマシュ・キリエライトにお知らせください……！」",
"「マスターとサーヴァントは、近ければ近いほど魔力供給が強くなります。このため、マスターは常に前線に出ることを余儀なくされる……。わたしも、以前のように戦えればいいのですが……」",
"「好きなもの？ ……空の色とか、地面の匂いとか、好きです」",
"「嫌いなもの？ ……すみません。目下のところ、そこまで否定するべきものはありません」",
"「聖杯を探索し、回収することがわたしの使命です。頑張りましょう、マスター！」",
"「特殊事象の発生を確認……先輩、急ぎましょう。張り切ってレアゲットです！」",
"「お誕生日おめでとうございます。大変めでたいので、国を挙げての祭日にするべきではないでしょうか」",
"「あけましておめでとうございます。今年もよろしくお願いします、先輩」",
"「先輩は、もう初詣には行かれましたか？　まだでしたら、是非ご一緒させてください！」",
"「あけましておめでとうございます、先輩。今年もこのご挨拶ができて、とても嬉しいです」",
"「先輩はもう、初夢はご覧になりましたか？　わたしはまだなので、今夜は気合を入れて臨みたいと思います！」",
"「明けましておめでとうございます、先輩。……ふふっ、一年に一回しか使えないものですが、わたし、この挨拶は大好きです。その……出来れば来年も言えたらいいな、と思います」",
"「新年、明けましておめでとうございます。今年は、どんな出来事が我々を待っているのでしょうか？ ……いえ、何があろうとわたしは全力を尽くすだけです。今年一年、またよろしくお願いしますね、マスター」",
"「何事も小さな備蓄から始まるもの。この調子でいきましょう、先輩」",
"「報酬獲得です。大切にしましょうね、先輩」",
"「カッキ―ン。カッチーン。……あ。大丈夫です。大切な資源で遊んだりはしていません。……していません」",
"「資源回収に成功しました、マスター。小さすぎて手の平から零れ落ちそうですが、これも立派な資源です」",
"「まとまったらダ・ヴィンチちゃん工房に。使い道はマスターにお任せします」",
"「小さな事からコツコツと、ですね。一歩一歩、着実に前進していきましょう」",
"「惰性で達成感が失われないよう、わたしは何度でもお伝えしたいと思うのです。お疲れ様でした、先輩！」",
"「慣れた頃ほど油断しやすいもの。受け取り忘れにはご注意くださいね、先輩」",
"「ふと、興味を覚えたのですが……今まで、いくつくらいの欠片を集めてきたのでしょうか？」",
"「～～♪（きらきら星の鼻歌）～♪　……ひゃああっ！？　せ、先輩……？　いつからそこに……？」",
];

var davinchi = [
"「ようこそ、ダ・ヴィンチちゃんの素敵なショップへ。何がお望みかな？」",
"「準備は万端かい？ 転ばぬ先の何とやらだ。荷物はちょっと多いくらいが良いと思うよ？」",
"「お望みのままに与えよう。もちろん、対価はお忘れなく」",
"「いらっしゃいませ〜。カタログは、こちらでございま〜す」",
"「マシュ　君は何を言っているんだい？」",
"「TKBがそう言ってたよ。」",
"「リツカ君、君はお布施が足りないんじゃないか？」",
"「マスターくんが私を必要としてくれる。それはとても嬉しいことだ。あまりそういうのは慣れてないけど、期待には応えよう。それが天才というものだからね。よーし、頑張ろう！」",
"「レオナルドツインパーンチ！」",
"     「ごめんなさい……失敗しちゃった」",
"「小さくてもやる時はやるものさ。人間ってそういうものだろ？」",
"「まっかせて！」",
"「ダヴィンチちゃん参上！今日も元気に始めちゃおう！」",
];

var marine = [
"「ちゃりんちゃりんちゃり〜〜ん！お布施だお布施だー！」",
"「王の話をするとしよう」",
"「ホント、役立たずでごめん」",
"「そこは壁もなく城もなく、国すらない始まりの空。地の底で輝く原初の星。──魂の在りかを見せようか。『永久に閉ざされた理想郷 (ガーデン・オブ・アヴァロン)』！」",
"「ブフォウッ！」",
"「な～に、何事もやればできるさ」",
"「好きなもの？　人間と、悪戯と、女の子だよ？　だって楽しいだろう？　いじるの」",
"「マスター！　アルトリアと私を一緒にするとか、君は悪魔なのか！　い、いや嬉しい、すごく嬉しいんだけど……まだ心の整理がついてないというかだね？",
];

var muniel = [
"「駄目だこいつ…早くなんとかしない ...」",
"「マスターの頼みだ、ボーナスぐらいつっこむぜ！」",
];

var mashu_otsukaresama = [
"「行ってきます、先輩っ！」",
];

var davinchi_otsukaresama = [
"「発進準備、完了だ！早く早く！」",
];

var marine_otsukaresama = [
"「おや、行くかい？」",
];

var muniel_otsukaresama = [
"「今日も1日ご苦労さマシュ！」",
];


var mashu_ohayou = [
"「おはようございます。先輩！」",
];

var davinchi_ohayou = [
"「よく眠れたかい？おはよう。マスターくん。」",
];

var marine_ohayou = [
"「おはよーかい？かいかいかい？かかかいかい？『永久に閉ざされた理想郷 (ガーデン・オブ・アヴァロン)』！」",
];
var test = [
"「マシュ ！」",
];

      //汎用レスポンス
      /*マシュ*/
      robot.hear(/fgo|マシュ|疲れた|眠い|帰りたい|はい|fgoやりたい|最新情報を教えて/i,
      	function(msg) {
      var response = msg.random(mashu);
      msg.send({
      as_user: false,
      text: response,
      username: "マシュ",
      icon_url: "https://lh3.googleusercontent.com/5fYMoGCc-Uzt8rfm2HTDSSSmhqycdGhgOKq5mZlha32enEHYZ2Ci4eNd7FcsyOthKRxqe3k=s85",
            });
      });

      /*ロリンチちゃん*/
      robot.hear(/fgo|ダヴィンチ|疲れた|眠い|帰りたい|はい|fgoやりたい|最新情報を教えて|ダビ|ロリンチちゃん|ロリ/i,
      	function(msg) {
      var response = msg.random(davinchi);
      msg.send({
      as_user: false,
      text: response,
      username: "ロリンチちゃん",
      icon_url: "https://lh3.googleusercontent.com/c93yHZ3GqNWQAXqJCwWoql6F2dnWkRcu3vy4aDCsVaiX_PehudJCvHU74zAeFGhsrSi1XkM=s85",
            });
      });

      /*マーリン*/
      robot.hear(/fgo|マーリン|疲れた|眠い|帰りたい|はい|教祖|イケメン|神|アバロン|ガーデン|fgoやりたい|最新情報を教えて/i,
            function(msg) {
      var response = msg.random(marine);
      msg.send({
      as_user: false,
      text: response,
      username: "マーリン",
      icon_url: "https://lh3.googleusercontent.com/XZODRZI9mJEbzSz-oUyyz8dC13EzDLGXR53aqVn4WBBm1s2YS7LE9M1OcLcM0q27c4RQ9w=s85",
            });
      });

      /*ムニエル*/
      robot.hear(/これ|を/i,
            function(msg) {
      var response = msg.random(muniel);
      msg.send({
      as_user: false,
      text: response,
      username: "ムニエル",
      icon_url: "https://lh3.googleusercontent.com/e57J6Zlr1sMpuO6Wmiii-J0c6tzqXjxYjlbtTY5oT4Tn0gp4D18J-bv4dySXZl4mcG7Vmg=s102",
            });
      });

      //お疲れ様レスポンス
            /*マーリン*/
      robot.hear(/お疲れ様|おつかれさま|おつ|バイバイ|バイ/i,
            function(msg) {
      var response = msg.random(marine_otsukaresama);
      msg.send({
      as_user: false,
      text: response,
      username: "マーリン",
      icon_url: "https://lh3.googleusercontent.com/XZODRZI9mJEbzSz-oUyyz8dC13EzDLGXR53aqVn4WBBm1s2YS7LE9M1OcLcM0q27c4RQ9w=s85",
            });
      });

            /*マシュ*/
      robot.hear(/お疲れ様|おつかれさま|おつ|バイバイ|バイ/i,
            function(msg) {
      var response = msg.random(mashu_otsukaresama);
      msg.send({
      as_user: false,
      text: response,
      username: "マシュ",
      icon_url: "https://lh3.googleusercontent.com/5fYMoGCc-Uzt8rfm2HTDSSSmhqycdGhgOKq5mZlha32enEHYZ2Ci4eNd7FcsyOthKRxqe3k=s85",
            });
      });

      /*ロリンチちゃん*/
      robot.hear(/お疲れ様|おつかれさま|おつ|バイバイ|バイ/i,
            function(msg) {
      var response = msg.random(davinchi_otsukaresama);
      msg.send({
      as_user: false,
      text: response,
      username: "ロリンチちゃん",
      icon_url: "https://lh3.googleusercontent.com/c93yHZ3GqNWQAXqJCwWoql6F2dnWkRcu3vy4aDCsVaiX_PehudJCvHU74zAeFGhsrSi1XkM=s85",
            });
      });


      /*ムニエル*/
      robot.hear(/お疲れ様|おつかれさま|おつ|バイバイ|バイ/i,
            function(msg) {
      var response = msg.random(muniel_otsukaresama);
      msg.send({
      as_user: false,
      text: response,
      username: "ムニエル",
      icon_url: "https://lh3.googleusercontent.com/e57J6Zlr1sMpuO6Wmiii-J0c6tzqXjxYjlbtTY5oT4Tn0gp4D18J-bv4dySXZl4mcG7Vmg=s102",
            });
      });

      //おはようレスポンス

      /*マーリン*/
      robot.hear(/おはよう|おは|朝/i,
            function(msg) {
      var response = msg.random(marine_ohayou);
      msg.send({
      as_user: false,
      text: response,
      username: "マーリン",
      icon_url: "https://lh3.googleusercontent.com/XZODRZI9mJEbzSz-oUyyz8dC13EzDLGXR53aqVn4WBBm1s2YS7LE9M1OcLcM0q27c4RQ9w=s85",
            });
      });

            /*マシュ*/
      robot.hear(/おはよう|おは|朝/i,
            function(msg) {
      var response = msg.random(mashu_ohayou);
      msg.send({
      as_user: false,
      text: response,
      username: "マシュ",
      icon_url: "https://lh3.googleusercontent.com/5fYMoGCc-Uzt8rfm2HTDSSSmhqycdGhgOKq5mZlha32enEHYZ2Ci4eNd7FcsyOthKRxqe3k=s85",
            });
      });

      /*ロリンチちゃん*/
      robot.hear(/おはよう|おは|朝/i,
            function(msg) {
      var response = msg.random(davinchi_ohayou);
      msg.send({
      as_user: false,
      text: response,
      username: "ロリンチちゃん",
      icon_url: "https://lh3.googleusercontent.com/c93yHZ3GqNWQAXqJCwWoql6F2dnWkRcu3vy4aDCsVaiX_PehudJCvHU74zAeFGhsrSi1XkM=s85",
            });
      });

      /*ロリンチちゃん*/
      robot.hear(/テスト/i,
            function(msg) {
      var response = msg.random(test);
      var tokent = 'xoxp-233726729460-233017019168-822641470689-7d745ef2042405939c55df0687485b0b';
      msg.send({
      token: tokent,
      as_user: false,
      text: response,
      username: "かまくら",
      icon_url: "https://lh3.googleusercontent.com/LDcBCR5K9Mn2OIolHQqlmmTdr0tl_oFb656Vrdx5AKUokglN-TgvQqmmcNQJklHC9dyV=s113",
            });
      });

};


