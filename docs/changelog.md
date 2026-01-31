---
sidebar_position: 101
---

# 更新履歴

<!-- AUTO-GENERATED: このページはリリースノートから自動生成されます -->

KawaiiPhysicsの更新履歴です。

最新のリリース情報は [GitHub Releases](https://github.com/pafuhana1213/KawaiiPhysics/releases) を参照してください。

## v1.16.x (UE 5.3-5.5対応)

### v1.16.0

**新しい外部力システム**

外部力の適用プロセスが大幅に改善されました。一部のボーンにのみ、ボーンのローカル座標系で一定間隔で力を加えることができる複数の外部力プリセットが追加されました。

- 複数のプリセットを組み合わせ可能
- C++でカスタムプリセットを実装可能

**Detailsパネルの整理**

- プロパティ名とカテゴリの再編成
- デバッグ機能をボタン化
- すべてのプロパティにツールチップを追加

**コンソール変数によるデバッグ**

レベル上でデバッグ可能な新しいコンソール変数を追加：

- `a.AnimNode.KawaiiPhysics.Enable`
- `a.AnimNode.KawaiiPhysics.Debug`
- `a.AnimNode.KawaiiPhysics.Debug.LengthRate`

**DataAssetの改善**

- ボーン選択が階層ピッカーで可能に
- AnimNodeのLimits設定をDataAssetにエクスポートするボタンを追加

詳細は [GitHub Discussion #128](https://github.com/pafuhana1213/KawaiiPhysics/discussions/128) を参照してください。

## v1.15.x

### v1.15.0

- UE 5.4対応
- パフォーマンス改善

詳細は [GitHub Discussion #117](https://github.com/pafuhana1213/KawaiiPhysics/discussions/117) を参照してください。

## v1.14.x (UE 5.0-5.2対応)

### v1.14.0

**BoneConstraint機能（実験的）**

骨間の距離拘束を行う BoneConstraint機能が追加されました。

![BoneConstraint Demo](/img/features/boneconstraint-demo.gif)

*スカートなどの布シミュレーションで効果的*

![BoneConstraint Parameters](/img/features/boneconstraint-params.png)

- 指定した骨間（BoneConstraints/Bone1, 2）の距離をXPBDを使用して維持
- `Bone Constraint Iteration Count Before/After Collision` で拘束処理の実行回数を指定可能
- DataAssetでの設定も可能
- 正規表現で拘束対象の骨セットを設定可能

![DataAsset Regex](/img/features/dataasset-regex.png)

**その他の改善**

- KawaiiPhysicsのAnimNodeが持つDataAssetをピンに公開できるようになりました
- Planar Limitの処理を最適化
- 物理処理部分のコードをリファクタリング

詳細は [GitHub Discussion #112](https://github.com/pafuhana1213/KawaiiPhysics/discussions/112) を参照してください。

## v1.13.x

### v1.13.0

**Warm Up機能**

物理の空回し（Warm Up）機能が追加されました。

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/stIOjZQh3Qw"
    title="Warm Up Feature Demo"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen>
  </iframe>
</div>

![Warm Up Parameters](/img/features/warmup-params.png)

- **Need Warm Up** が `true` かつ **Warm Up Frame** が1以上の場合、Warm Up処理が実行されます
- 実行後は Need Warm Up は `false` になります
- Warm Up Frameが大きいほど安定しますが、物理計算の回数が増えるため負荷が上がります

![AnimNode Functions](/img/features/animnode-functions.png)

v1.12.0から対応したAnimNode関数からWarm Upを有効にすることも可能です。

詳細は [GitHub Discussion #104](https://github.com/pafuhana1213/KawaiiPhysics/discussions/104) を参照してください。

## v1.12.x

### v1.12.0

- AnimNode関数を追加
- BlueprintからKawaiiPhysicsノードの状態を動的に変更可能に

詳細は [GitHub Discussion #103](https://github.com/pafuhana1213/KawaiiPhysics/discussions/103) を参照してください。

## v1.11.x (UE 4.27対応)

### v1.11.1

- UE 4.27最終対応バージョン

---

:::note
すべての変更内容は [GitHub Releases](https://github.com/pafuhana1213/KawaiiPhysics/releases) を参照してください。
:::
