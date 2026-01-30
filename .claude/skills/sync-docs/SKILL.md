---
name: sync-docs
description: KawaiiPhysicsソースコードを解析してドキュメントを同期・更新する。パラメータリファレンスやAPIドキュメントを最新の状態に保つ。
context: fork
agent: source-analyzer
disable-model-invocation: true
allowed-tools: Bash, Read, Write, Edit, Grep, Glob
---

# ドキュメント同期

KawaiiPhysicsリポジトリのソースコードを解析し、ドキュメントを更新します。

## 手順

### 1. ソースコード取得
```bash
git clone --depth 1 https://github.com/pafuhana1213/KawaiiPhysics.git /tmp/KawaiiPhysics
```

### 2. 解析対象ファイル
- `/tmp/KawaiiPhysics/Plugins/KawaiiPhysics/Source/KawaiiPhysics/Public/AnimNode_KawaiiPhysics.h`
- `/tmp/KawaiiPhysics/Plugins/KawaiiPhysics/Source/KawaiiPhysics/Public/KawaiiPhysicsLibrary.h`
- `/tmp/KawaiiPhysics/Plugins/KawaiiPhysics/Source/KawaiiPhysics/Public/KawaiiPhysicsLimitsDataAsset.h`

### 3. 抽出パターン
```cpp
UPROPERTY(EditAnywhere, Category = "CategoryName", meta = (ClampMin = "0", ClampMax = "1"))
float ParameterName; // 日本語コメント
```

### 4. 更新対象ドキュメント
- `docs/parameters/physics.md`
- `docs/parameters/collision.md`
- `docs/parameters/limits.md`
- `docs/parameters/external-forces.md`
- `docs/api/animnode-kawaiiphysics.md`
- `docs/api/kawaiiphysics-library.md`

### 5. 検証
```bash
npm run build
```

## 出力形式

各パラメータを以下の形式でドキュメント化:

```markdown
## ParameterName

**説明文**（ソースコードのコメントから）

| プロパティ | 値 |
|-----------|-----|
| 型 | [型名] |
| デフォルト | [値] |
| 範囲 | [min] - [max] |
| カテゴリ | [Category名] |
```
