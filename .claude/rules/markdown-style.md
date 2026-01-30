---
paths:
  - "docs/**/*.md"
  - "blog/**/*.md"
---

# Markdown Style Rules

## Frontmatter
- 必須: `sidebar_position` (数値)
- トップページのみ: `slug: /`

## 日本語テキスト
- 自然な日本語で記述
- 技術用語は英語のままでOK（例: UPROPERTY, Blueprint）
- 句読点は「、」「。」を使用

## コードブロック
- 言語タグを必ず指定: ```cpp, ```bash, ```json
- UEコードは `cpp` タグを使用

## プレースホルダー
- 画像: `<!-- IMAGE_NEEDED: 説明 -->`
- 動画: `<!-- VIDEO_NEEDED: 説明 -->`

## リンク
- 内部リンク: `/docs/path/to/page` 形式
- 外部リンク: フルURL使用
