document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = {
            name: form.elements["name"].value,
            email: form.elements["email"].value,
            phone: form.elements["phone"].value,
            message: form.elements["message"].value
        };

        console.log("Saving:", formData);
    
        localStorage.setItem("contactData", JSON.stringify(formData));

        let confirmation = document.createElement("p");
        confirmation.textContent = "Your message has been sent successfully!";
        confirmation.style.color = "green";
        confirmation.style.marginTop = "10px";

        form.appendChild(confirmation);

        form.reset();

        setTimeout(() => {
            confirmation.remove();
        }, 3000);
    });
});
