---
sidebar_position: 3
---

# Basic Concepts

Understanding how KawaiiPhysics works.

## Architecture

KawaiiPhysics achieves bone physics using its own lightweight algorithm without using PhysX.

```
Animation Pose → KawaiiPhysics Node → Modified Pose
                       ↑
              Physics Simulation
              (Custom Algorithm)
```

## Bone Chain

KawaiiPhysics applies physics to the entire bone chain starting from the **Root Bone**.

```
head (Root Bone)
├── hair_01
│   ├── hair_02
│   └── hair_03  ← Range where physics is applied
└── ponytail_01
    └── ponytail_02
```

### Exclude Bones

You can exclude specific bones from physics calculation.

## Physics Parameters

### Damping

Gradually converges bone movement. Higher values stop movement faster.

<!-- IMAGE_NEEDED: concepts-damping-comparison.png (or GIF)
     Content: Comparison showing different Damping values
     Method: Compare the same motion with different Damping values side by side
     Requirements:
     - Display 2-3 patterns side by side
     - Damping=0.0 (doesn't converge), Damping=0.2 (moderate), Damping=0.5 (stops quickly)
     - Add labels/text to each pattern
     - If GIF: 3-5 second loop
     - Resolution: 1200x400px or higher (horizontal layout)
-->

### Stiffness

The force that tries to return to the original animation pose. Higher values make it stiffer.

### Radius

Defines the physical size of each bone. Used for collision detection.

## Collision System

KawaiiPhysics supports 3 types of collision:

| Type | Usage |
|------|-------|
| Sphere | Spherical shapes (head, shoulders, etc.) |
| Capsule | Capsule shapes (arms, legs, etc.) |
| Plane | Flat surfaces (ground, walls, etc.) |

## Control with Curves

Parameters can be varied along the bone chain.

```
Root ←――――――――――――→ Tip
  Stiff          Soft
```

For more details, see [Curve Editor](/docs/features/curve-editor).
