// deixando preço em valor monetário BRL enquanto digita
document.addEventListener("DOMContentLoaded", () => {
  const inputPreco = document.getElementById("price");

  inputPreco.addEventListener("input", () => {
    let valor = inputPreco.value;

    valor = valor.replace(/\D/g, "");
    valor = (valor / 100).toFixed(2);
    valor = valor.replace(".", ",");
    valor = valor.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    inputPreco.value = "R$ " + valor;
  });
});

