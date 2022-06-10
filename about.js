console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("The form has been submitted successfully");
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

let catImg = document.querySelector("img");

catImg.addEventListener("mouseover", () => {
  alert("give the user a compliment");
});
