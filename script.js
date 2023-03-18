window.addEventListener("load", init)

const kutyaLista=["foxterrier","kuvasz","puli","agár","újfullandi","keverék"]

function init(){
    const GOMB = document.getElementsByTagName("article")[0];
    console.log(GOMB)
    GOMB.innerHTML += "<button>Kutya</button>"


    const GOMBKATTINT = document.querySelectorAll("article button");
      
        for (let index = 0; index < GOMBKATTINT.length; index++) {
          GOMBKATTINT.innerHTML.addEventListener("click", console.log(valami))}
          

}
