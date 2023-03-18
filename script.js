window.addEventListener("load", init);

const kutyaLista = [
  {
    nev: "Dézi",
    fajta: "foxterrier",
    lab: 4,
    marmagassa: 52,
    nem: "szuka",
    kor: 13,
  },
  {
    nev: "Kira",
    fajta: "kuvasz",
    lab: 4,
    marmagassa: 20,
    nem: "szuka",
    kor: 9,
  },
  {
    nev: "Molli",
    fajta: "puli",
    lab: 4,
    marmagassa: 33,
    nem: "szuka",
    kor: 4,
  },
  {
    nev: "Fifi",
    fajta: "agár",
    lab: 4,
    marmagassa: 45,
    nem: "szuka",
    kor: 1,
  },
  {
    nev: "Pufi",
    fajta: "újfullandi",
    lab: 4,
    marmagassa: 11,
    nem: "szuka",
    kor: 10,
  },
  {
    nev: "Pofi",
    fajta: "keverék",
    lab: 4,
    marmagassa: 30,
    nem: "szuka",
    kor: 7,
  },
];

function init() {
  const GOMB = document.getElementsByTagName("article")[0];
  GOMB.innerHTML += "<button> Kutya </button>";
  const GOMBKATTINT = document.querySelectorAll("article button")[0];
  GOMBKATTINT.addEventListener("click", egerkatt);
  let txt = osszeallit();
  GOMB.innerHTML = txt;
  const SZEGELY = document.querySelectorAll("div");
  console.log(SZEGELY)
  
  
  
}

function egerkatt() {
  const KUTYAKIIR = document.querySelectorAll("article")[0];
  KUTYAKIIR.innerHTML += `${kutyaLista[2]}`;
}

function osszeallit() {
  let txt = "";
  for (let index = 0; index < kutyaLista.length; index++) {
    txt += `<div>`;

    for (const kulcs in kutyaLista[index]) {
      txt += `<p>
                  ${kulcs} ${(kutyaLista[index][kulcs])}
               </p>`;
    }
    txt += `</div>`;
  }
  console.log();
  return txt;
}

