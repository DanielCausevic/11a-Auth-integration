
# Firebase Authentication with React (Email/Password Only)

This is a simple React app that demonstrates how to integrate **Firebase Authentication** using **Email/Password login**. It allows users to **sign up**, **log in**, and **log out**, with authentication state managed in real time.

## Features

- Firebase Email/Password authentication
- Signup and Login forms
- Real-time authentication state management
- Clean UI and structure
- Built with React (Create React App)

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (or use your existing one)
3. Go to **Build > Authentication > Sign-in method**
4. Enable **Email/Password**
5. Go to **Project Settings > General > Web App** and register a new web app
6. Copy the Firebase config and replace it in `src/firebase.js`

### Example Firebase Config (already included)

```js
const firebaseConfig = {
  apiKey: "AIzaSyAAc73at4TlG5Fp-s08NSJZNOlcFTCW6e8",
  authDomain: "authentication-26e37.firebaseapp.com",
  projectId: "authentication-26e37",
  storageBucket: "authentication-26e37.firebasestorage.app",
  messagingSenderId: "972986883254",
  appId: "1:972986883254:web:22eea3a51ea9b091499a17",
  measurementId: "G-6H4JJ83QPJ"
};
```

---

### 4. Run the App

```bash
npm start
```

Your app should now be running at `http://localhost:3000`.

---

## Project Structure

```
src/
├── App.js          # Main application logic
├── Login.js        # Login form
├── Signup.js       # Signup form
└── firebase.js     # Firebase configuration and initialization
```

---

## How It Works

- **App.js** uses `onAuthStateChanged` from Firebase to detect if the user is logged in.
- If logged in, the app shows a welcome message and logout button.
- If not, the app lets the user toggle between **Login** and **Signup** views.

---

## Optional Deployment

To deploy using Firebase Hosting:

```bash
npm run build
firebase login
firebase init hosting
firebase deploy
```