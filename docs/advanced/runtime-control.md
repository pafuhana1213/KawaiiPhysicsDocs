---
sidebar_position: 4
---

# ランタイム制御

ゲーム実行中にKawaiiPhysicsを動的に制御する方法を説明します。

## パラメータの動的変更

### Blueprintから

Animation Blueprintの変数を通じてパラメータを変更できます。

```cpp
// Animation Blueprint内
UPROPERTY(BlueprintReadWrite)
float DynamicDamping = 0.1f;
```

### C++から

```cpp
// AnimInstanceを取得してパラメータを変更
UAnimInstance* AnimInstance = Mesh->GetAnimInstance();
// カスタムAnimInstanceクラスでパラメータを公開
```

## 有効/無効の切り替え

### 一時停止

```cpp
UPROPERTY()
bool bEnabled = true;
```

### 使用例

- カットシーン中は無効化
- ポーズメニュー中は無効化
- LODに応じて無効化

## 外部力の動的適用

### SetExternalForce

```cpp
// 爆発の衝撃
void ApplyExplosionForce(FVector ExplosionLocation, float Force)
{
    FVector Direction = (BoneLocation - ExplosionLocation).GetSafeNormal();
    SetExternalForce(Direction * Force);
}
```

### 時間経過で減衰

```cpp
void Tick(float DeltaTime)
{
    // 外部力を徐々に減衰
    CurrentExternalForce *= FMath::Exp(-DecayRate * DeltaTime);
    SetExternalForce(CurrentExternalForce);
}
```

## リセット

物理状態を初期状態に戻します。

```cpp
// 物理状態をリセット
ResetDynamics();
```

### 使用例

- テレポート後
- アニメーション遷移時
- リスポーン時

## イベント連携

### アニメーション通知

Anim Notifyから物理パラメータを変更:

```cpp
void UAnimNotify_KPForce::Notify(...)
{
    // ジャンプ開始時に外部力を適用
    KawaiiPhysics->SetExternalForce(FVector(0, 0, 100));
}
```

### ゲームプレイイベント

```cpp
// ダメージを受けた時
void OnDamageReceived(float Damage, FVector HitDirection)
{
    // 衝撃を物理に反映
    float ImpactForce = Damage * 10.0f;
    KawaiiPhysics->SetExternalForce(HitDirection * ImpactForce);
}
```

## Blueprint Function Library

よく使う操作をライブラリ化すると便利です。

```cpp
UCLASS()
class UKawaiiPhysicsLibrary : public UBlueprintFunctionLibrary
{
    UFUNCTION(BlueprintCallable)
    static void ApplyImpulse(AActor* Actor, FVector Impulse);

    UFUNCTION(BlueprintCallable)
    static void ResetAllKawaiiPhysics(AActor* Actor);
};
```

詳しくは [APIリファレンス](/docs/api/kawaiiphysics-library) を参照してください。
