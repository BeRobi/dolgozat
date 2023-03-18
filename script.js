window.addEventListener("load", init);

const kutyaLista = [
  "foxterrier",
  "kuvasz",
  "puli",
  "agár",
  "újfullandi",
  "keverék",
];

function init() {
  const GOMB = document.getElementsByTagName("article")[0];
  console.log(GOMB);
  GOMB.innerHTML += "<button> Kutya </button>";

  const GOMBKATTINT = document.querySelectorAll("article button")[0];

  GOMBKATTINT.addEventListener("click", egerkatt);
}

function egerkatt() {
  const KUTYAKIIR = document.querySelectorAll("article")[0];
  KUTYAKIIR.innerHTML += `${kutyaLista[2]}`;
}
