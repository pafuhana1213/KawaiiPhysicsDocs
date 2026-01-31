---
sidebar_position: 1
---

# Installation

This guide explains how to install KawaiiPhysics in your project.

## Method 1: UE Marketplace (Recommended)

1. Get the plugin from [UE Marketplace](https://www.unrealengine.com/marketplace/ja/product/kawaiiphysics)
2. Install it to your project via Epic Games Launcher
3. Restart your project

## Method 2: Download from GitHub

1. Download the compatible version from [Releases](https://github.com/pafuhana1213/KawaiiPhysics/releases)
2. Extract to the `Plugins` folder
3. Restart your project

```
YourProject/
├── Content/
├── Plugins/
│   └── KawaiiPhysics/    ← Place it here
└── YourProject.uproject
```

## Method 3: Git Submodule

```bash
cd YourProject
git submodule add https://github.com/pafuhana1213/KawaiiPhysics.git Plugins/KawaiiPhysics
```

## Enabling the Plugin

1. Open **Edit > Plugins**
2. Search for "KawaiiPhysics"
3. Check **Enabled**
4. Restart the editor

<!-- IMAGE_NEEDED: installation-plugin-enable.png
     Content: Screenshot of plugin enable screen
     Location: Edit > Plugins window
     Requirements:
     - Search field with "KawaiiPhysics" entered
     - KawaiiPhysics plugin displayed with Enabled checked
     - Resolution: 800x500px or higher
     - Capture window only (no desktop background)
-->

## Verification

When the plugin is correctly installed, **Kawaii Physics** will appear in the node list of Animation Blueprint.

<!-- IMAGE_NEEDED: installation-animgraph-node.png
     Content: Adding KawaiiPhysics node in AnimGraph
     Location: Animation Blueprint > AnimGraph
     Requirements:
     - Right-click context menu open
     - Search for "Kawaii Physics" with node displayed
     - Resolution: 800x600px or higher
     - Composition showing AnimGraph background and node
-->
