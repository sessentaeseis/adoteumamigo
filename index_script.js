const hora = new Date().getHours();
let texto;

if (hora >= 6 && hora < 12) texto = "Bom Dia!";
else if (hora < 18) texto = "Boa Tarde!";
else if (hora < 24) texto = "Boa Noite!";
else texto = "Boa madrugada";

const el = document.getElementById("saudacao");
el.innerHTML = ""

let i = 0;
  function digitar() {
    if (i < texto.length) {
      document.getElementById("saudacao").innerHTML += texto.charAt(i);
      i++;
      setTimeout(digitar, 40);
    }
  }

  digitar();