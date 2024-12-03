const firebaseConfig = {
    apiKey: "AIzaSyDF2vgI7mdPxN6q93On_ZghaO_o_CQ8Tp4",
    authDomain: "pocket-59d33.firebaseapp.com",
    projectId: "pocket-59d33",
    storageBucket: "pocket-59d33.firebasestorage.app",
    messagingSenderId: "353388690562",
    appId: "1:353388690562:web:bf04245e1b3982457a489b",
    measurementId: "G-9S4LH4GJPR"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// HTML 요소 가져오기
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const message = document.getElementById("message");

// 로그인 처리
loginBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            message.textContent = `Welcome back, ${user.email}`;
            message.style.color = "green";
        })
        .catch((error) => {
            message.textContent = `Login Error: ${error.message}`;
            message.style.color = "red";
        });
});

// 회원가입 처리
signupBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;

     auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            message.textContent = `Account created for: ${user.email}`;
            message.style.color = "green";
        })
        .catch((error) => {
            message.textContent = `Sign Up Error: ${error.message}`;
            message.style.color = "red";
        });
});