const inputField = document.getElementById("inputField");
const displayField = document.getElementById("displayField");
const countBtn = document.getElementById("countBtn");

inputField.addEventListener("input", () => {
  displayField.hidden = false;
  let str = "";
  str = inputField.value;
  //   console.log("length: "str.length);
  displayField.innerHTML = str.length;
});
