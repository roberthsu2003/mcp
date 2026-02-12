# 第一階段：Docker 架構實戰（1-4 節）

## 課程目標

課程一開始即建立完整運行環境，讓學生從第一天就理解完整 AI 服務架構，而不是單一程式練習。

---

## 內容設計

### 建立完整運行環境

- 使用 Docker 建立 **Open-WebUI 容器**
- 使用 Docker 建立 **MCP Server 容器**
- 本機安裝 Ollama（不容器化）
- 使用 Ollama 本地模型（例如 llama / gemma 等）
- 設定 Open-WebUI 連接本機 Ollama
- 設定 Open-WebUI 呼叫 MCP Server
- docker-compose 多容器架構設計
- 容器網路（bridge network）說明
- host.docker.internal 概念講解

---

## 教學核心：三層架構概念

```
1️⃣ 模型層（Ollama 本機）
2️⃣ UI 層（Open-WebUI 容器）
3️⃣ 能力層（MCP Server 容器）
```

### 重要觀念

- **強調 MCP Server 並不依賴 Open-WebUI**
- 讓學生理解服務之間如何溝通

---

## 實作成果

- 成功建立 2 個 Docker 容器
- Open-WebUI 可呼叫本機 Ollama
- Open-WebUI 可成功呼叫 MCP Server

---

## 前置條件

⚠ 本課程不加入 Pipeline 架構，專注在「純 MCP Server 設計能力」。
⚠ Docker 從第一節課即全面導入，所有服務皆容器化。
⚠ 課程講義將放置於 GitHub，採版本化管理與章節標籤（Tag）方式維護。
