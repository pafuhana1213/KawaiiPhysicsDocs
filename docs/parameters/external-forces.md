---
sidebar_position: 5
---

# External Forces パラメータ

<!-- AUTO-GENERATED: このページはソースコードから自動生成されます -->

外部から適用される力に関するパラメータです。

[ソースを見る](https://github.com/pafuhana1213/KawaiiPhysics/blob/master/Plugins/KawaiiPhysics/Source/KawaiiPhysics/Public/AnimNode_KawaiiPhysics.h)

## Gravity

### Gravity

**重力** - ボーンに適用される重力ベクトル。

| プロパティ | 値 |
|-----------|-----|
| 型 | FVector |
| デフォルト | (0, 0, 0) |
| カテゴリ | ExternalForce |

```cpp
// 下向きの重力を適用
Gravity = FVector(0, 0, -1.0f);
```

### bUseLegacyGravity

**レガシー重力方式** - Gravityの適用方式を指定します。

| プロパティ | 値 |
|-----------|-----|
| 型 | bool |
| デフォルト | false |
| カテゴリ | ExternalForce |

| 値 | 説明 |
|-----|------|
| true | 従来互換（位置に 0.5 * Gravity * dt^2 を加算） |
| false | AnimDynamics互換（速度に Gravity * dt を加算してから位置更新） |

### bUseDefaultGravityZProjectSetting

**プロジェクト設定の重力使用** - Gravityベクトルにプロジェクト設定の DefaultGravityZ（絶対値）を乗算するフラグ。

| プロパティ | 値 |
|-----------|-----|
| 型 | bool |
| デフォルト | false |
| カテゴリ | ExternalForce |

### bUseWorldSpaceGravity

**ワールド空間重力** - 重力をワールド座標系で扱うかどうかのフラグ。

| プロパティ | 値 |
|-----------|-----|
| 型 | bool |
| デフォルト | true |
| カテゴリ | ExternalForce |

## Wind

### bEnableWind

**風の有効化** - 外力としてWindDirectionalSourceの影響を受けるかどうかのフラグ。

| プロパティ | 値 |
|-----------|-----|
| 型 | bool |
| デフォルト | false |
| カテゴリ | ExternalForce |

### WindScale

**風のスケール** - WindDirectionalSourceによる風の影響度。ClothやSpeedTreeとの併用目的で使用します。

| プロパティ | 値 |
|-----------|-----|
| 型 | float |
| デフォルト | 1.0 |
| カテゴリ | ExternalForce |

:::note
WindScaleはbEnableWindがtrueの場合のみ有効です。
:::

### WindDirectionNoiseAngle

**風方向ノイズ** - WindDirectionalSourceによる風方向に与えるノイズ（角度）。

| プロパティ | 値 |
|-----------|-----|
| 型 | float |
| デフォルト | 0.0 |
| 単位 | 度 |
| 範囲 | 0 以上 |
| カテゴリ | ExternalForce |

## Simple External Force

### SimpleExternalForce

**単純な外力ベクトル** - 任意の方向に力を適用できます。

| プロパティ | 値 |
|-----------|-----|
| 型 | FVector |
| デフォルト | (0, 0, 0) |
| カテゴリ | ExternalForce |

### bUseWorldSpaceSimpleExternalForce

**ワールド空間外力** - 単純な外力をワールド座標系で扱うかどうかのフラグ。

| プロパティ | 値 |
|-----------|-----|
| 型 | bool |
| デフォルト | true |
| カテゴリ | ExternalForce |

## External Force プリセット

### ExternalForces

**外力プリセット（Instanced Struct）** - 外力のプリセット。C++で独自のプリセットを追加可能です。

```cpp
UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "ExternalForce",
    meta = (BaseStruct = "/Script/KawaiiPhysics.KawaiiPhysics_ExternalForce", ExcludeBaseStruct))
TArray<FInstancedStruct> ExternalForces;
```

### CustomExternalForces（実験的機能）

**カスタム外力（Instanced Property）** - BP・C++で独自のプリセットを追加可能です。

```cpp
UPROPERTY(EditAnywhere, BlueprintReadWrite, Instanced, Category = "ExternalForce")
TArray<TObjectPtr<UKawaiiPhysics_CustomExternalForce>> CustomExternalForces;
```

:::warning
この機能は非常に実験的です。AnimNodeをクリックするか、Animation Blueprintをコンパイルしないと正常に動作しない場合があります。
:::

## タグ

### KawaiiPhysicsTag

**フィルタリング用タグ** - ExternalForceなどで使用するフィルタリング用のGameplayTag。

| プロパティ | 値 |
|-----------|-----|
| 型 | FGameplayTag |
| カテゴリ | Tag |

```cpp
// タグを使用した外力の適用
FGameplayTagContainer FilterTags;
FilterTags.AddTag(FGameplayTag::RequestGameplayTag("KawaiiPhysics.Hair"));
UKawaiiPhysicsLibrary::AddExternalForcesToComponent(MeshComp, ExternalForces, Owner, FilterTags);
```

## Blueprint API

外力はBlueprintから動的に制御できます。

### 外力の追加

```cpp
UFUNCTION(BlueprintCallable, Category = "Kawaii Physics")
static bool AddExternalForce(const FKawaiiPhysicsReference& KawaiiPhysics,
                             FInstancedStruct& ExternalForce, UObject* Owner, bool bIsOneShot = false);
```

### コンポーネントへの外力追加

```cpp
UFUNCTION(BlueprintCallable, Category = "Kawaii Physics")
static bool AddExternalForcesToComponent(USkeletalMeshComponent* MeshComp,
                                         TArray<FInstancedStruct>& ExternalForces, UObject* Owner,
                                         FGameplayTagContainer& FilterTags,
                                         bool bFilterExactMatch = false,
                                         bool bIsOneShot = false);
```

### 外力の削除

```cpp
UFUNCTION(BlueprintCallable, Category = "Kawaii Physics")
static bool RemoveExternalForcesFromComponent(USkeletalMeshComponent* MeshComp, UObject* Owner,
                                              FGameplayTagContainer& FilterTags,
                                              bool bFilterExactMatch = false);
```

詳しくは [UKawaiiPhysicsLibrary](/docs/api/kawaiiphysics-library) を参照してください。
