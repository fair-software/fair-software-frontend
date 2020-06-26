<template>
    <div v-if="$store.state.menuOpen == false" class="pageNav" :class="{ dark : $store.state.isSlide, contentOpen : $store.state.contentOpen }" :style="prev ? 'z-index: 11' : ''">
        <div v-if="home">
            <div v-if="next" @click="goToNextPage" class="next" :class="invert ? 'm-invert' : ''">
                <div class="handle handle--home">

                    <svg width="364" height="155" viewBox="0 0 364 155" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" 
                        stroke-width="15" 
                        stroke-linecap="round" 
                        stroke-miterlimit="10" 
                        d="M64.145 22.9029C63.2118 23.0675 62.2946 23.2335 61.4208 23.3921C61.1977 32.609 60.6899 53.3801 60.199 73.4366C59.899 85.6929 59.6052 97.6835 59.3865 106.61L59.1232 117.352L59.1157 117.66C60.6266 117.702 62.445 117.749 64.6227 117.802L64.6328 117.803L64.6428 117.803C65.9166 117.84 67.0653 117.864 68.1605 117.886C72.8384 117.98 76.5388 118.055 84.8408 119.135C87.2219 119.444 89.8808 119.726 92.7153 120.026L92.9375 120.05C95.8355 120.357 98.8973 120.684 101.911 121.071C107.845 121.835 113.979 122.88 118.579 124.675C120.936 125.594 122.76 126.626 124.321 127.584C124.823 127.891 125.269 128.172 125.683 128.433C126.627 129.027 127.407 129.518 128.318 129.995C130.545 131.16 133.408 132.132 139.475 131.904C151.29 131.46 158.13 134.423 165.495 137.614C167.091 138.305 168.71 139.007 170.411 139.687C173.037 140.738 175.252 141.778 177.184 142.714C177.665 142.947 178.12 143.17 178.554 143.382C179.909 144.045 181.069 144.612 182.211 145.109C185.012 146.33 187.274 146.935 190.322 146.72C192.601 146.437 194.401 146.884 195.953 147.503C196.565 147.747 197.18 148.036 197.695 148.278C197.775 148.316 197.854 148.352 197.929 148.388C198.528 148.668 199.078 148.917 199.683 149.145C201.867 149.966 205.571 150.819 213.784 149.27C221.527 147.81 225.429 144.309 227.339 140.863C229.336 137.258 229.425 133.225 228.667 130.458L228.665 130.451L228.663 130.443C228.224 128.816 227.839 126.863 228.362 125.041C229.058 122.615 230.925 121.575 232.23 121.109C232.815 120.9 233.422 120.754 233.866 120.649C233.956 120.628 234.043 120.607 234.128 120.587C234.517 120.496 234.859 120.416 235.236 120.312C236.096 120.077 236.994 119.755 237.967 119.171C240.609 117.586 242.096 116.509 243.453 114.988C244.867 113.404 246.304 111.151 248.469 106.97C251.797 100.476 251.087 96.3037 249.585 87.6885C249.229 85.6519 248.944 83.9679 248.907 82.7395C248.888 82.1099 248.911 81.1917 249.259 80.2449C249.676 79.1081 250.444 78.2329 251.412 77.6646C252.185 77.2104 252.972 77.0302 253.313 76.9523C253.618 76.8826 253.759 76.8544 253.88 76.8301C254.014 76.8033 254.123 76.7814 254.4 76.7146C254.997 76.5705 255.783 76.33 256.847 75.7245C259.42 74.2606 260.343 73.31 261.002 71.9776C261.833 70.298 262.399 67.6997 263.165 62.3355C263.475 60.1672 263.218 59.0736 262.999 58.5646C262.814 58.1346 262.536 57.8291 261.984 57.5152C261.317 57.1357 260.48 56.8663 259.193 56.4838C259.127 56.4642 259.058 56.4438 258.987 56.4227C257.934 56.1122 256.296 55.6288 254.952 54.7595L254.929 54.7446L254.906 54.7294C251.59 52.5187 249.986 49.3113 249.389 46.2896C248.806 43.3419 249.136 40.4227 249.797 38.2412C250.589 35.628 252.919 34.3369 254.339 33.7031C255.979 32.9713 257.965 32.4493 259.903 32.0294C261.748 31.6297 263.779 31.2761 265.747 30.9335C265.884 30.9097 266.021 30.8859 266.157 30.8621C268.293 30.49 270.356 30.1242 272.247 29.6988C280.293 27.8884 284.691 26.9776 291.866 28.7134C294.291 29.3002 297.047 29.2377 300.767 28.9621C301.335 28.9201 301.922 28.8733 302.529 28.8251C305.751 28.5689 309.513 28.2697 313.654 28.4033C318.085 28.5462 325.087 28.1862 332.179 27.7706C333.183 27.7117 334.19 27.6516 335.19 27.592C341.099 27.2396 346.773 26.9012 350.325 26.9012C354.074 26.9012 356.047 26.279 357.118 25.4242C358.012 24.7113 358.998 23.2428 359.127 19.4718C359.2 17.0672 358.392 14.0188 356.77 11.6104C355.189 9.26245 353.124 7.89714 350.7 7.79927C343.471 7.60131 337.336 7.50194 323.914 7.8002C316.896 7.95616 309.554 7.30651 302.868 6.64421C302.028 6.56099 301.201 6.47788 300.387 6.39612C294.598 5.81459 289.487 5.3012 285.325 5.3012L284.688 5.3012L284.082 5.10318C283.529 4.92229 282.431 4.80687 280.56 4.92041C278.765 5.02933 276.684 5.31378 274.325 5.64891C274.109 5.6796 273.891 5.71082 273.67 5.7424C269.319 6.36377 264.004 7.12281 259.535 6.57106L259.529 6.57032C255.871 6.11305 249.795 6.12398 243.564 6.26271C241.502 6.30863 239.42 6.36884 237.44 6.42607C233.646 6.53578 230.229 6.63457 228.063 6.60071L228.057 6.60062C224.137 6.5336 219.12 6.17787 213.943 5.81082C211.257 5.62038 208.528 5.42688 205.887 5.26908C197.833 4.7879 190.675 4.64423 186.433 5.51879C182.106 6.411 176.844 8.7022 171.334 11.2355C170.746 11.5058 170.152 11.7803 169.556 12.0562C164.858 14.2291 159.978 16.4863 156.119 17.4758C151.595 18.6359 145.427 18.6478 140.104 18.4869C138.032 18.4242 136.099 18.3374 134.347 18.2587C131.265 18.1203 128.747 18.0072 127.032 18.0959C124.382 18.2329 121.313 18.6959 117.844 19.2616C117.395 19.3347 116.94 19.4095 116.48 19.4852C113.457 19.9821 110.202 20.5172 106.967 20.8767C105.355 21.0558 104.113 21.3007 102.915 21.5519C102.782 21.5798 102.648 21.6084 102.511 21.6373C101.448 21.8623 100.274 22.111 98.9914 22.2614C95.9249 22.6213 92.4869 22.4072 86.6538 21.1051C84.5278 20.6306 80.9966 20.6602 76.6747 21.0837C72.4793 21.4948 67.9831 22.2259 64.145 22.9029Z" 
                    />
                    </svg>
                </div>
            </div>
        </div>
        <div v-else>
            <div v-if="prev" @click="goToPrevPage" class="prev" :class="invert ? 'm-invert' : ''">
                <div class="handle">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 50 50" xml:space="preserve">
                        <g>
                            <polygon points="17.886,15.06 20.029,12.917 32.113,24.999 32.111,25 32.113,25.002 20.029,37.083 17.886,34.94 27.826,25 "/>
                        </g>
                    </svg>
                </div>
            </div>
            <div v-else class="prev-inactive">
                <div class="handle m-show-phablet inactive">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 24 24" xml:space="preserve">
                        <g>
                            <polygon points="17.886,15.06 20.029,12.917 32.113,24.999 32.111,25 32.113,25.002 20.029,37.083 17.886,34.94 27.826,25 "/>
                        </g>
                    </svg>
                </div>
            </div>
            <nuxt-link :to="last ? '/endorse' : ''" href="" v-if="center" class="center"></nuxt-link>
            <div v-if="next" @click="goToNextPage" class="next" :class="invert ? 'm-invert' : ''">
                <div class="handle">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 50 50" xml:space="preserve">
                        <g>
                            <polygon points="32.113,15.06 29.971,12.917 17.887,24.999 17.889,25 17.887,25.002 29.971,37.083 32.113,34.94 22.174,25 "/>
                        </g>
                    </svg>
                </div>
            </div>
            <div v-else class="next-inactive">
                <div class="handle m-show-phablet inactive">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 50 50" xml:space="preserve">
                        <g>
                            <polygon points="32.113,15.06 29.971,12.917 17.887,24.999 17.889,25 17.887,25.002 29.971,37.083 32.113,34.94 22.174,25 "/>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
        <nuxt-link :to="'/endorse'" v-if="last" @click="goToNextPage" class="last" :class="invert ? 'm-invert' : ''">
        </nuxt-link>
    </div>
</template>

<script>
    import recommendations from '~/static/json/recommendations.json'
    export default {
        props: {
            prev: { type: Boolean, default(){ return true } },
            next: { type: Boolean, default(){ return true } },
            center: { type: Boolean, default(){ return true } },
            current: { type: Number, default(){ return 0 } },
            last: { type: Boolean, default(){ return false } },
            invert: { type: Boolean, default(){ return false } },
            home: { type: Boolean, default(){ return false } },
        },
        methods: {
            goToPrevPage () {
                if (this.current == 1) {
                   this.$router.push({ path: '/' })
                } else {
                    let prev = recommendations[(this.current - 2)];
                    this.$router.push({
                        path: '/recommendations/' + prev.slug
                    })
                }
            },
            goToNextPage () {
                let next = recommendations[(this.current)];
                this.$router.push({
                    path: '/recommendations/' + next.slug
                })
            },
            arrowFunctions () {
                let self = this
                let evt = event || window.event;
                switch (evt.keyCode) {
                    case 37:
                        if (!self.home) {
                            self.goToPrevPage();
                        }
                        break;
                    case 39:
                        if (!self.last) {
                            self.goToNextPage();
                        }
                        break;
                }
            }
        },
        mounted () {
            let self = this
            const arrows = () => this.arrowFunctions();

            window.addEventListener('keydown', arrows);

            // document.onkeydown = function(evt) {
            //     evt = evt || window.event;
            //     switch (evt.keyCode) {
            //         case 37:
            //             if (!self.home) {
            //                 self.goToPrevPage();
            //             }
            //             break;
            //         case 39:
            //             if (!self.last) {
            //                 self.goToNextPage();
            //             }
            //             break;
            //     }
            // };
            this.$on(`hook:destroyed`, () => {
                window.removeEventListener('keydown', arrows);
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/01-settings/_settings--variables.scss';
    @import '~assets/scss/02-tools/_tools--media-queries.scss';
    .pageNav {
        position: absolute;
        width: 100%;
        height: 100%;

        &.dark {
            .next, .prev, .last {
                .handle {
                    @include bp( max, $phablet ){
                        svg {
                            stroke: $dark;
                            fill: $dark;
                        }
                    }
                }
            }
        }

        &.contentOpen {
            height: 30vh;
            .center, .last, .next, .prev  {
                height: 25%;
            }
        }

        @include bp( max, $phablet ){
            position: fixed;
            width: 90px;
            right: 0;
            top: 0;
            height: 45px;
            z-index: 12 !important;
        }

            .center {
                position: absolute;
                width: 30%;
                left: 30%;
                height: 100%;

                @include bp( max, $phablet ){
                    display: none;
                }
            }

            .last, .next, .prev {
                height: 50%;

                @include bp( max, $tablet-landscape ){
                    height: 90%;
                }
            }

            .next, .next-inactive, .prev, .prev-inactive, .last {
                .handle {
                    position: fixed;
                    padding: .5rem .5rem;
                    background-color: $primarycolor;
                    top: 100px;
                    font-weight: 900;
                    color: $dark;
                    transition: .3s ease-in-out;
                    transform: translateY(-50%);
                    width: 50px;
                    height: 50px;

                    &.inactive {
                        svg {
                            stroke: $gray;
                            fill: $gray;
                        }
                    }

                    &.handle--home {
                        svg {
                            transform:  translateY(0);
                            @include bp( max, $phablet ){
                                transform: translateY(1rem);
                            }
                        }
                    }

                    @include bp( max, $phablet ){
                        position: relative;
                        top: 0;
                        width: 45px;
                        height: 45px;
                        padding: .3rem;
                        background-color: transparent;
                        transform: translateY(0);
                    }

                    svg {
                        stroke: white;
                        fill: white;
                        width: 40px;
                        height: 40px;
                        transform: rotate(180deg);

                        @include bp( max, $phablet ){
                           stroke: white;
                        }
                    }

                    &:hover, &:active {
                        background-color: $dark;
                        @include bp( max, $phablet ){
                            background-color: transparent;
                        }
                    }

                    // @include bp( max, $tablet-landscape ){
                    //     display: block;
                    // }
                }
            }
            .last {
                .handle {
                    svg {
                        transform: rotate(-90deg);
                    }
                }
            }

            .last,
            .next,
            .next-inactive,
            .prev-inactive,
            .prev {
                position: absolute;
                width: 35%;
                @include bp( max, $phablet ){
                    position: relative;
                    float: left;
                    width: 45px;
                    height: 45px;
                }
            }

            .last,
            .next,
            .next-inactive {
                right: 0;

                .handle {
                    right: 0;
                }

                @include bp( max, $phablet ){
                    float: right;
                }
            }
            .prev {
                left: 0;

                .handle {
                    left: 0;
                }
            }

            .last .handle {
                svg {
                    @include bp( max, $phablet ){
                        height: 35px;
                    }
                }
            }
        }
</style>
