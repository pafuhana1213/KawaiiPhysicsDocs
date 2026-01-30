---
name: verify-build
description: ビルドとリンクチェックを実行
disable-model-invocation: true
---

# ビルド検証

ドキュメントのビルドとリンクチェックを実行します。

## 実行コマンド

```bash
cd "F:\Github\KawaiiPhysicsDocs" && npm run build
```

## チェック項目

1. **ビルドエラー**
   - TypeScriptエラー
   - Markdownパースエラー
   - 不正なfrontmatter

2. **リンクチェック**
   - 壊れた内部リンク（`onBrokenLinks: 'throw'`で検出）
   - 存在しない画像参照

3. **多言語ビルド**
   - ja（日本語）
   - en（英語）
   両方でビルドが通ることを確認

## エラー対処

- リンク切れ: パスを修正、または`docs/`内にファイルを作成
- 画像未発見: `static/img/`に配置、またはプレースホルダーに変更
