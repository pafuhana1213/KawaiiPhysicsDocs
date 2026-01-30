---
name: sync-docs
description: KawaiiPhysicsソースコードからドキュメントを同期・更新
---

# ドキュメント同期ワークフロー

KawaiiPhysicsリポジトリのソースコードを解析し、ドキュメントを更新します。

## 実行手順

1. **ソースコードを取得**
   ```bash
   git clone --depth 1 https://github.com/pafuhana1213/KawaiiPhysics.git /tmp/KawaiiPhysics
   ```

2. **ヘッダーファイルを解析**
   - `/tmp/KawaiiPhysics/Plugins/KawaiiPhysics/Source/KawaiiPhysics/Public/AnimNode_KawaiiPhysics.h`
   - UPROPERTYマクロからパラメータ情報を抽出

3. **ドキュメントを更新**
   - `docs/parameters/*.md` を更新
   - `docs/api/*.md` を更新
   - `docs/changelog.md` にリリース情報を追加

4. **ビルド検証**
   ```bash
   npm run build
   ```

5. **変更をコミット**
   - 変更があればコミットを作成
   - PR作成を提案

## パラメータ抽出パターン

```cpp
// このパターンを検索
UPROPERTY(EditAnywhere, Category = "...", meta = (...))
float ParameterName;
```

抽出する情報:
- パラメータ名
- 型
- カテゴリ
- メタ情報（範囲、ツールチップなど）
- コメント（日本語含む）
