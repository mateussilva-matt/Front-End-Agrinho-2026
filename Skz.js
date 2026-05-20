/* =========================
   MENU RESPONSIVO MOBILE
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


/* =========================
   CONTADOR ANIMADO
========================= */

const counters = document.querySelectorAll(".stat-number");

counters.forEach(counter => {

  const updateCounter = () => {

    // Valor final do contador
    const target = +counter.getAttribute("data-target");

    // Valor atual exibido
    const current = +counter.innerText.replace("%", "");

    // Velocidade da animação
    const increment = target / 60;

    if(current < target){

      counter.innerText =
        `${Math.ceil(current + increment)}%`;

      setTimeout(updateCounter, 25);

    } else {

      counter.innerText = `${target}%`;

    }

  };

  updateCounter();

});


/* =========================
   SIMULADOR DE INVESTIMENTO
========================= */

const hectaresInput = document.getElementById("hectares");
const hectareValue = document.getElementById("hectareValue");

const investment = document.getElementById("investment");
const roi = document.getElementById("roi");


function updateCalculator(){

  // Valor selecionado no range
  const hectares = Number(hectaresInput.value);

  // Atualiza texto na tela
  hectareValue.textContent = hectares;

  /* =========================
     VALORES FICTÍCIOS
  ========================== */

  // Investimento por hectare
  const costPerHectare = 500;

  // Retorno anual estimado por hectare
  const roiPerHectare = 190;

  // Cálculo total
  const totalInvestment =
    hectares * costPerHectare;

  const estimatedROI =
    hectares * roiPerHectare;


  /* =========================
     FORMATAÇÃO EM REAL (BRL)
  ========================== */

  investment.textContent =
    totalInvestment.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

  roi.textContent =
    estimatedROI.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

}


/* =========================
   EVENTO DO RANGE
========================= */

hectaresInput.addEventListener(
  "input",
  updateCalculator
);


/* =========================
   INICIA SIMULADOR
========================= */

updateCalculator();