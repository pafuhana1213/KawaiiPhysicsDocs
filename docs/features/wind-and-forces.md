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

### Wind Directional Source対応 {#wind-directional-source}

:::tip バージョン情報
v1.17.0で追加
:::

Unreal EngineのWind Directional Sourceに対応しました。レベルに配置した風の影響を自動的に受けます。

**設定方法:**

1. レベルにWind Directional Sourceを配置
2. KawaiiPhysicsノードで `bEnableWind` を有効化
3. `WindScale` で影響度を調整

Wind Directional Sourceの強度と方向がKawaiiPhysicsの物理ボーンに反映されます。

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

```
重力方向の例:

  ↓ (0, 0, -980)      → (980, 0, 0)      ↑ (0, 0, 980)
  デフォルト重力       横向き重力         上向き重力
  （髪が下に垂れる）   （髪が横になびく） （髪が逆立つ）
```

:::tip
`Gravity`パラメータにFVectorを設定することで、任意の方向に重力を適用できます。
:::

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
