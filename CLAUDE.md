# KawaiiPhysics Documentation

UE向け軽量ボーン物理プラグイン [KawaiiPhysics](https://github.com/pafuhana1213/KawaiiPhysics) のドキュメントサイト。

## Tech Stack

- **Framework**: Docusaurus 3.x (TypeScript)
- **Deploy**: GitHub Pages
- **Locales**: ja (primary), en

## Directory Map

- `docs/` - Markdown documentation (sidebars.ts で構成)
- `blog/` - Update announcements
- `src/pages/` - Custom React pages
- `static/` - Images, assets
- `.github/workflows/` - CI/CD

## Commands

```bash
npm start      # Dev server (localhost:3000)
npm run build  # Production build (MUST pass before commit)
npm run serve  # Preview build
```

## Code Style

- Markdown: 日本語メイン、コード例は英語
- 画像プレースホルダー: `<!-- IMAGE_NEEDED: 説明 -->`
- 自動生成マーク: `<!-- AUTO-GENERATED: ... -->`
- Frontmatter必須: `sidebar_position`, `slug`（トップページのみ）

## Workflow

1. **ソース解析**: KawaiiPhysicsリポジトリのUPROPERTYからパラメータ抽出
2. **ドキュメント更新**: `docs/parameters/` 配下を更新
3. **ビルド検証**: `npm run build` で必ず確認
4. **コミット**: 変更内容を明確に記述

## IMPORTANT

- ビルドエラーは必ず修正してからコミット
- リンク切れは `onBrokenLinks: 'throw'` で検出される
- 日英両言語でビルドされる点に注意

## Source Repository

@docs/source-mapping.md にソースコードとドキュメントの対応を記載
