window.addEventListener("load", init);
const KUTYAK = [
  {
    nev: "Dézi",
    fajta: "keverék",
    lab: 4,
    marmagassa: 52,
    nem: "szuka",
    kor: 13,
  },
  {
    nev: "Kira",
    fajta: "yorshire terrier",
    lab: 4,
    marmagassa: 20,
    nem: "szuka",
    kor: 13,
  },
];

function init() {
  // objekutm - kulcs értékpárok
  /*   const DEZI = {
    nev:"Dézi",
    fajta:"keverék",
    lab:4,
    marmagassa:52,
    nem:"szuka",
    kor:13
  }
  const KIRA = {
    nev:"Kira",
    fajta:"yorshire terrier",
    lab:4,
    marmagassa:20,
    nem:"szuka",
    kor:13
  } */
  console.log(KUTYAK[0]);
  console.log(KUTYAK[1]);
  console.log(KUTYAK[0].nev);
  KUTYAK[0].nev = "Béla";
  console.log(KUTYAK[0].nev);
  KUTYAK[0].oltas = "van";
  console.log(KUTYAK[0]);
  delete KUTYAK[0].lab;
  console.log(KUTYAK[0]);

  // Objektum bejárása for in ciklussal

  for (let index = 0; index < KUTYAK.length; index++) {
    console.log(index, ". kutya*******");
  }
  for (const kulcs in KUTYAK[index]) {
    console.log(kulcs, KUTYAK[index][kulcs]);
  }
/* 
  for (const kulcs in KUTYAK[0]) {
    console.log(kulcs, KUTYAK[0][kulcs]);
  } */

  for (const kulcs in KUTYAK[1]) {
    console.log(kulcs, KUTYAK[1][kulcs]);
  }
  console.log(KUTYAK);
}
