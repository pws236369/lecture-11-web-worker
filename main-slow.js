for (let i = 1; i <= 9999999999; i++) {
  Math.sqrt(i);
}

let times = 1;
const button = document.getElementById("thebutton");
button.addEventListener("click", function () {
  console.log(`Clicked ${times} times`);
  times++;
});
