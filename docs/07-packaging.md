# 第六階段：自訂 MCP 與套件化發布（進階模組）

## 學習目標

本階段為核心能力提升階段，從「會寫 MCP」進化到「可發布與重用的 MCP」。

---

## 學習路徑（由淺入深）

### 第一層：MCP 結構深化

- MCP 專案標準目錄設計
- 設計可重用的 MCP Tool 模組
- 設計設定檔（config / env 分離）
- 日誌（logging）與錯誤處理標準化

### 第二層：模組化重構

- 將 API / DB / Qdrant / Drive 功能拆分為獨立模組
- 建立 services / adapters 結構
- 撰寫清晰的 `__init__.py`
- 設計可擴充架構

### 第三層：Python 套件化

- 建立 pyproject.toml
- 撰寫 setup 設定
- 設計 entry point（CLI 啟動 MCP Server）
- 本地 `pip install -e` 測試

### 第四層：發布與版本管理

- 版本號設計（Semantic Versioning）
- 發布到 TestPyPI
- 正式發布到 PyPI
- 撰寫 README 與使用說明文件

---

## 實作成果

- 學生完成一個可安裝的 MCP 套件
- 使用 `pip install my-mcp-server` 即可啟動服務
- 理解「專案」與「產品」的差異

---

## 教學目標

讓學生具備打造可重用、可部署、可發布的 MCP Server 能力，提升至工程實務等級。
