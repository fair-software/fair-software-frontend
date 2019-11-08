<template>
    <div class="fair-logo">
        <div v-if="this.$store.state.menuOpen == false" class="clickarea" @click="toggleMenu" @mouseover="addHover(true)" @mouseleave="addHover(false)"></div>
        <div v-else class="clickarea" @click="toggleMenu"></div>
        <main-menu ref="menu"></main-menu>
    </div>
</template>

<script>
    import MainMenu from '~/components/MainMenu'
    export default {
        components: {
           MainMenu
        },
        methods: {
            toggleMenu() {
                let bool = this.$store.state.menuOpen ? false : true
                this.$store.commit('toggleMenu', bool)
            },
            addHover(bool) {
                if (this.$store.state.menuOpen == false || bool == false) {
                    this.$refs.menu.$el.classList.remove('hovered')
                } 
                if (this.$store.state.menuOpen == false && bool == true) {
                    this.$refs.menu.$el.classList.add('hovered')
                } 
            }
        }
    }
</script>

<style lang="scss" scoped>
  .fair-logo {
    position: relative;
    width: 45px;
    height: 45px;
    background-color: transparent;
    padding: .4rem 1rem;

    .clickarea {
        position: absolute;
        left: 0;
        top: 0;
        width: 45px;
        height: 45px;
        z-index: 10;
    }

    .part {
      width: 50%;
      height: 50%;
      float: left;
      display: flex;
      align-items: center;
      justify-content: center;

      &:nth-child(1) {
          align-items: unset;
          justify-content: flex-start;
      }
      &:nth-child(2) {
          align-items: unset;
          justify-content: flex-end;
      }
       &:nth-child(3) {
          align-items: flex-end;
          justify-content: flex-start;
      }
       &:nth-child(4) {
          align-items: flex-end;
          justify-content: flex-end;
      }
    }
  }
</style>
