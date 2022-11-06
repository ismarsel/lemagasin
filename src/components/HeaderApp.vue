<template>
  <header class="header">
    <div class="top-line">
      <div class="container flex--spbetween">
        <div class="top-line__left">
          <div class="geo-location flex--spbetween">
            <span>Select region</span>
          </div>
        </div>
        <div class="top-line__right flex--spbetween">
          <a href="#" class="delivery">
            <img src="@/assets/images/icons/covid-19.svg" alt="Mask icon" />
            <span>Contactless delivery with fitting</span>
          </a>
          <a href="#" class="payment">
            <img src="@/assets/images/icons/any-pay1.svg" alt="Pay icon" />
            <span>Pay whenever you want</span>
          </a>
          <a href="#" class="schedule">
            <img src="@/assets/images/icons//time_b.svg" alt="Time icon" />
            <span>How we work now</span>
          </a>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="header__middleRow flex--spbetween">
        <nav class="main-nav">
          <ul class="main-nav__list flex--spbetween">
            <li class="main-nav__list-item">
              <router-link to="/Electronics" class="main-nav__list-item-link">
                Electronics
              </router-link>
            </li>
            <li class="main-nav__list-item">
              <router-link to="/Jewelery" class="main-nav__list-item-link">
                Jewelery
              </router-link>
              <!-- <a href="#" class="main-nav__list-item-link">Jewelery</a> -->
            </li>
            <li class="main-nav__list-item">
              <router-link to="/MensClothing" class="main-nav__list-item-link">
                Men's clothing
              </router-link>
            </li>
            <li class="main-nav__list-item">
              <router-link
                to="/WomensClothing"
                class="main-nav__list-item-link"
              >
                Women's clothing
              </router-link>
            </li>
          </ul>
        </nav>
        <a href="/" class="logo">lemagasin</a>
        <div class="user-block flex--spbetween">
          <a href="./index.html" class="login">Login</a>
          <cart-icon />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import CartIcon from "./UI/CartIcon.vue";
export default {
  components: { CartIcon },
};
</script>

<style lang="scss" scoped></style>
