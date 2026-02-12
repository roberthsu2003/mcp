# 第四階段：Qdrant 向量資料庫與 RAG 能力（13-15 節）

## 專案：Docker 建立向量資料庫

### 功能需求

- 使用 Docker 建立向量資料庫容器
- 實作文件嵌入
- 讓 MCP Server 可進行檢索

---

## 內容設計

### 向量資料庫基礎

- 向量資料庫設計概念（Embedding、Similarity Search）
- 為什麼選擇 Qdrant（輕量、免費、內建 Web UI、適合 Docker 教學）

### Qdrant 實作

- Docker 建立 Qdrant 容器
- Qdrant Collection 建立與管理
- 文件嵌入流程設計
- MCP 封裝檢索能力（Upsert / Search）
- 在瀏覽器中使用 Qdrant Web UI 觀察資料
- 架構圖繪製與資料流說明

---

## 實作成果

- 建立一個可視化管理的向量資料庫
- 學生可直接在 UI 看到向量筆數與搜尋結果
- MCP Server 成為 AI 檢索能力層

---

## 相關範例

請參考 `examples/qdrant-mcp/` 專案。
