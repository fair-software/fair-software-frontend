<template>
    <section class="o-section o-section--chapter" :class="{ open : showContent, loaded : pageLoaded}">
        <site-header></site-header>
        <page-nav :prev="true" :next="post.number == recommendations.length ? false : true" :current="post.number" :last="post.number == recommendations.length"></page-nav>
        <main class="e-main" ref="main">
            <div class="o-container">
                <div class="c-hero" ref="hero">
                    <div class="content">
                        <h1 @click="openContent('intro')" ref="headline" class="text--xl" v-html="`<span>#${post.number} </span><br> ${post.title}`"></h1>
                        <div ref="video" class="c-hero__video">
                            <video ref="herovideo" v-show="showContent == false" v-if="post.hero" :src="post.hero" autoplay muted playsinline loop></video>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <div v-if="$store.state.menuOpen == false" :class="{ hide : showContent }" @click="openContent('intro')" class="clickDown"></div>
        <sub-nav :invert="false" :links="post.subchapters" @openContent="openContent"></sub-nav>
        <div class="c-subchapters">
            <div v-for="(subchapter, index) in post.subchapters" :key="index" class="c-subchapters__chapter p-t-space p-b-space" :id="subchapter.url" :class="subchapter.background == 'dark' ? 'm-bg--dark m-inverted' : ''">
                <div class="o-container">
                    <div class="o-grid">
                        <div class="o-grid__row">
                            <div class="all-2_3 tablet-portrait-3_4 phablet-1_1">
                                <div class="o-grid__col">
                                    <h2 v-html="subchapter.title"></h2>
                                    <div class="paragraph" v-for="(paragraph, index) in subchapter.paragraphs" :key="index">
                                        <div v-if="paragraph.type == 'WYSIWYG'">
                                            <h4 v-if="paragraph.title"><strong>{{ paragraph.title }}</strong></h4>
                                            <div v-html="paragraph.text"></div>
                                        </div>
                                        <a target="_blank" :href="paragraph.link" class="btn m-t-quarter-space m-b-half-space" :class="paragraph.icon !== undefined && paragraph.icon !== '' ? 'btn--icon' : ''" v-if="paragraph.type == 'button'">
                                            <span>{{ paragraph.text }}</span>
                                            <img class="icon" :src="paragraph.icon" alt="">
                                        </a>
                                        <table v-if="paragraph.type == 'table'">
                                            <tbody>
                                                <tr v-for="(row, index) in paragraph.rows" :key="index">
                                                    <td v-for="(col, index) in row.columns" :key="index">
                                                        <p v-html="col.text"></p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="all-1_3 tablet-portrait-1_4 m-hide-phablet">
                                <video v-if="subchapter.video && showContent" autoplay muted loop playsinline :src="subchapter.video"></video>
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
        </div>
    </section>
</template>

<script>
  import { mapMutations } from 'vuex'
  import SiteHeader from '~/components/Header'
  import SubNav from '~/components/Subnav'
  import PageNav from '~/components/PageNav'
  import Tweenlite from 'gsap'
  import recommendations from '~/static/json/recommendations.json'
  
  export default {
    components: {
      SiteHeader,
      SubNav,
      PageNav
    },
    data () {
        return {
          recommendations : recommendations,
          pageLoaded: false,
          showContent : false
        }
    },
    async asyncData({
       store, params, route
      }) {
        function new_slug(recommendation) {
          return recommendation.slug == params.slug;
        }
        var filtered = recommendations.filter(new_slug);
        
        return {
            post: filtered[0],
        }
    },
    methods: {
        checkforVideo(VideoElement) {
            let self = this
            // Every 500ms, check if the video element has loaded
            var b = setInterval(()=>{
                if(VideoElement.readyState >= 3){
                    VideoElement.classList.add('show')
                    clearInterval(b);
                }                   
            }, 500);
        },
        swipeLeft () {
                let self = this;
                self.highlight()
                Tweenlite.fromTo( this.$refs.main, .6, {
                opacity: 0,
                x: 100
            },{ 
                ease: Expo.easeOut,
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                onComplete(){
                    self.toggleSubNav()
                    self.$refs.video.classList.add('show')
                }
            });
        },
        swipeRight () {
                let self = this;
                self.highlight()
                Tweenlite.fromTo( this.$refs.main, .6, {
                opacity: 0,
                x: -100
            },{ 
                ease: Expo.easeOut,
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                onComplete(){
                    self.toggleSubNav()
                    self.$refs.video.classList.add('show')
                }
            });
        },
        toggleSubNav () {
            this.$store.commit('toggleSubNav', true)
        },
        highlight() {
            let em = this.$refs.headline.getElementsByTagName('em')[0];
            em.innerHTML =  `
                ${em.innerHTML} 
                <svg class="mask">
                    <pattern 
                        id="p-img" 
                        patternUnits="userSpaceOnUse"
                        width="100%" height="120%"
                        x="0" y="-25%"> 
                        <polyline id="draw" fill="none" stroke-width="60" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
	                        0,123.5 38.8,5.2 63.5,114.5 111,4.5 130.1,112.5 185.9,3.5 194.5,120 256.9,3 258.6,115 321.8,0 324.2,114 399.7,5.3 396.8,113 
	                        470.9,6.5 459.8,123.5 547.3,4 525.9,121 615,2.5 601.7,114 "/>
                    </pattern>
                    <text text-anchor="middle"
                        x="50%"
                        y="50%"
                        dy=".35em"
                        class="img-layer">
                        ${em.innerText}
                    </text>
                </svg>
            `
            setTimeout(function(){ 
                em.classList.add('draw');
            }, 50);
            // remove the mask after drawing (because mobile cannot mask properly)
            let mask = em.getElementsByClassName('mask')[0]
            mask.style.transition = '.8s ease-in-out'
            setTimeout(function(){ 
                mask.classList.add('m-opacity--none')
                setTimeout(function(){ 
                    mask.style.transition = '0s'
                }, 600);
            }, 2300);
        },
        openContent(value) {
            let self = this
            this.showContent = true;
            setTimeout(function(){ 
                self.scrollToAnchor(value);
            }, 500);
        },
        scrollToAnchor(id) {
            let element = document.getElementById(id)
            let heroHeight = this.$refs.hero.clientHeight + 45
            let startingY = window.pageYOffset
            let diff = (element.offsetTop - startingY)
            let start
            //   let duration = 800

            // first add raf shim
            window.requestAnimFrame = (function(){
                return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame  ||
                function( callback ){
                    window.setTimeout(callback, 1000 / 60);
                };
            })();

            // main function
            function scrollToY(scrollTargetY, speed, easing) {
                var scrollY = window.pageYOffset,
                    scrollTargetY = scrollTargetY || 0,
                    speed = speed || 2000,
                    easing = easing || 'easeOutSine',
                    currentTime = 0;

                // min time .1, max time .8 seconds
                var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

                // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
                var PI_D2 = Math.PI / 2,
                    easingEquations = {
                        easeOutSine: function (pos) {
                            return Math.sin(pos * (Math.PI / 2));
                        },
                        easeInOutSine: function (pos) {
                            return (-0.5 * (Math.cos(Math.PI * pos) - 1));
                        },
                        easeInOutQuint: function (pos) {
                            if ((pos /= 0.5) < 1) {
                                return 0.5 * Math.pow(pos, 5);
                            }
                            return 0.5 * (Math.pow((pos - 2), 5) + 2);
                        }
                    };

                    // add animation loop
                    function tick() {
                        currentTime += 1 / 60;

                            var p = currentTime / time;
                            var t = easingEquations[easing](p);

                            if (p < 1) {
                                requestAnimFrame(tick);
                                window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
                            } else {
                                window.scrollTo(0, scrollTargetY);
                            }
                    }

                    // call it once to get started
                    tick();
            }
            // scroll it!
            scrollToY((startingY + diff) - heroHeight, 1500, 'easeInOutQuint');
        },
    },
    created() {
      this.$store.commit('setSlide', true)
      this.$store.commit('toggleContent', false)
    },
    mounted() {
        let self = this;
        function old_slug(recommendation) {
            return recommendation.slug == self.$store.state.lastRoute
        }
        var last = recommendations.filter(old_slug);
        if (last.length == 0) {
            this.swipeLeft()
        } else {
            if (last[0].number < this.post.number) {
            this.swipeLeft()
            } else {
            this.swipeRight()
            }
        }
        window.scrollTo(0, 0);
        setTimeout(function(){
            window.onscroll = function() {
                if (self.showContent == false) {
                    self.$store.commit('toggleContent', true)
                    self.showContent = true
                }
            }
        }, 100)
        let strong = this.$refs.headline.getElementsByTagName('strong')[0]
        if (strong !== undefined) {
            let join = document.createElement("a")
            join.href = '/endorse'
            let span = document.createElement("span");
            let joinText = document.createTextNode("Endorse")
            join.classList.add('join')
            join.classList.add('m-show-tablet-landscape')
            span.appendChild(joinText)
            join.appendChild(span)
            strong.appendChild(join)
        }
        this.checkforVideo(this.$refs.herovideo)
    },
    beforeRouteUpdate(to, from, next) {
        this.$store.commit('toggleSubNav', false)
        this.$store.commit('addLastRoute', from.params.slug)
        setTimeout(function(){
            next()
        }, 100);
    },
    beforeDestroy() {
        this.showContent = false
        this.$store.commit('toggleSubNav', false)
        this.$store.commit('setSlide', false)
    },
    head() {
        var metaDescription = this.post.meta.ogDescription
        var ogImage = this.post.meta.ogImage

        return {
            title: `FAIR | ` + this.post.meta.ogTitle,
            meta: [
            {
                'property': 'og:url',
                'content': 'http://baseUrl' + '/recommendations' + this.post.slug,
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
                    'href': 'http://baseUrl' + '/recommendations' + this.post.slug
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
  .main-content {
    opacity: 0;
    transform: translateX(-10px);
  }
  .clickDown {
    position: absolute;
    width: 100%;
    height: 35vh;
    left: 0;
    bottom: 0;
    z-index: 11;

    &.hide {
        height: 0;
    }
  }
</style>