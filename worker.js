self.addEventListener("message", function (event) {
  console.log(event.data);

  for (let i = 1; i <= 9999999999; i++) {
    Math.sqrt(i);
  }

  self.postMessage("done");
});
