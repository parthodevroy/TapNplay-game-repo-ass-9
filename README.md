## Imagination World

A modern gaming platform where users can explore popular games, discover details, download apps, and enjoy smooth navigation with a fully responsive UI.

🔗 Live Demo

 https://fascinating-conkies-6272ee.netlify.app/

 ## Purpose

Imagination World is designed to give users a seamless experience browsing games and discovering the details they care about. Users can register, log in, and enjoy a clean UI built with Tailwind and DaisyUI.
✨ Key Features
🎮 Game Features

Browse all games

Search/filter games

View detailed game information

Download link or external game link

👤 User Features

User registration

Login/Logout system

Firebase authentication

Protected routes

💎 UI/UX

Fully responsive design

TailwindCSS + DaisyUI

Modern, clean interface

Reusable components
🛠️ Tech Stack
Frontend

React (Vite)

React Router DOM

TailwindCSS

DaisyUI

Backend / Auth

Firebase Authentication

Firestore Database (if used)

📦 NPM Packages Used
{
"firebase": "^12.4.0",
    "lucide-react": "^0.548.0",
    "motion": "^12.23.24",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-icons": "^5.5.0",
    "react-router": "^7.9.4",
    "react-router-dom": "^7.9.4",
    "react-slick": "^0.31.0",
    "react-toastify": "^11.0.5",
    "slick-carousel": "^1.8.1",
    "swiper": "^12.0.3",
    }
    ## Folder structure
    src/
 ├── components/
 ├── pages/
 ├── hooks/
 ├── layouts/
 ├── context/
 ├── utils/
 ├── App.jsx
 └── main.jsx
🔧 Setup & Installation

1️⃣ Clone the project
git clone https://github.com/your-username/imagination-world.git
cd imagination-world

2️⃣ Install packages
npm install

3️⃣ Configure Firebase

Create .env file and add:

VITE_apiKey=your_key
VITE_authDomain=your_domain
VITE_projectId=your_id
VITE_storageBucket=your_bucket
VITE_messagingSenderId=your_id
VITE_appId=your_app_id

4️⃣ Run project

npm run dev

🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.
