# user-scripts
Tampermonkey用のuserscriptです。PC版のMozilla Firefoxで確認してます。



# twitch_audio_channel_switch_button.user.js

* [twitch audio channel switch button](https://github.com/makitaaaaa/user-scripts/raw/master/twitch_audio_channel_switch_button.user.js)

> twitch.tvに音声チャネルをモノラル、左チャネル、右チャネルのみに変更できるボタンを追加します

まだ遭遇したことはないですが、環境によってはボタンを押すと音声が無音になるかもしれません。

原因は配信ソースが別ホストだとWeb Audio APIにCORSが必要なので、その時は配信を再読込して片耳をもいで視聴しましょう。

![Screenshot](https://user-images.githubusercontent.com/34391095/34447603-c7e6bbdc-ed28-11e7-9277-7cc22b4de57d.png)

