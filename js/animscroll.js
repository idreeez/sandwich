function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('animate__fadeInUp');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let element = document.querySelectorAll('.animate__animated');
  for (let elm of element) {
    observer.observe(elm);
  }
  
  // взяли кнопку
let mybutton = document.getElementById("btn-back-to-top");
mybutton.style.display = "none";
// при пролистывании сайта на 20 пикс вниз, появляется кнопка
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 30 ||
    document.documentElement.scrollTop > 30
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// при нажатии кнопка поднимает вверх
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}