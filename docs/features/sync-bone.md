---
sidebar_position: 6
---

# Sync Bone

:::tip バージョン情報
v1.20.0で追加
:::

Sync Bone機能は、物理制御下のボーンに対して、指定したボーンの移動・回転を適用する機能です。スカートが足を貫通するのを防ぐのに効果的です。

## 概要

従来、スカートなどの貫通対策にはコリジョンを使用していましたが、複雑な形状や動きに対応するのが難しい場合がありました。Sync Bone機能を使用すると、コリジョンを使わずに足などのボーンの動きを物理ボーンに反映させることができます。

![Sync Boneデモ](/img/features/syncbone-demo.gif)

## 仕組み

```
足のボーン（同期元）
    ↓ 位置・回転を取得
[Sync Bone処理]
    ↓ 物理ボーンに反映
スカートのボーン（物理制御下）
```

同期元のボーンが移動・回転すると、その動きが物理ボーンに反映され、貫通を防ぎます。

## 設定方法

1. KawaiiPhysicsノードを選択
2. **Sync Bones** 配列に要素を追加
3. 以下のプロパティを設定:

### FKawaiiPhysicsSyncBone

| プロパティ | 型 | 説明 |
|-----------|-----|------|
| SyncSourceBone | FBoneReference | 同期元のボーン（例: 足のボーン） |
| SyncTargetBones | TArray\<FBoneReference\> | 同期先のボーン（例: スカートのボーン） |
| SyncRatio | float | 同期の影響度（0.0〜1.0） |

## 使用例

### スカートの足貫通対策

```
足のボーン
├── thigh_l （同期元）
├── thigh_r （同期元）
└── ...

スカートのボーン
├── skirt_front_01 （同期先）
├── skirt_front_02 （同期先）
├── skirt_back_01  （同期先）
└── ...
```

足のボーンを同期元に、近くのスカートボーンを同期先に設定します。

### 設定例

```cpp
// Sync Bonesの設定例
SyncBones:
  - SyncSourceBone: thigh_l
    SyncTargetBones: [skirt_front_l_01, skirt_side_l_01]
    SyncRatio: 0.5
  - SyncSourceBone: thigh_r
    SyncTargetBones: [skirt_front_r_01, skirt_side_r_01]
    SyncRatio: 0.5
```

## Collisionとの組み合わせ

Sync Bone機能とCollisionを組み合わせることで、より確実な貫通防止が可能です。

![SyncBone + Collision比較](/img/features/syncbone-collision-compare.gif)

*SyncBoneとCollisionの組み合わせによる貫通防止効果*

## BoneConstraintとの組み合わせ

Sync Bone機能とBoneConstraint機能を組み合わせることで、より自然なスカート表現が可能です。

![SyncBone + BoneConstraint + Collision](/img/features/syncbone-full-demo.gif)

*SyncBone、BoneConstraint、Collisionを組み合わせた完全なデモ*

- **Sync Bone**: 足との貫通を防止
- **BoneConstraint**: スカートのボーン間の距離を維持

```
[BoneConstraint] ← ボーン間の距離を維持
       ↓
スカートのボーン
       ↑
   [Sync Bone] ← 足の動きを反映
```

## 注意点

:::warning
- Sync Ratioが高すぎると、物理の動きが不自然になる場合があります
- まずは低い値（0.3〜0.5）から調整してください
:::

## コリジョンとの比較

| 方式 | メリット | デメリット |
|-----|---------|----------|
| コリジョン | 物理的に正確 | 設定が複雑、計算コスト高 |
| Sync Bone | 軽量、設定が簡単 | 物理的な正確性は低い |

多くの場合、Sync Boneとコリジョンを併用することで最良の結果が得られます。

## 関連ページ

- [コリジョン設定](/docs/features/collision-setup)
- [Limitsパラメータ](/docs/parameters/limits)
- [Data Assets](/docs/features/data-assets)
