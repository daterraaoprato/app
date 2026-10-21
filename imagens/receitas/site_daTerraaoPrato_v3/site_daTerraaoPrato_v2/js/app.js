const data = {
  categorias: Array.isArray(window.CATEGORIAS) ? window.CATEGORIAS : [],
  alimentos: Array.isArray(window.ALIMENTOS) ? window.ALIMENTOS : [],
  receitas: Array.isArray(window.RECEITAS) ? window.RECEITAS : [],
  conteudos: Array.isArray(window.CONTEUDOS) ? window.CONTEUDOS : []
};

const FAVORITES_KEY = "alimentacao_favoritos_v2";
const app = document.querySelector("#app");
const $ = (s, root = document) => root.querySelector(s);
const esc = (value) => String(value ?? "").replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));

function getFavorites(){
  try { return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || []; }
  catch { return []; }
}
function setFavorites(ids){ localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids)); }
function isFavorite(id){ return getFavorites().includes(id); }
function toggleFavorite(id){
  const ids = getFavorites();
  const next = ids.includes(id) ? ids.filter(x => x !== id) : [...ids, id];
  setFavorites(next);
  render();
}
window.toggleFavorite = toggleFavorite;

function categoria(id){ return data.categorias.find(x => x.id === id); }
function alimento(id){ return data.alimentos.find(x => x.id === id); }
function receita(id){ return data.receitas.find(x => x.id === id); }
function conteudo(id){ return data.conteudos.find(x => x.id === id); }
function route(){ return (location.hash.slice(1) || "/inicio").split("/").filter(Boolean); }
function shell(html){ app.innerHTML = html; app.focus(); window.scrollTo({top:0, behavior:"instant"}); }

function media(item, cls="card-media"){
  if(item.imagem) return `<div class="${cls}"><img src="${esc(item.imagem)}" alt="${esc(item.nome || item.titulo)}"></div>`;
  return `<div class="${cls}"><span>${esc(item.icone || "🍽️")}</span></div>`;
}

function recipeCard(r){
  const principal = alimento((r.alimentos || [])[0]);
  return `<article class="card">
    <div class="recipe-card-top">
      <a href="#/receita/${encodeURIComponent(r.id)}">${media({...r, icone: principal?.icone || "🍽️"})}</a>
      <button class="favorite-btn" onclick="event.preventDefault();event.stopPropagation();toggleFavorite('${esc(r.id)}')" aria-label="${isFavorite(r.id)?"Remover dos favoritos":"Adicionar aos favoritos"}">${isFavorite(r.id)?"♥":"♡"}</button>
    </div>
    <a class="card-body" href="#/receita/${encodeURIComponent(r.id)}">
      <span class="tag orange">${esc(r.tipo || "Receita")}</span>
      <h3 style="margin-top:10px">${esc(r.nome)}</h3>
      <div class="recipe-meta"><span>⏱ ${esc(r.tempo)}</span><span>👥 ${esc(r.porcoes)}</span></div>
      <div class="chips" style="margin-top:12px">${(r.restricoes || []).slice(0,3).map(x=>`<span class="tag pink">${esc(x)}</span>`).join("")}</div>
    </a>
  </article>`;
}

function foodCard(f){
  return `<a class="card" href="#/alimento/${encodeURIComponent(f.id)}">
    ${media(f)}
    <div class="card-body">
      <span class="tag">${esc(categoria(f.categoriaId)?.nome || "Alimento")}</span>
      <h3 style="margin-top:10px">${esc(f.nome)}</h3>
      <p>${esc(f.resumo)}</p>
    </div>
  </a>`;
}

function home(){
  shell(`<section class="hero"><div class="container hero-grid">
    <div>
      <div class="eyebrow">Alimentação saudável na infância</div>
      <h1 class="title">Descobrir, aprender e experimentar novos sabores.</h1>
      <p class="subtitle">Conheça grupos de alimentos, explore ingredientes, encontre receitas e aprenda sobre alimentação de forma simples e visual.</p>
      <div class="actions">
        <a class="btn btn-primary" href="#/alimentos">🥦 Conheça os alimentos</a>
        <a class="btn btn-secondary" href="#/receitas">🍴 Explorar receitas</a>
      </div>
    </div>
    <div class="hero-card"><div class="hero-illustration"><div class="blob one"></div><div class="blob two"></div><div><div class="big">🍎🥦🥕</div><h3>Juntos por uma infância mais saudável</h3><p>Conteúdo educativo organizado para navegar no computador, tablet ou celular.</p></div></div></div>
  </div></section>

  <section class="section"><div class="container">
    <div class="section-head"><div><h2>Conheça os grupos de alimentos</h2><p>Escolha um grupo para descobrir seus alimentos.</p></div><a class="btn btn-secondary btn-small" href="#/alimentos">Ver todos</a></div>
    <div class="grid grid-4">${data.categorias.map(c=>`<a class="card category-card" href="#/categoria/${encodeURIComponent(c.id)}"><span class="category-icon">${esc(c.icone)}</span><div><h3>${esc(c.nome)}</h3><small>${esc(c.descricao)}</small></div></a>`).join("")}</div>
  </div></section>

  <section class="section section-white"><div class="container">
    <div class="section-head"><div><h2>Receitas em destaque</h2><p>Algumas ideias para começar a explorar.</p></div><a class="btn btn-secondary btn-small" href="#/receitas">Todas as receitas</a></div>
    <div class="grid grid-3">${data.receitas.slice(0,3).map(recipeCard).join("") || '<div class="empty">Nenhuma receita cadastrada.</div>'}</div>
  </div></section>

  <section class="section"><div class="container">
    <div class="section-head"><div><h2>Aprenda sobre alimentação</h2><p>Conteúdos curtos para apoiar escolhas e hábitos alimentares.</p></div><a class="btn btn-secondary btn-small" href="#/aprender">Ver conteúdos</a></div>
    <div class="grid grid-3">${data.conteudos.slice(0,3).map(c=>`<a class="card learning-card" href="#/conteudo/${encodeURIComponent(c.id)}"><div class="learning-icon">${esc(c.icone)}</div><h3>${esc(c.titulo)}</h3><p>${esc(c.resumo)}</p></a>`).join("")}</div>
  </div></section>`);
}

function alimentosView(){
  shell(`<section class="section"><div class="container">
    <div class="eyebrow">Conheça os alimentos</div><h1 class="title" style="font-size:44px">Grupos e alimentos</h1><p class="subtitle">Navegue por categorias ou pesquise um alimento específico.</p>
    <div class="search-row"><input id="foodSearch" placeholder="Pesquisar alimento..." aria-label="Pesquisar alimento"><select id="foodCategory"><option value="">Todos os grupos</option>${data.categorias.map(c=>`<option value="${esc(c.id)}">${esc(c.nome)}</option>`).join("")}</select></div>
    <div class="grid grid-4" style="margin-bottom:38px">${data.categorias.map(c=>`<a class="card category-card" href="#/categoria/${encodeURIComponent(c.id)}"><span class="category-icon">${esc(c.icone)}</span><div><h3>${esc(c.nome)}</h3><small>${esc(c.descricao)}</small></div></a>`).join("")}</div>
    <div class="section-head"><div><h2>Todos os alimentos</h2><p id="foodCount">${data.alimentos.length} alimento(s)</p></div></div>
    <div id="foodGrid" class="grid grid-3">${data.alimentos.map(foodCard).join("")}</div>
  </div></section>`);
  const update=()=>{
    const q=$("#foodSearch").value.trim().toLowerCase();
    const cat=$("#foodCategory").value;
    const rows=data.alimentos.filter(f=>(f.nome+" "+f.resumo+" "+f.descricao).toLowerCase().includes(q)&&(!cat||f.categoriaId===cat));
    $("#foodGrid").innerHTML=rows.map(foodCard).join("")||'<div class="empty">Nenhum alimento encontrado.</div>';
    $("#foodCount").textContent=`${rows.length} alimento(s)`;
  };
  $("#foodSearch").addEventListener("input",update); $("#foodCategory").addEventListener("change",update);
}

function categoriaView(id){
  const c=categoria(id); if(!c) return notFound();
  const foods=data.alimentos.filter(f=>f.categoriaId===id);
  shell(`<section class="section"><div class="container"><a class="back-link" href="#/alimentos">← Voltar para alimentos</a><div class="eyebrow">${esc(c.icone)} Grupo de alimentos</div><h1 class="title" style="font-size:44px">${esc(c.nome)}</h1><p class="subtitle">${esc(c.descricao)}</p><div class="grid grid-3" style="margin-top:28px">${foods.map(foodCard).join("")||'<div class="empty">Ainda não há alimentos cadastrados neste grupo.</div>'}</div></div></section>`);
}

function alimentoView(id){
  const f=alimento(id); if(!f) return notFound();
  const recipes=data.receitas.filter(r=>(r.alimentos||[]).includes(id));
  shell(`<section class="section"><div class="container"><a class="back-link" href="#/categoria/${encodeURIComponent(f.categoriaId)}">← Voltar para ${esc(categoria(f.categoriaId)?.nome||"alimentos")}</a>
    <div class="detail-layout"><div>
      ${media(f,"detail-hero")}
      <div class="eyebrow" style="margin-top:25px">${esc(categoria(f.categoriaId)?.nome||"Alimento")}</div>
      <h1 class="title" style="font-size:46px">${esc(f.nome)}</h1>
      <p class="subtitle">${esc(f.descricao || f.resumo)}</p>
      <h2>Benefícios e características</h2>
      <ul class="list-clean">${(f.beneficios||[]).map(x=>`<li>✓ ${esc(x)}</li>`).join("")}</ul>
      <h2 style="margin-top:34px">Receitas com ${esc(f.nome)}</h2>
      <div class="grid grid-2">${recipes.map(recipeCard).join("")||'<div class="empty">Ainda não há receitas relacionadas a este alimento.</div>'}</div>
    </div><aside class="side-card"><h3>Explore também</h3><p class="muted">Veja outros alimentos do mesmo grupo ou consulte todas as receitas disponíveis.</p><div class="actions"><a class="btn btn-secondary" href="#/categoria/${encodeURIComponent(f.categoriaId)}">Mesmo grupo</a><a class="btn btn-primary" href="#/receitas">Receitas</a></div></aside></div>
  </div></section>`);
}

function receitasView(){
  const tipos=[...new Set(data.receitas.map(r=>r.tipo).filter(Boolean))].sort();
  shell(`<section class="section"><div class="container"><div class="eyebrow">Receitas</div><h1 class="title" style="font-size:44px">Receitas para explorar</h1><p class="subtitle">Pesquise por nome, ingrediente ou tipo de receita.</p>
    <div class="search-row"><input id="recipeSearch" placeholder="Buscar receita ou ingrediente..." aria-label="Buscar receita"><select id="recipeType"><option value="">Todos os tipos</option>${tipos.map(t=>`<option value="${esc(t)}">${esc(t)}</option>`).join("")}</select></div>
    <div class="section-head"><div><h2>Receitas</h2><p id="recipeCount">${data.receitas.length} receita(s)</p></div></div><div id="recipeGrid" class="grid grid-3">${data.receitas.map(recipeCard).join("")}</div>
  </div></section>`);
  const update=()=>{
    const q=$("#recipeSearch").value.trim().toLowerCase(); const type=$("#recipeType").value;
    const rows=data.receitas.filter(r=>{
      const foods=(r.alimentos||[]).map(id=>alimento(id)?.nome||"").join(" ");
      const hay=[r.nome,r.tipo,foods,...(r.ingredientes||[])].join(" ").toLowerCase();
      return hay.includes(q)&&(!type||r.tipo===type);
    });
    $("#recipeGrid").innerHTML=rows.map(recipeCard).join("")||'<div class="empty">Nenhuma receita encontrada.</div>';
    $("#recipeCount").textContent=`${rows.length} receita(s)`;
  };
  $("#recipeSearch").addEventListener("input",update); $("#recipeType").addEventListener("change",update);
}

function receitaView(id){
  const r=receita(id); if(!r) return notFound();
  const foods=(r.alimentos||[]).map(alimento).filter(Boolean);
  shell(`<section class="section"><div class="container"><a class="back-link" href="#/receitas">← Voltar para receitas</a><div class="detail-layout"><div>
    ${media({...r,icone:foods[0]?.icone||"🍽️"},"detail-hero")}
    <div class="eyebrow" style="margin-top:25px">${esc(r.tipo||"Receita")}</div><h1 class="title" style="font-size:46px">${esc(r.nome)}</h1>
    <div class="recipe-meta" style="font-size:16px"><span>⏱ ${esc(r.tempo)}</span><span>👥 ${esc(r.porcoes)}</span></div>
    <div class="chips" style="margin:15px 0 30px">${(r.restricoes||[]).map(x=>`<span class="tag pink">${esc(x)}</span>`).join("")}</div>
    ${foods.length?`<h2>Alimentos relacionados</h2><div class="chips" style="margin-bottom:28px">${foods.map(f=>`<a class="tag" href="#/alimento/${encodeURIComponent(f.id)}">${esc(f.icone||"🍽️")} ${esc(f.nome)}</a>`).join("")}</div>`:""}
    <h2>Ingredientes</h2><ul class="list-clean">${(r.ingredientes||[]).map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
    <h2 style="margin-top:30px">Modo de preparo</h2><ol class="steps">${(r.preparo||[]).map(x=>`<li>${esc(x)}</li>`).join("")}</ol>
    ${(r.substituicoes||[]).length?`<h2 style="margin-top:30px">Substituições</h2>${r.substituicoes.map(s=>`<div class="substitution"><strong>${esc(s.ingrediente)}</strong><span>${esc(s.substituto)}</span></div>`).join("")}`:""}
  </div><aside class="side-card"><h3>${isFavorite(r.id)?"♥ Receita favorita":"♡ Salvar nos favoritos"}</h3><p class="muted">Os favoritos são uma preferência do visitante e ficam salvos apenas neste navegador.</p><button class="btn ${isFavorite(r.id)?"btn-secondary":"btn-primary"}" onclick="toggleFavorite('${esc(r.id)}')">${isFavorite(r.id)?"Remover dos favoritos":"Adicionar aos favoritos"}</button></aside></div></div></section>`);
}

function aprenderView(){
  shell(`<section class="section"><div class="container"><div class="eyebrow">Aprenda sobre alimentação</div><h1 class="title" style="font-size:44px">Conteúdos educativos</h1><p class="subtitle">Escolha um tema para saber mais.</p><div class="grid grid-3" style="margin-top:30px">${data.conteudos.map(c=>`<a class="card learning-card" href="#/conteudo/${encodeURIComponent(c.id)}"><div class="learning-icon">${esc(c.icone)}</div><h3>${esc(c.titulo)}</h3><p>${esc(c.resumo)}</p><span class="btn btn-secondary btn-small">Ler conteúdo</span></a>`).join("")||'<div class="empty">Nenhum conteúdo cadastrado.</div>'}</div></div></section>`);
}

function conteudoView(id){
  const c=conteudo(id); if(!c) return notFound();
  shell(`<section class="section"><div class="container"><a class="back-link" href="#/aprender">← Voltar para conteúdos</a><div class="article-box"><div class="learning-icon">${esc(c.icone)}</div><div class="eyebrow">Conteúdo educativo</div><h1 class="title" style="font-size:44px">${esc(c.titulo)}</h1><p>${esc(c.texto)}</p></div></div></section>`);
}

function favoritosView(){
  const fav=getFavorites(); const rows=data.receitas.filter(r=>fav.includes(r.id));
  shell(`<section class="section"><div class="container"><div class="eyebrow">Favoritos</div><h1 class="title" style="font-size:44px">Suas receitas favoritas</h1><p class="subtitle">Esta lista fica salva somente neste navegador.</p><div class="grid grid-3" style="margin-top:30px">${rows.map(recipeCard).join("")||'<div class="empty"><h3>Nenhuma receita favorita ainda</h3><p>Use o coração nas receitas para guardar as que você mais gostou.</p><a class="btn btn-primary" href="#/receitas" style="margin-top:12px">Explorar receitas</a></div>'}</div></div></section>`);
}

function pratoView(){
  shell(`<section class="section"><div class="container"><div class="eyebrow">Monte seu prato</div><h1 class="title" style="font-size:44px">Uma forma visual de pensar em variedade</h1><p class="subtitle">Use o exemplo abaixo como apoio educativo. A composição das refeições pode variar conforme idade, cultura, disponibilidade de alimentos e necessidades individuais.</p><div class="plate-wrap" style="margin-top:30px"><div class="plate"><div class="plate-zone">🥬<br>Verduras e legumes</div><div class="plate-zone">🍚<br>Cereais e tubérculos</div><div class="plate-zone">🫘<br>Feijões e outras fontes de proteína</div></div><div class="plate-note"><h2>Ideias para explorar</h2><ul><li>Combine alimentos de diferentes grupos.</li><li>Varie cores, sabores e formas de preparo.</li><li>Inclua frutas ao longo do dia.</li><li>Tenha água disponível nas refeições e entre elas.</li><li>Valorize preparações caseiras e alimentos da cultura local.</li></ul><div class="info-banner">Este recurso é educativo e não substitui orientação individual de profissionais de saúde quando ela for necessária.</div><a class="btn btn-primary" href="#/alimentos">Explorar alimentos</a></div></div></div></section>`);
}

function notFound(){ shell(`<section class="section"><div class="container"><div class="empty"><h2>Conteúdo não encontrado</h2><p>Verifique se o identificador usado no arquivo de dados está correto.</p><a class="btn btn-primary" href="#/inicio">Ir para o início</a></div></div></section>`); }

function render(){
  const r=route(); const page=r[0];
  if(page==="inicio") home();
  else if(page==="alimentos") alimentosView();
  else if(page==="categoria") categoriaView(decodeURIComponent(r[1]||""));
  else if(page==="alimento") alimentoView(decodeURIComponent(r[1]||""));
  else if(page==="receitas") receitasView();
  else if(page==="receita") receitaView(decodeURIComponent(r[1]||""));
  else if(page==="aprender") aprenderView();
  else if(page==="conteudo") conteudoView(decodeURIComponent(r[1]||""));
  else if(page==="favoritos") favoritosView();
  else if(page==="prato") pratoView();
  else notFound();
  document.querySelector("#mainNav")?.classList.remove("open");
}

window.addEventListener("hashchange",render);
window.addEventListener("DOMContentLoaded",()=>{
  render();
  $("#menuButton")?.addEventListener("click",()=>$("#mainNav").classList.toggle("open"));
});
