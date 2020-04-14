<template>
    <section class="o-section m-bg--dark m-inverted">
        <site-header></site-header>
        <main class="e-main" ref="main">
        <page-nav :home="true" :invert="true" :prev="false" :next="true" :current="0"></page-nav>
        <div class="o-container m-relative">
            <div class="c-hero">
                <div class="content">
                    <h1 class="text--xl" ref="title" v-html="page.title">
                    </h1>
                    <nuxt-link :to="'/recommendations/repository'">Let's go! <span>→</span></nuxt-link>
                    <div class="m-align-right">
                        <figure class="c-hero__image">
                            <img :src="page.image" alt=""/>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
        </main>
        <page-nav class="m-show-phablet" :home="true" :invert="true" :prev="false" :next="true" :current="0"></page-nav>
        <sub-nav :invert="true" :links="page.links"></sub-nav>
    </section>
</template>

<script>
  import Tweenlite from 'gsap'
  import pages from '~/static/json/pages.json'
  
  import SiteHeader from '~/components/Header'
  import SubNav from '~/components/Subnav'
  import PageNav from '~/components/PageNav'
  
  export default {
    name: 'HomePage',
    components: {
      SiteHeader,
      SubNav,
      PageNav
    },
    data () {
      return {
        pages : pages
      }
    },
    async asyncData({
        store, params, route
    }) {
        params.slug = params.slug == undefined ? 'home' : params.slug
        function new_slug(page) {
            return page.slug == params.slug;
        }
        var filtered = pages.filter(new_slug);
        
        return {
          page: filtered[0],
          slug: params 
        }
    },
    methods: {
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
        }
    },
    created() {
        this.$store.commit('setHome', true)
    },
    mounted() {
        this.swipeUp();
        let strong = this.$refs.title.getElementsByTagName('strong')[0]
        if (strong !== undefined) {
            let join = document.createElement("a")
            join.href = '/endorse'
            let span = document.createElement("span");
            let joinText = document.createTextNode("Endorse");
            join.classList.add('join')
            span.appendChild(joinText)
            join.appendChild(span)
            strong.appendChild(join)
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
        const url = 'menu_title' in this.page
            ? baseURL + this.page.slug
            : baseURL + 'recommendations/' + this.page.slug

        return {
            title: `FAIR | ` + this.page.meta.ogTitle,
            meta: [
            {
                'property': 'og:url',
                'content': url
            },
                {
                    'vmid': 'og:site_name',
                    'property': 'og:site_name',
                    'content': 'FAIR Research Software',
                },
                {
                    'vmid': 'og:title',
                    'property': 'og:title',
                    'content': 'FAIR Research Software',
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
                    'content':  'FAIR Research Software',
                    'template': '%s'
                },
                {
                    'name': 'twitter:description',
                    'content': metaDescription
                },
                {
                    'name': 'google-site-verification',
                    'content': 'J9qBjoHGveNTPMumRFNa2p1_nsWS42c52Zjyub4YfoA'
                }
            ],
            link: [
                {
                    'rel': 'canonical',
                    'href': url
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '~assets/scss/02-tools/_tools--media-queries.scss';
    .main-content {
        opacity: 0;
        transform: translateX(-10px);
    }
    h1 {
        position: relative;
        z-index: 2;
    }
    .video {
        margin-top: -15vh;
        position: relative;
        z-index: -1;
        pointer-events: none;

        @include bp( max, $phablet ){
          margin-top: -2vh;
        }

        video {
          max-height: 40vh;
          width: auto;
        }
        #bm {
            display: inline-block;
            max-width: 35%;

            @include bp( max, $tablet-portrait ){
                 max-width: 100%;
            }
        }
    }
</style>
