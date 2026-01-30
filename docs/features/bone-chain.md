---
sidebar_position: 1
---

# ボーンチェーン設定

KawaiiPhysicsでボーンチェーンを設定する方法を説明します。

## Root Boneの選択

**Root Bone** は物理を適用するボーンチェーンの **親ボーン** を指定します。

:::warning
Root Bone自体には物理が適用されません。その子ボーン以下に物理が適用されます。
:::

<!-- IMAGE_NEEDED: Root Boneの概念図 -->

## 自動検出

KawaiiPhysicsはRoot Boneから自動的に子ボーンを検出し、チェーンを構築します。

```
spine_03 (Root Bone - 物理なし)
├── hair_front_01  ← 物理適用
│   └── hair_front_02  ← 物理適用
└── hair_back_01   ← 物理適用
    └── hair_back_02   ← 物理適用
```

## Exclude Bones

特定のボーンを物理計算から除外できます。

```cpp
UPROPERTY()
TArray<FBoneReference> ExcludeBones;
```

### 使用例

- リボンの結び目など、動かしたくない部分
- 別のKawaiiPhysicsノードで制御したいボーン

## 複数のボーンチェーン

1つのキャラクターに複数のKawaiiPhysicsノードを使用できます。

```
AnimGraph
├── KawaiiPhysics (髪の毛用)
├── KawaiiPhysics (尻尾用)
└── KawaiiPhysics (服用)
```

:::tip
パラメータが異なる部位は、別々のノードで管理すると調整しやすくなります。
:::

## ボーンの長さと半径

各ボーンの長さは自動計算されます。半径は手動で設定するか、カーブで制御します。

詳しくは [カーブエディタ](/docs/features/curve-editor) を参照してください。
