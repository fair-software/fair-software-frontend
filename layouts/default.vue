<template>
    <div class="site" ref="site">

        <nuxt />
    </div>
</template>

<script>
    export default {
        data () {
            return {
                animTimer: undefined
            }
        },
        methods: {
        },
        mounted () {
        },
        computed: {
            loading () { return this.$store.state.loading }
        },
        watch: {
            loading( loading ){
                let self = this;
                setTimeout(function(){}, 500);
            }
        },
    }
</script>
<style lang="scss" scoped>
    @import '~assets/scss/01-settings/_settings--variables.scss';
    @import '~assets/scss/02-tools/_tools--media-queries.scss';
  .site {
    background-color: #FFFFFF;




  }
</style>
