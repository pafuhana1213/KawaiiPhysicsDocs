---
name: add-page
description: 新しいドキュメントページを追加
---

# ドキュメントページ追加

新しいドキュメントページを作成します: $ARGUMENTS

## テンプレート

```markdown
---
sidebar_position: [番号]
---

# タイトル

[導入文]

## セクション1

[内容]

## セクション2

[内容]

## 関連リンク

- [関連ページ1](/docs/path)
- [関連ページ2](/docs/path)
```

## 手順

1. 適切なディレクトリに`.md`ファイルを作成
2. frontmatterで`sidebar_position`を設定
3. 必要に応じて`sidebars.ts`を更新
4. ビルドで確認: `npm run build`

## 命名規則

- ファイル名: kebab-case (`my-new-page.md`)
- URLパス: `/docs/category/my-new-page`
