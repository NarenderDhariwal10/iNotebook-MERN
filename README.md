# 📒 iNotebook – MERN Stack Notes App

iNotebook is a full-stack **MERN** application where users can create, update, and manage personal notes securely. Authentication is handled using JWT tokens, and the UI is built with React and Bootstrap.

![Screenshot](/frontend/docs/screenshot.png)

## 🚀 Features

- 🔐 User authentication (Signup/Login/Logout)
- 📝 Create, edit, delete notes
- 📁 Notes stored securely with JWT-authenticated APIs
- 🎨 Responsive UI using Bootstrap
- ⚛️ React Context API for global state management

---

## 🧠 Tech Stack

### Frontend
- React.js
- React Router
- Bootstrap
- Context API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)

---

## 🛠️ Folder Structure
iNotebook/
├── backend/
│ ├── middleware/
| | | |──fetchuser.js
│ ├── models/
| | | |──Notes.js
| | | |──User.js
│ ├── routes/
| | | |──auth.js
| | | |──notes.js
│ ├── db.js
│ ├── index.js
| |──package.json
├── frontend/
│ ├── src/
│ │ ├── components/
| | | |──About.js
| | | |──AddNote.js
| | | |──Alert.js
| | | |──Home.js
| | | |──Login.js
| | | |──NavBar.js
| | | |──Noteitem.js
| | | |──Notes.js
| | | |──Signup.js
│ │ ├── context/notes/
| | | |──noteContext.js
| | | |──NOteState.js
│ │ ├── App.js
│ │ ├── index.js
│ ├── public/
| | | |──index,html
| |──package.json
├── .gitignore
├── README.md
├──LICENSE

## 👨‍💻 Author

**Narender Dhariwal**

- 💼 Aspiring Full Stack Developer (MERN)
- 🎓 Final Year Engineering Student
- 🔗 [LinkedIn](https://linkedin.com/in/narender-dhariwal=053a162259)
- 🧑‍💻 [GitHub](https://github.com/NarenderDhariwal10)