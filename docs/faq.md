---
sidebar_position: 100
---

# FAQ

よくある質問と回答です。

## 一般

### Q: KawaiiPhysicsは無料ですか？

**A:** はい、MITライセンスで無料で使用できます。商用利用も可能です。

### Q: PhysXとの違いは？

**A:** KawaiiPhysicsはPhysXを使用しない独自の軽量アルゴリズムを採用しています。PhysXより軽量で、アニメーションとの親和性が高いのが特徴です。

### Q: どのバージョンのUEに対応していますか？

**A:** 各KawaiiPhysicsバージョンは複数のUEバージョンに対応しています：

| KawaiiPhysics | 対応UEバージョン |
|---------------|-----------------|
| v1.20.x       | 5.3, 5.4, 5.5, 5.6, 5.7 |
| v1.19.x       | 5.3, 5.4, 5.5, 5.6 |
| v1.18.x       | 5.3, 5.4, 5.5 |
| v1.17.x       | 5.3, 5.4, 5.5 |
| v1.16.x       | 5.3, 5.4 |
| v1.14.x       | 5.0, 5.1, 5.2 |
| v1.11.1       | 4.27 |

## セットアップ

### Q: Root Boneは何を設定すればいいですか？

**A:** 物理を適用したいボーンチェーンの **親ボーン** を設定します。例えば髪の毛を揺らしたい場合、`head`や`spine_03`などの髪の親となるボーンを設定します。

### Q: 複数の部位を物理させたい場合は？

**A:** 部位ごとに別のKawaiiPhysicsノードを使用してください。これにより、部位ごとに異なるパラメータを設定できます。

## トラブルシューティング

### Q: ボーンが動きません

**A:** 以下を確認してください：
1. Root Boneに子ボーンが存在するか
2. Stiffnessが高すぎないか（0.05程度から開始）
3. Animation Blueprintでノードが接続されているか

### Q: 体を貫通してしまいます

**A:** コリジョンを設定してください。Spherical Limits や Capsule Limits を追加し、体の形状に合わせて調整します。

### Q: 動きが激しすぎます

**A:** Dampingの値を上げてください。0.1〜0.3程度が一般的です。

### Q: パフォーマンスが悪いです

**A:** 以下を検討してください：
1. ボーン数を減らす
2. コリジョン数を減らす
3. 距離に応じて無効化する（LOD）

## 機能

### Q: 風の影響を受けさせたいです

**A:** `bEnableWind`を有効にし、ワールドに風のソースを配置してください。`WindScale`で影響度を調整できます。

### Q: ランタイムでパラメータを変更できますか？

**A:** はい、`UKawaiiPhysicsLibrary`の関数を使用するか、Animation Blueprintの変数を通じて変更できます。

### Q: Data Assetで設定を共有できますか？

**A:** はい、`KawaiiPhysicsLimitsDataAsset`を作成し、複数のキャラクターで共有できます。

## その他

### Q: バグを見つけました / 機能リクエストがあります

**A:** [GitHub Issues](https://github.com/pafuhana1213/KawaiiPhysics/issues) または [Discussions](https://github.com/pafuhana1213/KawaiiPhysics/discussions) でお知らせください。

### Q: 商用プロジェクトで使えますか？

**A:** はい、MITライセンスなので商用利用可能です。ライセンス表記のみお願いします。

### Q: スカートが足を貫通してしまいます

**A:** v1.20.0で追加された[Sync Bone機能](/docs/features/sync-bone)を使用してください。足のボーンの動きをスカートに反映させることで、コリジョンを使わずに貫通を防止できます。また、[BoneConstraint](/docs/parameters/limits#bone-constraint)機能と併用することで、より自然な動きが実現できます。

### Q: 複数のボーンチェーンを1つのノードで制御したいです

**A:** v1.17.0で追加された[Additional Root Bones](/docs/features/bone-chain#additional-root-bones)機能を使用してください。同じパラメータで複数のルートボーンを設定できます。

### Q: Fabストアで入手できますか？

**A:** はい、v1.19.0からFabストアでも配布しています。[Fab](https://www.fab.com/ja/listings/f870c07e-0a02-4a78-a888-e52a22794572)からダウンロードできます。
