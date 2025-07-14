# 如何使用MCP
每個 MCP 伺服器大部份使用`Typescript MCP SDK 實作`或是`Python MCP SDK 實作`。

## 本機安裝node.js和uv

- 安裝node.js
	- [node.js官網](https://nodejs.org/en)

- 安裝uv
	- [uv官網](https://docs.astral.sh/uv/)

## MCP client

### claude desktop

### github copilot
1. 專案內建立.vscode/mcp.json

```json
{
    "servers": {
        "vscode_postgres": {
        "command": "npx",
        "args": [
        "-y",
        "@modelcontextprotocol/server-postgres",
        "postgresql://postgres:raspberry@host.docker.internal:5432/postgres"
      ]
    }
    },
}
```

2. 專案內的設定 .vscode/settings.json

```json
{
    "chat.mcp.discovery.enabled": true,

    // --- Suggested Settings for better code quality ---

    // Automatically save files after a delay.
    "files.autoSave": "afterDelay",

    // Format a file on save. A default formatter must be available.
    "editor.formatOnSave": true,

    // Trim trailing whitespace when saving a file.
    "files.trimTrailingWhitespace": true
}

```

### cline
### Roo Code
### Cursor

