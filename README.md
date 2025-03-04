# CelestialZenithAbilityHelper
JsMacroにおいて使用できる、CelestialZenithのアビリティ選択helperです

## 導入方法
1. https://modrinth.com/mod/jsmacros/versions でmodをインストールする
2. このリポジトリのdataフォルダの中のすべてのjsファイルをダウンロードする
3. (マインクラフトのバージョンの階層)/config/jsMacros/Macros にダウンロードしたファイルを移動させる
4. JsMacroの設定を開き、上タブのEventsをクリック -> Runの隣の+をクリック -> Fileにダウンロードした各ファイルを設定する
5. 各ファイルごとのEventsに、TreeSelection.jsはRecvMessage、それ以外はOpenContainerを設定する
![Image](https://github.com/user-attachments/assets/a52348a8-b39b-478b-9745-d6f7d6b15c90)
6. すべてをEnabledに設定する

## 概要
このevent macroはCelesital Zenithでアビリティを選択するときに優先選択するべきアビリティを色でハイライトてくれるものです

アビリティのtier(取る優先順位)を自分の好きなように設定できます

アビリティを選択するときに、取るべきアビリティを黄色でハイライトし、もし選択肢のどのアビリティをとってもブロックされる(ほかの所持treeに取りたいメインアビリティがある)ときは、ピンク色でハイライトされます

取るアビリティの優先順位(tier)は、自分で設定することができます
#### Tier設定ルール
- tierを設定するには、AbilitySelection.js -> 変数treePriorityの"tier"と書かれている部分の数字を変更してください
- 自分のメインツリーごとに異なるtierを設定できます
- メインツリーはコメントで  
&emsp;// Shadow ------  
のようにメインツリー名のコメントで囲まれている部分で確認できます
- tierは以下のように設定してください:  
&emsp;0 : 必ず取りたい  
&emsp;1 : 0のabilityのtreeを所持していなかったら取りたい or 欲しいが必須ではない  
&emsp;2 : 欲しいが必須ではない 1より下ランク  
&emsp;3 : とっても取らなくても影響なし  
&emsp;5 : 取りたくない  
&emsp;10 : スキルツリーのトリガーのスキルが存在しない  
&emsp; **ここで、tierには4を設定しないでください**  
- 同じtierの場合、メインアビリティ(Right,SneakBow,Lifelineなど)のほうがPassiveアビリティより優先されます
(優先順位 : main tier0 > passive tier0 > main tier1 > passive tier1)
- メインツリーにtier0のメインアビリティがある場合は、他のすべてのツリーの対応するトリガーのtierを5にしてもよいですが、他のツリーにtier0のメインアビリティがある場合は、tierを3以上にしてください
