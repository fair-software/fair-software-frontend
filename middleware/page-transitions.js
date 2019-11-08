export default function ({ app, store, route }) {
    store.commit('setLoading', true )
    var curTime = 0;
    function countTime() {
        // console.log(curTime)
        curTime ++
    }
    app.router.afterEach((to, from) => {
        var timer = setInterval(countTime, 1);
        if (curTime < 600) {
            setTimeout(function(){ setLoading() }, (600 - curTime));
        } else {
            setLoading()
        }
        window.clearInterval(timer)
        function setLoading() {
            store.commit('setLoading', false );
        }
    });
}