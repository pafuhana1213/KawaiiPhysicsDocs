---
name: verify-build
description: Docusaurusビルドとリンクチェックを実行
disable-model-invocation: true
allowed-tools: Bash
---

# ビルド検証

```bash
npm run build
```

## チェック項目

### 成功条件
- `[SUCCESS] Generated static files in "build"` が表示
- `[SUCCESS] Generated static files in "build\en"` が表示

### エラー種別と対処

| エラー | 原因 | 対処 |
|-------|------|------|
| `broken links` | 内部リンク切れ | パスを修正 |
| `broken markdown links` | MDファイル参照エラー | ファイル存在確認 |
| `duplicate routes` | 同じURLパス | slug/ファイル名を変更 |
| `missing sidebar item` | sidebars.tsに未登録 | sidebars.tsを更新 |

## 多言語ビルド

両言語でビルドが必要:
- ja (日本語) - メイン
- en (英語) - サブ

英語版がない場合、日本語がフォールバックとして使用される。
