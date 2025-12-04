# 💬 Real-Time Chat Application

A full-stack real-time messaging application built with the **MERN** stack (MongoDB, Express, React, Node.js) and **Socket.io**.

## 🚀 Features

-   **Authentication & Authorization**: Secure signup, login, and logout using JWT (JSON Web Tokens).
-   **Real-Time Messaging**: Instant messaging powered by Socket.io.
-   **Online Status**: See who is currently online in real-time.
-   **Image Sharing**: Send images in chats (stored via Cloudinary).
-   **Profile Management**: Update your profile picture.
-   **Responsive Design**: Built with TailwindCSS and DaisyUI for a seamless mobile and desktop experience.
-   **Theme Support**: Beautiful UI with dark mode support.

## 🛠️ Tech Stack

### Frontend
-   **React** (Vite)
-   **TailwindCSS** & **DaisyUI** (Styling)
-   **Zustand** (State Management)
-   **Axios** (API Requests)
-   **React Router** (Navigation)
-   **Socket.io-client** (Real-time connection)

### Backend
-   **Node.js** & **Express**
-   **MongoDB** (Database)
-   **Socket.io** (Real-time communication)
-   **JWT** (Authentication)
-   **Cloudinary** (Image Storage)
-   **Cookie-Parser** (Secure auth cookies)

## 🔧 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/omahajan91/Chatting-App.git
    cd Chatting-App
    ```

2.  **Setup Backend**
    ```bash
    cd backend
    npm install
    ```
    Create a `.env` file in the `backend` directory:
    ```env
    PORT=5001
    MONGO_URL=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    NODE_ENV=development
    CLIENT_URL=http://localhost:5173
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    ```

3.  **Setup Frontend**
    ```bash
    cd ../frontend
    npm install
    ```
    Create a `.env` file in the `frontend` directory (optional if using default localhost):
    ```env
    # Only needed if you want to override defaults
    # VITE_API_URL=http://localhost:5001
    ```

## 🏃‍♂️ Running the App

You can run the backend and frontend separately.

**1. Start Backend**
```bash
cd backend
npm run dev
```

**2. Start Frontend**
```bash
cd frontend
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Build for Production

The root `package.json` includes scripts to build the entire app.

```bash
npm run build
```

## 🤝 Contributing

Contributions are welcome! 

## 📩 Contact

Linkden: https://www.linkedin.com/in/om-mahajan-43805223b/

Email: omrmahajan9477@gmail.com

Moblie: 9922449477
