---
sidebar_position: 4
---

# Curve Editor

This guide explains the curve feature for varying parameters along the bone chain.

## Overview

Using curves, you can smoothly vary parameters from the root to the tip of the bone chain.

```
Root ←―――――――――――→ Tip
[====] Stiff    Soft [  ]
```

## Supported Parameters

The following parameters support curves:

- **Damping Curve** - Damping
- **Stiffness Curve** - Stiffness
- **Radius Curve** - Radius

## Setting Up Curves

1. Select the KawaiiPhysics node
2. Expand the target Curve property
3. Add and edit keys in the curve editor

<!-- IMAGE_NEEDED: curve-editor-ui.png
     Content: Curve editor UI
     Location: KawaiiPhysics node Details Panel > Curve property
     Requirements:
     - Curve editor in expanded state
     - Curve with 2-3 key points set
     - X axis (0-1) and Y axis visible
     - Example curve showing values changing from root to tip
     - Resolution: 700x400px or higher
-->

## Reading Curves

| Axis | Meaning |
|------|---------|
| X axis | Position in bone chain (0=root, 1=tip) |
| Y axis | Parameter value |

## Setting Examples

### Hair

Stiff at root, soft at tip:

```
Stiffness Curve:
  (0.0, 0.5)  ← Root: stiffer
  (1.0, 0.05) ← Tip: softer
```

### Tail

Uniform movement:

```
Damping Curve:
  (0.0, 0.2)
  (1.0, 0.2)  ← Same value throughout
```

### Skirt

Widening toward hem:

```
Radius Curve:
  (0.0, 5.0)  ← Waist area
  (1.0, 15.0) ← Hem
```

## Curve vs Fixed Value

| Situation | Recommended |
|-----------|-------------|
| Want same movement throughout | Fixed value |
| Want different movement at root and tip | Curve |
| Want special movement only in middle section | Curve |

:::tip
It's efficient to start adjusting with fixed values and switch to curves as needed.
:::
