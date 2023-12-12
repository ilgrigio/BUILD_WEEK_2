function checkWindowWidth() {
  let windowSize = window.innerWidth;
  let showMore = document.querySelector("#showMore");

  if (windowSize <= 767) {
    showMore.innerHTML = `<p class="fw-bold mb-0">Mostra altro <ion-icon name="chevron-down-outline"></ion-icon></p>`;
  } else {
    showMore.innerHTML = `<p class="fw-bold mb-0">Chia</p>
    <span class="gray">Case vacanze</span>`;
  }
}

window.addEventListener("resize", checkWindowWidth);

checkWindowWidth();
