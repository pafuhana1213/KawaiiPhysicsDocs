---
sidebar_position: 5
---

# Data Assets

パラメータを再利用可能なData Assetとして管理する方法を説明します。

## 概要

**KawaiiPhysicsLimitsDataAsset** を使用すると、コリジョン設定や制限パラメータを複数のキャラクターで共有できます。

## Data Assetの作成

1. Content Browserで右クリック
2. **Miscellaneous > Data Asset** を選択
3. **KawaiiPhysicsLimitsDataAsset** を選択
4. 名前を付けて保存

![DataAsset Regex設定](/img/features/dataasset-regex.png)

*DataAssetでの正規表現による骨セット指定*

## パラメータの設定

Data Assetには以下のパラメータを保存できます：

- Spherical Limits
- Capsule Limits
- Planar Limits

## 使用方法

1. KawaiiPhysicsノードの **Limits Data Asset** プロパティを設定
2. Data Assetのパラメータが自動的に読み込まれる

```cpp
UPROPERTY()
UKawaiiPhysicsLimitsDataAsset* LimitsDataAsset;
```

## BoneConstraintの設定

v1.14.0からDataAssetでBoneConstraint（骨間の距離拘束）を設定できるようになりました。

![BoneConstraint Demo](/img/features/boneconstraint-demo.gif)

正規表現を使って拘束対象の骨セットを指定できます：

```
// 例: skirt_01_* と skirt_02_* 間の拘束
Bone1: skirt_01_.*
Bone2: skirt_02_.*
```

## メリット

### 再利用性

同じ体型のキャラクターでコリジョン設定を共有できます。

### 一括変更

Data Assetを修正すると、参照しているすべてのキャラクターに反映されます。

### バージョン管理

アセットとして管理できるため、変更履歴を追跡しやすくなります。

## ベストプラクティス

1. **体型ごとに作成**: 「Male_Standard」「Female_Standard」など
2. **部位ごとに分割**: 「Hair_Collision」「Tail_Collision」など
3. **命名規則**: `DA_KP_[体型]_[部位]`

```
Content/
└── KawaiiPhysics/
    └── DataAssets/
        ├── DA_KP_Female_Hair
        ├── DA_KP_Female_Skirt
        └── DA_KP_Male_Cape
```
