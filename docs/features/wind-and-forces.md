---
sidebar_position: 3
---

# 風と外部力

KawaiiPhysicsでの風と外部力の設定方法を説明します。

## 風システム

Unreal Engineの風システムと連携できます。

### 有効化

```cpp
UPROPERTY()
bool bEnableWind = false;
```

### Wind Scale

風の影響度を調整します。

```cpp
UPROPERTY()
float WindScale = 1.0f;
```

## カスタム外部力

任意の方向に力を適用できます。

### Blueprintから設定

```cpp
// 前方に力を加える
SetExternalForce(GetActorForwardVector() * 100.0f);
```

### 使用例

- ジャンプ時の風圧表現
- 爆発による吹き飛ばし
- 水中での抵抗

## 重力

### デフォルト重力

```cpp
UPROPERTY()
FVector Gravity = FVector::ZeroVector;
```

### カスタム重力

特定のボーンに異なる重力を適用できます。

<!-- IMAGE_NEEDED: forces-gravity-direction.png (またはGIF)
     内容: 重力方向の異なる設定例
     撮影方法: 複数の重力設定を並べて比較、または切り替えGIF
     要件:
     - デフォルト重力（下向き）: 髪が下に垂れる
     - カスタム重力（横向き）: 髪が横になびく
     - カスタム重力（上向き）: 髪が逆立つ
     - 各設定にラベル/テキストを追加
     - 解像度: 1000x400px以上（横長レイアウト）、またはGIF
-->

## 力の合成

複数の力は加算されて適用されます。

```
最終的な力 = Gravity + Wind + ExternalForce
```

## 動的な制御

ゲーム中に力をリアルタイムで変更できます。

```cpp
// Event Tickで風を変化させる
void AMyCharacter::Tick(float DeltaTime)
{
    // 風の強さをサイン波で変化
    float WindStrength = FMath::Sin(GetWorld()->GetTimeSeconds()) * 50.0f;
    KawaiiPhysicsComponent->SetExternalForce(FVector(WindStrength, 0, 0));
}
```

詳しくは [ランタイム制御](/docs/advanced/runtime-control) を参照してください。
