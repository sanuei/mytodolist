# Todo List ?��

��Ф���� React��Spring Boot �� PostgreSQL �è��Ū?�岽��?��??�ѡ���������?��?��??���ٻ���ʸ���̡�

## ��??

### ��ü
- React 18
- Styled Components
- Axios
- Noto Sans SC ����

### ��ü
- Spring Boot 3.2.5
- Spring Data JPA
- PostgreSQL
- Lombok
- Jakarta Validation

## ��ǽ����

- ? ����?��?�ʳ���
- ? ?����?�衢������?����?��?
- ? ??��?��??�ᴰ��/̤����
- ? ���?��??
- ? ����?�ۿ�����
  - �翧?��#e8d8c9���ƿ���
  - ���׿���#4b607f�ʿ�?����
  - ??����#f3701e��������

## ����?��

### �����׵�

- Node.js 16+
- Java Development Kit (JDK) 17+
- PostgreSQL 12+
- Maven 3.6+

### ����?����

1. ?�� PostgreSQL ����?��
```sql
CREATE DATABASE todo_db;
```

2. ������ü����ʸ�� `backend/src/main/resources/application.properties`��
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/todo_db
spring.datasource.username=���Ū����?��?̾
spring.datasource.password=���Ū����?̩?
```

### ��ü����

1. ?����ü��?��
```bash
cd backend
```

2. ���� Maven ������?��
```bash
mvn clean install
```

3. ���?��ü��?��
```bash
mvn spring-boot:run
```

��ü��?���� http://localhost:8080 �ό�

### ��ü����

1. ?����ü��?��
```bash
cd frontend
```

2. ������?��
```bash
npm install
```

3. ���???��?�
```bash
npm start
```

��ü?�Ѿ��� http://localhost:3000 �ό�

## ����?��

1. ź����?��?��
   - ��?������?��Ǥ???�����ҡʲ�?��
   - ��?"ź��"��?

2. ������?��?��
   - ��?��?��?��Ū??��

3. ?����?��?��
   - ��?��?��?��?Ū"?��"��?

## ???��

### API ü��

- GET `/api/todos` - ?���ͭ��?��?
- POST `/api/todos` - ?������?��?
- PUT `/api/todos/{id}` - ������?��?
- DELETE `/api/todos/{id}` - ?����?��?

### ?��?�è

```
.
������ backend/
��   ������ src/
��   ��   ������ main/
��   ��   ��   ������ java/
��   ��   ��   ��   ������ com/todoapp/backend/
��   ��   ��   ��       ������ config/
��   ��   ��   ��       ������ controller/
��   ��   ��   ��       ������ model/
��   ��   ��   ��       ������ repository/
��   ��   ��   ��       ������ service/
��   ��   ��   ������ resources/
��   ��   ������ test/
��   ������ pom.xml
������ frontend/
��   ������ public/
��   ������ src/
��   ��   ������ components/
��   ��   ������ App.js
��   ��   ������ index.js
��   ������ package.json
������ README.md
```

## �ξ��ӽ�

1. ǡ�̶��� CORS ??��
   - ����ݹ�ü��?���ߏό�
   - ?? `WebConfig.java` ��Ū CORS ����
   - �������ü���������Ū API ��Ԯ

2. ǡ�̿���??�ܼ�?��
   - ?? PostgreSQL ��?���ݏό�
   - ??����?�߿����������
   - ����ݿ���?��?��

3. ǡ����ü��ˡ���?��
   - ���� `node_modules` ���ſ�������?
   - ?? Node.js �������ݷ���

## ?��

?����� Issue �� Pull Request��

## ?��

MIT License 