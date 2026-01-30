# Docusaurus Rules

## ビルド検証
- 変更後は必ず `npm run build` を実行
- ja/en 両言語でビルドが通ることを確認

## サイドバー
- `sidebars.ts` でドキュメント構造を定義
- 新規ページ追加時はサイドバーも更新

## 多言語対応
- デフォルト: 日本語 (ja)
- 英語版は `i18n/en/` に配置

## Admonitions
```md
:::tip
ヒント内容
:::

:::warning
警告内容
:::

:::note
補足情報
:::
```
