export const productProfile = {
  "repository": "gui-os-design-guideline-dictionary",
  "title": "GUI・OS別デザインガイドライン辞書",
  "domain": "Dictionary",
  "hostApp": null,
  "rank": 85,
  "tier": "P2",
  "ideaNo": 4,
  "overview": "Webページ、ネイティブアプリ、Windows、Android、その他アプリのデザインガイドラインを辞書的に学べる。レイアウト、入力、ナビゲーション、アクセシビリティ、コンポーネント、OS別慣習、歴史的背景、関連ガイドライン、トレードオフをタグで整理する。",
  "problem": "UI設計では、OSやプラットフォームごとの慣習、アクセシビリティ、実装都合が混ざり、どのガイドラインを優先すべきか判断しづらい。",
  "differentiation": "Web、Windows、Android、制作ツール系UIを横断し、場面別に守るべき慣習と崩してよい理由を学べる。",
  "publish": "GitHub Pages / GitHub Release",
  "surface": "static dictionary site + CLI validation core",
  "entity": "guideline dictionary entry",
  "requiredFields": [
    "id",
    "title",
    "platform",
    "component",
    "principle",
    "tradeoff"
  ],
  "warningField": "sourceReference",
  "qcdsManualTestCap": "S-",
  "qcdsTarget": "A-",
  "benchmarkRepos": [
    "Sunmax0731/listing-delivery-asset-checklist",
    "Sunmax0731/codex-remote-android",
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/movie-telop-transcriber"
  ]
};
