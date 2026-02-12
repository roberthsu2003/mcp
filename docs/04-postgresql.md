# 第三階段：Render PostgreSQL 雲端資料庫整合（9-12 節）

## 專案：PostgreSQL 外部資料庫整合

### 功能需求

- 連接外部 PostgreSQL
- 建立資料表
- 讓 MCP Server 可查詢與寫入資料

---

## 內容設計

### 資料庫建立與管理

- 使用 Render 免費版建立 PostgreSQL 雲端資料庫
- 使用 DBeaver 連線與管理資料庫
- 匯入現成 CSV 資料（手動匯入流程示範）
- 資料表結構設計與索引觀念

### MCP 整合

- Python 連線 Render PostgreSQL
- MCP 封裝資料搜尋功能
- 設計「自然語言 → SQL → 回傳結果」流程
- 查詢優化與錯誤排除

---

## 教學重點

- **重點不在資料建置**，而在「MCP 如何成為資料搜尋層」
- 讓學生理解 MCP 是資料庫能力封裝器
- 練習將查詢能力暴露給 Open-WebUI 使用

---

## 實作成果

- 成功從雲端 PostgreSQL 查詢資料
- 使用者可透過對話方式搜尋資料表內容
- MCP Server 成為資料服務層

---

## 教學目標

讓學生理解 MCP 如何整合雲端資料庫並提供查詢能力，而不是只會本地端資料庫操作。

---

## 相關範例

請參考 `examples/postgres-mcp/` 專案。
