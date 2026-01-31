---
sidebar_position: 1
slug: /
---

# KawaiiPhysics

**KawaiiPhysics** は、Unreal Engine向けの軽量なボーン物理シミュレーションプラグインです。

![KawaiiPhysics Demo](/img/intro-demo.gif)

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/0f-l-SP07Mo"
    title="KawaiiPhysics Demo Video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen>
  </iframe>
</div>

![Comparison Demo](/img/comparison-demo.png)

*物理シミュレーションあり/なしの比較*

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

## 採用実績

KawaiiPhysicsは以下のタイトルで採用されています：

- **Granblue Fantasy Versus Rising** - 格闘ゲーム
- **Stellar Blade** - アクションゲーム

![Dance Demo](/img/dance-demo1.gif)

*実際のゲームでの使用例イメージ*

## リンク

- [GitHub リポジトリ](https://github.com/pafuhana1213/KawaiiPhysics)
- [Fab](https://www.fab.com/ja/listings/f870c07e-0a02-4a78-a888-e52a22794572)
- [GitHub Discussions](https://github.com/pafuhana1213/KawaiiPhysics/discussions)
