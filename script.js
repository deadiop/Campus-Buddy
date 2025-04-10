// Wait until the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Loading screen
    setTimeout(() => {
        document.getElementById("loadingScreen").style.display = "none";
        document.getElementById("loginPage").style.display = "block";
    }, 2000);

    // Page Navigation
    window.showPage = function (pageId) {
        document.querySelectorAll(".page").forEach(page => {
            page.style.display = "none";
        });
        document.getElementById(pageId).style.display = "block";
    };

    // Notifications
    window.toggleNotifications = function () {
        document.getElementById("notificationPanel").classList.toggle("active");
    };

    window.closeNotifications = function () {
        document.getElementById("notificationPanel").classList.remove("active");
    };

    // Signup functionality
    window.signUp = function () {
        let username = document.getElementById("newUsername").value;
        let password = document.getElementById("newPassword").value;

        if (!username || !password) {
            alert("Please enter both username and password.");
            return;
        }

        localStorage.setItem(username, password);
        alert("Account created! Please login.");
        showLogin();
    };

    window.showLogin = function () {
        document.getElementById("signUpPage").style.display = "none";
        document.getElementById("loginPage").style.display = "block";
    };

    window.showSignUp = function () {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("signUpPage").style.display = "block";
    };

    // Login functionality
    window.login = function () {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let storedPassword = localStorage.getItem(username);

        if (storedPassword && storedPassword === password) {
            document.getElementById("userDisplayName").textContent = username;
            document.getElementById("loginPage").style.display = "none";
            document.getElementById("mainContent").style.display = "block";
        } else {
            alert("Invalid username or password.");
        }
    };

    // Logout
    window.logout = function () {
        document.getElementById("mainContent").style.display = "none";
        document.getElementById("loginPage").style.display = "block";
    };
});