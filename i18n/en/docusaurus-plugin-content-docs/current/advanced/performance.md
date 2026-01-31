---
sidebar_position: 1
---

# Performance Optimization

This guide explains how to optimize KawaiiPhysics performance.

## Performance Characteristics

KawaiiPhysics is lighter than typical physics simulations because it doesn't use PhysX.

### Processing Cost Factors

| Factor | Impact |
|--------|--------|
| Bone count | High |
| Collision count | Medium-High |
| Node count | Medium |
| Curve usage | Low |

## Optimization Techniques

### 1. Reduce Bone Count

Only make the minimum necessary bones physics targets.

```
// Bad example: All bones as physics targets
hair_root → hair_01 → hair_02 → hair_03 → hair_04 → hair_05

// Good example: Only important bones as physics targets
hair_root → hair_02 → hair_04
```

### 2. Optimize Collision

- Use simple shapes
- Remove overlapping collisions
- Adjust collision count based on LOD

### 3. Disable Based on LOD

KawaiiPhysics can be disabled based on distance.

```cpp
// Disable physics at LOD 2 and above
if (GetCurrentLOD() >= 2)
{
    bEnabled = false;
}
```

### 4. Adjust Tick Rate

Reducing update frequency can reduce load.

## Profiling

### Checking with Unreal Insights

1. Run **stat KawaiiPhysics** console command
2. Check processing time

### Identifying Bottlenecks

- Many bones → Reduce bones
- Heavy collision calculation → Simplify collision
- Many characters → Use LOD

## Benchmark Guidelines

| Character Count | Bones/Character | Approximate Processing Time |
|-----------------|-----------------|----------------------------|
| 1 | 20 | Under 0.1ms |
| 10 | 20 | Around 1ms |
| 50 | 20 | Around 5ms |

:::note
Actual processing time varies by environment. Always profile on actual hardware.
:::
