let animatedText = `
          <div class="rb-animated-content">
            <div class="content__container">
              <p class="content__container__text">
                Reason
              </p>
              <ul class="content__container__list">
                <li class="content__container__list__item">Bangalore</li>
                <li style="margin-top:4px" class="content__container__list__item">ಬೆಂಗಳೂರು</li>
              </ul>
            </div>
          </div>
`;

window.addEventListener("DOMContentLoaded", _e => {
  document.querySelector("h1").innerHTML = animatedText;
});
