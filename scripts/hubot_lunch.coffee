# Description:
# 今日、どんなランチが良いか迷ってる時に教えてくれる
#
# Commands:
# hubot 今日のランチ - 今日の気分に合ったランチを教えてくれる

module.exports = (robot) ->
 robot.respond /今日の昼ごはん|今日のランチ|今日の昼飯|今日の昼ご飯|今日の昼御飯/i, (msg) ->
  msg.send msg.random [
        "今日は中華ですね。",
        "今日はラーメンの気分です。",
        "今日はイタリアンですね。",
        "今日はフレンチなんかどうでしょう。",
        "今日はやっぱり定食が良いですね。",
        "今日は天やが良いですね。",
        "今日はタイ料理日和です。",
        "今日は日本食が良いかもしれませんよ。",
        "今日はファーストフードなんかいかがでしょう。",
        "今日はランチビールを飲める店が良いですね",
        "今日はカレーが美味しい陽気です。",
        "今日はピザでも食べたら如何かしら？",
        "とりあえず、腹にたまるものが良いですね。",
        "今日は絶食しましょう。"
  ]