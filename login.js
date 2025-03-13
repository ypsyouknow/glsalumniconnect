import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC29DbP9BDC1EjqPmWiXusbrdL9t6Istoc",
    authDomain: "alumniconnect-9814b.firebaseapp.com",
    projectId: "alumniconnect-9814b",
    storageBucket: "alumniconnect-9814b.firebasestorage.app",
    messagingSenderId: "1020297737147",
    appId: "1:1020297737147:web:0e84c1b117ed5ab9e90a9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Loaded Successfully!"); // Debugging Check

    // Toggle Forms
    const loginToggle = document.getElementById("login-toggle");
    const signupToggle = document.getElementById("signup-toggle");
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    loginToggle.addEventListener("click", function () {
        loginForm.classList.add("active");
        signupForm.classList.remove("active");
        loginToggle.classList.add("active");
        signupToggle.classList.remove("active");
    });

    signupToggle.addEventListener("click", function () {
        signupForm.classList.add("active");
        loginForm.classList.remove("active");
        signupToggle.classList.add("active");
        loginToggle.classList.remove("active");
    });

    // Toggle User Type
    const userTypeButtons = document.querySelectorAll(".user-type-btn");
    userTypeButtons.forEach(button => {
        button.addEventListener("click", function () {
            userTypeButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Signup Form
    document.querySelector("#signup-form form").addEventListener("submit", function (event) {
        event.preventDefault();
        const name = event.target[0].value.trim();
        const email = event.target[1].value.trim();
        const password = event.target[2].value.trim();
        const confirmPassword = event.target[3].value.trim();

        if (!name || !email || !password || !confirmPassword) {
            alert("All fields are required!");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("Signup successful!");
                console.log("User:", userCredential.user);
            })
            .catch((error) => {
                alert("Signup failed: " + error.message);
            });
    });

    // Login Form
    document.querySelector("#login-form .login-fields").addEventListener("submit", function (event) {
        event.preventDefault();
        const email = event.target[0].value.trim();
        const password = event.target[1].value.trim();

        if (!email || !password) {
            alert("All fields are required!");
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("Login successful!");
                console.log("User:", userCredential.user);
            })
            .catch((error) => {
                alert("Login failed: " + error.message);
            });
    });
});
