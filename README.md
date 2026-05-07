# GUI・OS別デザインガイドライン辞書

Webページ、ネイティブアプリ、Windows、Android、その他アプリのデザインガイドラインを辞書的に学べる。レイアウト、入力、ナビゲーション、アクセシビリティ、コンポーネント、OS別慣習、歴史的背景、関連ガイドライン、トレードオフをタグで整理する。

| 項目 | 内容 |
| --- | --- |
| Rank | 85 |
| Domain | Dictionary |
| Idea No. | 4 |
| Repository | gui-os-design-guideline-dictionary |
| 主な公開先 | GitHub Pages / GitHub Release |

## Implementation

- `src/product-profile.mjs`: プロダクト定義。
- `src/core.mjs`: 入力正規化とバッチ評価。
- `src/validators.mjs`: 必須項目と warning 項目の検査。
- `src/review-model.mjs`: QCDS / 手動レビュー向けモデル。
- `src/report.mjs`: Markdown / HTML レポート生成。
- `src/app-adapter.mjs`: static dictionary site + CLI validation core 向けの表示状態を作る。
- `src/cli.mjs`: CLI。
- `public/`: closed alpha preview 用の静的 UI。

## Validation

```powershell
npm test
npm start
```

`npm test` で代表シナリオ、QCDS、docs ZIP、静的UI smoke、文字化けを検証します。

## Strict QCDS Docs

- [Remote benchmark](docs/qcds-remote-benchmark.md)
- [Strict metrics](docs/qcds-strict-metrics.json)
- [Traceability matrix](docs/traceability-matrix.md)
- [Release evidence](docs/release-evidence.json)
