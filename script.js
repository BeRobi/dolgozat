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
  GOMB.innerHTML += "<button> Kutya </button>";
  const GOMBKATTINT = document.querySelectorAll("article button")[0];
  GOMBKATTINT.addEventListener("click", egerkatt);
  let txt = osszeallit();
  GOMB.innerHTML=txt
}

function egerkatt() {
  const KUTYAKIIR = document.querySelectorAll("article")[0];
  KUTYAKIIR.innerHTML += `${kutyaLista[2]}`;
}

function osszeallit() {
  let txt = "";
  for (let index = 0; index < kutyaLista.length; index++) {
    txt += `<div>
                <p>
                  ${kutyaLista[index]}
               </p>
            </div>`
  }
  console.log();
  return txt;
}
