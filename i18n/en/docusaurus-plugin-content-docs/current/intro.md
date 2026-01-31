---
sidebar_position: 1
slug: /
---

# KawaiiPhysics

**KawaiiPhysics** is a lightweight bone physics simulation plugin for Unreal Engine.

<!-- IMAGE_NEEDED: intro-demo.gif
     Content: KawaiiPhysics demo GIF
     Subject: Character with swaying hair or tail
     Requirements:
     - Character walking or idle with hair/tail swaying naturally
     - Resolution: 800x450px or higher
     - Frame rate: 30fps
     - Loop: 3-5 second seamless loop
     - Background: Simple solid color or UE default level
-->

## Features

- **Simple Setup**: Just add one node in AnimGraph
- **Lightweight Processing**: Custom algorithm that doesn't depend on PhysX
- **Rich Collision Support**: Supports sphere, capsule, and plane collisions
- **Skeleton Protection**: Stable physics simulation that prevents bone stretching
- **External Force Application**: Supports wind, gravity, and custom forces

## Supported Versions

| Unreal Engine | KawaiiPhysics |
|--------------|---------------|
| 5.3 - 5.5    | 1.16.x        |
| 5.0 - 5.2    | 1.14.x        |
| 4.27         | 1.11.1        |

## Quick Start

```cpp
// Add KawaiiPhysics node in Animation Blueprint
// Set Root Bone and specify the bone chain you want physics applied to
```

1. Open Animation Blueprint
2. Add **Kawaii Physics** node to AnimGraph
3. Set **Root Bone** to the parent of the bones you want to animate
4. Adjust parameters and preview

For more details, see [Installation](/docs/getting-started/installation) and [Quick Start](/docs/getting-started/quick-start).

## Links

- [GitHub Repository](https://github.com/pafuhana1213/KawaiiPhysics)
- [UE Marketplace](https://www.unrealengine.com/marketplace/ja/product/kawaiiphysics)
- [GitHub Discussions](https://github.com/pafuhana1213/KawaiiPhysics/discussions)
