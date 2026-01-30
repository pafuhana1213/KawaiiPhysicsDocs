---
sidebar_position: 1
---

# FAnimNode_KawaiiPhysics

<!-- AUTO-GENERATED: このページはソースコードから自動生成されます -->

KawaiiPhysicsのメインAnimGraphノードのAPIリファレンスです。

## クラス定義

```cpp
USTRUCT(BlueprintInternalUseOnly)
struct KAWAIIPHYSICS_API FAnimNode_KawaiiPhysics : public FAnimNode_SkeletalControlBase
```

## プロパティ

### 基本設定

| プロパティ | 型 | 説明 |
|-----------|-----|------|
| RootBone | FBoneReference | 物理を適用するボーンチェーンの親 |
| ExcludeBones | TArray\<FBoneReference\> | 物理から除外するボーン |
| TargetFramerate | int32 | ターゲットフレームレート |

### 物理パラメータ

| プロパティ | 型 | デフォルト | 説明 |
|-----------|-----|-----------|------|
| Damping | float | 0.1 | 減衰係数 |
| Stiffness | float | 0.05 | 剛性 |
| Radius | float | 0.0 | ボーン半径 |
| WorldDampingLocation | float | 0.8 | ワールド位置減衰 |
| WorldDampingRotation | float | 0.8 | ワールド回転減衰 |

### カーブ

| プロパティ | 型 | 説明 |
|-----------|-----|------|
| DampingCurve | FRuntimeFloatCurve | 減衰カーブ |
| StiffnessCurve | FRuntimeFloatCurve | 剛性カーブ |
| RadiusCurve | FRuntimeFloatCurve | 半径カーブ |

### コリジョン

| プロパティ | 型 | 説明 |
|-----------|-----|------|
| SphericalLimits | TArray\<FSphericalLimit\> | 球体コリジョン |
| CapsuleLimits | TArray\<FCapsuleLimit\> | カプセルコリジョン |
| PlanarLimits | TArray\<FPlanarLimit\> | 平面コリジョン |

### 外部力

| プロパティ | 型 | 説明 |
|-----------|-----|------|
| Gravity | FVector | 重力ベクトル |
| bEnableWind | bool | 風の有効化 |
| WindScale | float | 風のスケール |

### Data Asset

| プロパティ | 型 | 説明 |
|-----------|-----|------|
| LimitsDataAsset | UKawaiiPhysicsLimitsDataAsset* | 制限設定のData Asset |

## メソッド

### Initialize_AnyThread

```cpp
virtual void Initialize_AnyThread(const FAnimationInitializeContext& Context) override;
```

ノードの初期化処理。

### Update_AnyThread

```cpp
virtual void Update_AnyThread(const FAnimationUpdateContext& Context) override;
```

フレームごとの更新処理。

### EvaluateSkeletalControl_AnyThread

```cpp
virtual void EvaluateSkeletalControl_AnyThread(
    FComponentSpacePoseContext& Output,
    TArray<FBoneTransform>& OutBoneTransforms
) override;
```

物理シミュレーションの評価とボーン変換の出力。

## 使用例

Animation Blueprintでの使用:

```cpp
// AnimGraphでKawaiiPhysicsノードを追加
// RootBoneを設定
// パラメータを調整
```

## 関連

- [パラメータリファレンス](/docs/parameters/overview)
- [UKawaiiPhysicsLibrary](/docs/api/kawaiiphysics-library)
