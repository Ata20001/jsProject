function checkLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const Wrong = document.getElementById("error-message");
  
    if (username === "Ata" && password === "Ata123") {
      Wrong.style.visibility = "hidden";
      alert("Login successful!");
    } else {
      Wrong.style.visibility = "visible";
      Wrong.textContent = "Wrong username or password";
    }
  }
  