# 🚀 Smart Placement Assistant

> An AI-powered full-stack web application that helps students improve their resumes, identify skill gaps, and receive personalized placement preparation guidance.

<p align="center">
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/Express.js-API-000000?style=for-the-badge&logo=express" />
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb" />
  <img src="https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker" />
</p>

---

## 📖 Overview

The **Smart Placement Assistant** is a web application designed to help students prepare for placements by analyzing resumes using AI and providing actionable insights.

The platform evaluates resumes, identifies missing skills, recommends learning resources, and generates personalized DSA roadmaps to improve placement readiness.

---

## ✨ Features

- 🔐 Secure User Authentication (JWT + bcrypt)
- 📄 Resume PDF Upload
- 🤖 AI-Powered Resume Analysis
- 📊 Resume Score Generation
- 🎯 Skill Gap Detection
- 📚 Personalized DSA Roadmap
- 👤 Student Dashboard
- 🔍 Resume History
- 📱 Responsive UI
- ⚡ RESTful API Architecture

---

## 🛠 Tech Stack

### Frontend

- React.js
- Tailwind CSS
- Axios
- React Router

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication

- JWT
- bcrypt

### File Upload

- Multer

### DevOps

- Docker

---

## 📂 Project Structure

```
Smart-Placement-Assistant/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── config/
│   └── server.js
│
├── .env
├── docker-compose.yml
├── README.md
└── package.json
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/Smart-Placement-Assistant.git

cd Smart-Placement-Assistant
```

### Install Dependencies

Backend

```bash
cd server
npm install
```

Frontend

```bash
cd client
npm install
```

---

## Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## Running the Project

### Backend

```bash
npm run dev
```

### Frontend

```bash
npm start
```

---

## Docker

Build and start the application:

```bash
docker-compose up --build
```

---

## Screenshots

Add screenshots here after completing the UI.

```
Home Page

Dashboard

Resume Upload

Analysis Result
```

---

## Future Enhancements

- AI Interview Preparation
- ATS Compatibility Checker
- Company-wise Placement Roadmaps
- Mock Interview Platform
- Resume Templates
- Job Recommendation System
- Email Notifications
- Admin Dashboard

---

## Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push your branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

## License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Nitin Kumar**

- LinkedIn: https://www.linkedin.com/in/nitin-undefined-58020541a/
- LeetCode: https://leetcode.com/u/Nitin_kumar_baghel/

---

⭐ If you found this project useful, consider giving it a **Star** on GitHub!
