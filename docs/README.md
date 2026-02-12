# Open-WebUI 和 MCP Server 課程講義

本目錄包含 54 小時課程的完整講義，採由淺入深的學習路徑。

---

## 課程總目標

1. 理解 MCP Server 架構與設計理念
2. 能獨立設計並開發自訂 MCP Server
3. 理解 MCP Server 不依賴 Open-WebUI 也可獨立運作
4. 能整合外部 API、資料庫、向量資料庫與檔案系統
5. 使用 Docker 建立完整可部署環境

---

## 講義章節（按學習順序）

| 章節 | 檔案 | 對應階段 | 節數 |
|------|------|----------|------|
| 1 | [01-minimal-mcp.md](01-minimal-mcp.md) | 前導：MCP 最小可運行範例 | 暖身 |
| 2 | [02-docker-architecture.md](02-docker-architecture.md) | 第一階段：Docker 架構實戰 | 1-4 節 |
| 3 | [03-api-integration.md](03-api-integration.md) | 第二階段：外部 API 整合（YouBike） | 5-8 節 |
| 4 | [04-postgresql.md](04-postgresql.md) | 第三階段：PostgreSQL 雲端資料庫 | 9-12 節 |
| 5 | [05-qdrant.md](05-qdrant.md) | 第四階段：Qdrant 向量資料庫 | 13-15 節 |
| 6 | [06-cloud-integration.md](06-cloud-integration.md) | 第五階段：檔案系統與雲端整合 | 16-18 節 |
| 7 | [07-packaging.md](07-packaging.md) | 第六階段：套件化發布（進階） | 進階模組 |

---

## 核心專案對應

- **專案一：YouBike API** → `03-api-integration.md` + `examples/youbike-mcp/`
- **專案二：PostgreSQL** → `04-postgresql.md` + `examples/postgres-mcp/`
- **專案三：Qdrant 向量資料庫** → `05-qdrant.md` + `examples/qdrant-mcp/`
- **專案四：Markdown 產生與儲存** → `06-cloud-integration.md`
