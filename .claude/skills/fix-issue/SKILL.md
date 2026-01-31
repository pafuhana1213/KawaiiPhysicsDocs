---
name: fix-issue
description: GitHubのIssueを分析して修正する
disable-model-invocation: true
---

# Issue修正

GitHub Issueを分析して修正: $ARGUMENTS

## 手順

### 1. Issue詳細取得
```bash
gh issue view $ARGUMENTS
```

### 2. 問題の理解
- Issue内容を確認
- 関連ファイルを特定
- 再現手順があれば確認

### 3. コードベース調査
- 該当箇所を検索
- 関連ファイルを読み込み
- 原因を特定

### 4. 修正実装
- 必要な変更を実施
- 最小限の修正にとどめる

### 5. 検証
```bash
npm run build
```

### 6. コミット
- Issue番号を含むコミットメッセージ
- 例: `fix: #123 リンク切れを修正`

### 7. PR作成（必要に応じて）
```bash
gh pr create --title "fix: #$ARGUMENTS [修正内容]" --body "Fixes #$ARGUMENTS"
```
