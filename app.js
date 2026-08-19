const DATA=window.WORKBOARD_DATA;
const STORAGE_KEY="drawer-village-workboard-v1";
const DEFAULT_CHECKS={
  art:["직접 그린 최종 원본을 완성하기","필요한 부분을 투명 배경 PNG로 정리하기","휴대폰의 작은 크기에서도 유형이 구분되는지 확인하기","사이트와 앱 자산을 새 그림으로 교체하기","교체 후 기존 저장 데이터와 화면을 확인하기"],
  sound:["조용한 방에서 원음 녹음하기","같은 소리를 세기와 속도를 달리해 필요한 수만큼 녹음하기","말소리·큰 숨·클리핑이 없는 테이크 고르기","WAV 48kHz 원본으로 정리하고 파일명 붙이기","게임에는 아직 넣지 않고 원본을 백업하기"],
  translation:["영어 문구 작성하기","일본어 문구 작성하기","원문의 뜻과 안전 안내가 빠지지 않았는지 확인하기","휴대폰 화면에서 글자가 잘리지 않는지 확인하기","번역 측정표에 반영하기"],
  release:["사이트에서 확인하기","앱 직접 설치본에서 확인하기","앱을 완전히 종료하고 다시 열어 확인하기","기존 사진·캐릭터·집 데이터가 유지되는지 확인하기","문제가 없으면 내부 테스트 결과를 기록하기"]
};
let store=loadStore();
let filter="전체";
let search="";

function loadStore(){
  try{return {...JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}")}}
  catch{return {}}
}
function saveStore(){localStorage.setItem(STORAGE_KEY,JSON.stringify(store))}
function itemState(id){return store[id]||{status:"todo",checks:[],note:""}}
function setItemState(id,next){store[id]={...itemState(id),...next};saveStore()}
function typeItems(type){return DATA[type]||[]}
function allItems(){return ["art","sound","translation","release"].flatMap(type=>typeItems(type).map(item=>({...item,type})))}
function checksFor(type,item){
  if(type==="art"&&item.format)return [...DEFAULT_CHECKS.art.slice(0,1),`${item.format} 기준으로 원본 파일 정리하기`,...DEFAULT_CHECKS.art.slice(1)];
  return DEFAULT_CHECKS[type];
}
function progress(type,item){
  const checks=checksFor(type,item),done=itemState(item.id).checks.filter(Boolean).length;
  return {done,total:checks.length,percent:checks.length?Math.round(done/checks.length*100):0};
}
function statusLabel(status){return ({todo:"할 일",doing:"진행 중",done:"완료",hold:"나중에"})[status]||"할 일"}
function typeLabel(type){return ({art:"그림",sound:"소리",translation:"번역",release:"출시"})[type]}
function escapeHtml(value){return String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[char])}
function completeItem(id){
  const found=allItems().find(item=>item.id===id);if(!found)return;
  const checks=checksFor(found.type,found).map(()=>true);
  setItemState(id,{status:"done",checks});render();
}
function summary(){
  const items=allItems(),done=items.filter(item=>itemState(item.id).status==="done").length;
  return {done,total:items.length,percent:items.length?Math.round(done/items.length*100):0};
}
function pageHead(eyebrow,title,description){return `<header class="page-head"><small>${eyebrow}</small><h1>${title}</h1><p>${description}</p></header>`}
function renderDashboard(){
  const total=summary();
  const metrics=["art","sound","translation","release"].map(type=>{const items=typeItems(type),done=items.filter(item=>itemState(item.id).status==="done").length;return `<article class="metric"><small>${typeLabel(type)}</small><b>${done}/${items.length}</b></article>`}).join("");
  const today=allItems().filter(item=>itemState(item.id).status!=="done"&&item.priority==="높음").slice(0,6);
  return `<section class="hero"><div class="hero-title"><img src="assets/drawer-village-logo.png" alt=""><div><h1>${DATA.project.name}</h1><p>${DATA.project.description}</p></div></div><p class="hero-goal">${DATA.project.goal}</p><div class="overall"><div class="progress-line"><b>전체 진행률</b><strong>${total.percent}%</strong><span class="progress-track"><i style="--value:${total.percent}%"></i></span></div><small>${total.done}개 완료 · ${total.total-total.done}개 남음</small></div></section><div class="quick-grid"><a class="quick-card" href="#art"><span>▧</span><b>그림 체크</b><small>AI 건물부터 교체</small></a><a class="quick-card" href="#sound"><span>♬</span><b>소리 녹음</b><small>ASMR 원음 목록</small></a><a class="quick-card" href="#translation"><span>文</span><b>번역 현황</b><small>영어·일본어</small></a><a class="quick-card" href="#release"><span>↑</span><b>앱 출시</b><small>내부 테스트 확인</small></a><a class="quick-card" href="#backup"><span>↓</span><b>백업</b><small>체크 상태 저장</small></a></div><div class="metric-grid">${metrics}</div><div class="section-title"><h2>지금 먼저 할 일</h2><p>우선순위 높은 미완료 작업</p></div><div class="today-list">${today.map((item,index)=>`<button class="today-item" data-open-task="${item.id}"><span>${index+1}</span><div><b>${escapeHtml(item.title)}</b><small>${typeLabel(item.type)} · ${escapeHtml(item.category)}</small></div></button>`).join("")||'<div class="empty">높은 우선순위 작업을 모두 끝냈어요.</div>'}</div>${backupPanel()}`;
}
function filterToolbar(type,items){
  const categories=["전체",...new Set(items.map(item=>item.category))];
  return `<div class="toolbar"><input class="search" data-search placeholder="이름이나 설명으로 찾기" value="${escapeHtml(search)}"><div class="chips">${categories.map(category=>`<button class="chip ${filter===category?"on":""}" data-filter="${escapeHtml(category)}">${escapeHtml(category)}</button>`).join("")}</div></div>`;
}
function visibleItems(items){const term=search.trim().toLowerCase();return items.filter(item=>(filter==="전체"||item.category===filter)&&(!term||`${item.title} ${item.brief} ${item.category}`.toLowerCase().includes(term)))}
function artCard(item){
  const p=progress("art",item),state=itemState(item.id);
  const contain=item.category==="UI·테마"||item.category==="상점·DLC";
  return `<article class="task-card"><button data-open-task="${item.id}"><div class="task-image ${contain?"contain":""}"><img src="${item.image}" alt="${escapeHtml(item.title)} 현재 그림"><span class="badges">${item.ai?'<i class="badge ai">AI 임시 그림</i>':""}${item.direction?'<i class="badge direction">상세 디렉팅</i>':""}<i class="badge">${escapeHtml(item.priority)} 우선</i></span></div><div class="task-copy"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.brief)}</p><span class="mini-progress"><i style="--value:${p.percent}%"></i><small>${p.done}/${p.total}</small></span></div></button><div class="status-strip"><b>${statusLabel(state.status)}</b><button class="quick-check ${state.status==="done"?"done":""}" data-complete="${item.id}" aria-label="${escapeHtml(item.title)} 완료">${state.status==="done"?"✓":"○"}</button></div></article>`;
}
function renderArt(){
  const items=DATA.art,visible=visibleItems(items);
  return `${pageHead("ART CHECKLIST","그림","현재 게임에 들어간 그림을 보면서 직접 제작·교체해야 할 작업을 확인해요. ‘AI 임시 그림’부터 우선 교체하면 됩니다.")}${filterToolbar("art",items)}<div class="card-grid">${visible.map(artCard).join("")||'<div class="empty">조건에 맞는 그림이 없어요.</div>'}</div>`;
}
function listCard(type,item,symbol){const state=itemState(item.id);return `<article class="list-card" data-open-task="${item.id}"><span class="symbol">${symbol}</span><div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.brief)}</p></div><button class="${state.status==="done"?"done":""}" data-complete="${item.id}" aria-label="완료">${state.status==="done"?"✓":"○"}</button></article>`}
function renderListPage(type,eyebrow,title,description,symbol){
  const items=typeItems(type),visible=visibleItems(items);
  return `${pageHead(eyebrow,title,description)}${type==="translation"?translationBars():""}${filterToolbar(type,items)}<div class="list-grid">${visible.map(item=>listCard(type,item,symbol)).join("")||'<div class="empty">조건에 맞는 작업이 없어요.</div>'}</div>${type==="release"?backupPanel():""}`;
}
function translationBars(){return `<div class="translation-bars">${[["English",DATA.progress.english],["日本語",DATA.progress.japanese]].map(([name,value])=>{const percent=(value.done/value.total*100).toFixed(1);return `<article class="language-progress"><b>${name}</b><span>${value.done}/${value.total}</span><strong>${percent}%</strong><i style="--value:${percent}%"></i></article>`}).join("")}</div>`}
function backupPanel(){return `<section class="backup-panel" id="backup"><h2>체크 상태 백업</h2><p>체크와 메모는 지금 사용하는 휴대폰 브라우저에 저장됩니다. 휴대폰을 바꾸거나 브라우저 데이터를 지우기 전 JSON 백업을 받아 주세요.</p><div class="button-row"><button class="action primary" data-export>백업 파일 받기</button><button class="action" data-import>백업 불러오기</button></div></section>`}
function findItem(id){return allItems().find(item=>item.id===id)}
function directionMarkup(item){if(!item.direction)return "";return `<section class="direction-board"><h3>그림 디자인 디렉팅</h3>${item.direction.map(section=>`<article class="direction-section ${section.title==="피해야 할 것"?"avoid":""}"><b>${escapeHtml(section.title)}</b><p>${escapeHtml(section.body)}</p></article>`).join("")}</section>`}
function openTask(id){
  const item=findItem(id);if(!item)return;
  const dialog=document.querySelector("[data-task-dialog]"),detail=dialog.querySelector("[data-task-detail]"),state=itemState(id),checks=checksFor(item.type,item);
  detail.innerHTML=`${item.image?`<img class="detail-image" src="${item.image}" alt="${escapeHtml(item.title)}">`:""}<section class="detail-content"><div class="detail-meta"><span>${typeLabel(item.type)}</span><span>${escapeHtml(item.category)}</span><span>${escapeHtml(item.priority)} 우선</span>${item.ai?"<span>AI 임시 그림 · 교체 필요</span>":""}</div><h2>${escapeHtml(item.title)}</h2><p>${escapeHtml(item.brief)}</p>${item.count?`<div class="detail-meta"><span>${escapeHtml(item.count)}</span>${item.length?`<span>${escapeHtml(item.length)}</span>`:""}</div>`:""}${directionMarkup(item)}<label><b>상태</b><select class="status-select" data-status="${id}"><option value="todo" ${state.status==="todo"?"selected":""}>할 일</option><option value="doing" ${state.status==="doing"?"selected":""}>진행 중</option><option value="done" ${state.status==="done"?"selected":""}>완료</option><option value="hold" ${state.status==="hold"?"selected":""}>나중에</option></select></label><div><b>체크리스트</b><div class="checklist">${checks.map((text,index)=>`<label><input type="checkbox" data-task-check="${id}" data-index="${index}" ${state.checks[index]?"checked":""}><span>${escapeHtml(text)}</span></label>`).join("")}</div></div><label><b>내 메모</b><textarea class="detail-note" data-note="${id}" placeholder="그림 아이디어, 녹음 장소, 확인할 문제 등을 적어 주세요.">${escapeHtml(state.note)}</textarea></label></section>`;
  dialog.showModal();
}
function exportBackup(){
  const blob=new Blob([JSON.stringify({version:1,exportedAt:new Date().toISOString(),store},null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");
  a.href=url;a.download=`서랍마을-작업판-백업-${new Date().toISOString().slice(0,10)}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
async function importBackup(file){
  try{const parsed=JSON.parse(await file.text());if(!parsed?.store||typeof parsed.store!=="object")throw new Error();store=parsed.store;saveStore();render();alert("작업판 백업을 불러왔어요.")}
  catch{alert("이 작업판에서 내보낸 JSON 백업 파일인지 확인해 주세요.")}
}
function currentRoute(){const route=location.hash.replace(/^#/,"").split("?")[0];return ["dashboard","art","sound","translation","release"].includes(route)?route:"dashboard"}
function render(){
  const route=currentRoute();document.querySelectorAll("[data-nav]").forEach(link=>link.classList.toggle("on",link.dataset.nav===route));
  const app=document.querySelector("#app");
  app.innerHTML=route==="dashboard"?renderDashboard():route==="art"?renderArt():route==="sound"?renderListPage("sound","SOUND RECORDING","소리","게임에 넣기 전 직접 녹음해 둘 ASMR 효과음 목록이에요.","♬"):route==="translation"?renderListPage("translation","LOCALIZATION","번역","영어와 일본어의 남은 영역을 유형별로 확인해요.","文"):renderListPage("release","RELEASE CHECK","출시","사이트와 앱을 업데이트하기 전에 확인할 항목이에요.","↑");
  window.scrollTo({top:0,behavior:"instant"});
}
document.addEventListener("click",event=>{
  const complete=event.target.closest("[data-complete]");if(complete){event.stopPropagation();completeItem(complete.dataset.complete);return}
  const open=event.target.closest("[data-open-task]");if(open){openTask(open.dataset.openTask);return}
  const filterButton=event.target.closest("[data-filter]");if(filterButton){filter=filterButton.dataset.filter;render();return}
  if(event.target.closest("[data-export]")){exportBackup();return}
  if(event.target.closest("[data-import]")){document.querySelector("[data-import-file]").click();return}
  if(event.target.closest("[data-project-menu]")){location.hash="dashboard"}
});
document.addEventListener("input",event=>{
  if(event.target.matches("[data-search]")){search=event.target.value;const route=currentRoute();if(route==="art")document.querySelector(".card-grid").innerHTML=visibleItems(DATA.art).map(artCard).join("")||'<div class="empty">조건에 맞는 그림이 없어요.</div>';else{const type=route;document.querySelector(".list-grid").innerHTML=visibleItems(typeItems(type)).map(item=>listCard(type,item,type==="sound"?"♬":type==="translation"?"文":"↑")).join("")||'<div class="empty">조건에 맞는 작업이 없어요.</div>'}}
  const note=event.target.closest("[data-note]");if(note)setItemState(note.dataset.note,{note:note.value});
});
document.addEventListener("change",event=>{
  const status=event.target.closest("[data-status]");if(status){setItemState(status.dataset.status,{status:status.value});render();document.querySelector("[data-task-dialog]").close();return}
  const check=event.target.closest("[data-task-check]");if(check){const state=itemState(check.dataset.taskCheck),checks=[...state.checks];checks[Number(check.dataset.index)]=check.checked;const found=findItem(check.dataset.taskCheck),allDone=checksFor(found.type,found).every((_,index)=>checks[index]);setItemState(check.dataset.taskCheck,{checks,status:allDone?"done":state.status==="done"?"doing":state.status});return}
  if(event.target.matches("[data-import-file]")&&event.target.files[0])importBackup(event.target.files[0]);
});
window.addEventListener("hashchange",()=>{filter="전체";search="";render()});
render();
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js?v=1").catch(()=>{}));
