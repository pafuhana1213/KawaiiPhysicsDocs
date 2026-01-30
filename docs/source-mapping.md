---
sidebar_class_name: hidden
---

# ソースコードとドキュメントの対応

このページはClaude Code用の内部ドキュメントです。

## ソースファイルとドキュメントのマッピング

| ソースファイル | ドキュメント |
|--------------|-------------|
| `AnimNode_KawaiiPhysics.h` | `docs/api/animnode-kawaiiphysics.md`, `docs/parameters/*.md` |
| `KawaiiPhysicsLibrary.h` | `docs/api/kawaiiphysics-library.md` |
| `KawaiiPhysicsLimitsDataAsset.h` | `docs/features/data-assets.md` |

## パラメータカテゴリとファイルの対応

| UPROPERTYカテゴリ | ドキュメントファイル |
|------------------|---------------------|
| `KawaiiPhysics` | `docs/parameters/physics.md` |
| `KawaiiPhysics|Collision` | `docs/parameters/collision.md` |
| `KawaiiPhysics|Limits` | `docs/parameters/limits.md` |
| `KawaiiPhysics|ExternalForce` | `docs/parameters/external-forces.md` |

## 自動更新対象

以下のファイルはソースコードから自動生成・更新されます：

- `docs/parameters/overview.md`
- `docs/parameters/physics.md`
- `docs/parameters/collision.md`
- `docs/parameters/limits.md`
- `docs/parameters/external-forces.md`
- `docs/api/animnode-kawaiiphysics.md`
- `docs/api/kawaiiphysics-library.md`
- `docs/changelog.md`

## 手動メンテナンス対象

以下のファイルは手動でメンテナンスします：

- `docs/intro.md`
- `docs/getting-started/*.md`
- `docs/features/*.md`
- `docs/advanced/*.md`
- `docs/faq.md`

## 更新トリガー

1. KawaiiPhysicsリポジトリの新しいリリース
2. GitHub Actionsの手動実行
3. `/sync-docs` スキルの実行
