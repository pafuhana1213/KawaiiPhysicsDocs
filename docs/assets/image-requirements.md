# 必要な画像/動画リスト

このドキュメントはKawaiiPhysicsドキュメントサイトに必要な画像・動画の一覧です。

## 画像撮影の一般ガイドライン

- **解像度**: 最低600x400px、推奨800x600px以上
- **フォーマット**: PNG（スクリーンショット）、GIF（短いアニメーション）、MP4（動画）
- **背景**: シンプルなUEデフォルト背景を使用
- **アノテーション**: 必要に応じて矢印やラベルを追加
- **保存先**: `static/img/` ディレクトリ

---

## 必要な画像一覧

### 1. intro-demo.gif

| 項目 | 内容 |
|-----|------|
| 使用場所 | `docs/intro.md` |
| 種類 | アニメーションGIF |
| 内容 | KawaiiPhysicsのデモ（髪や尻尾が揺れるキャラクター） |
| 要件 | 800x450px以上、30fps、3-5秒ループ |
| 優先度 | 高（トップページ） |

---

### 2. installation-plugin-enable.png

| 項目 | 内容 |
|-----|------|
| 使用場所 | `docs/getting-started/installation.md` |
| 種類 | スクリーンショット |
| 内容 | Edit > Plugins でKawaiiPhysicsを有効化する画面 |
| 要件 | 検索欄に"KawaiiPhysics"、Enabledにチェック状態、800x500px以上 |
| 優先度 | 高 |

---

### 3. installation-animgraph-node.png

| 項目 | 内容 |
|-----|------|
| 使用場所 | `docs/getting-started/installation.md` |
| 種類 | スクリーンショット |
| 内容 | AnimGraphでKawaiiPhysicsノードを検索・追加する様子 |
| 要件 | 右クリックメニュー、"Kawaii Physics"検索結果表示、800x600px以上 |
| 優先度 | 高 |

---

### 4. quickstart-add-node.png

| 項目 | 内容 |
|-----|------|
| 使用場所 | `docs/getting-started/quick-start.md` |
| 種類 | スクリーンショット |
| 内容 | AnimGraphに追加されたKawaiiPhysicsノード |
| 要件 | ノードがOutput Poseに接続された状態、800x500px以上 |
| 優先度 | 高 |

---

### 5. quickstart-preview.mp4 / quickstart-preview.gif

| 項目 | 内容 |
|-----|------|
| 使用場所 | `docs/getting-started/quick-start.md` |
| 種類 | 動画またはGIF |
| 内容 | 基本セットアップ後のプレビュー |
| 要件 | プレビューでボーンが揺れる様子、5-10秒、1280x720px以上 |
| 優先度 | 高 |

---

### 6. concepts-damping-comparison.png / concepts-damping-comparison.gif

| 項目 | 内容 |
|-----|------|
| 使用場所 | `docs/getting-started/basic-concepts.md` |
| 種類 | 比較画像またはGIF |
| 内容 | Damping値の違いを示す比較 |
| 要件 | Damping=0.0, 0.2, 0.5の3パターン横並び、ラベル付き、1200x400px以上 |
| 優先度 | 中 |

---

### 7. bone-chain-root-concept.png

| 項目 | 内容 |
|-----|------|
| 使用場所 | `docs/features/bone-chain.md` |
| 種類 | 図解またはスクリーンショット |
| 内容 | Root Boneの概念図 |
| 要件 | ボーン階層表示、Root Boneと子ボーンを色分け、600x600px以上 |
| 優先度 | 中 |

---

### 8. collision-sphere-example.png

| 項目 | 内容 |
|-----|------|
| 使用場所 | `docs/features/collision-setup.md` |
| 種類 | スクリーンショット |
| 内容 | 球体コリジョンの例 |
| 要件 | デバッグ表示で球体コリジョン可視化、頭や肩に配置、600x400px以上 |
| 優先度 | 中 |

---

### 9. collision-capsule-example.png

| 項目 | 内容 |
|-----|------|
| 使用場所 | `docs/features/collision-setup.md` |
| 種類 | スクリーンショット |
| 内容 | カプセルコリジョンの例 |
| 要件 | デバッグ表示でカプセルコリジョン可視化、腕や脚に配置、600x400px以上 |
| 優先度 | 中 |

---

### 10. curve-editor-ui.png

| 項目 | 内容 |
|-----|------|
| 使用場所 | `docs/features/curve-editor.md` |
| 種類 | スクリーンショット |
| 内容 | カーブエディタのUI |
| 要件 | Details PanelのCurveプロパティ展開、2-3キーポイント設定、700x400px以上 |
| 優先度 | 中 |

---

### 11. data-assets-create.png

| 項目 | 内容 |
|-----|------|
| 使用場所 | `docs/features/data-assets.md` |
| 種類 | スクリーンショット |
| 内容 | Data Asset作成の手順 |
| 要件 | Content Browserでの作成メニュー、またはクラス選択ダイアログ、600x500px以上 |
| 優先度 | 低 |

---

### 12. forces-gravity-direction.png / forces-gravity-direction.gif

| 項目 | 内容 |
|-----|------|
| 使用場所 | `docs/features/wind-and-forces.md` |
| 種類 | 比較画像またはGIF |
| 内容 | 重力方向の異なる設定例 |
| 要件 | 下向き/横向き/上向きの3パターン比較、ラベル付き、1000x400px以上 |
| 優先度 | 低 |

---

### 13. debug-collision-display.png

| 項目 | 内容 |
|-----|------|
| 使用場所 | `docs/advanced/debugging.md` |
| 種類 | スクリーンショット |
| 内容 | コリジョンデバッグ表示 |
| 要件 | デバッグ表示有効、球体/カプセル/平面がワイヤーフレーム表示、800x600px以上 |
| 優先度 | 中 |

---

## 優先度別サマリー

| 優先度 | ファイル数 | 詳細 |
|-------|----------|------|
| 高 | 5 | intro-demo, installation-*, quickstart-* |
| 中 | 6 | concepts-*, bone-chain-*, collision-*, curve-*, debug-* |
| 低 | 2 | data-assets-*, forces-* |

## 撮影環境

推奨するUE環境:
- **エンジンバージョン**: UE 5.3以降
- **サンプルキャラクター**: Mannequin または髪/尻尾付きのカスタムキャラクター
- **照明**: デフォルトライティング
- **ビューポート設定**: Lit モード

## 画像追加後の作業

1. `static/img/` に画像を配置
2. 対応するMarkdownファイルのプレースホルダーコメントを `![alt](path)` 形式に置換
3. `npm run build` でビルド確認
