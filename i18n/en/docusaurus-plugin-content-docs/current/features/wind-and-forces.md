---
sidebar_position: 3
title: "Wind and External Forces"
---

# Wind and External Forces

This guide explains how to set up wind and external forces in KawaiiPhysics.

## Wind System

Can integrate with Unreal Engine's wind system.

### Enabling

```cpp
UPROPERTY()
bool bEnableWind = false;
```

### Wind Scale

Adjusts the influence of wind.

```cpp
UPROPERTY()
float WindScale = 1.0f;
```

### Wind Directional Source Support {#wind-directional-source}

:::tip Version Info
Added in v1.17.0
:::

Now supports Unreal Engine's Wind Directional Source. Automatically affected by wind placed in level.

**Setup:**

1. Place Wind Directional Source in level
2. Enable `bEnableWind` in KawaiiPhysics node
3. Adjust influence with `WindScale`

Wind Directional Source intensity and direction are reflected to KawaiiPhysics physics bones.

## Custom External Forces

Apply force in any direction.

### Setting from Blueprint

```cpp
// Apply force forward
SetExternalForce(GetActorForwardVector() * 100.0f);
```

### Use Cases

- Wind pressure during jumps
- Explosion knockback
- Underwater resistance

## Gravity

### Default Gravity

```cpp
UPROPERTY()
FVector Gravity = FVector::ZeroVector;
```

### Custom Gravity

Different gravity can be applied to specific bones.

```
Gravity direction examples:

  ↓ (0, 0, -980)      → (980, 0, 0)      ↑ (0, 0, 980)
  Default gravity      Sideways gravity    Upward gravity
  (hair hangs down)    (hair flows sideways) (hair stands up)
```

## Force Composition

Multiple forces are added together and applied.

```
Final Force = Gravity + Wind + ExternalForce
```

## Dynamic Control

Forces can be changed in real-time during gameplay.

```cpp
// Vary wind in Event Tick
void AMyCharacter::Tick(float DeltaTime)
{
    // Vary wind strength with sine wave
    float WindStrength = FMath::Sin(GetWorld()->GetTimeSeconds()) * 50.0f;
    KawaiiPhysicsComponent->SetExternalForce(FVector(WindStrength, 0, 0));
}
```

For more details, see [Runtime Control](/docs/advanced/runtime-control).
