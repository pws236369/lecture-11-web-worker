
const worker = new Worker('worker.js');

worker.postMessage('start');

worker.onmessage = function(event) {
  alert('Task is done!');
};

let times = 1
const button = document.getElementById("thebutton")
button.addEventListener("click", function() {
    console.log(`Clicked ${times} times`)
    times ++
})

