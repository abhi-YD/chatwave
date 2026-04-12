# ChatWave — Real-Time MERN Chat Platform

A full-stack real-time chat application built with the **MERN stack** and **Socket.IO**. ChatWave supports instant messaging, image sharing, user authentication, and multiple themes.

---

## 🚀 Features

- 🔐 **JWT Authentication** — Secure signup/login with cookie-based tokens
- ⚡ **Real-Time Messaging** — Powered by Socket.IO for instant delivery
- 🟢 **Online Status** — See who's online in real time
- 🖼️ **Image Sharing** — Upload and send images via Cloudinary
- 🎨 **32 Themes** — DaisyUI-powered theme switcher
- 👤 **Profile Management** — Update your avatar and profile info
- 📱 **Responsive Design** — Works on desktop and mobile

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express | REST API server |
| MongoDB + Mongoose | Database & ODM |
| Socket.IO | Real-time WebSocket communication |
| JWT + bcryptjs | Authentication & password hashing |
| Cloudinary | Cloud image storage |

### Frontend
| Technology | Purpose |
|---|---|
| React 18 + Vite | UI framework & build tool |
| Zustand | State management |
| Tailwind CSS + DaisyUI | Styling & UI components |
| Socket.IO Client | Real-time client connection |
| Axios | HTTP requests |
| React Router v6 | Client-side routing |

---

## 📁 Project Structure

```
ChatWave/
├── backend/
│   ├── src/
│   │   ├── controllers/    # Route handlers
│   │   ├── lib/            # DB, Cloudinary, Socket, Utils
│   │   ├── middleware/     # Auth middleware
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   └── index.js        # Entry point
│   ├── .env.example        # Environment variable template
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/     # Reusable UI components
    │   ├── pages/          # Route-level pages
    │   ├── store/          # Zustand global state
    │   └── lib/            # Axios config, utilities
    ├── public/
    └── package.json
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Cloudinary account

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/chatwave.git
cd chatwave
```

### 2. Setup Backend

```bash
cd backend
npm install
cp .env.example .env
# Fill in your values in .env
npm run dev
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

### 4. Open in Browser

```
Frontend: http://localhost:5173
Backend:  http://localhost:5001
```

---

## 🔐 Environment Variables

Copy `backend/.env.example` → `backend/.env` and fill in:

| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB Atlas connection string |
| `PORT` | Backend server port (default: 5001) |
| `JWT_SECRET` | Secret key for JWT signing |
| `NODE_ENV` | `development` or `production` |
| `CLOUDINARY_CLOUD_NAME` | Your Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Your Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Your Cloudinary API secret |

> ⚠️ **Never commit your `.env` file to GitHub!**

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit changes: `git commit -m "Add my feature"`
4. Push to branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

> Built with ❤️ using the MERN Stack
