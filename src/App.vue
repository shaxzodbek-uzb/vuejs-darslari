<template>
  <div>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img class="navbar__brand" src="/logo/frulogo.svg" alt />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Главная</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">О компании</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Продукции</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Контакты</a>
              </li>
              <li class="nav-item dropdown">
                <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
                  <template #button-content>
                    <div
                      style="width: 33px; height: 33px; padding: 7px; border-radius: 100%; border: 1px solid #93c92b; border-radius: 50%; line-height: 0.8"
                    >
                      <img src="/logo/menu.svg" />
                    </div>
                  </template>
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                </b-dropdown>
              </li>
            </ul>
          </div>
          <div class="collapse navbar-collapse" id="navbarNavDropdown2">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link ps-0" href="#">
                  <div class="social-link">
                    <img src="/logo/instagram.svg" />
                  </div>
                </a>
                <a class="nav-link ps-0" href="#">
                  <div class="social-link">
                    <img src="/logo/facebook.svg" />
                  </div>
                </a>
                <a class="nav-link ps-0" href="#">
                  <div class="social-link">
                    <img src="/logo/youtube.svg" />
                  </div>
                </a>
              </li>
              <li class="nav-item" id="navflex">
                <a class="nav-link pb-0" id="fome" href="#">Связаться с нами</a>
                <a class="nav-link pt-0" href="#">+998 90 995 5959</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <div class="intro">
      <div class="container">
        <div class="row" id="ai">
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div class="intro__title">Производство сублимированных фруктов в Узбекистане</div>
            <div
              class="intro__subtitle"
            >Компания Frutata — новичок на рынке Узбекистана, однако несмотря на свою короткую историю мы являемся одним из немногих производителей</div>
            <div class="intro__more">Подробнее</div>
            <div class="intro__flex__content">
              <div class="intro__stat">
                <div class="stat__bignum">21+</div>
                <div class="stat__txt">
                  Разновидностей
                  Frutata
                </div>
                <img class="ellipse" src="/img/Ellipse.png" alt />
              </div>

              <div class="intro__stat">
                <div class="stat__bignum">100%</div>
                <div class="stat__txt">
                  Экологический
                  продукт
                </div>
                <img class="ellipse2" src="/img/Ellipse.png" alt />
              </div>
            </div>
          </div>
          <div
            id="jimbo"
            class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6"
            style="text-align: end;"
          >
            <img class="jimbe" src="/img/1.png" alt />
          </div>
        </div>
      </div>
    </div>

    <div class="about">
      <div class="container">
        <div class="cheer">
          <div class="row">
            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3" id="likey">
              <img class="tt" src="/logo/frulogo.svg" alt />
            </div>
            <div id="really" class="col-xs-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">
              <div class="about__title">О компании</div>
              <div
                class="about__txt"
              >Компания Frutata — новичок на рынке Узбекистана, однако несмотря на свою короткую историю мы являемся одним из немногих производителей сублимированных фруктов, который реализует свою продукцию не только на отечетсвенном рынке, но и поставляет его за рубеж!</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide">
      <div class="container">
        <div class="slide__content row">
          <div class="slide__title col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            Продукции
            <span class="ontheground">Frutata</span>
          </div>
          <a
            href="#"
            class="slide__more col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6"
          >Все продукции</a>
        </div>
      </div>
      <div class="image-slider swiper-container" style="padding: 10px 10px;">
        <div class="image-slider__wrapper swiper-wrapper">
          <carousel items="5.5">
            <div class="image-slider__slide swiper-slide" style="margin-right: 20px">
              <div id="bp" class="image-slider__image card">
                <div class="kimlip">
                  <img class="card__img" src="/img/2.png" alt />
                </div>
                <div class="card__cont">
                  <div class="card__title">В пакетная упаковка</div>
                  <div class="card__txt">Грушевые чипсы</div>
                  <div class="card__more">Подробнее</div>
                </div>
              </div>
            </div>
            <div class="image-slider__slide swiper-slide" style="margin-right: 20px">
              <div id="bp" class="image-slider__image card">
                <div class="kimlip">
                  <img class="card__img" src="/img/3.png" alt />
                </div>
                <div class="card__cont">
                  <div class="card__title">В пакетная упаковка</div>
                  <div class="card__txt">Микс «Персик, груша, инжир»</div>
                  <div class="card__more">Подробнее</div>
                </div>
              </div>
            </div>
            <div class="image-slider__slide swiper-slide" style="margin-right: 20px">
              <div id="bp" class="image-slider__image card">
                <div class="kimlip">
                  <img class="card__img" src="/img/4.png" alt />
                </div>
                <div class="card__cont">
                  <div class="card__title">В пакетная упаковка</div>
                  <div class="card__txt">Фруктовый микс «Слива, яблоко, абрикос»</div>
                  <div class="card__more">Подробнее</div>
                </div>
              </div>
            </div>
            <div class="image-slider__slide swiper-slide" style="margin-right: 20px">
              <div id="bp" class="image-slider__image card">
                <div class="kimlip">
                  <img class="card__img" src="/img/2.png" alt />
                </div>
                <div class="card__cont">
                  <div class="card__title">В пакетная упаковка</div>
                  <div class="card__txt">Грушевые чипсы</div>
                  <div class="card__more">Подробнее</div>
                </div>
              </div>
            </div>
            <div class="image-slider__slide swiper-slide" style="margin-right: 20px">
              <div id="bp" class="image-slider__image card">
                <div class="kimlip">
                  <img class="card__img" src="/img/3.png" alt />
                </div>
                <div class="card__cont">
                  <div class="card__title">В пакетная упаковка</div>
                  <div class="card__txt">Микс «Персик, груша, инжир»</div>
                  <div class="card__more">Подробнее</div>
                </div>
              </div>
            </div>
            <div class="image-slider__slide swiper-slide" style="margin-right: 20px">
              <div id="bp" class="image-slider__image card">
                <div class="kimlip">
                  <img class="card__img" src="/img/4.png" alt />
                </div>
                <div class="card__cont">
                  <div class="card__title">В пакетная упаковка</div>
                  <div class="card__txt">Фруктовый микс «Слива, яблоко, абрикос»</div>
                  <div class="card__more">Подробнее</div>
                </div>
              </div>
            </div>
          </carousel>
        </div>
      </div>
    </div>

    <!-- <div class="talk">
        <div class="container">
            <div class="talk__content row">
                <div class="talk__title col-xs-12	col-sm-12	col-md-6	col-lg-6	col-xl-6">Говоря о <span class="ontheground">Frutata</span></div>
                <div class="talk__txt col-xs-12	col-sm-12	col-md-6	col-lg-6	col-xl-6">Компания Frutata — новичок на рынке Узбекистана, однако несмотря на свою короткую историю мы являемся одним.</div>
            </div>
            <div id="around" class="row" style="align-items: center;">
                <div class="col-xs-12	col-sm-12	col-md-4	col-lg-3	col-xl-3" id="del">
                    <div class="pads">
                        <div class="pad">
                            <div class="pad__img"><img src="./logo/leaf.png" alt=""></div>
                            <div class="pad__txt">Вся польза и вкус сочной спелой груши в одном пакетике, который.</div>
                        </div>
                        <div class="pad">
                            <div class="pad__img"><img src="./logo/heart.png" alt=""></div>
                            <div class="pad__txt">Вся польза и вкус сочной спелой груши в одном пакетике, который.</div>
                        </div>
                        <div class="pad">
                            <div class="pad__img"><img src="./logo/bottle.png" alt=""></div>
                            <div class="pad__txt">Вся польза и вкус сочной спелой груши в одном пакетике, который.</div>
                        </div>
                    </div>
                </div>
                <div id="latata" class="col-xs-12	col-sm-12	col-md-4	col-lg-6	col-xl-6" style="text-align: center;">
                    <img id="lana" src="/img/5.png" alt="">
                </div>
                <div class="col-xs-12	col-sm-12	col-md-4	col-lg-3	col-xl-3" id="del">
                    <div class="pads">
                        <div class="pad">
                            <div class="pad__img"><img src="./logo/heart.png" alt=""></div>
                            <div class="pad__txt">Вся польза и вкус сочной спелой груши в одном пакетике, который.</div>
                        </div>
                        <div class="pad">
                            <div class="pad__img"><img src="./logo/bottle.png" alt=""></div>
                            <div class="pad__txt">Вся польза и вкус сочной спелой груши в одном пакетике, который.</div>
                        </div>
                        <div class="pad">
                            <div class="pad__img"><img src="./logo/leaf.png" alt=""></div>
                            <div class="pad__txt">Вся польза и вкус сочной спелой груши в одном пакетике, который.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>-->

    <!-- <div class="pack">
        <div class="container">
            <div class="row justify-content-center">

                <div class="col-xs-12	col-sm-6	col-md-6	col-lg-6	col-xl-6">

                    <div id="lleft" class="tab row">

                        <div class="tab__img col-xs-12	col-sm-12	col-md-6	col-lg-6	col-xl-6">
                            <img class="cry" src="/img/6.png" alt="">
                        </div>

                            <div class="tab__content col-xs-12	col-sm-12	col-md-6	col-lg-6	col-xl-6">
                                <div class="tab__title">Баночная упаковка</div>
                                <div class="tab__txt">Компания Frutata — новичок на рынке Узбекистана, однако несмотря на свою короткую историю мы являемся одним из немногих производителей сублимированных фруктов.</div>
                            </div>

                    </div>

                </div>

                <div class="col-xs-12   col-sm-6	col-md-6	col-lg-6	col-xl-6">

                    <div id="rright" class="tab row">

                        <div class="tab__img col-xs-12	col-sm-6	col-md-6	col-lg-6	col-xl-6">
                            <img class="cry" src="/img/7.png" alt="">
                        </div>

                            <div class="tab__content col-xs-12	col-sm-6	col-md-6	col-lg-6	col-xl-6">
                                <div class="tab__title">Пакетная упаковка</div>
                                <div class="tab__txt">Новичок на рынке Узбекистана, однако несмотря на свою короткую немногих производителей сублимированных фруктов.</div>
                            </div>

                    </div>

                </div>

            </div>
        </div>
    </div>-->

    <!-- <div class="partners">
        <div class="container">
            <div class="partners__content row">
                <div class="partners__title col-xs-12	col-sm-12	col-md-6	col-lg-6	col-xl-6">Наши <span class="ontheground">партнёры</span></div>
                <div class="partners__txt col-xs-12	col-sm-12	col-md-6	col-lg-6	col-xl-6">Компания Frutata — новичок на рынке Узбекистана, однако несмотря на свою короткую историю мы являемся одним.</div>
            </div>
            <div class="row" id="yes">
                <div id="cherry" class="col-xs-3	col-sm-3	col-md-3	col-lg-3	col-xl-3">
                    <div class="cardo">
                        <img src="./logo/frulogo.svg" alt="">
                    </div>
                </div>
                <div class="col-xs-3	col-sm-3	col-md-3	col-lg-3	col-xl-3" id="cherry">
                    <div  class="cardo">
                        <img src="./logo/fruitdorlogo.png" alt="">
                    </div>
                </div>
                <div class="col-xs-3	col-sm-3	col-md-3	col-lg-3	col-xl-3" id="cherry">
                    <div  class="cardo">
                        <img src="./logo/organicslogo.png" alt="">
                    </div>
                </div>
                <div class="col-xs-3	col-sm-3	col-md-3	col-lg-3	col-xl-3" id="cherry">
                    <div  class="cardo">
                        <img src="./logo/korzinkalogo.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>-->

    <!-- <div class="contacts">
        <div class="container">
            <div class="row">
                <div class="col-xs-12	col-sm-12	col-md-6	col-lg-6	col-xl-6" id="piri">
                    <div class="row">
                        <div class="col-xs-12	col-sm-12	col-md-6	col-lg-6	col-xl-6" id="pikaboo">Контакты</div>
                            <div class="col-xs-12	col-sm-12	col-md-6	col-lg-6	col-xl-6" id="forewer">
                                <div class="svaz">Связаться с нами:</div>
                                <div class="num">+998 90 995 5959</div>
                            </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12	col-sm-12	col-md-6	col-lg-6	col-xl-6">
                            <div class="nam">
                                Мы в соц. сетях:
                            </div>
                            <div class="socs d-flex">
                                <a class="nav-link ps-0" href="#"><i style="color: white; background: #93C92B;" class="fab fa-instagram"></i></i></a>
                                <a class="nav-link" href="#"><i style="color: white; background: #93C92B;" class="fab fa-facebook-f"></i></i></a>
                                <a class="nav-link" href="#"><i style="color: white; background: #93C92B;" class="fab fa-youtube"></i></i></a>
                            </div>
                        </div>
                            <div id="easter" class="col-xs-12	col-sm-12	col-md-6	col-lg-6	col-xl-6">
                                <div class="svaz">Адрес:</div>
                                <div class="num" style="max-width: 60%;">Махалля Файзабад, улица, Fargona Road</div>
                            </div>
                    </div>
                </div>
                <div class="col-xs-12	col-sm-12	col-md-6	col-lg-6	col-xl-6" >
                    <iframe id="map" src="https://yandex.ua/map-widget/v1/?um=constructor%3Aef40a104c6d1961cedc297b642f672fee90612d0bf511eba48c920a59bd9de45&amp;source=constructor" width="720" height="480" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </div>-->

    <!-- <div class="footer">
        <div class="container">
            <div id="agustd" class="row">
                <div class="col-xs-4	col-sm-4	col-md-2	col-lg-2	col-xl-2" id="loona">
                    <img class="likey" src="./logo/frutatalogowhite.png" alt="">
                </div>
                <div class="col-xs-4	col-sm-4	col-md-2	col-lg-2	col-xl-2" id="loona">
                    <a href="#" class="foot__txt">О компании</a>
                    <a href="#" class="foot__txt">Продукции</a>
                    <a href="#" class="foot__txt">Производство</a>
                </div>
                <div class="col-xs-4	col-sm-4	col-md-2	col-lg-2	col-xl-2" id="loona">
                    <a href="#" class="foot__txt">Новости</a>
                    <a href="#" class="foot__txt">Контакты</a>
                    <a href="#" class="foot__txt">Поставщикам</a>
                </div>
                <div class="col-xs-4	col-sm-4	col-md-2	col-lg-2	col-xl-2" id="loona">
                    <a href="#" class="foot__txt">Адрес:</a>
                    <a href="#" class="foot__txt">Махалля Файзабад, улица, Fargona Road</a>
                </div>
                <div class="col-xs-4	col-sm-4	col-md-2	col-lg-2	col-xl-2" id="loona">
                    <a href="#" class="foot__txt">Связаться с нами:</a>
                    <a href="#" class="foot__txt">+998 90 995 5959</a>
                </div>
                <div class="col-xs-4	col-sm-4	col-md-2	col-lg-2	col-xl-2" id="loona">
                    <a href="#" class="foot__txt">Мы в соц. сетях:</a>
                    <div class="socs2 d-flex" >
                        <a class="nav-link ps-0" href="#"><i style="color: #689E00;;" class="fab fa-instagram"></i></i></a>
                        <a class="nav-link" href="#"><i style="color: #689E00;;" class="fab fa-facebook-f"></i></i></a>
                        <a class="nav-link" href="#"><i style="color: #689E00;;" class="fab fa-youtube"></i></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>-->
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  components: { carousel }
};
</script>
