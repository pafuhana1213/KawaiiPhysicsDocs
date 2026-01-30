---
sidebar_position: 3
---

# Collision パラメータ

<!-- AUTO-GENERATED: このページはソースコードから自動生成されます -->

コリジョン（衝突判定）に関するパラメータです。

## Spherical Limits

**球体コリジョン** - 球形の衝突判定を追加します。

```cpp
UPROPERTY()
TArray<FSphericalLimit> SphericalLimits;
```

### プロパティ

| 名前 | 型 | 説明 |
|-----|-----|------|
| Driving Bone | FBoneReference | コリジョンを追従させるボーン |
| Offset Location | FVector | ボーンからのオフセット |
| Radius | float | 球の半径 |
| Limit Type | ESphericalLimitType | Inside/Outside |

## Capsule Limits

**カプセルコリジョン** - カプセル形状の衝突判定を追加します。

### プロパティ

| 名前 | 型 | 説明 |
|-----|-----|------|
| Driving Bone | FBoneReference | コリジョンを追従させるボーン |
| Offset Location | FVector | ボーンからのオフセット |
| Offset Rotation | FRotator | オフセット回転 |
| Radius | float | カプセルの半径 |
| Length | float | カプセルの長さ |

## Planar Limits

**平面コリジョン** - 平面による衝突判定を追加します。

### プロパティ

| 名前 | 型 | 説明 |
|-----|-----|------|
| Driving Bone | FBoneReference | 平面を追従させるボーン |
| Offset Location | FVector | オフセット位置 |
| Offset Rotation | FRotator | 平面の向き |

## コリジョンの可視化

エディタ上でコリジョン形状を確認できます。

<!-- IMAGE_NEEDED: コリジョン可視化のスクリーンショット -->

詳しくは [コリジョン設定](/docs/features/collision-setup) を参照してください。
