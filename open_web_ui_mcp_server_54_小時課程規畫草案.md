# Open-WebUI 和 MCP Server 

## 一、課程總目標

1. 理解 MCP Server 架構與設計理念
2. 能獨立設計並開發自訂 MCP Server
3. 理解 MCP Server 不依賴 Open-WebUI 也可獨立運作
4. 能整合外部 API、資料庫、向量資料庫與檔案系統
5. 使用 Docker 建立完整可部署環境

---

## 二、課程核心專案

### 專案一：台北市 YouBike API 查詢系統

- 串接台北市 YouBike Open API
- 使用者可詢問：
  - 某站點剩餘車輛數
  - 某區域站點資訊
  - 最近站點

### 專案二：PostgreSQL 外部資料庫整合

- 連接外部 PostgreSQL
- 建立資料表
- 讓 MCP Server 可查詢與寫入資料

### 專案三：Docker 建立向量資料庫

- 使用 Docker 建立向量資料庫容器
- 實作文件嵌入
- 讓 MCP Server 可進行檢索

### 專案四：Markdown 文件產生與儲存

- 讓 AI 產生 Markdown
- 儲存成實體檔案
- 建立資料夾管理結構

---

## 三、課程架構建議（由淺入深）

⚠ 本課程不加入 Pipeline 架構，專注在「純 MCP Server 設計能力」。
⚠ Docker 從第一節課即全面導入，所有服務皆容器化。
⚠ 課程講義將放置於 GitHub，採版本化管理與章節標籤（Tag）方式維護。

---

### 前導章節：MCP 最小可運行範例（學習暖身）

目標：在不談 Docker、不談雲端整合的情況下，先讓學生理解 MCP 的本質，並建立一個**可被 Claude Desktop 載入的標準 MCP Server**。

內容設計：

第一步：理解 MCP 協定
- MCP 是基於 JSON-RPC 的標準
- Tool 如何註冊
- Claude Desktop 如何啟動 MCP（stdio 模式）

第二步：建立最小可用 MCP（Claude 相容版）
- 單一 Python 檔案
- 使用標準 MCP Server 架構
- 註冊一個最簡單 Tool（例如加法計算）
- 使用 stdio 模式運行
- 在 Claude Desktop 設定檔中加入 MCP

第三步：理解資料流
- Claude → MCP（JSON-RPC）
- MCP 執行 Tool
- MCP 回傳結果
- 畫出最小資料流圖

第四步（對照組）：HTTP 版本
- 使用 FastAPI 建立簡單 HTTP Tool
- 比較 HTTP 與 Claude MCP 協定差異

實作成果：

- 學生能手寫一個 Claude 相容 MCP Server
- 能在 Claude Desktop 中成功載入並使用 Tool
- 理解 MCP 協定與一般 HTTP API 的差異
- 學習曲線平緩，不會一開始就進入多容器架構

教學定位：
這一章是整份 GitHub 講義的入門章節，從標準協定開始建立正確觀念，再進入後續 Docker 與系統整合階段。

---

### 第一階段：Docker 架構實戰（1-4節）

課程一開始即建立完整運行環境：

- 使用 Docker 建立 **Open-WebUI 容器**
- 使用 Docker 建立 **MCP Server 容器**
- 本機安裝 Ollama（不容器化）
- 使用 Ollama 本地模型（例如 llama / gemma 等）
- 設定 Open-WebUI 連接本機 Ollama
- 設定 Open-WebUI 呼叫 MCP Server
- docker-compose 多容器架構設計
- 容器網路（bridge network）說明
- host.docker.internal 概念講解

教學核心：

- 建立「三層架構」概念
  1️⃣ 模型層（Ollama 本機）
  2️⃣ UI 層（Open-WebUI 容器）
  3️⃣ 能力層（MCP Server 容器）

- 強調 MCP Server 並不依賴 Open-WebUI

- 讓學生理解服務之間如何溝通

實作成果：

- 成功建立 2 個 Docker 容器
- Open-WebUI 可呼叫本機 Ollama
- Open-WebUI 可成功呼叫 MCP Server

目標：
讓學生從第一天就理解完整 AI 服務架構，而不是單一程式練習。

---

### 第二階段：外部 API 整合（5-8節）

- RESTful API 設計思維
- 串接台北市 YouBike API
- 解析 JSON 結構
- 將 API 封裝成 MCP Tool
- 容器間網路設計
- 在 Open-WebUI 中測試整合結果
- 設計自然語言查詢 → API 呼叫流程
- 錯誤處理與例外管理

實作成果：

- 使用者可詢問「某站點剩餘車輛數」
- 使用者可詢問「某區域有哪些站點」
- MCP Server 成功從 YouBike API 取得即時資料
- Open-WebUI 成功透過 MCP 顯示即時站點資訊
- 學生理解 API → MCP → UI 的完整資料流

目標：
讓學生理解 MCP 是「能力封裝器」，不是 UI，而是串接外部世界的橋樑。

---

### 第三階段：Render PostgreSQL 雲端資料庫整合（9-12節）

- 使用 Render 免費版建立 PostgreSQL 雲端資料庫
- 使用 DBeaver 連線與管理資料庫
- 匯入現成 CSV 資料（手動匯入流程示範）
- 資料表結構設計與索引觀念
- Python 連線 Render PostgreSQL
- MCP 封裝資料搜尋功能
- 設計「自然語言 → SQL → 回傳結果」流程
- 查詢優化與錯誤排除

教學重點：

- 重點不在資料建置，而在「MCP 如何成為資料搜尋層」
- 讓學生理解 MCP 是資料庫能力封裝器
- 練習將查詢能力暴露給 Open-WebUI 使用

實作成果：

- 成功從雲端 PostgreSQL 查詢資料
- 使用者可透過對話方式搜尋資料表內容
- MCP Server 成為資料服務層

目標：
讓學生理解 MCP 如何整合雲端資料庫並提供查詢能力，而不是只會本地端資料庫操作。

---

### 第四階段：Qdrant 向量資料庫與 RAG 能力（13-15節）

- 向量資料庫設計概念（Embedding、Similarity Search）
- 為什麼選擇 Qdrant（輕量、免費、內建 Web UI、適合 Docker 教學）
- Docker 建立 Qdrant 容器
- Qdrant Collection 建立與管理
- 文件嵌入流程設計
- MCP 封裝檢索能力（Upsert / Search）
- 在瀏覽器中使用 Qdrant Web UI 觀察資料
- 架構圖繪製與資料流說明

實作成果：

- 建立一個可視化管理的向量資料庫
- 學生可直接在 UI 看到向量筆數與搜尋結果
- MCP Server 成為 AI 檢索能力層

---

### 第五階段：檔案系統、雲端整合與完整專案架構（16-18節）

- Markdown 文件產生
- 檔案寫入與資料夾結構設計
- Docker Volume 管理
- 將產生的 Markdown 上傳至 Google Drive
- 使用 Google Apps Script 建立自訂 API
- MCP Server 呼叫 Google Script API
- 權限驗證與 Token 管理概念
- 完整 MCP Server 專案整合
- GitHub 發布與版本管理策略
- 架構圖總整與部署說明

教學定位：

- 示範 MCP 不只可操作本地端服務，也能整合第三方雲端服務
- 讓學生理解「MCP = 系統整合層」
- 認識 API 授權與跨平台資料流設計

實作成果：

- AI 產生 Markdown 報告
- 報告自動上傳至 Google Drive
- 透過自建 Google Script API 存取或管理文件
- 完整展示：本機模型 + Docker 服務 + 雲端整合

目標：
完成一套跨本地與雲端的 MCP 架構專案，讓學生理解企業級整合思維，而不僅是單機練習。

---

---

### 第六階段：自訂 MCP 與套件化發布（進階模組）

本階段為核心能力提升階段，從「會寫 MCP」進化到「可發布與重用的 MCP」。

學習路徑（由淺入深）：

第一層：MCP 結構深化

- MCP 專案標準目錄設計
- 設計可重用的 MCP Tool 模組
- 設計設定檔（config / env 分離）
- 日誌（logging）與錯誤處理標準化

第二層：模組化重構

- 將 API / DB / Qdrant / Drive 功能拆分為獨立模組
- 建立 services / adapters 結構
- 撰寫清晰的 **init**.py
- 設計可擴充架構

第三層：Python 套件化

- 建立 pyproject.toml
- 撰寫 setup 設定
- 設計 entry point（CLI 啟動 MCP Server）
- 本地 pip install -e 測試

第四層：發布與版本管理

- 版本號設計（Semantic Versioning）
- 發布到 TestPyPI
- 正式發布到 PyPI
- 撰寫 README 與使用說明文件

實作成果：

- 學生完成一個可安裝的 MCP 套件
- 使用 pip install my-mcp-server 即可啟動服務
- 理解「專案」與「產品」的差異

目標：
讓學生具備打造可重用、可部署、可發布的 MCP Server 能力，提升至工程實務等級。

---

## 四、討論方向

1. 是否要加入 Agent 架構概念？
2. 是否要讓學生自行設計一個 MCP 專案作為期末？
3. PostgreSQL 是否用雲端或本地端？
4. 是否要安排除錯與實戰情境？
5. 是否將套件發布設計為期末專題要求？

---

（請在此文件上方或下方加入你的想法，我們可以逐步優化整體結構。））

