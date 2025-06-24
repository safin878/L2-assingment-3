# 📚 Library Management API

A robust RESTful API for managing a library system built with **Express.js**, **TypeScript**, and **MongoDB** (via Mongoose). This system supports book management, borrowing logic, availability tracking, and aggregation summaries.

---

## ✨ Features

- 📘 **Book Management** — Create, Read, Update, Delete
- 🧾 **Borrow System** — Borrow books with quantity & due date
- 📊 **Borrow Summary** — Aggregation of borrowed quantities
- 🧠 **Mongoose Instance Method** — Update book availability
- 🔁 **Mongoose Middleware** — Timestamp support
- ✅ **Validation** — Book genre, quantity, and availability
- 🔍 **Filtering & Sorting** — Get books by genre, date
- 💡 **Clean Code Structure** — Scalable and modular
- 🔒 **Error Handling** — Clear and structured responses

---

## 🧾 Technologies Used

- ✅ **Node.js** + **Express.js**
- ✅ **MongoDB** + **Mongoose**
- ✅ **TypeScript**
- ✅ **Dotenv**
- ✅ **CORS Middleware**

---

## ⚙️ Installation & Setup Guide

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Create `.env` File

Create a `.env` file in the root directory and paste the following:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/library-management-api
```

> 💡 If you're using **MongoDB Atlas** or **Cloud MongoDB**, replace the local URI with your cloud URI.

### 3️⃣ Run the Application

```bash
# For development
npm run dev

# For production
npm run build
npm start
```

🌐 The server will start at: `http://localhost:5000`

---
