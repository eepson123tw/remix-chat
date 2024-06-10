# Chat Application README

## 簡介 Introduction

這是一個基於 React 和 Socket.IO 的即時聊天應用，使用了現代化的前端技術堆疊和設計，並且支援中英文的輸入。用戶可以在不同的聊天界面中進行即時通訊，同時可以自動播放打字音效，以提升互動體驗。

This is a real-time chat application based on React and Socket.IO, utilizing a modern front-end tech stack and design. The application supports both Chinese and English input. Users can communicate in real-time in various chat interfaces, with typing sound effects to enhance the interactive experience.

## Features

- **即時聊天 Real-time Chat**: 支援多用戶即時通訊。
- **中英文輸入支援 Chinese and English Input Support**: 正確處理中文輸入法，防止選字過程中多次觸發事件。
- **打字音效 Typing Sound Effect**: 用戶在打字時播放音效，停止打字時音效暫停，繼續打字音效從上次位置繼續播放。
- **多種圖標功能 Various Icon Functions**: 包含發送圖片、附件、表情等功能。
- **自動選字功能 Auto-suggestion**: 在打字時提供表情選擇。
- **響應式設計 Responsive Design**: 適用於桌面和移動端設備。

## 技術技堆疊 Tech Stack

### 前端 Frontend

- **React**: 用於構建用戶界面。
- **Socket.IO**: 用於實現即時通信功能。
- **Tailwind CSS**: 用於快速設計美觀且響應式的樣式。
- **Framer Motion**: 用於動畫效果。
- **Lucide Icons**: 提供豐富的圖標選擇。
- **Remix**: 現代化的 React 框架，用於服務端渲染和路由管理。
- [前端 UI 參考](https://github.com/jakobhoeg/shadcn-chat)

### 後端 Backend

- **Node.js**: 基於 JavaScript 的運行環境。
- **Express**: 用於構建 API 和處理 HTTP 請求。
- **Socket.IO**: 用於實現即時通信功能。
- **OpenAI**: 用於 ChatGPT 的 API 整合，提供智能聊天機器人回覆。

## 使用方法 Usage

### 前端部分 Frontend

1. 安裝依賴項目 Install dependencies:

   ```bash
   npm install
   ```

2. 啟動開發伺服器 Start the development server:

   ```bash
   npm run dev
   ```

3. 編譯 Tailwind CSS:

   ```bash
   npm run build:css
   ```

4. 訪問 http://localhost:3000 使用應用 Access the application at http://localhost:3000

### 後端部分 Backend [因為涉及金鑰不公開]

1. 安裝依賴項目 Install dependencies:

   ```bash
   npm install
   ```

2. 啟動伺服器 Start the server:

   ```bash
   npm start
   ```

3. 確保後端伺服器在正確的端口運行，默認為 3000 Ensure the backend server is running on the correct port, default is 3000.

### 環境變數 Environment Variables

1. 在項目根目錄下創建 `.env` 文件 Create a `.env` file at the root of the project:
   ```env
   VITE_SOCKET_SERVER_URL=http://localhost:3000
   OPENAI_API_KEY=your_openai_api_key
   ```

### 部署 Deployment

1. 編譯前端項目 Build the frontend project:

   ```bash
   npm run build
   ```

2. 部署後端伺服器 Deploy the backend server:
   ```bash
   npm start
   ```

## 文件結構 File Structure

- **public/**: 公共資源目錄，用於存放靜態文件
- **src/**: 源碼目錄，包含前端和後端代碼
  - **components/**: React 組件
  - **data/**: 模擬數據
  - **hooks/**: 自定義 Hook
  - **pages/**: 頁面組件
  - **styles/**: 樣式文件
  - **utils/**: 工具函數
- **server/**: 後端代碼目錄
  - **routes/**: API 路由
  - **controllers/**: 控制器
  - **models/**: 數據模型
  - **middlewares/**: 中間件
  - **utils/**: 工具函數

## 後端部分 Backend Details

- **Socket.IO**:

  - 監聽用戶連接和斷開連接事件
  - 處理用戶消息並廣播給所有連接的客戶端
  - 支援輸入法選字過程中的正確消息處理
  - 與 OpenAI API 整合，提供智能聊天機器人回覆

- **API 路由**:
  - **/users**: 用戶管理
  - **/messages**: 消息管理

## License

本項目使用 MIT 許可證進行許可。詳情請參見 LICENSE 文件。

This project is licensed under the MIT License. See the LICENSE file for details.
