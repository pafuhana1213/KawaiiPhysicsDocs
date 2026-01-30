---
sidebar_position: 4
---

# Limits パラメータ

<!-- AUTO-GENERATED: このページはソースコードから自動生成されます -->

ボーンの移動・回転を制限するパラメータです。

## Angle Limit

**角度制限** - ボーンの回転角度を制限します。

| プロパティ | 値 |
|-----------|-----|
| 型 | float |
| デフォルト | 0.0 (制限なし) |
| 単位 | 度 |

## Limit Type

コリジョンの制限タイプを指定します。

### ESphericalLimitType

| 値 | 説明 |
|-----|------|
| Inside | 球の内側に制限 |
| Outside | 球の外側に制限 |

## Bone Constraints

ボーン間の距離を一定に保つ制約です。

```cpp
// ボーンの伸縮を防止
bUpdatePhysicsSettingsInGame = true;
```

## Data Assetからの読み込み

制限パラメータは **KawaiiPhysicsLimitsDataAsset** から読み込むことができます。

```cpp
UPROPERTY()
UKawaiiPhysicsLimitsDataAsset* LimitsDataAsset;
```

詳しくは [Data Assets](/docs/features/data-assets) を参照してください。
