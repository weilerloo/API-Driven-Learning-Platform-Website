# 📚 API-Driven Learning Platform Website

A full-stack MERN (MongoDB, Express, React, Node.js) learning management platform where **instructors** can create and manage courses, while **students** can enroll, track their progress, and manage a wallet balance for enrollment.  

This project demonstrates **API-driven development** with authentication, role-based access control, and modular architecture.

---

## 🗂 Repository Structure

├──     backend/ # Express + MongoDB server
│ ├──   config/ # DB connection, cloud configs
│ ├──   controllers/ # API controllers (auth, courses, wallet, etc.)
│ ├──   middlewares/ # Auth, validation, etc.
│ ├──   models/ # Mongoose schemas (User, Course, Section, etc.)
│ ├──   routes/ # Express routes
│ └──   server.js # Backend entry point
│
└──     frontend/ # React (Vite) + Redux app
├──     src/
│ ├──   components/ # Reusable UI components
│ ├──   pages/ # Route pages
│ ├──   routes/ # Route config
│ ├──   services/ # API connectors (axios)
│ ├──   slices/ # Redux state management
│ └──   utils/ # Constants & helpers
└──     package.json


---

## ✨ Features

### 👩‍🏫 For Instructors
- Create and manage courses (title, description, price, thumbnail)
- Organize course content into **sections** and **subsections**
- Edit and delete content

### 🎓 For Students
- Register/login and view course catalog
- Enroll into courses using wallet balance
- Watch videos, track course progress
- View enrolled courses inside dashboard

### 💰 Wallet System
- Mock wallet (no payment gateway)
- Top-up balance manually
- Use balance for course enrollment
- Balance persists in MongoDB

### 🔒 Authentication
- JWT-based login/register
- Role-based access (Admin, Instructor, Student)

### 🖥 General
- Responsive UI with **React + Tailwind**
- API-driven architecture
- Redux Toolkit for global state

---

## 🚀 Tech Stack

- **Frontend:** React, React Router, Redux Toolkit, TailwindCSS  
- **Backend:** Node.js, Express.js, MongoDB, Mongoose  
- **Auth:** JWT  
- **Storage:** Cloudinary (for thumbnails/videos)  

---

## ⚙️ Installation

### Prerequisites
- Node.js v16+
- MongoDB (local or Atlas)
- Cloudinary account (for uploads)

### 1. Clone Repo

git clone https://github.com/weilerloo/API-Driven-Learning-Platform-Website.git
cd API-Driven-Learning-Platform-Website

### 2. Backend Setup
cd backend
npm install


Create .env file inside backend/:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
FOLDER_NAME=course_platform


Run backend:

npm run dev

3. Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on http://localhost:5173 (default Vite port).
Backend runs on http://localhost:5000.

🔌 API Endpoints (Samples)
Auth

POST /api/auth/register → Register user

POST /api/auth/login → Login, get token

Wallet

POST /api/wallet/topup → Add balance

GET /api/wallet/balance → Get balance

POST /api/wallet/enroll → Enroll course using wallet

Courses

GET /api/courses → List all courses

GET /api/courses/:id → Course details

POST /api/courses/create → Create course (instructor only)

Progress

POST /api/progress/update → Mark subsection completed

GET /api/progress/:courseId → Get progress %

🖼 Screenshots (Optional)

Add some UI screenshots here if available (dashboard, wallet page, course catalog).

📜 Scripts
Backend

npm run dev → start server in dev mode

npm start → run in production

Frontend

npm run dev → start React app

npm run build → build for production

🧭 Usage Notes

Student & Instructor dashboards have different sidebar menus.

Wallet top-up is mocked — you just enter an amount, and it updates MongoDB.

Students cannot enroll if wallet balance is insufficient.

Completed subsections are tracked in CourseProgress model.

⚠️ Known Issues / TODO

No real payment gateway (only mock wallet).

Improve error messages & form validation.

Add email verification / password reset flows.

👤 Author

Wei Ler
GitHub

📄 License

This project is licensed under the MIT License.
Feel free to use, modify, and distribute.
