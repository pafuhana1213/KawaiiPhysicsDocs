---
sidebar_position: 101
---

# Changelog

<!-- AUTO-GENERATED: This page is auto-generated from release notes -->

Changelog for KawaiiPhysics.

For the latest release information, see [GitHub Releases](https://github.com/pafuhana1213/KawaiiPhysics/releases).

## v1.16.x (UE 5.3-5.5 Support)

### v1.16.0

**New External Force System**

Significant improvements to the process of applying external forces. Multiple external force presets have been added that allow you to apply force at regular intervals only to certain bones in the bone's local coordinate system.

- Multiple presets can be combined
- Custom presets can be implemented in C++

**Details Panel Reorganization**

- Property names and categories reorganized
- Debug features converted to buttons
- Tooltips added for all properties

**Console Variables for Debugging**

New console variables added for level debugging:

- `a.AnimNode.KawaiiPhysics.Enable`
- `a.AnimNode.KawaiiPhysics.Debug`
- `a.AnimNode.KawaiiPhysics.Debug.LengthRate`

**DataAsset Improvements**

- Bone selection now available through hierarchy picker
- Export button added to save AnimNode Limits settings to DataAssets

See [GitHub Discussion #128](https://github.com/pafuhana1213/KawaiiPhysics/discussions/128) for details.

## v1.15.x

### v1.15.0

- UE 5.4 support
- Performance improvements

See [GitHub Discussion #117](https://github.com/pafuhana1213/KawaiiPhysics/discussions/117) for details.

## v1.14.x (UE 5.0-5.2 Support)

### v1.14.0

**BoneConstraint Feature (Experimental)**

Added BoneConstraint feature for distance constraints between bones.

![BoneConstraint Demo](/img/features/boneconstraint-demo.gif)

*Effective for cloth simulation like skirts*

![BoneConstraint Parameters](/img/features/boneconstraint-params.png)

- Maintains distance between specified bones (BoneConstraints/Bone1, 2) using XPBD
- `Bone Constraint Iteration Count Before/After Collision` to specify number of constraint iterations
- Can also be configured in DataAssets
- Bone sets can be specified using regular expressions

![DataAsset Regex](/img/features/dataasset-regex.png)

**Other Improvements**

- DataAssets owned by KawaiiPhysics AnimNode can now be pin-exposed
- Planar Limit processing optimized
- Physics processing code refactored

See [GitHub Discussion #112](https://github.com/pafuhana1213/KawaiiPhysics/discussions/112) for details.

## v1.13.x

### v1.13.0

**Warm Up Feature**

Added physics warm-up feature.

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/stIOjZQh3Qw"
    title="Warm Up Feature Demo"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen>
  </iframe>
</div>

![Warm Up Parameters](/img/features/warmup-params.png)

- When **Need Warm Up** is `true` and **Warm Up Frame** is 1 or higher, Warm Up processing is executed
- After execution, Need Warm Up becomes `false`
- Larger Warm Up Frame values lead to more stability but increase computational load

![AnimNode Functions](/img/features/animnode-functions.png)

Warm Up can also be enabled via AnimNode functions added in v1.12.0.

See [GitHub Discussion #104](https://github.com/pafuhana1213/KawaiiPhysics/discussions/104) for details.

## v1.12.x

### v1.12.0

- Added AnimNode functions
- KawaiiPhysics node state can now be dynamically changed from Blueprints

See [GitHub Discussion #103](https://github.com/pafuhana1213/KawaiiPhysics/discussions/103) for details.

## v1.11.x (UE 4.27 Support)

### v1.11.1

- Final version supporting UE 4.27

---

:::note
For all changes, see [GitHub Releases](https://github.com/pafuhana1213/KawaiiPhysics/releases).
:::
