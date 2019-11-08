<template>
    <div class="main-menu" :class="{ open : $store.state.menuOpen, dark : $store.state.isSlide }">
        <div class="part">F</div>
        <div class="part">A</div>
        <div class="part">I</div>
        <div class="part">R</div>
        <div class="menu-holder">
            <nav>
                <ul>
                    <li @click="toggleMenu()" v-for="(page, index) in pages" :key="index">
                        <nuxt-link :to="page.slug == 'home' ? '/' : '/'+ page.slug">{{ page.menu_title }}</nuxt-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    import pages from '~/static/json/pages.json'
    export default {
        data () {
            return {
                pages : pages
            }
        },
        methods: {
            toggleMenu() {
                let bool = this.$store.state.menuOpen ? false : true
                let self = this
                setTimeout(function(){
                    self.$store.commit('toggleMenu', bool)
                }, 1000);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/01-settings/_settings--variables.scss';
    @import '~assets/scss/02-tools/_tools--media-queries.scss';
    .main-menu {
        position: fixed;
        width: 50px;
        height: 47px;
        left: 0;
        top: 0;
        background-color: transparent;
        padding: .5rem 1.1rem;
        transition: width .4s ease-in-out, height .4s ease-in-out, padding .4s ease-in-out, background-color 0s .4s;
        opacity: 1;
        pointer-events: none;
        z-index: 1;

        &.dark {
            .part {
                color: $dark;
            }
        }

        &.hovered {
            width: 50px;
            height: 50px;
        }

        &.open,
        &.open.dark  {
            width: 100vw;
            height: 100vh;
            background-color: $dark;
            opacity: 1;
            padding: 2.5rem 3rem;
            pointer-events: all;
            transition: width .4s ease-in-out, height .4s ease-in-out, padding .4s ease-in-out, background-color 0s;

            .menu-holder {
                opacity: 1;
                padding-top: 0rem;
                transition: .3s ease-in-out .4s;
            }

            .part {
                color: white;
            }
        }

        .parts {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 2;
        }

        .part {
            width: 50%;
            height: 50%;
            float: left;
            display: flex;
            color: white;
            position: relative;
            z-index: 1;

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

        .menu-holder {
            position: fixed;
            top: 0;
            left: 0%;
            right: 0%;
            height: 100%;
            background-color: transparent;
            overflow-y: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: .2s ease-in-out;
            opacity: 0;
            padding-top: 3rem;
            z-index: 2;

            nav {
                margin: 0 auto;
                width: 90%;
                max-width: 800px;
                text-align: center;
            
                @media all and (-ms-high-contrast:none) {
                    width: 100%;
                    max-width: 100%;
                }
                
                ul li {
                    a {
                        font-size: calc(2vw + 2vh + 2rem);
                        display: block;
                        text-transform: uppercase;
                        color: white;
                        transition: .3s;
                        line-height: .9em;
                        padding: calc(.4vh + .4vw + .4rem);

                        @include bp( max, $phablet ){
                            font-size: calc(1.35vw + 1.35vh + 1.35rem);
                        }

                        &:hover {
                            color: rgba(white, .5);
                        }
                    }
                }
            }
        }
    }
</style>
