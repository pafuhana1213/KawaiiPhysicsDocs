---
sidebar_position: 2
---

# Collision Setup

Set up collisions to prevent bones from penetrating through the body.

## Collision Types

### Sphere

Suitable for spherical parts like head and shoulders.

<!-- IMAGE_NEEDED: collision-sphere-example.png
     Content: Sphere collision example
     Location: Animation Blueprint preview or Persona
     Requirements:
     - Debug display showing sphere collision visualization
     - Example of sphere collision placed on head or shoulders
     - Bones (like hair) being restricted by collision
     - Resolution: 600x400px or higher
-->

### Capsule

Suitable for cylindrical parts like arms and legs.

<!-- IMAGE_NEEDED: collision-capsule-example.png
     Content: Capsule collision example
     Location: Animation Blueprint preview or Persona
     Requirements:
     - Debug display showing capsule collision visualization
     - Example of capsule collision placed on arms or legs
     - Angle showing collision orientation and length
     - Resolution: 600x400px or higher
-->

### Plane

Used for flat surface restrictions like ground and walls.

### Box {#box}

:::tip Version Info
Added in v1.17.0
:::

Box-shaped collision. Suitable for rectangular shapes like body and buildings.

```cpp
UPROPERTY()
TArray<FBoxLimit> BoxLimits;
```

**FBoxLimit Properties:**

| Property | Type | Description |
|----------|------|-------------|
| DrivingBone | FBoneReference | Bone that collision follows |
| Offset | FVector | Offset from bone |
| Rotation | FRotator | Box rotation |
| Extent | FVector | Box half-extents (size in each axis direction) |

## Collision Generation from PhysicsAsset {#physicsasset}

:::tip Version Info
Added in v1.17.0
:::

You can auto-generate collision shapes from existing PhysicsAssets. Collision bodies defined in PhysicsAsset are converted to KawaiiPhysics collisions.

### Usage

1. Select KawaiiPhysics node
2. Set existing PhysicsAsset to **Physics Asset** property
3. Collision shapes are automatically generated

### Benefits

- Reuse existing PhysicsAssets
- Reduces manual collision setup work
- Consistent collision settings

## Adding Collision

1. Select the KawaiiPhysics node
2. Add elements to **Spherical Limits** / **Capsule Limits** / **Box Limits** / **Planar Limits** array
3. Set **Driving Bone** (bone that collision follows)
4. Adjust offset and size

## Driving Bone

Collision follows and moves with the Driving Bone.

```
upperarm_r (Driving Bone)
    ↓ Follows
[Capsule Collision] → Hair stops here
```

## Inside vs Outside

### Inside (Inner Limit)

Limits bones to **inside** the sphere.

- Use case: Following head shape

### Outside (Outer Limit)

Limits bones to **outside** the sphere.

- Use case: Preventing penetration into shoulders

## Performance Considerations

More collisions increase processing load.

:::tip
- Use the minimum necessary collisions
- Approximate complex shapes with multiple simple shapes
:::

For more details, see [Performance](/docs/advanced/performance).
