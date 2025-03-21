window.onload = function () {
    const dialog = document.querySelector("#error-msg");
    const formButton = document.querySelector("#sendForm");
    const fields = document.querySelectorAll("input, textarea, select");

    formButton.addEventListener("click", function () {
        let isValid = true;

        fields.forEach(function (field) {

            if ((field.tagName === "SELECT" && field.value === "Pick a state") || field.value.trim() === "") {
                field.classList.add("is-invalid");
                isValid = false;
            } else {
                field.classList.remove("is-invalid");
            }
        });

        if (isValid) {
            dialog.classList.add("d-none");
            alert("Form submitted successfully!");
        } else {
            dialog.classList.remove("d-none");
        }
    });
};
