const modalContainer = document.getElementById("modalContainer");
const openBttn = document.getElementById("openBttn");
const closeBttn = document.getElementById("closeBttn");

modalContainer.style.display = "none";

openBttn.addEventListener("click", () => {
    modalContainer.style.display = "block";
});

document.body.addEventListener("click", (event) => {
    if (event.target.id === "lcModal") {
        modalContainer.style.display = "none";
    };
});

closeBttn.addEventListener("click", () => {
    modalContainer.style.display = "none";
});