---
sidebar_position: 4
---

# Limits Parameters

<!-- AUTO-GENERATED: This page is auto-generated from source code -->

Parameters for limiting bone movement and rotation.

[View Source](https://github.com/pafuhana1213/KawaiiPhysics/blob/master/Plugins/KawaiiPhysics/Source/KawaiiPhysics/Public/AnimNode_KawaiiPhysics.h)

## Bone Constraint

Constraint settings for maintaining distance between bones. Used when you want to keep a constant distance between bones, like in skirts.

### BoneConstraintGlobalComplianceType

**Compliance Type** - Specifies the compliance type used in Bone Constraint.

| Property | Value |
|----------|-------|
| Type | EXPBDComplianceType |
| Default | Leather |
| Category | Bone Constraint |

[About XPBD Stiffness](http://blog.mmacklin.com/2016/10/12/xpbd-slides-and-stiffness/)

### EXPBDComplianceType

| Value | Description |
|-------|-------------|
| Concrete | Concrete (hardest) |
| Wood | Wood |
| Leather | Leather |
| Tendon | Tendon |
| Rubber | Rubber |
| Muscle | Muscle |
| Fat | Fat (softest) |

### BoneConstraintIterationCountBeforeCollision

**Pre-collision Iteration Count** - Number of Bone Constraint processing iterations (before collision processing).

| Property | Value |
|----------|-------|
| Type | int32 |
| Default | 1 |
| Category | Bone Constraint |

### BoneConstraintIterationCountAfterCollision

**Post-collision Iteration Count** - Number of Bone Constraint processing iterations (after collision processing).

| Property | Value |
|----------|-------|
| Type | int32 |
| Default | 1 |
| Category | Bone Constraint |

### bAutoAddChildDummyBoneConstraint

**Auto-add Dummy Bone** - Flag to automatically include dummy bones in BoneConstraint processing when terminal bones are targeted.

| Property | Value |
|----------|-------|
| Type | bool |
| Default | true |
| Category | Bone Constraint |

### BoneConstraints

**Bone Constraint List** - Sets bone pairs that are targets for BoneConstraint processing.

```cpp
UPROPERTY(EditAnywhere, Category = "Bone Constraint")
TArray<FModifyBoneConstraint> BoneConstraints;
```

### FModifyBoneConstraint

| Property | Type | Description |
|----------|------|-------------|
| Bone1 | FBoneReference | First bone of the constraint |
| Bone2 | FBoneReference | Second bone of the constraint |
| bOverrideCompliance | bool | Whether to override compliance type |
| ComplianceType | EXPBDComplianceType | Compliance type when overriding |

### BoneConstraintsDataAsset

**Bone Constraints Data Asset** - Sets bone pairs for BoneConstraint processing from a Data Asset. Recommended when you want to reuse settings across different AnimNodes or Animation Blueprints.

```cpp
UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Bone Constraint")
TObjectPtr<UKawaiiPhysicsBoneConstraintsDataAsset> BoneConstraintsDataAsset;
```

## Sync Bone

Applies the movement/rotation of source bones to physics-controlled bones. Useful for preventing skirts from penetrating through legs.

### SyncBones

**Sync Bone List** - Sets pairs of source bones and physics-controlled bones.

```cpp
UPROPERTY(EditAnywhere, Category = "Sync Bone")
TArray<FKawaiiPhysicsSyncBone> SyncBones;
```

## Angle Limit

### LimitAngle

Rotation limit by physics behavior. Properly setting this can suppress erratic behavior.

| Property | Value |
|----------|-------|
| Type | float |
| Default | 0.0 (no limit) |
| Range | 0.0 or higher |
| Category | KawaiiPhysics |

:::tip
LimitAngle limits the angle from each bone's parent bone. Higher values reduce freedom, while lower values make it more prone to erratic behavior.
:::

## Loading from Data Asset

Limit parameters can be loaded from the following Data Assets:

### UKawaiiPhysicsLimitsDataAsset

A Data Asset that manages collision settings.

```cpp
UCLASS(Blueprintable)
class KAWAIIPHYSICS_API UKawaiiPhysicsLimitsDataAsset : public UDataAsset
```

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| SphericalLimits | TArray\<FSphericalLimit\> | Sphere collision list |
| CapsuleLimits | TArray\<FCapsuleLimit\> | Capsule collision list |
| BoxLimits | TArray\<FBoxLimit\> | Box collision list |
| PlanarLimits | TArray\<FPlanarLimit\> | Plane collision list |

In the editor, bone preview is available by setting a Skeleton.

For more details, see [Data Assets](/docs/features/data-assets).
