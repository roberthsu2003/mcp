# 第二階段：外部 API 整合（5-8 節）

## 專案：台北市 YouBike API 查詢系統

### 功能需求

- 串接台北市 YouBike Open API
- 使用者可詢問：
  - 某站點剩餘車輛數
  - 某區域站點資訊
  - 最近站點

---

## 內容設計

### API 整合基礎

- RESTful API 設計思維
- 串接台北市 YouBike API
- 解析 JSON 結構
- 將 API 封裝成 MCP Tool
- 容器間網路設計
- 設計自然語言查詢 → API 呼叫流程
- 錯誤處理與例外管理

### 測試與驗證

- 在 Open-WebUI 中測試整合結果

---

## 實作成果

- 使用者可詢問「某站點剩餘車輛數」
- 使用者可詢問「某區域有哪些站點」
- MCP Server 成功從 YouBike API 取得即時資料
- Open-WebUI 成功透過 MCP 顯示即時站點資訊
- 學生理解 API → MCP → UI 的完整資料流

---

## 教學目標

讓學生理解 **MCP 是「能力封裝器」**，不是 UI，而是串接外部世界的橋樑。

---

## 相關範例

請參考 `examples/youbike-mcp/` 專案。
