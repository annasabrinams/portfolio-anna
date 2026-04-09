const projetos = [
  {
    nome: "Projeto 1",
    descricao: "Meu primeiro projeto",
    link: "#"
  },
  {
    nome: "Projeto 2",
    descricao: "Outro projeto",
    link: "#"
  }
];

const container = document.getElementById("lista-projetos");

projetos.forEach(function(projeto) {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
    <a href="${projeto.link}">Ver projeto</a>
  `;

  container.appendChild(div);
});