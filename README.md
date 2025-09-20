# 🌐 Social Media App (React + React Router)

A **mini social media application** built with **React.js** and **React Router** that allows users to:
- 📌 View posts  
- ✍️ Create & Delete posts  
- 👍 Like posts and see the number of reactions  
- 🌍 Fetch posts from a **public API (DummyAPI)**  

This project demonstrates CRUD operations, routing, API integration, and basic state management.



## 🚀 Features
- 📰 **View Posts** → List of 50–100 posts fetched from DummyAPI  
- ✍️ **Create New Post** → Add a new post to the feed  
- ❌ **Delete Post** → Remove any post  
- 👍 **Like Post** → Toggle like/unlike with reaction count update  
- 🔀 **Routing** → Seamless navigation with React Router  
- 🎨 **UI** → Clean interface with icons for like/delete  



## 🛠️ Tech Stack
- **Frontend**: React.js, React Router  
- **Icons**: React Icons (or any icon library you used)  
- **API**: [DummyAPI.io](https://dummyapi.io/)  
- **Styling**: CSS / Tailwind CSS (depending on what you used)  


## 📂 Folder Structure
social-media-app/
#│── public/
#│ └── index.html
#│── src/
#│ ├── components/
#│ │ ├── PostList.jsx
#│ │ ├── PostItem.jsx
#│ │ ├── CreatePost.jsx
#│ │ └── Navbar.jsx
#│ ├── pages/
#│ │ ├── Home.jsx
#│ │ └── About.jsx
#│ ├── App.jsx
#│ ├── index.js
#│ └── App.css
#│── package.json
#└── README.md


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
