---
sidebar_position: 1
slug: /
---

# KawaiiPhysics

**KawaiiPhysics** は、Unreal Engine向けの軽量なボーン物理シミュレーションプラグインです。

<!-- IMAGE_NEEDED: KawaiiPhysicsのデモGIF（髪や尻尾が揺れる様子） -->

## 特徴

- **シンプルなセットアップ**: AnimGraph内で1つのノードを追加するだけ
- **軽量な処理**: PhysXに依存しない独自アルゴリズム
- **豊富なコリジョン**: 球・カプセル・平面のコリジョンをサポート
- **スケルトン保護**: ボーンの伸縮を防ぐ安定した物理演算
- **外部力の適用**: 風、重力、カスタムフォースに対応

## 対応バージョン

| Unreal Engine | KawaiiPhysics |
|--------------|---------------|
| 5.3 - 5.5    | 1.16.x        |
| 5.0 - 5.2    | 1.14.x        |
| 4.27         | 1.11.1        |

## クイックスタート

```cpp
// Animation Blueprintで KawaiiPhysics ノードを追加
// Root Bone を設定し、物理を適用したいボーンチェーンを指定
```

1. Animation Blueprintを開く
2. AnimGraphに **Kawaii Physics** ノードを追加
3. **Root Bone** に揺らしたいボーンの親を設定
4. パラメータを調整してプレビュー

詳しくは [インストール](/docs/getting-started/installation) と [クイックスタート](/docs/getting-started/quick-start) をご覧ください。

## リンク

- [GitHub リポジトリ](https://github.com/pafuhana1213/KawaiiPhysics)
- [UE Marketplace](https://www.unrealengine.com/marketplace/ja/product/kawaiiphysics)
- [GitHub Discussions](https://github.com/pafuhana1213/KawaiiPhysics/discussions)
