document.addEventListener("DOMContentLoaded", function () {

    const toggles = document.querySelectorAll(".toggle-password");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", function () {

            const targetId = this.getAttribute("data-target");
            const passwordInput = document.getElementById(targetId);

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                this.textContent = "🙈";
            } else {
                passwordInput.type = "password";
                this.textContent = "👁";
            }

        });
    });

});