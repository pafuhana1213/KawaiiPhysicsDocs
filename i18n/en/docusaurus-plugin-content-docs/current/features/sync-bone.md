---
sidebar_position: 6
---

# Sync Bone

:::tip Version Info
Added in v1.20.0
:::

The Sync Bone feature applies the movement and rotation of a specified bone to physics-controlled bones. Effective for preventing skirt penetration through legs.

## Overview

Previously, collisions were used to prevent penetration of skirts, but it was difficult to handle complex shapes and movements. With the Sync Bone feature, you can reflect the movement of bones like legs to physics bones without using collisions.

![Sync Bone Demo](/img/features/syncbone-demo.gif)

## How It Works

```
Leg Bone (Sync Source)
    ↓ Get position/rotation
[Sync Bone Processing]
    ↓ Apply to physics bones
Skirt Bone (Physics-controlled)
```

When the source bone moves/rotates, that movement is reflected to the physics bones, preventing penetration.

## Setup

1. Select KawaiiPhysics node
2. Add elements to **Sync Bones** array
3. Set the following properties:

### FKawaiiPhysicsSyncBone

| Property | Type | Description |
|----------|------|-------------|
| SyncSourceBone | FBoneReference | Source bone (e.g., leg bone) |
| SyncTargetBones | TArray\<FBoneReference\> | Target bones (e.g., skirt bones) |
| SyncRatio | float | Sync influence (0.0-1.0) |

## Usage Example

### Skirt Leg Penetration Prevention

```
Leg Bones
├── thigh_l (Sync Source)
├── thigh_r (Sync Source)
└── ...

Skirt Bones
├── skirt_front_01 (Sync Target)
├── skirt_front_02 (Sync Target)
├── skirt_back_01  (Sync Target)
└── ...
```

Set leg bones as sync source and nearby skirt bones as sync targets.

### Configuration Example

```cpp
// Sync Bones configuration example
SyncBones:
  - SyncSourceBone: thigh_l
    SyncTargetBones: [skirt_front_l_01, skirt_side_l_01]
    SyncRatio: 0.5
  - SyncSourceBone: thigh_r
    SyncTargetBones: [skirt_front_r_01, skirt_side_r_01]
    SyncRatio: 0.5
```

## Combining with BoneConstraint

Combining Sync Bone and BoneConstraint features enables more natural skirt expression.

- **Sync Bone**: Prevents penetration with legs
- **BoneConstraint**: Maintains distance between skirt bones

```
[BoneConstraint] ← Maintains distance between bones
       ↓
Skirt Bones
       ↑
   [Sync Bone] ← Reflects leg movement
```

## Notes

:::warning
- If Sync Ratio is too high, physics movement may become unnatural
- Start with low values (0.3-0.5) and adjust
:::

## Comparison with Collisions

| Method | Benefits | Drawbacks |
|--------|----------|-----------|
| Collision | Physically accurate | Complex setup, high computational cost |
| Sync Bone | Lightweight, easy setup | Less physically accurate |

In many cases, combining Sync Bone and collisions achieves the best results.

## Related Pages

- [Collision Setup](/docs/features/collision-setup)
- [Limits Parameters](/docs/parameters/limits)
- [Data Assets](/docs/features/data-assets)
