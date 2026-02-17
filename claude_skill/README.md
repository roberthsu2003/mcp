
# **一、Claude Skill 是什麼（先建立正確概念）**

**Claude Skill = 可被 Claude 呼叫的能力模組**

可以把它理解為：

- MCP Server → 提供工具
- Skill → 封裝工具 + prompt + 行為
- Claude → 自動選擇何時用 Skill

👉 類似：

- ChatGPT 的 GPTs
- OpenAI function calling
- MCP tools
- LangChain tools

但 **Claude Skill 更接近 Agent capability**

---

# **二、Claude Skill 架構（核心理解）**

一個 Skill 本質上包含三件事：

1️⃣ Skill 定義（metadata）

2️⃣ Prompt / 行為規則

3️⃣ Tool 呼叫（可選）

概念結構：

```other
Skill
 ├─ name
 ├─ description
 ├─ instructions
 ├─ tools (optional)
 └─ examples (optional)
```

👉 Claude 會根據使用者問題自動決定是否使用 Skill

---

# **三、學習 Claude Skill 的最佳路線（給你最有效率）**

依你的背景（MCP / Python / 教學），建議順序：

## **Step 1️⃣ 先會用 Claude Desktop + Skills**

👉 最快有感

你要做的是：

- 安裝 Claude Desktop
- 開啟 Skills
- 使用官方 Skills
- 觀察觸發時機

學習重點：

- Claude 何時用 Skill？
- prompt 怎麼寫？
- Skill description 怎麼寫？

---

## **Step 2️⃣ 看 Skill 範例（關鍵）**

Anthropic 官方 repo：

👉 [https://github.com/anthropics/claude-skills](https://github.com/anthropics/claude-skills)

Anthropic 官方 cookbook:

👉 [https://platform.claude.com/cookbook/skills-notebooks-01-skills-introduction](https://platform.claude.com/cookbook/skills-notebooks-01-skills-introduction)

你應該先看這三類：

- web search skill
- code skill
- file skill

學習觀察：

- description 怎麼寫
- instructions 怎麼寫
- 什麼時候會觸發

---

# **四、最重要：Skill 設計心法（老師角度）**

Skill 是否好用，取決於兩件事：

## **1️⃣ description（觸發關鍵）**

Claude 會看 description 判斷是否用 Skill

好的寫法：

❌ 不好

```other
This skill searches database
```

✅ 好

```other
Use this skill when the user asks about
countries, cities, or population data
stored in the world database.
```

👉 明確「使用時機」

---

## **2️⃣ instructions（行為規範）**

告訴 Claude：

- 怎麼用工具
- 回答格式
- 流程

例如：

```other
When using this skill:
1. Identify the relevant country
2. Query the database
3. Return results in markdown table
```

👉 這就是 Agent 行為控制

---

# **五、從 MCP 轉 Skill（你最有感）**

你現在已經會 MCP server 👍

你可以把 MCP 直接變成 Claude Skill：

概念：

```other
Postgres MCP
   ↓
Claude Skill
   ↓
Claude 自動查資料庫
```

這正是 Claude 生態設計目的。

---

# **六、你的第一個 Skill（最推薦實作）**

我建議你做這個：

👉 「World 資料庫查詢 Skill」

因為你之前已經做過 👍

Skill 設計：

name:

```other
world-database
```

description:

```other
Use this skill when the user asks about
countries, cities, population, or regions
stored in the world PostgreSQL database.
```

instructions:

```other
When the user asks about geographic data:

1. Identify relevant table
2. Query database via MCP tool
3. Return result in markdown table
```

👉 你 100% 能做出來

---

# **七、Claude Skill vs MCP（你要理解差異）**

MCP = 工具層

Skill = Agent層

```other
Claude
  ├─ Skills
  │    └─ uses MCP tools
  └─ Chat
```

👉 Skill = MCP + Prompt + 行為

---

# **八、學習 Claude Skill 的最短成功路線（給你）**

我建議你 2 小時完成：

① 安裝 Claude Desktop

② 啟用官方 Skills

③ 看 3 個 Skill 範例

④ 改一個 description

⑤ 觀察觸發差異

⑥ 接 MCP

⑦ 成功自動查 DB

你會直接「開竅」

---

# **九、如果你要教學（超適合你）**

你可以做一門：

👉 Claude Skills + MCP Agent 實務

課程結構：

1. Claude Skills 概念
2. Skill 結構
3. 設計 description
4. 設計 instructions
5. MCP 整合
6. Agent workflow

這會比 LangChain 更直覺 👍

---

# **十、你現在可以做的第一步**

我建議你現在做：

👉 在 Claude Desktop 看 Skills 面板

👉 找 1 個 Skill 看 JSON / 設定

你會立刻理解。

---

# **如果你願意 👍**

我可以幫你做：

- Claude Skill 教學講義
- MCP→Skill 實作範例
- 世界資料庫 Skill
- Claude Agent 課程大綱

你想先做哪一個？