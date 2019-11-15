<template>
  <section class="o-section o-section--page m-bg--dark m-inverted">
    <svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <symbol id="icon-share" viewBox="0 0 24 24">
                <path d="M16.214 18.098c0.025-0.033 0.048-0.067 0.070-0.104 0.020-0.035 0.038-0.071 0.054-0.107 0.073-0.108 0.156-0.209 0.248-0.301 0.363-0.363 0.861-0.586 1.414-0.586s1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414-0.223 1.051-0.586 1.414-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414c0-0.325 0.077-0.631 0.214-0.902zM16.301 6.056c-0.009-0.017-0.018-0.034-0.028-0.051s-0.020-0.034-0.031-0.050c-0.154-0.283-0.242-0.608-0.242-0.955 0-0.553 0.223-1.051 0.586-1.414s0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414-0.223 1.051-0.586 1.414-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586c-0.108-0.108-0.204-0.228-0.285-0.358zM7.699 10.944c0.009 0.017 0.018 0.034 0.028 0.051s0.020 0.034 0.031 0.050c0.154 0.283 0.242 0.608 0.242 0.955s-0.088 0.672-0.243 0.956c-0.011 0.016-0.021 0.033-0.031 0.050s-0.019 0.033-0.027 0.050c-0.081 0.13-0.177 0.25-0.285 0.358-0.363 0.363-0.861 0.586-1.414 0.586s-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586c0.108 0.108 0.204 0.228 0.285 0.358zM14.15 6.088l-5.308 3.097c-0.004-0.005-0.009-0.009-0.014-0.014-0.722-0.722-1.724-1.171-2.828-1.171s-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172c0.005-0.005 0.009-0.009 0.014-0.014l5.309 3.094c-0.098 0.347-0.151 0.714-0.151 1.092 0 1.104 0.449 2.106 1.172 2.828s1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828-0.449-2.106-1.172-2.828-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172c-0.003 0.003-0.007 0.007-0.010 0.010l-5.312-3.095c0.098-0.346 0.15-0.71 0.15-1.087s-0.052-0.742-0.15-1.088l5.308-3.098c0.004 0.005 0.009 0.009 0.014 0.014 0.722 0.723 1.724 1.172 2.828 1.172s2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828-0.449-2.106-1.172-2.828-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828c0 0.377 0.052 0.742 0.15 1.088z"></path>
            </symbol>
        </defs>
    </svg>
    <nuxt-link v-show="$store.state.menuOpen == false"  class="main-link m-show-phablet" :to="'/recommendations/repository'"><span>5</span> {{ 'recommendations' }}</nuxt-link>
    <site-header></site-header>
    <main class="e-main" ref="main">
        <div class="o-container">
            <div class="c-hero">
                <div class="content m-t-space">
                    <h1 class="text--xl" v-html="page.title"></h1>
                    <div class="o-grid m-t-space">
                        <div class="o-grid__row">
                            <div class="all-2_3 phablet-1_1 m-b-space">
                                <div class="o-grid__col">
                                    <section v-for="(item, index) in page.paragraphs" :key="index">
                                        <div v-if="item.type == 'WYSIWYG'" v-html="item.content"></div>
                                        <div v-if="item.type == 'logo_grid'" class="m-t-space">
                                            <h2>{{ 'Endorsing organizations' }}</h2>
                                            <div class="o-grid o-grid--gap-small m-t-half-space">
                                                <div class="o-grid__row">
                                                    <div class="all-1_3" v-for="(logo, index) in item.items" :key="index">
                                                        <div class="o-grid__col">
                                                            <a :href="logo.link" target="_blank">
                                                                <figure class="e-figure e-figure--logo">
                                                                    <picture>
                                                                        <img :alt="logo.title" :src="logo.image">
                                                                    </picture>
                                                                </figure>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <figure class="video" v-if="page.video || page.animation || page.image">
                                            <video v-if="page.video" ref="herovideo" :src="page.video" autoplay muted loop playsinline></video>
                                            <img v-else-if="page.image" :src="page.image"/>
                                            <div v-else id="bm"></div>
                                        </figure>
                                    </section>
                                </div>
                            </div>
                            <div class="all-1_3 phablet-1_1 m-b-double-space">
                                <div v-if="page.slug !== 'endorse'" class="o-grid__col">
                                    <div class="tools">
                                        <div class="tools__contact">
                                            <h3>{{ general.contact.title }}</h3>
                                            <p v-html="general.contact.text"></p>
                                        </div>
                                    </div>
                                </div> 
                                <div v-else class="o-grid__col">
                                    <endorse-form :num_endorsements="num_endorsements"></endorse-form>
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <sub-nav :invert="true" :links="page.links"></sub-nav>
  </section>
</template>

<script>
    import Tweenlite from 'gsap'
    import pages from '~/static/json/pages.json'
    import general from '~/static/json/general.json'
    import { mapState } from 'vuex'

    import SiteHeader from '~/components/Header'
    import EndorseForm from '~/components/EndorseForm'
    import SubNav from '~/components/Subnav'
    import PageNav from '~/components/PageNav'
  
    export default {
        name: 'Page',
        components: {
            SiteHeader,
            EndorseForm,
            SubNav,
            PageNav
        },
        data () {
            return {
                pages : pages,
                general : general,
            }
        },
        async asyncData({
            store, params, route
        }) {
            const data = {
                page: pages.filter(page => page.slug == params.slug)[0],
            }
            try {
                const response = await fetch('https://fair-software.nl/.netlify/functions/count_endorsements')
                data['num_endorsements'] = parseInt(await response.text()) || ''
            } catch(e) {
                data['num_endorsements'] = 0
            }
            return data
        },
        fetch ({ store, params }) {

            return;
            // const existing = store.state.endorsement_list
            // if (existing && existing.length > 0) {
            //     return
            // }
            // return wp.endorsements( null )
            //     .then(json => {
            //         store.commit('endorsements_update', json.endorsements)
            //     })
        },
        computed: mapState(['endorsement_list']),
        methods: {
            checkforVideo(VideoElement) {
                let self = this
                //Every 500ms, check if the video element has loaded
                var b = setInterval(()=>{
                    if(VideoElement.readyState >= 3){
                        //This block of code is triggered when the video is loaded

                        //your code goes here
                        VideoElement.classList.add('show')

                        //stop checking every half second
                        clearInterval(b);

                    }                   
                }, 500);
            },
            swipeUp () {
                let self = this;
                Tweenlite.fromTo( this.$refs.main, .6, {
                opacity: 0,
                y: 30
                },{ 
                ease: Expo.easeOut,
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                onComplete(){self.toggleSubNav()}
                });
            },
            toggleSubNav () {
                this.$store.commit('toggleSubNav', true)
            },
        },
        created() {
            let self = this
        },
        mounted() {
            this.swipeUp();
            if (this.$refs.herovideo !== undefined) {
                this.checkforVideo(this.$refs.herovideo)
            }
            if (this.page.animation !== undefined && this.page.animation !== "") {
                var animation = bodymovin.loadAnimation({
                    container: document.getElementById('bm'),
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    path: this.page.animation  
                })
            }
        },
        beforeDestroy() {
            this.$store.commit('toggleSubNav', false)
            this.$store.commit('setHome', false)
            this.$store.commit('addLastRoute', '')
        },
        head() {
            var metaDescription = this.page.meta.ogDescription
            var ogImage = this.page.meta.ogImage
            const baseURL = 'https://fair-software.nl/';

            // menu_title is only in root pages
            // otherwise it's a recommendation page
            const url = (this.page && 'menu_title' in this.page)
                ? baseURL + this.page.slug
                : baseURL + 'recommendations/' + this.page.slug

            return {
                title: `FAIR | ` + this.page.meta.ogTitle,
                meta: [
                {
                    'property': 'og:url',
                    'content': url,
                },
                    {
                        'vmid': 'og:site_name',
                        'property': 'og:site_name',
                        'content': 'FAIR Reasearch Software',
                    },
                    {
                        'vmid': 'og:title',
                        'property': 'og:title',
                        'content': 'FAIR Reasearch Software',
                    },
                    {
                        'vmid': 'og:image',
                        'property': 'og:image',
                        'content': ogImage,
                    },
                    {
                        'vmid': 'og:description',
                        'property': 'og:description',
                        'content': metaDescription
                    },
                    {
                        'name': 'twitter:title',
                        'content':  'FAIR Reasearch Software',
                        'template': 'Silo - %s'
                    },
                    {
                        'name': 'twitter:description',
                        'content': metaDescription
                    }
                ],
                link: [
                    {
                        'rel': 'canonical',
                        'href': url
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/01-settings/_settings--variables.scss';
    @import '~assets/scss/02-tools/_tools--media-queries.scss';
    .main-content {
        opacity: 0;
        transform: translateX(-10px);
    }
    .main-link {
        position: fixed;
        color: #fff;
        right: 1.5rem;
        top: 1.3rem;
        z-index: 14;
        text-transform: uppercase;

        span {
            color: $primarycolor;
        }
    }
    .c-hero {
        max-height: unset;
    }
    figure.video {
        position: relative;
        width: 75%;
        padding-bottom: 3/4 * 100%;
        video {
            position: absolute;
            width: 100%;
            height: auto;
        }
    }
    .social-links {
        a {
            font-family: $secondaryFont;
            font-weight: 400;
            display: block;
            padding-left: 2.5rem;
            font-size: 1.8rem;
            line-height: 1.6em;
            position: relative;
            transition: .3s ease-in-out;

            &:hover {
                color: $primarycolor;
                .icon {
                    fill: $primarycolor;
                }
            }

            .icon {
                fill: white;
                position: absolute;
                left: 0;
                top: 3px;
                width: 20px;
                height: 20px;
                transition: .3s ease-in-out;
            }
        }
    }
</style>