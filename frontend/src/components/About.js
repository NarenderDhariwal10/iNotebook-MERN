import React from 'react';

const About = () => {
  return (
    <div className="container py-5">
      <div className="card shadow-lg p-4 rounded">
        <h2 className="text-center text-primary mb-4">About iNotebook</h2>
        <p className="lead">
          <strong>iNotebook</strong> is a secure, cloud-based note-taking application that helps you organize and access your notes anytime, from anywhere. It offers user authentication, real-time CRUD operations, and a clean, responsive UI powered by modern web technologies.
        </p>

        <hr />

        <h4 className="text-success mt-4">🚀 Tech Stack</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">⚛️ <strong>React.js</strong> – Frontend library for building UI</li>
          <li className="list-group-item">🌐 <strong>Node.js + Express</strong> – Backend REST API</li>
          <li className="list-group-item">🛢️ <strong>MongoDB</strong> – NoSQL database for storing user notes</li>
          <li className="list-group-item">🔐 <strong>JWT Authentication</strong> – Secure login system</li>
          <li className="list-group-item">🎨 <strong>Bootstrap 5</strong> – Clean and responsive UI styling</li>
        </ul>

        <hr />

        <h4 className="text-info mt-4">✨ Key Features</h4>
        <ul>
          <li>Create, edit, and delete notes instantly</li>
          <li>Secure login and signup with JWT</li>
          <li>Responsive layout (Mobile-first)</li>
          <li>Rich text support (optional add-on)</li>
          <li>Alert system for user actions</li>
        </ul>

        <div className="text-center mt-5">
          <small className="text-muted">Developed with ❤️ by Narender Dhariwal</small>
        </div>
      </div>
    </div>
  );
};

export default About;
