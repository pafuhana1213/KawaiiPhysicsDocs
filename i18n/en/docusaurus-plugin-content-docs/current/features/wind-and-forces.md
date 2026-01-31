---
sidebar_position: 3
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

<!-- IMAGE_NEEDED: forces-gravity-direction.png (or GIF)
     Content: Examples of different gravity direction settings
     Method: Compare multiple gravity settings side by side, or switching GIF
     Requirements:
     - Default gravity (downward): hair hanging down
     - Custom gravity (sideways): hair flowing sideways
     - Custom gravity (upward): hair standing up
     - Add labels/text to each setting
     - Resolution: 1000x400px or higher (horizontal layout), or GIF
-->

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
