const rawData = localStorage.getItem("contactData");

        if (!rawData) {
            alert("No message found in localStorage.");
        } else {
            const data = JSON.parse(rawData);

            document.getElementById("name").textContent = data.name;
            document.getElementById("email").textContent = data.email;
            document.getElementById("phone").textContent = data.phone;
            document.getElementById("message").textContent = data.message;
        }