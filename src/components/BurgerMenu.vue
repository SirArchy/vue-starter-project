<template>
    <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
            <span>
            </span>
        </label>

        <ul class="menu__box">
            <li><router-link class="menu__item" to="/">Home</router-link></li>
            <li><router-link class="menu__item" to="/login">Login</router-link></li>
            <li><router-link class="menu__item" to="/season-type">Season Type</router-link></li>
            <li><router-link class="menu__item" to="/match-picker">Match Picker</router-link></li>
            <li><router-link class="menu__item" to="/elo-calculator">Elo Calculator</router-link></li>
            <li><router-link class="menu__item" to="/contact">Contact</router-link></li>
            <li><router-link class="menu__item" to="/about">About</router-link></li>
            <footer>
                <p>Copyright &copy; {{ year }}</p>
            </footer>
        </ul>
    </div>
</template>

<!-- This implements a computed variable, maybe important for the calculated values later on  -->
<script lang="ts">
import { computed } from 'vue'

export default {
  setup () {
    const year = computed(() => new Date().getFullYear())
    return { year }
  }
}
</script>

<style lang="scss">
#menu__toggle {
    opacity: 0;
}

#menu__toggle:checked+.menu__btn>span {
    transform: rotate(45deg);
}

#menu__toggle:checked+.menu__btn>span::before {
    top: 0;
    transform: rotate(0deg);
}

#menu__toggle:checked+.menu__btn>span::after {
    top: 0;
    transform: rotate(90deg);
}

#menu__toggle:checked~.menu__box {
    left: 0 !important;
}

.menu__btn {
    position: fixed;
    top: 20px;
    left: 20px;
    width: 26px;
    height: 26px;
    cursor: pointer;
    z-index: 16;
}

.menu__btn>span,
.menu__btn>span::before,
.menu__btn>span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #616161;
    transition-duration: .25s;
}

.menu__btn>span::before {
    content: '';
    top: -8px;
}

.menu__btn>span::after {
    content: '';
    top: 8px;
}

.menu__box {
    display: block;
    position: fixed;
    top: 0;
    left: -100%;
    width: 300px;
    height: 100%;
    margin: 0;
    padding: 80px 0;
    list-style: none;
    background-color: #ECEFF1;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
    transition-duration: .25s;
    z-index: 1;
}

.menu__item {
    display: block;
    padding: 12px 24px;
    color: #333;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    transition-duration: .25s;
}

.menu__item:hover {
    background-color: #CFD8DC;
}</style>
