"use strict";

const projectData = {
  student: {
    name: "Gabriel Dario Matos Clemente",
    personCode: "1638929",
    course: "Analise e Desenvolvimento de Sistemas",
    githubUrl: "https://github.com/Gabriel-Dario",
    linkedinUrl: "https://www.linkedin.com/in/gabriel-dario-b073bb412/"
  },
  manhwas: [
    {
      id: 1,
      title: "Solo Leveling",
      originalTitle: "Na Honjaman Level Up",
      description: "Sung Jin-Woo parte de cacador fraco para protagonista de uma escalada sombria de poder.",
      content: "Solo Leveling e um dos manhwas mais conhecidos fora da Coreia. A historia chama atencao pela progressao do protagonista, pelas dungeons e por uma identidade visual muito marcada por sombras, monstros e rankeamento de cacadores.",
      genre: "Acao, aventura, fantasia",
      status: "Finalizado",
      year: 2018,
      chapters: 201,
      score: 84,
      author: "Chugong",
      coverImage: "img/solo-leveling.jpg",
      bannerImage: "img/solo-leveling-banner.jpg",
      highlight: true
    },
    {
      id: 2,
      title: "Tower of God",
      originalTitle: "Sinui Tap",
      description: "Bam entra em uma torre misteriosa onde cada andar funciona como um teste de desejo, forca e estrategia.",
      content: "Tower of God mistura fantasia, politica e competicao. A obra se destaca pelo mundo vertical da torre e pela quantidade de personagens com objetivos proprios, o que combina bem com uma pagina de detalhes rica.",
      genre: "Acao, aventura, misterio",
      status: "Em publicacao",
      year: 2010,
      chapters: "Em andamento",
      score: 82,
      author: "SIU",
      coverImage: "img/tower-of-god.jpg",
      bannerImage: "img/tower-of-god-banner.jpg",
      highlight: false
    },
    {
      id: 3,
      title: "Omniscient Reader",
      originalTitle: "Jeonjijeok Dokja Sijeom",
      description: "Kim Dokja conhece o roteiro de um mundo que virou realidade porque leu a obra ate o final.",
      content: "Omniscient Reader trabalha muito bem a ideia de leitor, protagonista e destino. No projeto, ele representa manhwas modernos que usam sistemas, cenarios apocalipticos e metalinguagem.",
      genre: "Acao, aventura, fantasia",
      status: "Em publicacao",
      year: 2020,
      chapters: "Em andamento",
      score: 86,
      author: "Sing Shong",
      coverImage: "img/omniscient-reader.jpg",
      bannerImage: "img/omniscient-reader-banner.jpg",
      highlight: true
    },
    {
      id: 4,
      title: "The God of High School",
      originalTitle: "God of High School",
      description: "Um torneio de artes marciais cresce ate envolver poderes mitologicos e conflitos de escala global.",
      content: "The God of High School tem ritmo rapido, lutas exageradas e bastante energia visual. E uma boa opcao para mostrar como dados diferentes podem usar a mesma estrutura de card e detalhe.",
      genre: "Acao, aventura, fantasia",
      status: "Finalizado",
      year: 2011,
      chapters: 569,
      score: 76,
      author: "Yongje Park",
      coverImage: "img/god-of-high-school.png",
      bannerImage: "img/god-of-high-school.png",
      highlight: false
    },
    {
      id: 5,
      title: "Noblesse",
      originalTitle: "Noblesse",
      description: "Um nobre antigo desperta no mundo moderno e precisa entender uma nova sociedade.",
      content: "Noblesse ficou famoso por unir escola, sobrenatural e personagens muito fortes em uma narrativa de lealdade. Ele traz variedade ao catalogo por ter um clima mais urbano e elegante.",
      genre: "Acao, sobrenatural, comedia",
      status: "Finalizado",
      year: 2007,
      chapters: 544,
      score: 76,
      author: "Son Je-ho",
      coverImage: "img/noblesse.png",
      bannerImage: "img/noblesse-banner.jpg",
      highlight: false
    },
    {
      id: 6,
      title: "The Legend of the Northern Blade",
      originalTitle: "Bukgeom Jeongi",
      description: "Jin Mu-Won reconstrui sua jornada apos a queda de sua seita e enfrenta o mundo murim.",
      content: "The Legend of the Northern Blade e conhecido pela atmosfera de artes marciais, composicao visual e narrativa de vinganca. No site, ele fecha o catalogo com uma obra mais seria e estilizada.",
      genre: "Acao, aventura, fantasia",
      status: "Finalizado",
      year: 2019,
      chapters: 202,
      score: 85,
      author: "Hae Min",
      coverImage: "img/northern-blade.png",
      bannerImage: "img/northern-blade-banner.jpg",
      highlight: true
    }
  ]
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getFeaturedManhwa(manhwas) {
  return manhwas.find((manhwa) => manhwa.highlight) || manhwas[0] || null;
}

function getManhwaById(manhwas, id) {
  const numericId = Number(id);
  return manhwas.find((manhwa) => manhwa.id === numericId) || null;
}

function getQueryParam(search, paramName) {
  return new URLSearchParams(search).get(paramName);
}

function buildDetailsUrl(id) {
  return `detalhes.html?id=${encodeURIComponent(id)}`;
}

function formatScore(score) {
  return `${Number(score)}/100`;
}

function renderFacts(manhwa) {
  const facts = [
    ["Titulo original", manhwa.originalTitle],
    ["Autor", manhwa.author],
    ["Genero", manhwa.genre],
    ["Ano", manhwa.year],
    ["Capitulos", manhwa.chapters],
    ["Status", manhwa.status],
    ["Nota", formatScore(manhwa.score)]
  ];

  return facts
    .map(
      ([label, value]) => `
        <div class="fact-card">
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(value)}</strong>
        </div>
      `
    )
    .join("");
}

function renderFeatured(documentRef, manhwa) {
  const panel = documentRef.getElementById("featuredPanel");
  if (!panel || !manhwa) {
    return;
  }

  panel.innerHTML = `
    <div class="hero-copy">
      <p class="section-label">Leitura em foco</p>
      <h2>${escapeHtml(manhwa.title)}</h2>
      <p>${escapeHtml(manhwa.description)}</p>
      <div class="metric-row">
        <span>${escapeHtml(manhwa.genre)}</span>
        <span>${escapeHtml(formatScore(manhwa.score))}</span>
        <span>${escapeHtml(manhwa.status)}</span>
      </div>
      <a class="primary-link" href="${buildDetailsUrl(manhwa.id)}">Abrir detalhes</a>
    </div>
    <img src="${escapeHtml(manhwa.bannerImage)}" alt="Imagem de ${escapeHtml(manhwa.title)}">
  `;
}

function renderCards(documentRef, manhwas) {
  const cardsContainer = documentRef.getElementById("manhwaCards");
  const count = documentRef.getElementById("catalogCount");

  if (count) {
    count.textContent = `${manhwas.length} itens`;
  }

  if (!cardsContainer) {
    return;
  }

  cardsContainer.innerHTML = manhwas
    .map(
      (manhwa) => `
        <article class="manhwa-card">
          <a href="${buildDetailsUrl(manhwa.id)}" aria-label="Abrir detalhes de ${escapeHtml(manhwa.title)}">
            <img src="${escapeHtml(manhwa.coverImage)}" alt="Capa de ${escapeHtml(manhwa.title)}">
          </a>
          <div class="card-content">
            <div>
              <span class="card-tag">${escapeHtml(manhwa.status)}</span>
              <h3>${escapeHtml(manhwa.title)}</h3>
              <p>${escapeHtml(manhwa.description)}</p>
            </div>
            <div class="card-footer">
              <span>${escapeHtml(manhwa.year)}</span>
              <strong>${escapeHtml(formatScore(manhwa.score))}</strong>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderStudent(documentRef, student) {
  const container = documentRef.getElementById("studentInfo");
  if (!container) {
    return;
  }

  container.innerHTML = `
    <div class="student-grid">
      <div>
        <h3>${escapeHtml(student.name)}</h3>
        <p>Aluno de ${escapeHtml(student.course)}. Projeto criado para praticar DOM, JSON, cards dinamicos e query string.</p>
      </div>
      <div class="student-links">
        <span>Codigo: ${escapeHtml(student.personCode)}</span>
        <a href="${escapeHtml(student.githubUrl)}" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="${escapeHtml(student.linkedinUrl)}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  `;
}

function renderDetail(documentRef, manhwa) {
  const title = documentRef.getElementById("detailTitle");
  const idLabel = documentRef.getElementById("detailIdLabel");
  const content = documentRef.getElementById("detailContent");

  if (title) {
    title.textContent = manhwa.title;
  }

  if (idLabel) {
    idLabel.textContent = `id ${manhwa.id}`;
  }

  if (!content) {
    return;
  }

  content.innerHTML = `
    <article class="detail-card">
      <img class="detail-cover" src="${escapeHtml(manhwa.coverImage)}" alt="Capa de ${escapeHtml(manhwa.title)}">
      <div class="detail-body">
        <span class="card-tag">${escapeHtml(manhwa.status)}</span>
        <h2>${escapeHtml(manhwa.title)}</h2>
        <p>${escapeHtml(manhwa.content)}</p>
        <div class="facts-grid">${renderFacts(manhwa)}</div>
      </div>
    </article>
    <aside class="detail-banner">
      <img src="${escapeHtml(manhwa.bannerImage)}" alt="Imagem ampla de ${escapeHtml(manhwa.title)}">
    </aside>
  `;
}

function renderNotFound(documentRef) {
  const title = documentRef.getElementById("detailTitle");
  const content = documentRef.getElementById("detailContent");

  if (title) {
    title.textContent = "Item nao encontrado";
  }

  if (content) {
    content.innerHTML = `
      <div class="empty-state">
        <h2>Manhwa nao encontrado</h2>
        <p>O id informado na URL nao existe no catalogo.</p>
        <a class="primary-link" href="index.html">Voltar para a home</a>
      </div>
    `;
  }
}

function renderHomePage(documentRef = document, data = projectData) {
  renderFeatured(documentRef, getFeaturedManhwa(data.manhwas));
  renderCards(documentRef, data.manhwas);
  renderStudent(documentRef, data.student);
}

function renderDetailPage(documentRef = document, data = projectData, search = window.location.search) {
  const id = getQueryParam(search, "id");
  const manhwa = getManhwaById(data.manhwas, id);

  if (!manhwa) {
    renderNotFound(documentRef);
    return;
  }

  renderDetail(documentRef, manhwa);
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const isDetailPage = Boolean(document.getElementById("detailContent"));

    if (isDetailPage) {
      renderDetailPage();
      return;
    }

    renderHomePage();
  });
}

if (typeof module !== "undefined") {
  module.exports = {
    buildDetailsUrl,
    escapeHtml,
    formatScore,
    getFeaturedManhwa,
    getManhwaById,
    getQueryParam,
    projectData
  };
}
