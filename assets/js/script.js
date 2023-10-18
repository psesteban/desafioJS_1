

precioRosa = 2500
precioCorazon = 1500
precioOrqui = 3000

let cantidadRosa = 0
let cantidadCorazon = 0
let cantidadOrqui = 0

let precioTotalRosa = 0
let precioTotalCorazon = 0
let precioTotalOrqui = 0

let precioTotal = 0

function activeR() {
  let activeRos = document.querySelectorAll(".modify_cardR");
  activeRos.forEach(function(elemento) {
  elemento.style.display = "flex";});
  mostrarTotal();
}

function activeC() {
  let activeCor = document.querySelectorAll(".modify_cardC");
  activeCor.forEach(function(elemento) {
    elemento.style.display = "flex";});
  mostrarTotal();
}

function activeO() {
  let activeOr = document.querySelectorAll(".modify_cardO");
  activeOr.forEach(function(elemento) {
    elemento.style.display = "flex";});
  mostrarTotal();
}

function actualizarR() {
  let amountPr = document.querySelectorAll("#a_rosa");
  amountPr.forEach(function(elemento) {
    elemento.innerHTML = cantidadRosa});
  let amountPr2 = document.querySelectorAll("#t_rosa");
  precioTotalRosa = cantidadRosa * precioRosa;
  amountPr2.forEach(function(elemento) {
    elemento.innerHTML = precioTotalRosa});
  precioTotal = precioTotalRosa + precioTotalCorazon + precioTotalOrqui;
  console.log(precioTotal) 
  actualizarTotal();
}

function actualizarC() {
  let amountPc = document.querySelectorAll("#a_corazon");
  amountPc.forEach(function(elemento) {
    elemento.innerHTML = cantidadCorazon});
  let amountPc2 = document.querySelectorAll("#t_corazon");
  precioTotalCorazon = cantidadCorazon * precioCorazon;
  amountPc2.forEach(function(elemento) {
    elemento.innerHTML = precioTotalCorazon});
  precioTotal = precioTotalRosa + precioTotalCorazon + precioTotalOrqui;
  actualizarTotal();
  console.log(precioTotal) 
}

function actualizarO() {
  let amountPo = document.querySelectorAll("#a_orqui");
  amountPo.forEach(function(elemento) {
    elemento.innerHTML = cantidadOrqui});
  let amountPo2 = document.querySelectorAll("#t_orqui");
  precioTotalOrqui = cantidadOrqui * precioOrqui;
  amountPo2.forEach(function(elemento) {
    elemento.innerHTML = precioTotalOrqui});
  precioTotal = precioTotalRosa + precioTotalCorazon + precioTotalOrqui;
  actualizarTotal();
  console.log(precioTotal) 
}

function addRosa() {
  cantidadRosa += 1;
  actualizarR();
}
function removeRosa() {
  cantidadRosa -= 1;
  actualizarR();
}

function addCorazon() {
  cantidadCorazon += 1;
  actualizarC();
}
function removeCorazon() {
  cantidadCorazon -= 1;
  actualizarC();
}

function addOrqui() {
  cantidadOrqui += 1;
  actualizarO();
}
function removeOrqui() {
  cantidadOrqui -= 1;
  actualizarO();
}

function actualizarTotal() {
  let newTotal = document.querySelector(".total");
  newTotal.innerHTML = precioTotal;
}

function mostrarTotal() {
  let displayTotal = document.querySelector(".total_shopping");
  displayTotal.style.display = "flex";
}

function filterCards(tag) {
    // Obtener todas las tarjetas
    var cards = document.querySelectorAll(".card");
  
    // Iterar sobre cada tarjeta
    cards.forEach(function (card) {
      if (tag === "all") {
        // Si la etiqueta es 'all', mostramos todas las tarjetas
        card.style.display = "flex";
      } else if (card.getAttribute("data-tag") === tag) {
        // Si la tarjeta tiene la etiqueta seleccionada, la mostramos
        card.style.display = "flex";
      } else {
        // Si no, ocultamos la tarjeta
        card.style.display = "none";
      }
    });
  }

  function productMobileR() {
    let activeR = document.querySelector("#mobile_rosa");
  activeR.style.display = "flex";
  let activeC = document.querySelector("#mobile_corazon");
  activeC.style.display = "none";
  let activeO = document.querySelector("#mobile_orqui");
  activeO.style.display = "none";
  }
  function productMobileC() {
    let activeR = document.querySelector("#mobile_rosa");
  activeR.style.display = "none";
  let activeC = document.querySelector("#mobile_corazon");
  activeC.style.display = "flex";
  let activeO = document.querySelector("#mobile_orqui");
  activeO.style.display = "none";
  }
  function productMobileO() {
    let activeR = document.querySelector("#mobile_rosa");
  activeR.style.display = "none";
  let activeC = document.querySelector("#mobile_corazon");
  activeC.style.display = "none";
  let activeO = document.querySelector("#mobile_orqui");
  activeO.style.display = "flex";
  }