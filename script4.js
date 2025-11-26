let cardsData=[
{title:"Composant 1",desc:"Description du composant 1."},
];
const container=document.getElementById("card-container");
function renderCards(){
  container.innerHTML="";
  cardsData.forEach(card=>{
    const div=document.createElement("div");
    div.classList.add("card");
    div.innerHTML=`<h3>${card.title}</h3><p>${card.desc}</p><button class="card-btn">Voir</button>`;
    container.appendChild(div);
  });
}
renderCards();
document.getElementById("add-card").addEventListener("click",()=>{
  const n=cardsData.length+1;
  cardsData.push({title:`Composant ${n}`,desc:`Description du composant ${n}.`});
  renderCards();
});