# 第五階段：檔案系統、雲端整合與完整專案架構（16-18 節）

## 專案：Markdown 文件產生與儲存

### 功能需求

- 讓 AI 產生 Markdown
- 儲存成實體檔案
- 建立資料夾管理結構

---

## 內容設計

### 本地檔案系統

- Markdown 文件產生
- 檔案寫入與資料夾結構設計
- Docker Volume 管理

### 雲端整合

- 將產生的 Markdown 上傳至 Google Drive
- 使用 Google Apps Script 建立自訂 API
- MCP Server 呼叫 Google Script API
- 權限驗證與 Token 管理概念

### 專案整合與發布

- 完整 MCP Server 專案整合
- GitHub 發布與版本管理策略
- 架構圖總整與部署說明

---

## 教學定位

- 示範 MCP 不只可操作本地端服務，也能整合第三方雲端服務
- 讓學生理解「**MCP = 系統整合層**」
- 認識 API 授權與跨平台資料流設計

---

## 實作成果

- AI 產生 Markdown 報告
- 報告自動上傳至 Google Drive
- 透過自建 Google Script API 存取或管理文件
- 完整展示：本機模型 + Docker 服務 + 雲端整合

---

## 教學目標

完成一套跨本地與雲端的 MCP 架構專案，讓學生理解企業級整合思維，而不僅是單機練習。
