const colorBtn = document.querySelector("#color");
const placeBtn = document.querySelector("#place");
const ritualBtn = document.querySelector("#ritual");

colorBtn.addEventListener("click", () => {
  alert(
    "My favorite color is green. But when I'm wathcing spiderman, its blue and red :)"
  );
});

placeBtn.addEventListener("click", () => {
  alert("My favorite place is disneyland. Nothing like it!");
});

ritualBtn.addEventListener("click", () => {
  alert("My favorite ritual is watching fireworks on the 4th of July");
});
