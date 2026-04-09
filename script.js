const projetos = [
  {
    nome: "Portfólio Pessoal",
    descricao: "Site desenvolvido com HTML, CSS e JavaScript para apresentar meus projetos.",
    link: "https://annasabrinams.github.io/portfolio-anna"
  },
  {
    nome: "Página de Login",
    descricao: "Interface de login simples com validação básica.",
    link: "#"
  },
  {
    nome: "Lista de Tarefas",
    descricao: "Aplicação simples para organizar tarefas do dia a dia.",
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
    <a href="${projeto.link}" target="_blank">Ver projeto</a>
  `;

  container.appendChild(div);
});