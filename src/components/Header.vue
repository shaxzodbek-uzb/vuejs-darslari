<template>
  <!-- header -->
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
            <li v-for="(link, index) in links" :key="index" class="nav-item">
              <router-link
                class="nav-link"
                :class="{'active': index == activeIndex}"
                aria-current="page"
                :to="link.link"
              >{{ link.title }}</router-link>
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
  <!-- header end -->
</template>

<script>
export default {
  data() {
    return {
      links: [
        { link: "/", title: "Главная" },
        { link: "/about-company", title: "О компании" },
        { link: "/products", title: "Продукции" },
        { link: "/contacts", title: "Контакты" }
      ],
      activeIndex: 3
    };
  }
};
</script>

<style>
.nav-item .active {
  color: red !important;
}
</style>