document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("loadingScreen").style.display = "none";
        document.getElementById("loginPage").classList.remove("hidden");
    }, 2000);
});

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (localStorage.getItem(username) === password) {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("mainContent").classList.remove("hidden");
        document.getElementById("userDisplayName").textContent = username;
    } else {
        alert("Invalid login. Please try again.");
    }
}

function signUp() {
    const username = document.getElementById("newUsername").value;
    const password = document.getElementById("newPassword").value;
    if (username && password) {
        localStorage.setItem(username, password);
        alert("Sign-up successful! Please login.");
        showLogin();
    } else {
        alert("Please enter a username and password.");
    }
}

function showLogin() {
    document.getElementById("signUpPage").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
}

function showSignUp() {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("signUpPage").classList.remove("hidden");
}

function logout() {
    document.getElementById("mainContent").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
}

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));
    document.getElementById(pageId).classList.remove("hidden");
}

function toggleNotifications() {
    const panel = document.getElementById("notificationPanel");
    panel.classList.toggle("active");
}

function closeNotifications() {
    document.getElementById("notificationPanel").classList.remove("active");
}

function openDocumentsPortal() {
    window.open("https://www.tcsion.com/SelfServices/", "_blank");
}

// Enable login button only if privacy is agreed
const privacyCheck = document.getElementById("privacyCheck");
const loginBtn = document.getElementById("loginButton");

privacyCheck.addEventListener("change", () => {
    loginBtn.disabled = !privacyCheck.checked;
});
