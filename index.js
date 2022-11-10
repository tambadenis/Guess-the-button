let n = 3;
let winningButton;

const onClick = function() {
  if (winningButton == this.id) {
    alert("Congratulations! You've guessed the button!")
  } 
  winningButton = Math.floor(Math.random() * n);
}

for (let i = 1; i <= n; ++i) {
  const buton = document.createElement("button")
  document.querySelector("body").appendChild(buton)
  buton.id = i
  buton.innerText = "Button" + " " + i;
  buton.addEventListener("click", onClick);
}

winningButton = winningButton ? winningButton : Math.floor(Math.random() * n);
