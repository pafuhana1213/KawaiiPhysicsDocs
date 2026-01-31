---
sidebar_position: 1
---

# Bone Chain Setup

This guide explains how to set up bone chains in KawaiiPhysics.

## Selecting Root Bone

**Root Bone** specifies the **parent bone** of the bone chain to apply physics to.

:::warning
Physics is not applied to the Root Bone itself. Physics is applied to its child bones and below.
:::

<!-- IMAGE_NEEDED: bone-chain-root-concept.png
     Content: Root Bone concept diagram
     Method: Diagram or skeleton view screenshot
     Requirements:
     - Visual display of bone hierarchy
     - Highlight Root Bone (no physics) with red border or different color
     - Display child bones (with physics) in different color
     - Arrow indicating "range where physics is applied"
     - For skeleton view: bone selection state in Persona (skeleton editor)
     - Resolution: 600x600px or higher
-->

## Auto-detection

KawaiiPhysics automatically detects child bones from the Root Bone and constructs the chain.

```
spine_03 (Root Bone - no physics)
├── hair_front_01  ← Physics applied
│   └── hair_front_02  ← Physics applied
└── hair_back_01   ← Physics applied
    └── hair_back_02   ← Physics applied
```

## Exclude Bones

You can exclude specific bones from physics calculation.

```cpp
UPROPERTY()
TArray<FBoneReference> ExcludeBones;
```

### Use Cases

- Parts you don't want to move, like ribbon knots
- Bones you want to control with a different KawaiiPhysics node

## Multiple Bone Chains

You can use multiple KawaiiPhysics nodes for one character.

```
AnimGraph
├── KawaiiPhysics (for hair)
├── KawaiiPhysics (for tail)
└── KawaiiPhysics (for clothing)
```

:::tip
Parts with different parameters are easier to adjust when managed with separate nodes.
:::

## Bone Length and Radius

Each bone's length is automatically calculated. Radius can be set manually or controlled with curves.

For more details, see [Curve Editor](/docs/features/curve-editor).
