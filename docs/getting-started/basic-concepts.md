---
sidebar_position: 3
---

# 基本概念

KawaiiPhysicsの仕組みを理解しましょう。

## アーキテクチャ

KawaiiPhysicsはPhysXを使用せず、独自の軽量アルゴリズムでボーン物理を実現します。

```
Animation Pose → KawaiiPhysics Node → Modified Pose
                       ↑
              Physics Simulation
              (独自アルゴリズム)
```

## ボーンチェーン

KawaiiPhysicsは **Root Bone** から始まるボーンチェーン全体に物理を適用します。

```
head (Root Bone)
├── hair_01
│   ├── hair_02
│   └── hair_03  ← 物理が適用される範囲
└── ponytail_01
    └── ponytail_02
```

### Exclude Bones

特定のボーンを物理計算から除外できます。

## 物理パラメータ

### Damping（減衰）

ボーンの動きを徐々に収束させます。値が大きいほど早く止まります。

![Damping値の比較](/img/generated/damping-comparison.svg)

*※自動生成された概念図です。実際の動作はパラメータや環境により異なります。*

### Stiffness（剛性）

元のアニメーションポーズに戻ろうとする力です。値が大きいほど硬くなります。

### Radius（半径）

各ボーンの物理的なサイズを定義します。コリジョン判定に使用されます。

## コリジョンシステム

KawaiiPhysicsは3種類のコリジョンをサポートします：

| 種類 | 用途 |
|-----|------|
| Sphere | 球体（頭、肩など） |
| Capsule | カプセル（腕、脚など） |
| Plane | 平面（地面、壁など） |

## カーブによる制御

ボーンチェーンに沿ってパラメータを変化させることができます。

```
根元 ←――――――――――――→ 先端
  硬い              柔らかい
```

詳しくは [カーブエディタ](/docs/features/curve-editor) を参照してください。
