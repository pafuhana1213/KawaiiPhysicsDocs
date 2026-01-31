---
sidebar_position: 2
---

# コリジョン設定

ボーンが体を貫通しないようにコリジョンを設定します。

## コリジョンの種類

### Sphere（球体）

頭や肩など、球形に近い部位に適しています。

<!-- IMAGE_NEEDED: collision-sphere-example.png
     内容: 球体コリジョンの例
     撮影場所: Animation Blueprint プレビューまたはPersona
     要件:
     - デバッグ表示で球体コリジョンが可視化された状態
     - 頭や肩に配置された球体コリジョンの例
     - ボーン（髪など）がコリジョンで制限されている様子
     - 解像度: 600x400px以上
-->

### Capsule（カプセル）

腕や脚など、円柱形に近い部位に適しています。

<!-- IMAGE_NEEDED: collision-capsule-example.png
     内容: カプセルコリジョンの例
     撮影場所: Animation Blueprint プレビューまたはPersona
     要件:
     - デバッグ表示でカプセルコリジョンが可視化された状態
     - 腕や脚に配置されたカプセルコリジョンの例
     - コリジョンの向きと長さが分かる角度
     - 解像度: 600x400px以上
-->

### Plane（平面）

地面や壁など、平らな面での制限に使用します。

## コリジョンの追加

1. KawaiiPhysicsノードを選択
2. **Spherical Limits** / **Capsule Limits** / **Planar Limits** 配列に要素を追加
3. **Driving Bone** を設定（コリジョンが追従するボーン）
4. オフセットとサイズを調整

## Driving Bone

コリジョンはDriving Boneに追従して移動します。

```
upperarm_r (Driving Bone)
    ↓ 追従
[Capsule Collision] → 髪の毛がここで止まる
```

## Inside vs Outside

### Inside（内側制限）

ボーンを球の **内側** に制限します。

- 使用例: 頭の形状に沿わせる

### Outside（外側制限）

ボーンを球の **外側** に制限します。

- 使用例: 肩にめり込まないようにする

## パフォーマンス考慮

コリジョンの数が多いと処理負荷が増加します。

:::tip
- 必要最小限のコリジョンを使用する
- 複雑な形状は複数のシンプルな形状で近似する
:::

詳しくは [パフォーマンス](/docs/advanced/performance) を参照してください。
