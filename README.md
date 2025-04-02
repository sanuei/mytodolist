# Todo List 使用说明文档

一个使用 React、Spring Boot 和 PostgreSQL 构建的现代化待办事项应用。采用美式复古风格界面，支持中文界面。

## 技术栈

### 前端
- React 18
- Styled Components
- Axios
- Noto Sans SC 字体

### 后端
- Spring Boot 3.2.5
- Spring Data JPA
- PostgreSQL
- Lombok
- Jakarta Validation

## 功能特性

- ✅ 美式复古风格界面
- ✅ 创建、获取、更新和删除待办事项
- ✅ 标记待办事项为已完成/未完成
- ✅ 响应式设计
- ✅ 自定义配色方案：
  - 主色：#e8d8c9（米色）
  - 次要色：#4b607f（深蓝灰）
  - 强调色：#f3701e（橙色）

## 安装说明

### 前置要求

- Node.js 16+
- Java Development Kit (JDK) 17+
- PostgreSQL 12+
- Maven 3.6+

### 数据库配置

1. 创建 PostgreSQL 数据库：
```sql
CREATE DATABASE todo_db;
```

2. 修改后端配置文件 `backend/src/main/resources/application.properties`：
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/todo_db
spring.datasource.username=你的数据库用户名
spring.datasource.password=你的数据库密码
```

### 后端安装

1. 进入后端目录：
```bash
cd backend
```

2. 使用 Maven 安装依赖：
```bash
mvn clean install
```

3. 启动后端服务：
```bash
mvn spring-boot:run
```

后端服务将在 http://localhost:8080 运行

### 前端安装

1. 进入前端目录：
```bash
cd frontend
```

2. 安装依赖：
```bash
npm install
```

3. 启动开发服务器：
```bash
npm start
```

前端应用将在 http://localhost:3000 运行

## 使用说明

1. 添加待办事项：
   - 在输入框中输入任务名称和描述（可选）
   - 点击“添加”按钮

2. 完成待办事项：
   - 点击待办事项前的复选框

3. 删除待办事项：
   - 点击待办事项右侧的“删除”按钮

## 接口说明

### API 端点

- GET `/api/todos` - 获取所有待办事项
- POST `/api/todos` - 创建新待办事项
- PUT `/api/todos/{id}` - 更新待办事项
- DELETE `/api/todos/{id}` - 删除待办事项

### 项目结构

```
.
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/todoapp/backend/
│   │   │   │       ├── config/
│   │   │   │       ├── controller/
│   │   │   │       ├── model/
│   │   │   │       ├── repository/
│   │   │   │       └── service/
│   │   │   └── resources/
│   │   └── test/
│   └── pom.xml
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## 故障排除

1. 如果遇到 CORS 问题：
   - 确保后端服务正在运行
   - 检查 `WebConfig.java` 中的 CORS 配置
   - 确保前端使用正确的 API 地址

2. 如果数据库连接失败：
   - 检查 PostgreSQL 服务是否运行
   - 检查数据库凭据是否正确
   - 确保数据库已创建

3. 如果前端无法启动：
   - 删除 `node_modules` 并重新安装依赖
   - 检查 Node.js 版本是否兼容

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License

