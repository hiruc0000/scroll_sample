(() => {
  const scrollTrigger = document.querySelectorAll('a[href^="#"]');

  for (let i = 0; i < scrollTrigger.length; i++) {
    scrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();

      const href = scrollTrigger[i].getAttribute('href');
      const targetElement = document.querySelector(href);

      const rect = targetElement.getBoundingClientRect().top;
      const offset = pageYOffset;
      let gap = i === 0 ? 60 : 50;
      const target = rect + offset - gap;

      scrollTo({
        top: target,
        behavior: 'smooth'
      });
    });
  }

  //TOPへ戻るボタンへのイベント
  const toTop = document.querySelector('.to-top');
  toTop.addEventListener('click', () => {
    scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  //スクロール時にクラスを付与する
  document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const icon = document.querySelector('.to-top');

    addStickyAndAppear(header, 'sticky', 80);
    addStickyAndAppear(icon, 'appear', 500);
  });


})();

function addStickyAndAppear(element, addClass, pixel) {
  const offset = pageYOffset;

  if (offset > pixel && !element.classList.contains(addClass)) {
    element.classList.add(addClass);
  } else if (offset <= pixel && element.classList.contains(addClass)) {
    element.classList.remove(addClass);
  }
}
