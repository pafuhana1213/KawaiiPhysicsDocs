# KawaiiPhysics Documentation

UE向け軽量ボーン物理プラグイン [KawaiiPhysics](https://github.com/pafuhana1213/KawaiiPhysics) のドキュメントサイト。

## Tech Stack

- Docusaurus 3.x (TypeScript)
- GitHub Pages
- 日本語メイン、英語サブ

## Commands

```bash
npm start      # Dev server
npm run build  # Production build (MUST pass before commit)
```

## Directory

- `docs/` - Markdown documentation
- `blog/` - Update announcements
- `.claude/rules/` - Path-specific rules
- `.claude/skills/` - Reusable workflows

## Workflow

1. ソース解析 → 2. ドキュメント更新 → 3. `npm run build` → 4. コミット

## IMPORTANT

- ビルドエラーは必ず修正してからコミット
- リンク切れは `onBrokenLinks: 'throw'` で検出される

## Skills

- `/sync-docs` - ソースからドキュメント同期
- `/add-page [path] [title]` - 新規ページ追加
- `/verify-build` - ビルド検証

## Rules

@.claude/rules/markdown-style.md
@.claude/rules/docusaurus.md
@.claude/rules/ue-docs.md

## Source Mapping

@docs/source-mapping.md
