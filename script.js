window.addEventListener("load", function () {
  kutyaGomb();
  egerKatt();
  //tablazat();
});

const kutyaLISTA = [
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
    nem: "kan",
    kor: 1,
  },
  {
    nev: "Pufi",
    fajta: "újfullandi",
    lab: 4,
    marmagassa: 11,
    nem: "kan",
    kor: 10,
  },
  {
    nev: "Pofi",
    fajta: "keverék",
    lab: 4,
    marmagassa: 30,
    nem: "kan",
    kor: 7,
  },
];

function kutyaGomb() {
  const gombHELYE = document.getElementsByTagName("article")[0];
  const kutyaGOMB = "<button>Kutyák</button>";
  kiir(kutyaGOMB, gombHELYE);
  szegelyez("article");
}

function egerKatt() {
  const gombKATTINT = document.querySelector("article button");
  gombKATTINT.addEventListener(
    "click",
    () => {
      const ideART = document.querySelector("article");
      tablazat();
      szegelyez("table, th, td");
    },
    { once: true }
  );
}

function tablazat() {
  const tablaHELYE = document.querySelector("article");
  const TABLAZAT = elem_letrehozo(tablaHELYE, "table", "tablazat");
  const fejSOR = elem_letrehozo(TABLAZAT, "tr");
  for (const kulcs in kutyaLISTA[0]) {
    const fejCELLA = elem_letrehozo(fejSOR, "th");
    elem_letrehozo2(fejCELLA, kulcs);
  }

  for (let i = 0; i < kutyaLISTA.length; i++) {
    const sorokHELYE = document.querySelector("table");
    const tablaSOR = elem_letrehozo(sorokHELYE, "tr", kutyaLISTA[i].nev);
    for (const kulcs in kutyaLISTA[i]) {
      const tablaCELLA = elem_letrehozo(tablaSOR, "td");
      elem_letrehozo2(tablaCELLA, kutyaLISTA[i][kulcs]);
    }
  }
  console.log(TABLAZAT);
}

function szegelyez(mit) {
  let SZEGELY = document.querySelectorAll(mit);
  for (let i = 0; i < SZEGELY.length; i++) {
    SZEGELY[i].classList.add("kutyaSzegely");
  }
}

function elem_letrehozo(szuloelem, elem, osztaly = "") {
  const GYEREK = document.createElement(elem);
  szuloelem.appendChild(GYEREK);
  if (osztaly) GYEREK.classList.add(osztaly);
  return GYEREK;
}

function elem_letrehozo2(szuloelem, elem, osztaly = "") {
  const GYEREK = document.createTextNode(elem);
  szuloelem.appendChild(GYEREK);
  if (osztaly) GYEREK.classList.add(osztaly);
  return GYEREK;
}

function kiir(mit, hova) {
  hova.innerHTML += mit;
}
