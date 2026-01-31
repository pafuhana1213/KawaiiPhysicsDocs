---
sidebar_position: 2
---

# クイックスタート

5分でKawaiiPhysicsを使い始めましょう。

## 前提条件

- KawaiiPhysicsがインストール済み
- Skeletal Meshを持つキャラクター
- Animation Blueprint

## 基本的なセットアップ

### Step 1: Animation Blueprintを開く

物理を適用したいキャラクターのAnimation Blueprintを開きます。

### Step 2: KawaiiPhysicsノードを追加

AnimGraphで右クリックし、**Kawaii Physics** ノードを追加します。

<!-- IMAGE_NEEDED: quickstart-add-node.png
     内容: KawaiiPhysicsノード追加の手順
     撮影場所: Animation Blueprint > AnimGraph
     要件:
     - 追加されたKawaiiPhysicsノードがAnimGraphに表示されている
     - ノードの入出力ピンが見える状態
     - Output Poseノードに接続された状態が望ましい
     - 解像度: 800x500px以上
-->

### Step 3: Root Boneを設定

1. KawaiiPhysicsノードを選択
2. **Root Bone** に物理を適用したいボーンチェーンの**親ボーン**を設定

:::tip
例えば髪の毛を揺らしたい場合、髪の根元のボーン（head等）をRoot Boneに設定します。
:::

### Step 4: パラメータ調整

基本的なパラメータ:

| パラメータ | 説明 | 推奨値 |
|-----------|------|--------|
| Damping | 減衰（動きの収束速度） | 0.1 - 0.3 |
| Stiffness | 剛性（元の形への復元力） | 0.05 - 0.2 |
| World Damping Location | ワールド座標での位置減衰 | 0.5 - 0.8 |

### Step 5: プレビュー

Animation Blueprintのプレビューウィンドウでキャラクターを動かし、物理の動作を確認します。

<!-- VIDEO_NEEDED: quickstart-preview.mp4 (またはGIF)
     内容: 基本セットアップ後のプレビュー動画
     撮影場所: Animation Blueprint プレビューウィンドウ
     要件:
     - Root Boneを設定した直後の状態
     - プレビューウィンドウでキャラクターを動かし、ボーンが揺れる様子
     - 髪や尻尾など、分かりやすい部位で実演
     - 長さ: 5-10秒
     - 解像度: 1280x720px以上
     - フォーマット: MP4 (H.264) または高画質GIF
-->

## 次のステップ

- [基本概念](/docs/getting-started/basic-concepts) - 仕組みを理解する
- [パラメータリファレンス](/docs/parameters/overview) - 詳細なパラメータ設定
- [コリジョン設定](/docs/features/collision-setup) - 体との貫通を防ぐ
