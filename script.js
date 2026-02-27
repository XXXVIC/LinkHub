const btn = document.querySelector(".theme-btn");
const body = document.body;

btn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        btn.textContent = "Світла тема";
    } else {
        btn.textContent = "Темна тема";
    }
});