// aqui é para dar uma função ao clicar no menu mobile
document.querySelector(".abrir-menu").onclick = function () {
    document.documentElement.classList.add("menu-ativo");
  }
  
  document.querySelector(".fechar-menu").onclick = function () {
    document.documentElement.classList.remove("menu-ativo")
  }