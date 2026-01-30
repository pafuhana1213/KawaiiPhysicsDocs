---
paths:
  - "docs/parameters/**/*.md"
  - "docs/api/**/*.md"
---

# Unreal Engine Documentation Rules

## パラメータ記述
```md
## ParameterName

**説明** - パラメータの役割

| プロパティ | 値 |
|-----------|-----|
| 型 | float |
| デフォルト | 0.0 |
| 範囲 | 0.0 - 1.0 |
```

## UPROPERTYからの抽出
- `Category` → ドキュメントのセクション分け
- `meta=(ClampMin, ClampMax)` → 範囲情報
- コメント → 説明文

## コード例
```cpp
// Blueprint呼び出し可能関数の例
UFUNCTION(BlueprintCallable, Category = "KawaiiPhysics")
void SetExternalForce(FVector Force);
```

## ソースコードへのリンク
GitHub上のファイルへのリンクを提供:
`[ソースを見る](https://github.com/pafuhana1213/KawaiiPhysics/blob/master/path/to/file.h#L123)`
