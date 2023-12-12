function checkWindowWidth(){
   let windowSize = window.innerWidth;
   let showMore = document.querySelector("#showMore");

   if(windowSize <= 767){
      showMore.innerHTML = `<p class="fw-bold mb-0">Mostra altro <ion-icon name="chevron-down-outline"></ion-icon></p>`
   }
}

window.addEventListener("resize", checkWindowWidth);

checkWindowWidth();