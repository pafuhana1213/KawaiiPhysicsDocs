---
sidebar_position: 5
---

# Data Assets

This guide explains how to manage parameters as reusable Data Assets.

## Overview

Using **KawaiiPhysicsLimitsDataAsset**, you can share collision settings and limit parameters across multiple characters.

## Creating a Data Asset

1. Right-click in Content Browser
2. Select **Miscellaneous > Data Asset**
3. Select **KawaiiPhysicsLimitsDataAsset**
4. Name and save

<!-- IMAGE_NEEDED: data-assets-create.png
     Content: Screenshot of Data Asset creation
     Location: Content Browser
     Requirements:
     - Right-click context menu > Miscellaneous > Data Asset
     - Or: Data Asset class selection dialog with KawaiiPhysicsLimitsDataAsset selected
     - Resolution: 600x500px or higher
     - 1-2 images showing the creation flow
-->

## Setting Parameters

Data Assets can store the following parameters:

- Spherical Limits
- Capsule Limits
- Planar Limits

## Usage

1. Set the **Limits Data Asset** property in the KawaiiPhysics node
2. Parameters from the Data Asset are automatically loaded

```cpp
UPROPERTY()
UKawaiiPhysicsLimitsDataAsset* LimitsDataAsset;
```

## Benefits

### Reusability

Collision settings can be shared among characters with the same body type.

### Batch Changes

Modifying the Data Asset reflects changes to all referencing characters.

### Version Control

Can be managed as assets, making change history easier to track.

## Best Practices

1. **Create per body type**: "Male_Standard", "Female_Standard", etc.
2. **Separate by part**: "Hair_Collision", "Tail_Collision", etc.
3. **Naming convention**: `DA_KP_[BodyType]_[Part]`

```
Content/
└── KawaiiPhysics/
    └── DataAssets/
        ├── DA_KP_Female_Hair
        ├── DA_KP_Female_Skirt
        └── DA_KP_Male_Cape
```
