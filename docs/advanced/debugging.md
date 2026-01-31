---
sidebar_position: 2
---

# デバッグ

KawaiiPhysicsの問題を調査・解決する方法を説明します。

## デバッグ表示

### コリジョンの可視化

エディタ上でコリジョン形状を表示できます。

<!-- IMAGE_NEEDED: debug-collision-display.png
     内容: コリジョンデバッグ表示のスクリーンショット
     撮影場所: Animation Blueprint プレビューまたはゲーム実行中
     要件:
     - デバッグ表示が有効化された状態
     - 球体/カプセル/平面コリジョンがワイヤーフレームで表示
     - ボーンチェーンも可視化されていると尚良い
     - コリジョンの色と形状が識別できる
     - 解像度: 800x600px以上
-->

### ボーンチェーンの確認

物理が適用されているボーンを視覚的に確認できます。

## よくある問題

### ボーンが動かない

**原因1**: Root Boneの設定ミス

- Root Bone自体には物理が適用されない
- 子ボーンが存在するか確認

**原因2**: パラメータが極端

```cpp
// Stiffnessが高すぎる
Stiffness = 1.0f; // ほぼ動かない

// 適切な値
Stiffness = 0.05f;
```

### ボーンが暴れる

**原因**: Dampingが低すぎる

```cpp
// 収束しない
Damping = 0.0f;

// 適切な値
Damping = 0.1f;
```

### 体を貫通する

**原因**: コリジョンが設定されていない、または小さすぎる

- コリジョンのサイズを確認
- Driving Boneが正しいか確認

### パフォーマンス低下

- ボーン数を確認
- コリジョン数を確認
- [パフォーマンス](/docs/advanced/performance) を参照

## コンソールコマンド

```
// KawaiiPhysics統計情報
stat KawaiiPhysics

// アニメーション全般の統計
stat Anim
```

## ログ出力

```cpp
// 詳細ログを有効化
UE_LOG(LogKawaiiPhysics, Verbose, TEXT("Debug info"));
```

## 問題報告

解決しない場合は [GitHub Issues](https://github.com/pafuhana1213/KawaiiPhysics/issues) で報告してください。

報告時に含める情報：
- UEバージョン
- KawaiiPhysicsバージョン
- 再現手順
- スクリーンショット/動画
