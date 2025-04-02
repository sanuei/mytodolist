# Todo List ?用

一个使用 React、Spring Boot 和 PostgreSQL 构建的?代化待?事??用。采用美式?古?格??，支持中文界面。

## 技??

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

- ? 美式?古?格界面
- ? ?建、?取、更新和?除待?事?
- ? ??待?事??已完成/未完成
- ? 响?式??
- ? 自定?配色方案
  - 主色?：#e8d8c9（米色）
  - 次要色：#4b607f（深?灰）
  - ??色：#f3701e（橙色）

## 安装?明

### 前置要求

- Node.js 16+
- Java Development Kit (JDK) 17+
- PostgreSQL 12+
- Maven 3.6+

### 数据?配置

1. ?建 PostgreSQL 数据?：
```sql
CREATE DATABASE todo_db;
```

2. 修改后端配置文件 `backend/src/main/resources/application.properties`：
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/todo_db
spring.datasource.username=你的数据?用?名
spring.datasource.password=你的数据?密?
```

### 后端安装

1. ?入后端目?：
```bash
cd backend
```

2. 使用 Maven 安装依?：
```bash
mvn clean install
```

3. 启?后端服?：
```bash
mvn spring-boot:run
```

后端服?将在 http://localhost:8080 运行

### 前端安装

1. ?入前端目?：
```bash
cd frontend
```

2. 安装依?：
```bash
npm install
```

3. 启???服?器：
```bash
npm start
```

前端?用将在 http://localhost:3000 运行

## 使用?明

1. 添加待?事?：
   - 在?入框中?入任???和描述（可?）
   - 点?"添加"按?

2. 完成待?事?：
   - 点?待?事?前的??框

3. ?除待?事?：
   - 点?待?事?右?的"?除"按?

## ???明

### API 端点

- GET `/api/todos` - ?取所有待?事?
- POST `/api/todos` - ?建新待?事?
- PUT `/api/todos/{id}` - 更新待?事?
- DELETE `/api/todos/{id}` - ?除待?事?

### ?目?构

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

1. 如果遇到 CORS ??：
   - 确保后端服?正在运行
   - ?? `WebConfig.java` 中的 CORS 配置
   - 确保前端使用正确的 API 地址

2. 如果数据??接失?：
   - ?? PostgreSQL 服?是否运行
   - ??数据?凭据是否正确
   - 确保数据?已?建

3. 如果前端无法启?：
   - 清除 `node_modules` 并重新安装依?
   - ?? Node.js 版本是否兼容

## ?献

?迎提交 Issue 和 Pull Request！

## ?可

MIT License 