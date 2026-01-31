---
sidebar_position: 100
---

# FAQ

Frequently asked questions and answers.

## General

### Q: Is KawaiiPhysics free?

**A:** Yes, it's free to use under the MIT license. Commercial use is also permitted.

### Q: What's the difference from PhysX?

**A:** KawaiiPhysics uses its own lightweight algorithm without PhysX. It's lighter than PhysX and has better compatibility with animations.

### Q: Which UE versions are supported?

**A:**
- UE 5.3-5.5: Latest version
- UE 5.0-5.2: v1.14.x
- UE 4.27: v1.11.1

## Setup

### Q: What should I set as Root Bone?

**A:** Set the **parent bone** of the bone chain you want physics applied to. For example, if you want to animate hair, set a bone like `head` or `spine_03` that is the parent of the hair bones.

### Q: How do I apply physics to multiple parts?

**A:** Use separate KawaiiPhysics nodes for each part. This allows you to set different parameters for each part.

## Troubleshooting

### Q: Bones don't move

**A:** Check the following:
1. Does the Root Bone have child bones?
2. Is Stiffness too high? (Start around 0.05)
3. Is the node connected in the Animation Blueprint?

### Q: It's penetrating through the body

**A:** Set up collision. Add Spherical Limits or Capsule Limits and adjust them to match the body shape.

### Q: Movement is too intense

**A:** Increase the Damping value. Around 0.1-0.3 is typical.

### Q: Performance is poor

**A:** Consider the following:
1. Reduce bone count
2. Reduce collision count
3. Disable based on distance (LOD)

## Features

### Q: I want wind to affect it

**A:** Enable `bEnableWind` and place a wind source in the world. You can adjust the influence with `WindScale`.

### Q: Can I change parameters at runtime?

**A:** Yes, you can use functions from `UKawaiiPhysicsLibrary` or change them through Animation Blueprint variables.

### Q: Can I share settings with Data Asset?

**A:** Yes, create a `KawaiiPhysicsLimitsDataAsset` and share it across multiple characters.

## Other

### Q: I found a bug / I have a feature request

**A:** Please report it on [GitHub Issues](https://github.com/pafuhana1213/KawaiiPhysics/issues) or [Discussions](https://github.com/pafuhana1213/KawaiiPhysics/discussions).

### Q: Can I use it in commercial projects?

**A:** Yes, it's available for commercial use under the MIT license. Just include the license notice.
