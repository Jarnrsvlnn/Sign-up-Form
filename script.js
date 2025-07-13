const submitBtn = document.querySelector(".create-btn");
const dataContent = document.querySelector(".data-container")
const firstName = document.querySelector("input#first-name")

function handleClickEvent () {
    const data = document.createElement("h1");
    data.textContent = `Hello, ${firstName.value}`;
    dataContent.append(data);

    window.open('landingpage.html', '_blank');
}

submitBtn.addEventListener("click", handleClickEvent);