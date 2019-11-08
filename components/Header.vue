<template>
    <header class="site-header" :class="{ dark : $store.state.isSlide }">
        <logo class="logo"></logo>
        <nav class="slideNav">
            <ul>
                <li v-for="(recommendation, index) in recommendations" :key="index">
                    <nuxt-link :data-slug="recommendation.slug" :to="'/recommendations/' + recommendation.slug">
                        {{ recommendation.number }}
                        <span class="label">{{ recommendation.slug }}</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="'/endorse'">Endorse</nuxt-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
    import Logo from '~/components/Logo'
    import recommendations from '~/static/json/recommendations.json'
    import PageNav from '~/components/PageNav'
    export default {
        components: {
           Logo,
           PageNav
        },
        data () {
            return {
                recommendations: recommendations
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/01-settings/_settings--variables.scss';
    @import '~assets/scss/02-tools/_tools--media-queries.scss';
    .site-header {
        top: 0;
        left: 0;
        width: 100%;
        position: fixed;
        background-color: $dark;
        display: flex;
        z-index: 12;
        @include bp( max, $phablet ){
            border-bottom: 1px solid rgba(white, .2);
        }

        &.dark {
            background-color: #FFFFFF;

            @include bp( max, $phablet ){
                border-bottom: 1px solid rgba($dark, .2);
            }

            nav {
                ul {
                    li {
                        a {
                           &.nuxt-link-active {
                               color: $dark;
                           } 
                        }
                    }
                }
            }
        }

        .logo {
            float: left;
        }

        .slideNav {
            @include bp( max, $tablet-portrait ){
                padding-right: 3rem;
            }
            @include bp( max, $phablet ){
                display: none;
            }
        }

        .mobileNav {
            display: none;
            
            @include bp( max, $phablet ){
                display: inline-block;
            }

            a {
                padding: 1.5rem 2rem;
                display: inline-block;
                text-transform: uppercase;
                float: right;

                em {
                    font-style: normal;
                    color: $primarycolor;
                }
            }
        }

        nav {
            flex-grow: 1;

            ul {
                display: flex;

                li {
                    flex-grow: 1;
                    text-align: right;

                    a {
                        display: inline-block;
                        padding: 1rem 4rem;
                        width: 75%;
                        text-align: center;
                        font-size: 2.2rem;
                        color: $gray;
                        position: relative;
                        text-transform: uppercase;

                        &.nuxt-link-active {
                            color: $white;
                        }

                        &:hover {
                            .label {
                                opacity: 1;
                                bottom: -20px;
                                @include bp( max, $tablet-portrait ){
                                    bottom: -12px;
                                }
                            }
                        }
                    }

                    .label {
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%);
                        bottom: -25px;
                        text-transform: uppercase;
                        opacity: 0;
                        pointer-events: none;
                        transition: .3s ease-in-out;
                    }
                }
            }
        }
    }
</style>