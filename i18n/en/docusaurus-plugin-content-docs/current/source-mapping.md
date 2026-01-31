# Source Code to Documentation Mapping

This page is internal documentation for Claude Code.

## Source File to Documentation Mapping

| Source File | Documentation |
|-------------|---------------|
| `AnimNode_KawaiiPhysics.h` | `docs/api/animnode-kawaiiphysics.md`, `docs/parameters/*.md` |
| `KawaiiPhysicsLibrary.h` | `docs/api/kawaiiphysics-library.md` |
| `KawaiiPhysicsLimitsDataAsset.h` | `docs/features/data-assets.md` |

## UPROPERTY Category to File Mapping

| UPROPERTY Category | Documentation File |
|--------------------|-------------------|
| `KawaiiPhysics` | `docs/parameters/physics.md` |
| `KawaiiPhysics|Collision` | `docs/parameters/collision.md` |
| `KawaiiPhysics|Limits` | `docs/parameters/limits.md` |
| `KawaiiPhysics|ExternalForce` | `docs/parameters/external-forces.md` |

## Auto-Update Targets

The following files are auto-generated/updated from source code:

- `docs/parameters/overview.md`
- `docs/parameters/physics.md`
- `docs/parameters/collision.md`
- `docs/parameters/limits.md`
- `docs/parameters/external-forces.md`
- `docs/api/animnode-kawaiiphysics.md`
- `docs/api/kawaiiphysics-library.md`
- `docs/changelog.md`

## Manual Maintenance Targets

The following files are manually maintained:

- `docs/intro.md`
- `docs/getting-started/*.md`
- `docs/features/*.md`
- `docs/advanced/*.md`
- `docs/faq.md`

## Update Triggers

1. New release of KawaiiPhysics repository
2. Manual execution of GitHub Actions
3. Execution of `/sync-docs` skill
