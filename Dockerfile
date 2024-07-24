# 使用官方 node.js 運行作為基礎 image
FROM node:22

# 設置工作目錄
WORKDIR /app

# 複製 package.json 和 packeage-lock.json
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製應用程式其它程式碼
COPY  . .

# 開放應用程式運行的端口
EXPOSE 3000

# 執行應用程式的命令
CMD [ "npm", "start" ]