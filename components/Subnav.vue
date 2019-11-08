<template>
  <div class="subNav" :class="[$store.state.subNav ? 'show' : '']">
    <div class="o-container">
      <nav>
        <ul>
          <li v-for="(link, index) in links" :key="index">
            <nuxt-link class="btn" v-if="!link.onPage" :to="link.url" :class="invert ? 'm-inverted' : ''">
              <span>{{ link.title }}</span>
            </nuxt-link>
            <a class="btn" @click="openContent(link.url)" v-else>
              <span>{{ link.title }}</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    props: {
      invert: { type: Boolean, default(){ return false } },
      links: { type: Array, default(){ return [] } },
      show :  { type: Boolean, default(){ return false } },
      onPage : { type: Boolean, default(){ return false } }
    },
    methods: {
      openContent(url) {
        this.$emit('openContent', url)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/scss/01-settings/_settings--variables.scss';
  @import '~assets/scss/02-tools/_tools--media-queries.scss';
  .subNav {
    position: fixed;
    bottom: -100%;
    transition: .6s ease-in-out;
    left: 0;
    width: 100%;
    z-index: 11;
    padding-top: 5vw;

    &.show {
      bottom: 0;
    }

    ul {
      display: flex;
      li {
        flex-grow: 1;
        display: inline-block;
        margin-right: 2rem;
        max-width: 50%;


        @include bp( max, $phablet ){
          margin-right: 3px;
        }
      }
    }

    a {
        display: block;
        padding: 2rem;
        color: white;
        background-color: $dark;
        text-align: center;
        text-transform: uppercase;
        transition: .3s cubic-bezier(0.075, 0.82, 0.165, 1);
        position: relative;
        font-size: 2rem;

        @include bp( max, $phablet ){
            padding: 1rem;
            min-height: 4rem;
            vertical-align: middle;
            line-height: 4rem;
        }

        span {
            font-size: 2rem;
            display: inline-block;
            vertical-align: middle;
            
            @include bp( max, $phablet ){
                font-size: 1.6rem;
            }

            @include bp( max, $phablet ){
                font-size: 1.3rem;
                line-height: 1.4em;
            }
        }


        &:before {
            content: '';
            position: absolute;
            left: 0;
            width: 100%;
            bottom: 98%;
            height: 0;
            background-color: inherit;
            transition: .3s cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        &:hover {
            color: white;
            background-color: $primarycolor;
            padding-bottom: 2.5rem;
            padding-top: 1.5rem;

            @include bp( max, $phablet ){
            padding: 1rem;
            }

            &:before {
            height: .5rem;
            background-color: $primarycolor;
            }
        }

        &.m-inverted {
            color: $dark;
            background-color: white;

            &:hover {
            color: white;
            background-color: $primarycolor;
            }
        }
    }
  }
</style>
