<template>
  <div class="slide">
    <div class="container">
      <div class="slide__content row">
        <div class="slide__title col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          Продукции
          <span class="ontheground">Frutata</span>
        </div>
        <a href="#" class="slide__more col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">Все продукции</a>
      </div>
    </div>
    <div class="image-slider swiper-container" style="padding: 10px 10px;">
      <div class="image-slider__wrapper swiper-wrapper">
        <carousel items="5.5">
          <div
            class="image-slider__slide swiper-slide"
            style="margin-right: 20px"
            v-for="(item, index) in items"
            :key="index"
          >
            <div id="bp" class="image-slider__image card">
              <div class="kimlip">
                <img class="card__img" :src="item.photo" alt />
              </div>
              <div class="card__cont">
                <div class="card__title">{{ item.title }}</div>
                <div class="card__txt">{{ item.text }}</div>
                <div class="card__more">Подробнее</div>
              </div>
            </div>
          </div>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: { carousel },
  data() {
    return {
      items: [
        {
          photo: "/img/2.png",
          title: "В пакетная упаковка",
          text: "Фруктовый микс «Слива, яблоко, абрикос»"
        },
        {
          photo: "/img/3.png",
          title: "В пакетная упаковка",
          text: "Микс «Персик, груша, инжир»"
        },
        {
          photo: "/img/4.png",
          title: "В пакетная упаковка",
          text: "Грушевые чипсы"
        },
        {
          photo: "/img/2.png",
          title: "В пакетная упаковка",
          text: "Фруктовый микс «Слива, яблоко, абрикос»"
        },
        {
          photo: "/img/3.png",
          title: "В пакетная упаковка",
          text: "Фруктовый микс «Слива, яблоко, абрикос»"
        },
        {
          photo: "/img/4.png",
          title: "В пакетная упаковка",
          text: "Грушевые чипсы"
        },
        {
          photo: "/img/2.png",
          title: "В пакетная упаковка",
          text: "Фруктовый микс «Слива, яблоко, абрикос»"
        },
        {
          photo: "/img/3.png",
          title: "В пакетная упаковка",
          text: "Фруктовый микс «Слива, яблоко, абрикос»"
        },
        {
          photo: "/img/4.png",
          title: "В пакетная упаковка",
          text: "Грушевые чипсы"
        },
        {
          photo: "/img/2.png",
          title: "В пакетная упаковка",
          text: "Фруктовый микс «Слива, яблоко, абрикос»"
        },
        {
          photo: "/img/3.png",
          title: "В пакетная упаковка",
          text: "Фруктовый микс «Слива, яблоко, абрикос»"
        }
      ]
    };
  }
};
</script>

<style>
</style>