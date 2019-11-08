<template>
    <div v-if="$store.state.menuOpen == false" class="pageNav" :class="{ dark : $store.state.isSlide, contentOpen : $store.state.contentOpen }" :style="prev ? 'z-index: 11' : ''">
        <div v-if="home">
            <div v-if="next" @click="goToNextPage" class="next" :class="invert ? 'm-invert' : ''">
                <div class="handle handle--home">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 200 380" xml:space="preserve">
                        <g>
                            <path fill="none" stroke-width="15" stroke-linecap="round" stroke-miterlimit="10" d="M158.5,8.8
                                c-8.8,0.3-11.3,4.8-11.3,12.8s-1.8,27.5-1.5,36.8S144,74.8,145.5,81s0.8,9.8-1,17.8s-2.5,18.5-5.8,19.5s-9,1-12-3.5
                                c-2.2-3.4-1-11.5-11.5-10s-13,2.5-16.3,8.3s0.8,6.8-7.8,5.3s-14-2.5-21.8,1.5c-8.5,4.4-10.5,6.5-13.8,12s-0.5,9.2-6.8,7.5
                                c-7.3-2-20.5,0.5-23.8,18s3.3,17.9,2.5,23.8c-0.6,7.9,3.3,11.8,7.3,21.8s8,16,7.5,29.3s4.3,14.3,7.5,22.5s4,22.8,5.3,32.8
                                s1.1,13,1.3,19.8c0.5,20.5,0.5,9.5,0.5,9.5s93.8-2.3,102.3-2.5c-4.8,13,4.3-18.8,1.8-30s-0.5-11.8,0.3-19s2.5-14.5,2.8-20.3
                                s-1.5-20.5,0.5-28.3s10-20.8,12-30.5s-0.8-30.8-1-42.5c-0.1-6.4,1-23.9,0-31.9c-1-8.1,3-20.1,1.3-25.3c0-10-2.8-25-2.5-38.5
                                s0.2-19.7,0-27C174,13,165,8.6,158.5,8.8z"/>
                            <path fill="none" stroke-width="15" stroke-linecap="round" stroke-miterlimit="10" d="M174.8,371.8
                                c0,0-0.8-25-1.8-32s-0.5-17.5-0.3-21s-0.3-5.8-5.3-5.8s-45.8,2.5-53.5,2.8s-56.3,2.3-58.8,1.5S51,318,49,319.5s-1,12.8-1.8,15.8
                                c-1,4-1.5,5.5-1.5,10.8s1.5,6.3,1.3,10.5s0,5.3-0.5,8.3s0.3,6.8,0.3,6.8"/>
                        </g>
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
                            transform: rotate(90deg) rotateY(180deg) translateY(0);
                            @include bp( max, $phablet ){
                                transform: rotate(90deg) rotateY(180deg) translateY(1rem);
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
                        transform: rotateY(180deg);

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
