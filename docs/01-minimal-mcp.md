# 前導章節：MCP 最小可運行範例（學習暖身）

## 目標

在不談 Docker、不談雲端整合的情況下，先讓學生理解 MCP 的本質，並建立一個**可被 Claude Desktop 載入的標準 MCP Server**。

---

## 內容設計

### 第一步：理解 MCP 協定

- MCP 是基於 JSON-RPC 的標準
- Tool 如何註冊
- Claude Desktop 如何啟動 MCP（stdio 模式）

### 第二步：建立最小可用 MCP（Claude 相容版）

- 單一 Python 檔案
- 使用標準 MCP Server 架構
- 註冊一個最簡單 Tool（例如加法計算）
- 使用 stdio 模式運行
- 在 Claude Desktop 設定檔中加入 MCP

### 第三步：理解資料流

- Claude → MCP（JSON-RPC）
- MCP 執行 Tool
- MCP 回傳結果
- 畫出最小資料流圖

### 第四步（對照組）：HTTP 版本

- 使用 FastAPI 建立簡單 HTTP Tool
- 比較 HTTP 與 Claude MCP 協定差異

---

## 實作成果

- 學生能手寫一個 Claude 相容 MCP Server
- 能在 Claude Desktop 中成功載入並使用 Tool
- 理解 MCP 協定與一般 HTTP API 的差異
- 學習曲線平緩，不會一開始就進入多容器架構

---

## 教學定位

這一章是整份 GitHub 講義的入門章節，從標準協定開始建立正確觀念，再進入後續 Docker 與系統整合階段。

---

## 相關範例

請參考 `examples/minimal-mcp/` 專案。
