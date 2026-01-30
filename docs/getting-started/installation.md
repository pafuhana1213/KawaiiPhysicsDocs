---
sidebar_position: 1
---

# インストール

KawaiiPhysicsをプロジェクトに導入する方法を説明します。

## 方法1: UE Marketplace（推奨）

1. [UE Marketplace](https://www.unrealengine.com/marketplace/ja/product/kawaiiphysics) からプラグインを取得
2. Epic Games Launcherでプロジェクトにインストール
3. プロジェクトを再起動

## 方法2: GitHubからダウンロード

1. [Releases](https://github.com/pafuhana1213/KawaiiPhysics/releases) から対応バージョンをダウンロード
2. `Plugins` フォルダに展開
3. プロジェクトを再起動

```
YourProject/
├── Content/
├── Plugins/
│   └── KawaiiPhysics/    ← ここに配置
└── YourProject.uproject
```

## 方法3: Git Submodule

```bash
cd YourProject
git submodule add https://github.com/pafuhana1213/KawaiiPhysics.git Plugins/KawaiiPhysics
```

## プラグインの有効化

1. **Edit > Plugins** を開く
2. "KawaiiPhysics" を検索
3. **Enabled** にチェック
4. エディタを再起動

<!-- IMAGE_NEEDED: プラグイン有効化画面のスクリーンショット -->

## 確認

プラグインが正しくインストールされると、Animation Blueprintのノード一覧に **Kawaii Physics** が表示されます。

<!-- IMAGE_NEEDED: AnimGraphでKawaiiPhysicsノードを追加する様子 -->
