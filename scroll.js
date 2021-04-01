(() => {
  const scrollTrigger = document.querySelectorAll('a[href^="#"]');

  for (let i = 0; i < scrollTrigger.length; i++) {
    scrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();

      const href = scrollTrigger[i].getAttribute('href');
      const targetElement = document.querySelector(href);

      const rect = targetElement.getBoundingClientRect().top;
      const offset = pageYOffset;
      const gap = 53;
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
})();
