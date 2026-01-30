---
sidebar_position: 2
---

# UKawaiiPhysicsLibrary

<!-- AUTO-GENERATED: このページはソースコードから自動生成されます -->

Blueprint Function LibraryのAPIリファレンスです。

## クラス定義

```cpp
UCLASS()
class KAWAIIPHYSICS_API UKawaiiPhysicsLibrary : public UBlueprintFunctionLibrary
```

## 関数

### GetKawaiiPhysicsNodeFromAnimInstance

```cpp
UFUNCTION(BlueprintPure, Category = "KawaiiPhysics")
static FAnimNode_KawaiiPhysics* GetKawaiiPhysicsNodeFromAnimInstance(
    UAnimInstance* AnimInstance,
    FName NodeName
);
```

AnimInstanceから指定した名前のKawaiiPhysicsノードを取得します。

**パラメータ:**
| 名前 | 型 | 説明 |
|-----|-----|------|
| AnimInstance | UAnimInstance* | 対象のAnimInstance |
| NodeName | FName | ノード名 |

**戻り値:** KawaiiPhysicsノードへのポインタ

### ResetKawaiiPhysics

```cpp
UFUNCTION(BlueprintCallable, Category = "KawaiiPhysics")
static void ResetKawaiiPhysics(
    UAnimInstance* AnimInstance,
    FName NodeName
);
```

指定したKawaiiPhysicsノードの物理状態をリセットします。

**使用例:**
- テレポート後のリセット
- アニメーション切り替え時

### SetExternalForce

```cpp
UFUNCTION(BlueprintCallable, Category = "KawaiiPhysics")
static void SetExternalForce(
    UAnimInstance* AnimInstance,
    FName NodeName,
    FVector Force
);
```

外部力を設定します。

**パラメータ:**
| 名前 | 型 | 説明 |
|-----|-----|------|
| Force | FVector | 適用する力のベクトル |

### SetGravity

```cpp
UFUNCTION(BlueprintCallable, Category = "KawaiiPhysics")
static void SetGravity(
    UAnimInstance* AnimInstance,
    FName NodeName,
    FVector Gravity
);
```

重力ベクトルを設定します。

## Blueprint使用例

<!-- IMAGE_NEEDED: Blueprint呼び出し例のスクリーンショット -->

```
// イベント: On Teleport
//   → Call ResetKawaiiPhysics
//     → AnimInstance: Self
//     → NodeName: "HairPhysics"
```

## C++使用例

```cpp
#include "KawaiiPhysicsLibrary.h"

void AMyCharacter::OnTeleport()
{
    UAnimInstance* AnimInstance = GetMesh()->GetAnimInstance();
    UKawaiiPhysicsLibrary::ResetKawaiiPhysics(AnimInstance, "HairPhysics");
}

void AMyCharacter::ApplyImpact(FVector Direction, float Force)
{
    UAnimInstance* AnimInstance = GetMesh()->GetAnimInstance();
    UKawaiiPhysicsLibrary::SetExternalForce(
        AnimInstance,
        "HairPhysics",
        Direction * Force
    );
}
```

## 関連

- [FAnimNode_KawaiiPhysics](/docs/api/animnode-kawaiiphysics)
- [ランタイム制御](/docs/advanced/runtime-control)
