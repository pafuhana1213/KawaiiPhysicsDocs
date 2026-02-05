---
sidebar_position: 4
---

# Runtime Control

This guide explains how to dynamically control KawaiiPhysics during gameplay.

## Dynamic Parameter Changes

### From Blueprint

Parameters can be changed through Animation Blueprint variables.

```cpp
// Inside Animation Blueprint
UPROPERTY(BlueprintReadWrite)
float DynamicDamping = 0.1f;
```

### From C++

```cpp
// Get AnimInstance and change parameters
UAnimInstance* AnimInstance = Mesh->GetAnimInstance();
// Expose parameters through custom AnimInstance class
```

## Enable/Disable Toggle

### Pause

```cpp
UPROPERTY()
bool bEnabled = true;
```

### Use Cases

- Disable during cutscenes
- Disable during pause menu
- Disable based on LOD

## Dynamic External Force Application

### SetExternalForce

```cpp
// Explosion impact
void ApplyExplosionForce(FVector ExplosionLocation, float Force)
{
    FVector Direction = (BoneLocation - ExplosionLocation).GetSafeNormal();
    SetExternalForce(Direction * Force);
}
```

### Decay Over Time

```cpp
void Tick(float DeltaTime)
{
    // Gradually decay external force
    CurrentExternalForce *= FMath::Exp(-DecayRate * DeltaTime);
    SetExternalForce(CurrentExternalForce);
}
```

## Reset

Returns physics state to initial state.

```cpp
// Reset physics state
ResetDynamics();
```

### Use Cases

- After teleport
- During animation transitions
- On respawn

## Event Integration

### AnimNotify Support {#animnotify}

:::tip Version Info
Added in v1.17.0
:::

KawaiiPhysics-specific AnimNotifies are provided.

**AnimNotify_KawaiiPhysics_ResetDynamics**

Resets physics state. Use for teleports or animation transitions.

**AnimNotify_KawaiiPhysics_SetExternalForce**

Sets external force. Use for wind pressure at jump start, etc.

### AnimNotifyState: Set Alpha {#animnotifystate-setalpha}

:::tip Version Info
Added in v1.20.0
:::

AnimNotifyState that can dynamically change physics blend ratio during animation.

```
Animation Timeline:
[=======================================]
     [--Set Alpha: 0.0 -> 1.0--]
     ↑                        ↑
     Start (Physics OFF)      End (Physics ON)
```

**Use Cases:**

- Disable physics only during specific animations
- Smooth blending during animation transitions
- Control during cutscenes

### Custom AnimNotify

Change physics parameters from Anim Notify:

```cpp
void UAnimNotify_KPForce::Notify(...)
{
    // Apply external force at jump start
    KawaiiPhysics->SetExternalForce(FVector(0, 0, 100));
}
```

### Gameplay Events

```cpp
// When damage is received
void OnDamageReceived(float Damage, FVector HitDirection)
{
    // Reflect impact in physics
    float ImpactForce = Damage * 10.0f;
    KawaiiPhysics->SetExternalForce(HitDirection * ImpactForce);
}
```

## Blueprint Function Library

It's convenient to make common operations into a library.

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

For more details, see [API Reference](/docs/api/kawaiiphysics-library).
