import Vuex from 'vuex'

const createStore = () => {
return new Vuex.Store({
    state: () => ({
        lastRoute: '',
        subNav: false,
        isHome: false,
        isSlide: false,
        menuOpen: false,
        contentOpen: false,
        loading: false,
        endorsement_list: []
    }),
    mutations: {
        addLastRoute (state, slug) {
            state.lastRoute = slug
        },
        toggleContent (state, boolean) {
            state.contentOpen = boolean
        },
        toggleSubNav (state, boolean) {
            state.subNav = boolean
        },
        setHome (state, boolean) {
            state.isHome = boolean
        },
        setSlide (state, boolean) {
            state.isSlide = boolean
        },
        toggleMenu (state, boolean) {
            state.menuOpen = boolean
        },
        setLoading (state, boolean) {
            state.loading = boolean
        },
        endorsements_update (state, payload) {
            state.endorsement_list = payload
        },
    },
  })
}
  
export default createStore