---
name: add-page
description: 新しいドキュメントページを追加する
disable-model-invocation: true
allowed-tools: Write, Edit, Read
argument-hint: "[category/page-name] [タイトル]"
---

# 新規ページ追加

新しいドキュメントページを作成: $ARGUMENTS

## テンプレート

```markdown
---
sidebar_position: [番号を決定]
---

# [タイトル]

[導入文 - このページで何を説明するか]

## 概要

[機能やコンセプトの説明]

## 使用方法

[具体的な手順や設定方法]

## 例

[コード例やスクリーンショットプレースホルダー]

<!-- IMAGE_NEEDED: [必要な画像の説明] -->

## 関連

- [関連ページ1](/docs/path)
- [関連ページ2](/docs/path)
```

## 手順

1. `docs/[category]/[page-name].md` を作成
2. frontmatter で `sidebar_position` を設定
3. `sidebars.ts` に追加（必要な場合）
4. `npm run build` で検証

## 命名規則

- ファイル名: kebab-case (`my-new-page.md`)
- カテゴリ: `getting-started`, `parameters`, `features`, `advanced`, `api`
