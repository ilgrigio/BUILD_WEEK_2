function checkWindowWidth() {
  let windowSize = window.innerWidth;
  let showMore = document.querySelector("#showMore");
  let navFooter = document.querySelector("#nav-footer")

  if (windowSize <= 767) {
    showMore.innerHTML = `<div class="d-flex align-items-center">
    <p class="fw-bold mb-0">Mostra altro</p> 
    <ion-icon class="pt-1 ps-1" name="chevron-down-outline"></ion-icon>
    </div>`;
  } else {
    showMore.innerHTML = `<p class="fw-bold mb-0">Chia</p>
    <span class="gray">Case vacanze</span>`;
  }
  
   if (windowSize <= 780){
    navFooter.innerHTML = `<div class="d-flex gap-4 ps-0">
    <div class="d-flex gap-4 text-truncate">
    <span class="fw-bold selected">Popolari</span>
    <span class="gray pb-3">Sul Litorale</span>
    <span class="gray pb-3">Destinazioni Storiche</span>
    <span class="gray pb-3">Isole</span>
    <span class="gray pb-3">Montagne</span>
    <span class="gray pb-3">Categorie</span>
    <span class="gray pb-3">Attività</span>
    </div>
    <ion-icon style="font-size: 25px" name="chevron-forward-outline"></ion-icon>
    </div>`;
  }
  else{
    navFooter.innerHTML = `<div class="d-flex gap-4 ps-0 text-truncate">
    <span class="fw-bold selected">Popolari</span>
    <span class="gray pb-3">Sul Litorale</span>
    <span class="gray pb-3">Destinazioni Storiche</span>
    <span class="gray pb-3">Isole</span>
    <span class="gray pb-3">Montagne</span>
    <span class="gray pb-3">Categorie</span>
    <span class="gray pb-3">Attività</span>
    </div>`;

  }
  
}


window.addEventListener("resize", checkWindowWidth);

checkWindowWidth();
