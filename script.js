const emailInput = document.querySelector(".input");
const wrongEmail = document.querySelector(".wrong-email");

function controllaInput() {
  const valore = document.getElementById("emailCheck").value;
  const emailValida = valore.includes("@") && valore.includes(".") && valore.indexOf("@") < valore.lastIndexOf(".");
  if (emailValida) {
    window.location.href = "success_message.html"; // reindirizza all'altra pagina
  } 
  else {
    emailInput.style.backgroundColor = "hsl(4, 71.80%, 86.10%)";
    emailInput.style.borderColor = "hsl(4, 100%, 67%)";
    wrongEmail.style.visibility = "visible";
    emailInput.value ="";
  }
}

/*document.getElementById('dismissBtn').addEventListener('click', () => {
    window.location.href = 'index.html';
});*/
