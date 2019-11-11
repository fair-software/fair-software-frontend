<template>
    <div class="site" ref="site">
        <div id="cursor" ref="cursor">
            <div id="cursor__canvas">
                <div ref="cursorText" class="text"></div>
                <svg v-if="$store.state.menuOpen == false"  ref="svgpointer" class="pointer" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	                viewBox="0 0 200 380" enable-background="new 0 0 200 380" xml:space="preserve">
                    
                    <g class="frame frame-1" v-if="pointerFrame < 60">
                        <path fill="none" stroke-width="15" stroke-linecap="round" stroke-miterlimit="10" d="M149,58.5
                            c-5.6-2.4-3.8-0.5-10.3-0.5c-5.3,0-7.3,1.6-13,4.6c-3.9,2-3.6,2-4.5,3.6c-3,5.5-1.9,1.6-2.6,2.6c-4.9,6.6,1.4,3.9-1.9,4.9
                            s2-1-2.4-4.1c-1.8-1.3-4.4-3.3-8.9-2.6C95,68.5,96,70.3,89.8,73.8C84,77,87.8,72,80,69.5c-8.5-2.7-12.1-4.4-21.6-0.4
                            C49.5,72.9,46,82.4,44.1,88.5c-2,6.5-1.7,3.6-8,1.9c-7.3-2-19.3,0.6-24.6,12.4c-5.8,12.8,10.1,24,10.9,39.3
                            c0.3,8.8,6.7,17.3,9.4,27.8c3,11.5,2.6,16.7,7.5,29c4,10,6.5,16.5,9,25c2.8,9.3,1.9,19,3.3,29c0.8,5.5-0.3,8.4,1,15
                            c3.5,17.5,0,2.5,0,2.5s88.5-2,97-2.3c-4.8,13,1.4,0,2.5-11.5c1-10.8-2.6-4.8-0.3-19.3s10.5-22.1,13-36c1.7-9.3,0.9-12.2,4.8-20.8
                            c3-6.8,16-13.5,20.5-27.8c3-9.5,3.8-16.3,3.5-23c-0.3-8.7-10.5-26.5-13.5-27.4c-8-2.5-9.7,1.4-8.5-7.3c0-10-2.9-4.5-3-9.5
                            c-0.3-9-0.3-10.8-3.8-16C160.6,63.2,156,61.5,149,58.5z"/>
                        <path fill="none" stroke-width="15" stroke-linecap="round" stroke-miterlimit="10" d="M166,325.3
                            c0,0-1.5-20.5-2-26.3c-0.6-7,0.7-18.4-0.3-21.8c-0.8-2.8,2.3-8.3-2.8-8.3s-51.8-1-59.5-0.8s-41.3,0.8-49.3,2.3
                            c-2.2,0.4-7,1.3-11.8,1.3c-2.5,0-2,18.8-2.3,21.8c-0.3,3.5-0.6,9.3-0.6,14.5s0.6,2,0,7.5c-0.5,4.2-0.9,1-1.4,4s0.5,5.8,0.5,5.8"/>
                    </g>

                    <g class="frame frame-2" v-show="pointerFrame > 59 && pointerFrame < 70">
                        <path fill="none" stroke-width="15" stroke-linecap="round" stroke-miterlimit="10" d="M152.8,55.3
                            c-6-1-5-0.5-11.5-0.5c-5.3,0-8,2-12.3,5.5c-3.4,2.8-3.3,1-5.5,5.3c-2.9,5.5-2.3,0.3-2.8,3.8c-1.2,8.1,2.3,2-1,3s2.4,1.4-2-1.8
                            c-1.8-1.3,1.3-1.3-9.3-0.8C97.9,70.3,99,72.5,92.8,76c-5.8,3.2-0.5-0.5-8.3-3c-8.5-2.7-13.8-4.8-23.3-0.8C52.4,76,49.6,84.9,47.8,91
                            c-2,6.5-2.2,3-8.5,1.3c-7.3-2-18.7,0.7-24,12.5c-5.8,12.8,8.8,26,9.5,34.5C25,148,31.3,160.6,34,171c3,11.5,2.3,19.2,7.3,31.5
                            c4,10,6.2,15.8,8.8,24.3c2.8,9.3,1.1,17.8,2.5,27.8c0.8,5.5,1.2,8.6,2.5,15.3c3.5,17.5,0,2.5,0,2.5s88.5-2,97-2.3
                            c-4.8,13,0.9,0.7,2-10.8c1-10.8-0.8-14,0-21.3s9-26.5,12.5-39.3c2.5-9.1-0.1-13.7,1.8-21c1.3-5,14.8-11.5,19.3-25.8
                            c3-9.5,3.8-15.8,3.5-22.5c-0.3-8.7-6.9-18.2-11-22.9c-5.5-6.3-7.7-2.3-6.5-11.1c0-10-2.6-5-2.8-10c-0.3-9-1-14.8-4.5-20
                            C162.1,59.2,160.1,56.5,152.8,55.3z"/>
                        <path fill="none" stroke-width="15" stroke-linecap="round" stroke-miterlimit="10" d="M168.3,326.5
                            c0,0-0.5-18.5-1-24.3c-0.6-7-1.3-19.5-1-23s0.5-9.3-4.5-9.3s-57.3,1-65,1.3s-34-0.3-42,1.3c-2.2,0.4-10.8,4.3-13.3,2.3
                            c-2-1.6,0,17.8-0.8,20.8c-1,4-0.5,9.3-0.5,14.5s0.3,3.3,0,7.5s-0.5,2.3-1,5.3s0.5,4,0.5,4"/>
                    </g>

                    <g class="frame frame-3" v-show="pointerFrame > 69 && pointerFrame < 80">
                        <path fill="none" stroke-width="15" stroke-linecap="round" stroke-miterlimit="10" d="M154,48
                            c-6-1-11.8,0-15.5,3c-4.1,3.3-5.9,2.4-9,7.5c-2.3,3.8-3.5,6.3-3.3,9.5c0.5,6.2-0.3-0.3-0.8,5.3c-0.7,8.2,2.3,6.8-1,7.8
                            s-0.5,0.5-3.5-4c-2.2-3.4,1-6-9.5-5.5c-10.6,0.5-10.5,5-16.8,8.5c-5.8,3.2-1.8,0.5-9.5-2c-8.5-2.7-11-3.5-20.5,0.5
                            C55.9,82.2,50.9,88.6,49,94.8c-2,6.5-2.2,4-8.5,2.3c-7.3-2-16.9,6.7-22.3,18.5c-5.8,12.8,6.3,19.8,7,28.3c0.3,8.8,7.8,19.6,10.5,30
                            c3,11.5,2.3,19.7,7.3,32c4,10,5,17.5,8.3,25.8s1.9,17,3.3,27c0.8,5.5-0.4,9-0.3,15.8c0.5,20.5-0.3,6-0.3,6s92.5-4,101-4.3
                            c-4.8,13,2.7-1.6,1.3-13c-1.3-9.8-1.3-12-0.5-19.3s4-17,7.5-29.8c2.5-9.1,1.5-28,4.3-35c2.9-7.4,11.3-8.8,14.3-24
                            c1.9-9.8,6.6-18.1,5.5-23.3c-1.8-8.5-3.7-12.5-7.8-17.2c-5.5-6.3-4.7-5.6-5-15.8c0-10-0.5-7.7-1-13.3c-1.5-16.3-2.3-19.3-4.8-25.3
                            C165.9,53.3,161.3,49.2,154,48z"/>
                        <path fill="none" stroke-width="15" stroke-linecap="round" stroke-miterlimit="10" d="M169,333.8
                            c0,0,1-18.3,0.5-24c-0.6-7-2-20.5-1.8-24s2-10.3-3-10.3s-59.5,3.8-67.3,4s-32.8,0.3-40.8,1.8c-2.2,0.4-10.5,2-13,0
                            c-2-1.6,0.2,17.1-0.5,20c-1,4-0.3,7.3-0.3,12.5s-1.3,4.5-1.5,8.8s-0.5,2.3-1,5.3s0,5,0,5"/>
                    </g>

                    <g class="frame frame-4" v-show="pointerFrame > 79 && pointerFrame < 90">
                        <path fill="none" stroke-width="15" stroke-linecap="round" stroke-miterlimit="10" d="M157.3,41.5
                            c-8.6-1.8-11-0.3-14.8,3.5s-7.8,8.3-7.5,14.3c0.4,9.2-1.3,8.3-1,14.8c0.3,6.3,0.3,4-1.5,12s2.8,5.8-0.5,6.8s-4,0.3-7-4.3
                            c-2.2-3.4-3.3-12-13.8-10.5S99,83,95.8,88.8s4,2.3-3.8-0.3c-8.5-2.8-17.7-6.7-25.3-2.5c-8.4,4.7-14.6,13.1-16.5,19.3
                            c-2,6.5-0.2,3.2-6.5,1.5c-7.3-2-19.3,3.3-23.5,15.5c-5.8,16.8,6,18.5,6.8,27c0.3,8.8,4.5,16.1,7.3,26.5c3,11.5,6.9,22.3,9.8,35.3
                            c2.8,12.5,5.5,16.8,8.8,25s0.5,16.7,1.3,26.8c0.8,10.3-1.2,11.2-1,18c0.5,20.5,0,5.3,0,5.3s95.5-1.8,104-2c-4.8,13,1.2-5.1-0.3-16.5
                            c-1.3-9.8,2.5-17.3,3.3-24.5s0.9-18.5,2.8-24c3-9,0.5-24.5,3.5-32c3-7.4,9.5-14.5,12.5-29.8c1.9-9.8,7.6-14.8,6.5-20
                            c-1.8-8.5-8.8-9.8-10.8-15.7c-3-9.1-1.5-11.3-1.7-21.6c0-10,3-10.4,2.5-16c-1.5-16.3-0.1-18.2-2-25.3
                            C171.3,51.5,164.5,43,157.3,41.5z"/>
                        <path fill="none" stroke-width="15" stroke-linecap="round" stroke-miterlimit="10" d="M172,340.8
                            c0,0,0.8-16-0.3-23s-4-22.8-3.8-26.3s2.5-8.5-2.5-8.5s-54.8,1-62.5,1.3s-43.9,2-46.5,1.8c-2.3-0.3-8,4-10.5,2
                            c-2-1.6-1.3,15.6-2,18.5c-1,4,0.3,6.8,0.3,12s-1,7.3-1.3,11.5s1.5,4.5,1,7.5s-0.8,3.8-0.8,3.8"/>
                    </g>

                    <g class="frame frame-5" v-show="pointerFrame > 89 && pointerFrame < 100">
                        <path fill="none" stroke-width="15" stroke-linecap="round" stroke-miterlimit="10" d="M153.5,17.5
                            c-8.8,0.3-8.5,10-10.8,16c-2.8,7.5-2.8,13.8-2.5,23s-1.5,14.3,0,20.5s1.8,9,0,17s-2.8,17.3-6,18.3s-5.3,0.3-8.3-4.3
                            c-2.2-3.4-3.5-10.3-14-8.8s-12,3.3-15.3,9s1.5,4-6.3,1.5c-8.5-2.8-14.2-3-21.8,1.3c-8.4,4.7-13.9,7.6-15.8,13.8
                            c-2,6.5-1.2,7.7-7.5,6c-7.3-2-19.5,0.5-22.8,18s5.1,17.3,5.8,26.3c0.1,6.1,3,9,7,19s3.9,25.5,6.8,38.5c2.8,12.5,4.8,18.3,8,26.5
                            s3.8,15,5,25s-1.9,10-1.8,16.8c0.5,20.5,2,8,2,8s93.3-1.5,101.8-1.8c-4.8,13,3.3-7.8,0.8-19s2.8-21.3,3.5-28.5s-0.3-20.5,1.5-26
                            c3-9-0.8-14.8,1.3-22.5s13.5-29.8,15.5-39.5s-3.9-21-5.3-27c-2-9-6-15.3-2.3-26.4c3.5-10.5,4.8-29.3,3-34.6c0-10-5.3-19-5-32.5
                            s-0.8-17-1.5-24.3C168,19,160,17.3,153.5,17.5z"/>
                        <path fill="none" stroke-width="15" stroke-linecap="round" stroke-miterlimit="10" d="M173,362.3
                            c0,0,0.3-20-0.8-27s-1.5-19.5-1.3-23s0.5-6.8-4.5-6.8s-52,2-59.8,2.3s-50.4,2-53,1.8c-2.3-0.3-4.8,1.5-7.3-0.5
                            c-2-1.6,0,15.6-0.8,18.5c-1,4-1.5,5.5-1.5,10.8s1.5,6.3,1.3,10.5s0,5.3-0.5,8.3s0.3,6.8,0.3,6.8"/>
                    </g>

                    <g class="frame frame-6" v-show="pointerFrame > 99">
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
                <svg v-if="$store.state.menuOpen == false"  ref="svgthumb" class="thumb" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 297 377" enable-background="new 0 0 297 377" xml:space="preserve">
                        <g class="frame frame-1" v-if="thumbFrame < 60">
                            <path fill="none" stroke-width="15" stroke-linecap="round" stroke-miterlimit="10" d="M149,58.5
                                c-5.6-2.4-3.8-0.5-10.3-0.5c-5.3,0-7.3,1.6-13,4.6c-3.9,2-3.6,2-4.5,3.6c-3,5.5-1.9,1.6-2.6,2.6c-4.9,6.6,1.4,3.9-1.9,4.9
                                s2-1-2.4-4.1c-1.8-1.3-4.4-3.3-8.9-2.6C95,68.5,96,70.3,89.8,73.8C84,77,87.8,72,80,69.5c-8.5-2.7-12.1-4.4-21.6-0.4
                                C49.5,72.9,46,82.4,44.1,88.5c-2,6.5-1.7,3.6-8,1.9c-7.3-2-19.3,0.6-24.6,12.4c-5.8,12.8,10.1,24,10.9,39.3
                                c0.3,8.8,6.7,17.3,9.4,27.8c3,11.5,2.6,16.7,7.5,29c4,10,6.5,16.5,9,25c2.8,9.3,1.9,19,3.3,29c0.8,5.5-0.3,8.4,1,15
                                c3.5,17.5,0,2.5,0,2.5s88.5-2,97-2.3c-4.8,13,1.4,0,2.5-11.5c1-10.8-2.6-4.8-0.3-19.3s10.5-22.1,13-36c1.7-9.3,0.9-12.2,4.8-20.8
                                c3-6.8,16-13.5,20.5-27.8c3-9.5,3.8-16.3,3.5-23c-0.3-8.7-10.5-26.5-13.5-27.4c-8-2.5-9.7,1.4-8.5-7.3c0-10-2.9-4.5-3-9.5
                                c-0.3-9-0.3-10.8-3.8-16C160.6,63.2,156,61.5,149,58.5z"/>
                            <path fill="none" stroke-width="15" stroke-linecap="round" stroke-miterlimit="10" d="M166,325.3
                                c0,0-1.5-20.5-2-26.3c-0.6-7,0.7-18.4-0.3-21.8c-0.8-2.8,2.3-8.3-2.8-8.3s-51.8-1-59.5-0.8s-41.3,0.8-49.3,2.3
                                c-2.2,0.4-7,1.3-11.8,1.3c-2.5,0-2,18.8-2.3,21.8c-0.3,3.5-0.6,9.3-0.6,14.5s0.6,2,0,7.5c-0.5,4.2-0.9,1-1.4,4s0.5,5.8,0.5,5.8"/>
                        </g>

                        <g class="frame frame-2" v-show="thumbFrame > 59 && thumbFrame < 70">
                            <path fill="none" stroke-width="15" stroke-linecap="round" stroke-miterlimit="10" d="M151.3,59.4
                                c-5.6-2.4-5.5-1.5-12-1.5c-5.3,0-5.6,0.9-10.6,3.2c-4,1.8-4.1,1.8-6.6,3.8c-4.9,3.9-4.2,4.4-4.9,5.4c-4.9,6.6,2.3,1.3-1,2.3
                                s1.7,0.9-2.8-2.2c-1.8-1.3,0.8-4.1-9.7-3.6c-10.6,0.5-7.3,3-13.5,6.5c-5.8,3.2-3.3-1.6-11-4.1c-8.5-2.7-10.7-4.5-20.2-0.5
                                c-8.9,3.7-12.8,12.6-14.7,18.8c-2,6.5-2.1,4.2-8.4,2.4c-7.3-2-19.1,1.7-24.5,13.5c-5.8,12.8,10.1,20.3,10.9,35.6
                                c0.3,8.8,5.8,17.4,8.5,27.8c3,11.5,3,17.5,7.9,29.8c4,10,4.8,16.6,7.3,25.1c2.8,9.3,3.9,18.6,5.3,28.6c0.8,5.5,0.5,8.3,1.8,14.9
                                c3.5,17.5,1.6,4.4,1.6,4.4s85.9-1.4,94.4-1.7c-4.8,13,1.6-1.9,2.7-13.4c1-10.8-0.7-12.2,0-19.4s9.3-20.5,12-33.8
                                c1.9-9.3,4.5-16.3,9.3-22.1c4.7-5.6,14.6-11.4,19.1-25.7c3-9.5,3.6-21.9,3.4-28.6c-0.3-8.7-7.4-17.9-11.5-22.6
                                c-5.5-6.3-13.7,0.2-12.5-8.5c0-10-4.1-5.6-4.2-10.7c-0.3-9-0.7-9.5-4.6-14.9C158.8,62.5,158.3,62.4,151.3,59.4z"/>
                            <path fill="none" stroke-width="15" stroke-linecap="round" stroke-miterlimit="10" d="M164.5,325.1
                                c0,0,0.8-21.8,0.1-27.5c-1.3-10.2-1.2-19-0.8-22.2c0.4-3.2,1.2-7.8-3.8-7.8s-56.8,0.7-64.5,1c-7.8,0.3-32.9-0.6-40.9,0.9
                                c-2.2,0.4-12.2,2.6-15.1,1.6c-2.4-0.8-1.3,16.9-1.5,19.9c-0.3,3.5-0.5,8.4-0.5,13.6s0.4,2-0.2,7.5c-0.5,4.2-1,4.4-1.5,7.4
                                s0.5,5.8,0.5,5.8"/>
                        </g>

                        <g class="frame frame-3" v-show="thumbFrame > 69 && thumbFrame < 80">
                            <path fill="none" stroke-width="15" stroke-linecap="round" stroke-miterlimit="10" d="M153.7,57.5
                                c-5.6-2.4-6.9-1.8-13.4-1.8c-5.3,0-5,0.9-10.6,2.6c-4.2,1.3-3.8,1.8-6.3,3.8c-4.9,3.9-5.1,4.1-5.8,5.1c-4.9,6.6,2.3,1.3-1,2.3
                                s1.7,0.9-2.8-2.3c-1.8-1.3-1.3-4.3-10.1-3.8c-7.5,0.4-8,2.1-13.1,7.2c-4.2,4.2-2.7-0.7-10.5-3.2c-8.5-2.7-11.3-4.2-20.8-0.2
                                c-8.9,3.7-13.1,12.4-15,18.5c-2,6.5-2.1,4.2-8.4,2.4c-7.3-2-18.6,2.9-24.4,14.5c-6.6,13.2,11,19,10.1,35c0.3,8.8,6.9,14.7,9.6,25.1
                                c3,11.5,2.8,18.7,7.7,31c4,10,7.1,15.4,7.1,24.3c0,9.7,4.3,18,5.7,28c0.8,5.5,0.5,8.3,1.8,14.9c3.5,17.5,1.7,7.1,1.7,7.1
                                s85.8-2.4,94.3-2.7c-4.8,13,1.1-1.4,2.1-12.9c1-10.8-2.3-12.8-0.2-19.8c2.1-7,9.9-19.8,12.7-33.1c1.9-9.3,9.8-15.7,14.6-21.4
                                c4.7-5.6,15.6-11.2,20.1-25.5c3-9.5,7.9-17.3,7.1-28.8c-0.6-8.7-10.9-23.4-16.3-27.2c-6.8-4.9-19.2,3.3-17.9-5.4
                                c0-10-5.5-4.4-4.8-9.3c1.3-9,2.1-7.1-2.5-14.1C161,62.2,160.7,60.5,153.7,57.5z"/>
                            <path fill="none" stroke-width="15" stroke-linecap="round" stroke-miterlimit="10" d="M164.6,325.1
                                c0,0,1.8-18.6-0.1-26.9c-2.4-10.8-1.2-21.7-0.9-24.9c0.3-3.3,1.2-7.8-3.8-7.8s-55.8,0.6-63.5,0.8s-33.1,0.3-41.1,1.8
                                c-2.2,0.4-12.1,2.9-14.9,1.9c-2.4-0.8-1.6,17.1-1.8,20.1c-0.3,3.5-0.1,6.4-0.1,11.6s-0.8,2.3-1.4,7.8c-0.5,4.2,0.3,4.6-0.2,7.6
                                s0.1,6.4,0.1,6.4"/>
                        </g>

                        <g class="frame frame-4" v-show="thumbFrame > 79 && thumbFrame < 90">
                            <path fill="none" stroke-width="15" stroke-linecap="round" stroke-miterlimit="10" d="M164.8,71
                                c-0.8-6-11.3-12.8-17.8-12.8c-5.3,0-7.6-0.3-13.2,1.4c-4.2,1.3-5.8,3.1-8.3,5.1c-4.9,3.9-5.6,4.5-6.4,5.5c-4.9,6.6,1.5,0.4-1.8,1.4
                                c-3.3,1,1.7,0.9-2.8-2.3c-1.8-1.3-0.7-2.6-9.5-2.1c-7.5,0.4-8,1-13.1,6.1c-4.2,4.2-3.5-1.6-11.3-4.1c-8.5-2.7-13.5-3.3-22.6,1.5
                                c-9.2,4.9-12,12.1-13.9,18.2c-2,6.5-2.7,2.5-8.9,0.8c-7.3-2-17.9,4.2-23.7,15.8c-6.6,13.2,11.1,19,10.4,34.3
                                c-0.2,9.4,4.9,14.9,7.9,24.3c3.7,11.3,4.7,16.5,9.6,28.8c4,10,4.7,18.3,6.8,25.4c2.7,9.3,4.9,17.1,4.7,28C51,252,52.7,258,54,264.6
                                c3.5,17.5,1.6,4.8,1.6,4.8s86.5-1.7,95-1.9c-4.8,13,3.7-1,3.1-12.5c-0.6-11.2-2.8-14.1-0.8-21.1c2.1-7,6.4-21.7,15.3-31.9
                                c7.6-8.6,17.9-15.9,23.4-21.1c5.8-5.5,14.4-13.4,20.2-27.1c4.5-10.6,6.3-18.7,5.5-30.2c-0.6-8.7-2.4-12.7-6.5-17.9
                                c-3.1-4-5-10.7-4.7-16.5c-1.5-7.2-0.6-19.2-3.7-24.6c-5.2-9-15.7-1.2-24.8,4.6C166.9,76.1,168.9,102.5,164.8,71z"/>
                            <path fill="none" stroke-width="15" stroke-linecap="round" stroke-miterlimit="10" d="M165.9,324.8
                                c0,0,1.8-14.4-0.4-24.7c-2.2-10.5-1.7-22.8-1.4-26c0.3-3.3,0.6-6.6-4.4-6.6s-55.3,0.9-63.1,1.2s-32.1-1.1-40.1,0.4
                                c-2.2,0.4-13,4.4-15.8,3.5c-2.4-0.8-0.2,9.2-0.4,12.2c-0.3,3.5-2.1,8.9-2.1,14.2s0.6,5.8,0,11.3c-0.5,4.2,0.2,4.3-0.3,7.3
                                s-0.8,7.5-0.8,7.5"/>
                        </g>

                        <g class="frame frame-5" v-show="thumbFrame > 89 && thumbFrame < 100">
                            <path fill="none" stroke-width="15" stroke-linecap="round" stroke-miterlimit="10" d="M170.2,91.9
                                c-0.5-13.8-3.1-24.3-16.6-32.2c-4.6-2.7-13.9-2.1-19.5-0.4c-4.2,1.3-7.1,1.9-9.6,3.9c-4.9,3.9-5.8,4.2-6.5,5.2
                                c-4.9,6.6,1.5,0.4-1.8,1.4s1.3,1.6-3.1-1.5c-1.8-1.3-0.8-2.6-9.6-2.1c-7.5,0.4-9,1.5-14.1,6.6c-4.2,4.2-3.1-2.1-10.9-4.6
                                C70,65.4,66.1,65.2,57,70c-9.2,4.9-10.8,13.1-12.7,19.2c-2,6.5-2.7,2.5-8.9,0.8c-7.3-2-17.7,1.4-23.5,13.1
                                c-6.6,13.2,7.5,19.8,9.1,35.6c0.3,8.7,7.5,11.9,8.8,24.8c1.3,11.8,3.2,14.6,8.1,26.9c4,10,5.2,18.1,7.3,25.2
                                c2.7,9.3,5.5,16.6,5.3,27.5c-0.1,5.5,1.6,14.8,2.9,21.5c3.5,17.5,1.4,5,1.4,5s86.9-1.9,95.4-2.2c-4.8,13,1.7-3.4,1.1-14.9
                                c-0.6-11.2,0.2-15.1,2.3-22.1c2.1-7,4.2-17.5,15.8-24.4c13.5-8,22.6-18.4,28-23.6c5.8-5.5,18.5-17.9,26.9-30.8
                                c6.3-9.5,3.6-13.8,12.5-25.9c5.1-7,6.3-16,13-22.9c7-7.2,13-12.6,8.3-23.4c-9.9-10.8-24-8-38.3,4.5c-7.8,6.8-13.7,17-28.6,26.6
                                C179.7,117.8,171.1,116.7,170.2,91.9z"/>
                            <path fill="none" stroke-width="15" stroke-linecap="round" stroke-miterlimit="10" d="M165.2,323.5
                                c0,0,1.8-14.7-0.4-25.1c-2.2-10.5-1.5-21.3-1.2-24.5c0.3-3.3,0.6-6.6-4.4-6.6s-54.3,1.2-62.1,1.4S65,267.5,57,269
                                c-2.2,0.4-13.8,3.4-16.7,2.5c-2.4-0.8-0.8,5.8-1,8.8c-0.3,3.5-1.6,11.4-1.6,16.7s0.4,6-0.3,11.5c-0.5,4.2-0.1,6.8-0.6,9.8
                                s-0.5,6.8-0.5,6.8"/>
                        </g>

                        <g class="frame frame-6" v-show="thumbFrame > 99">
                            <path fill="none" stroke-width="15" stroke-linecap="round" stroke-miterlimit="10" d="M170.2,99.3
                                c-0.5-13.8-4.1-32.4-17.6-40.3c-4.6-2.7-12.4-3.2-18-1.5c-4.2,1.3-8.4,4.4-10.9,6.4c-4.9,3.9-5.9,4.7-6.6,5.7
                                c-4.9,6.6,1.5,0.4-1.8,1.4s1.3,1.6-3.1-1.5c-1.8-1.3-1.3-2.6-10.1-2.1c-7.5,0.4-8.5,1-13.6,6.1c-4.2,4.2-3.1-2.4-10.9-4.9
                                c-8.5-2.7-10.5-5.3-19.6-0.5c-9.2,4.9-11.5,15.3-13.4,21.4c-2,6.5-2.7,2.5-8.9,0.8c-7.3-2-17.9-1.3-23.7,10.3
                                c-6.6,13.2,7.5,23.8,8.6,37.6c0.2,7.9,5,12,8.4,24.5c3,11,1.7,13.6,6.6,25.9c4,10,6.9,18.1,9,25.2c2.7,9.3,3.5,19.3,6.6,29.8
                                c1.6,5.4-1.2,11.9,0.1,20.2c2.8,17.6,1.4,5,1.4,5s88.4-1.4,96.9-1.7c-4.8,13,1.7-2.3,1.1-13.8c-0.6-11.2-0.9-16,1.1-23
                                c2.1-7,5.3-14,17-20.9c13.5-8,28.9-20.1,34.4-25.2c5.8-5.5,19.6-14.5,31.2-30c8.1-10.8,12.7-11.3,27.3-22.7
                                c6.8-5.3,15.5-4.1,23.9-9.3c8.6-5.3,13.4-21.8-17.2-27.9c-11.9-0.5-20.2,3.8-35.1,8.4c-20.6,6.4-21.3,10.4-36.1,13.7
                                C180.9,119.9,171.1,124.1,170.2,99.3z"/>
                            <path fill="none" stroke-width="15" stroke-linecap="round" stroke-miterlimit="10" d="M164.6,323.5
                                c0,0,1.8-14.7-0.4-25.1c-2.2-10.5-1.5-21.8-1.2-25c0.3-3.3,0.6-6.6-4.4-6.6s-53.6,0.4-61.3,0.7s-34.5-0.9-42.5,0.6
                                c-2.2,0.4-10.1,2.9-13,2c-2.4-0.8-3.8,6.3-4,9.3c-0.3,3.5-1.3,10.9-1.3,16.2s1.1,8,0.5,13.5c-0.5,4.2,0.1,6.8-0.4,9.8
                                s-0.2,6.3-0.2,6.3"/>
                        </g>
                </svg>
            </div>
        </div>
        <nuxt />
    </div>
</template>

<script>
    export default {
        data () {
            return {
                pointerFrame: 0,
                thumbFrame: 0,
                animTimer: undefined
            }
        },
        methods: {
            startCursor() {
                let self = this
                function changePos(event) {
                    self.$refs.cursor.style.left = event.pageX + 'px'
                    self.$refs.cursor.style.top = event.pageY + 'px'
                }
                this.$refs.site.addEventListener("mousemove", changePos);
                this.startHoverListeners();
            },
            makeSequence(direction, key) {
                let self = this
                if (animTimer !== undefined) {
                    clearTimer()
                    return
                }
                let t = 0;
                let animTimer = setInterval(setTimer, 8);
                function setTimer() {
                    if (t > 100) {
                        self[key] = direction == 'up' ? 100 : 0
                        clearTimer()
                        return 
                    }
                    t++
                    if (direction == 'up') {
                        if (self[key] < 100) {
                            self[key]++
                        } else {
                            clearTimer()
                        }
                    } else {
                        if (self[key] > 0) {
                            self[key]--
                        } else {
                            clearTimer()
                        }
                    }
                }
                function clearTimer() {
                    clearInterval(animTimer)
                }
            },
            startHoverListeners() {
                let self = this
                let header = this.$refs.site.getElementsByClassName('site-header')[0]
                
                // get the slideNav
                let slideNav = header.getElementsByClassName('slideNav')[0]
                let slideNavLinks = slideNav.getElementsByTagName('a')
                let i;
                for (i = 0; i < slideNavLinks.length; i++) {
                    slideNavLinks[i].addEventListener('mouseover', function(e) {
                        self.$refs.cursor.classList.add('slideNav')
                        self.$refs.cursorText.innerHTML = e.target.dataset.slug
                    });
                    slideNavLinks[i].addEventListener('mouseout', function() {
                        self.$refs.cursor.classList.remove('slideNav')
                        self.$refs.cursorText.innerHTML = ''
                    });
                    slideNavLinks[i].addEventListener('click', function() {
                        self.$refs.cursor.classList.remove('slideNav')
                        self.$refs.cursorText.innerHTML = ''
                    });
                }
                
                // get the pageNav
                let pageNav = this.$refs.site.getElementsByClassName('pageNav')[0]
                
                if (pageNav !== undefined) {
                    
                    let pageNavCenter = pageNav.getElementsByClassName('center')[0]
                    let pageNavPrev = pageNav.getElementsByClassName('prev')[0]
                    let pageNavNext = pageNav.getElementsByClassName('next')[0]
                    let pageNavLast = pageNav.getElementsByClassName('last')[0]
                    
                    if (pageNavCenter !== undefined) {
                        pageNavCenter.addEventListener('mouseover', function() {
                            self.$refs.cursor.classList.add('pageCenter')
                        });
                        pageNavCenter.addEventListener('mousemove', function() {
                            self.$refs.cursor.classList.add('pageCenter')
                        });
                        pageNavCenter.addEventListener('mouseout', function() {
                            self.$refs.cursor.classList.remove('pageCenter')
                        });
                        pageNavCenter.addEventListener('click', function() {
                            self.$refs.cursor.classList.remove('pageCenter')
                        });
                    }

                    if (pageNavPrev !== undefined) {
                        // this.$refs.hand.style.strokeDashoffset = 0
                        pageNavPrev.addEventListener('mouseover', function() {
                            self.$refs.cursor.classList.add('pagePrev')
                            self.pointerFrame = 0
                            self.makeSequence('up', 'pointerFrame')
                        });
                        pageNavPrev.addEventListener('mousemove', function() {
                            self.$refs.cursor.classList.add('pagePrev')
                            // self.makeSequence('up', 'pointerFrame')
                            if(self.pointerFrame == 0) {
                                self.makeSequence('up', 'pointerFrame')
                            }
                        });
                        pageNavPrev.addEventListener('mouseout', function() {
                            self.$refs.cursor.classList.remove('pagePrev')
                            self.pointerFrame = 100
                            self.makeSequence('down', 'pointerFrame')
                        });
                        pageNavPrev.addEventListener('click', function() {
                            self.$refs.cursor.classList.remove('pagePrev')
                            self.pointerFrame = 100
                            self.makeSequence('down', 'pointerFrame')
                        });
                    }
                    
                    if (pageNavNext !== undefined) {
                        // this.$refs.hand.style.strokeDashoffset = 0
                        pageNavNext.addEventListener('mouseover', function() {
                            self.$refs.cursor.classList.add('pageNext')
                            self.pointerFrame = 0
                            self.makeSequence('up', 'pointerFrame')
                        });
                        pageNavNext.addEventListener('mousemove', function() {
                            self.$refs.cursor.classList.add('pageNext')
                            if(self.pointerFrame == 0) {
                                self.makeSequence('up', 'pointerFrame')
                            }
                        });
                        pageNavNext.addEventListener('mouseout', function() {
                            self.$refs.cursor.classList.remove('pageNext')
                            self.pointerFrame = 100
                            self.makeSequence('down', 'pointerFrame')
                        });
                        pageNavNext.addEventListener('click', function() {
                            self.$refs.cursor.classList.remove('pageNext')
                            self.pointerFrame = 100
                            self.makeSequence('down', 'pointerFrame')
                        });
                    }
 
                    if (pageNavLast !== undefined) {
                        pageNavLast.addEventListener('mouseover', function() {
                            self.$refs.cursor.classList.add('pageLast')
                            self.$refs.cursorText.innerHTML = 'Endorse this'
                            self.thumbFrame = 0
                            self.makeSequence('up', 'thumbFrame')
                        });
                        pageNavLast.addEventListener('mousemove', function() {
                            self.$refs.cursorText.innerHTML = 'Endorse this'
                            self.$refs.cursor.classList.add('pageLast')
                            if(self.thumbFrame == 0) {
                                self.makeSequence('up', 'thumbFrame')
                            }
                        });
                        pageNavLast.addEventListener('mouseout', function() {
                            self.$refs.cursor.classList.remove('pageLast')
                        });
                        pageNavLast.addEventListener('click', function() {
                            self.$refs.cursor.classList.remove('pageLast')
                        });
                    }
                }
                
                // get the Buttons
                let buttons = this.$refs.site.getElementsByClassName('btn')
                for (i = 0; i < buttons.length; i++) {
                    buttons[i].addEventListener('mouseover', function() {
                        self.$refs.cursor.classList.add('Btn')
                    });
                    buttons[i].addEventListener('mouseout', function() {
                        self.$refs.cursor.classList.remove('Btn')
                    });
                    buttons[i].addEventListener('click', function() {
                        self.$refs.cursor.classList.remove('Btn')
                    });
                }

                // get the logo
                let logo = this.$refs.site.getElementsByClassName('clickarea')[0]
                if (logo !== undefined) {
                    logo.addEventListener('mouseover', function() {
                        self.$refs.cursor.classList.add('logo')
                    });
                    logo.addEventListener('mouseout', function() {
                        self.$refs.cursor.classList.remove('logo')
                    });
                    logo.addEventListener('click', function() {
                        self.$refs.cursor.classList.remove('logo')
                    });
                }

                // get click down
                let clickDown = this.$refs.site.getElementsByClassName('clickDown')[0]
                if (clickDown !== undefined) {
                    clickDown.addEventListener('mouseover', function() {
                        self.$refs.cursor.classList.add('clickDown')
                        self.pointerFrame = 0
                        self.makeSequence('up', 'pointerFrame')
                    });
                    clickDown.addEventListener('mouseout', function() {
                        self.$refs.cursor.classList.remove('clickDown')
                        self.pointerFrame = 100
                        self.makeSequence('down', 'pointerFrame')
                    });
                    clickDown.addEventListener('click', function() {
                        self.$refs.cursor.classList.remove('clickDown')
                        self.pointerFrame = 100
                        self.makeSequence('down', 'pointerFrame')
                    });
                }

                // get Main Menu 
                let mainMenu = this.$refs.site.getElementsByClassName('main-menu')[0]
                if (mainMenu !== undefined) {
                    let mainMenuLinks = mainMenu.getElementsByTagName('a')
                    i = 0;
                    for (i = 0; i < mainMenuLinks.length; i++) {
                        mainMenuLinks[i].addEventListener('mouseover', function() {
                            self.$refs.cursor.classList.add('mainNav')
                        });
                        mainMenuLinks[i].addEventListener('mouseout', function() {
                            self.$refs.cursor.classList.remove('mainNav')
                        });
                        mainMenuLinks[i].addEventListener('click', function() {
                            self.$refs.cursor.classList.remove('mainNav')
                        });
                    }
                }

                // get Hero a
                let hero = this.$refs.site.getElementsByTagName('h1')[0]
                let heroA = hero.getElementsByTagName('a')[0]
                if (heroA !== undefined) {
                    heroA.addEventListener('mouseover', function() {
                        self.$refs.cursor.classList.add('hero')
                    });
                    heroA.addEventListener('mouseout', function() {
                        self.$refs.cursor.classList.remove('hero')
                    });
                    heroA.addEventListener('click', function() {
                        self.$refs.cursor.classList.remove('hero')
                    });
                }

                // get subchapter a
                let subChapters = this.$refs.site.getElementsByClassName('c-subchapters')[0];
                if (subChapters !== undefined) {
                    let contentLinks = subChapters.getElementsByTagName('a');
                    i = 0;
                    for (i = 0; i < contentLinks.length; i++) {
                        contentLinks[i].addEventListener('mouseover', function() {
                            self.$refs.cursor.classList.add('contentLink')
                        });
                        contentLinks[i].addEventListener('mouseout', function() {
                            self.$refs.cursor.classList.remove('contentLink')
                        });
                        contentLinks[i].addEventListener('click', function() {
                            self.$refs.cursor.classList.remove('contentLink')
                        });
                    }
                }

                // get left right handles
                let handles = this.$refs.site.getElementsByClassName('handle')
                for (i = 0; i < handles.length; i++) {
                    handles[i].addEventListener('mouseover', function() {
                        self.$refs.cursor.classList.add('pageHandle')
                    });
                    handles[i].addEventListener('mouseout', function() {
                        self.$refs.cursor.classList.remove('pageHandle')
                    });
                    handles[i].addEventListener('click', function() {
                        self.$refs.cursor.classList.remove('pageHandle')
                    });
                }
            }
        }, 
        mounted () {
            this.startCursor()
        },
        computed: {
            loading () { return this.$store.state.loading }
        },
        watch: {
            loading( loading ){
                let self = this;
                setTimeout(function(){
                    self.startHoverListeners()
                }, 500);
            }
        },
    }
</script>
<style lang="scss" scoped>
    @import '~assets/scss/01-settings/_settings--variables.scss';
    @import '~assets/scss/02-tools/_tools--media-queries.scss';
  .site {
    cursor: url('/img/empty.png'), auto;
    background-color: #FFFFFF;

    #cursor {
        position: absolute;
        z-index: 99999;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;

        @include bp( max, $tablet-landscape ){
            display: none;
        }

        &.contentLink,
        &.slideNav {
            #cursor__canvas {
                width: 25px;
                height: 25px;
                background-color: rgba($primarycolor, .5);
            }
        }

        &.pagePrev.pageHandle,
        &.pageNext.pageHandle,
        &.Btn {
            width: 25px;
            height: 25px;
            overflow: hidden;
            #cursor__canvas {
                width: 25px;
                height: 25px;
                background-color: rgba(white, .6);
                .pointer {
                    opacity: 0;
                }
            }
        }

        &.mainNav {
            #cursor__canvas {
                width: 25px;
                height: 25px;
                background-color: rgba(white, .8);
                .pointer {
                    display: none;
                }
            }
        }

        &.hero,
        &.pageCenter {
            #cursor__canvas {
                width: 0;
                height: 0;
                .pointer {
                    transform: translateX(-50%) translateY(-50%) rotate(0deg);
                    opacity: 1;
                }
            }
        }
        &.pagePrev {
            #cursor__canvas {
                width: 0;
                height: 0;
                .pointer {
                    transform: translateX(-50%) translateY(-50%) rotate(-90deg);
                    opacity: 1;
                }
            }
        }
        &.pageNext {
            width: 0;
            height: 0;
            #cursor__canvas {
                .pointer {
                    transform: translateX(-50%) translateY(-50%) rotate(90deg) rotateY(180deg);
                    opacity: 1;
                }
            }
        }

        &.pageLast {
            #cursor__canvas {
                width: 0;
                height: 0;
            }
            .text {
                bottom: -55px;
                left: 100%;
                opacity: 1;
                transition: .3s ease-in-out;
            }
            .pointer {
                display: none;
            }
            .thumb {
                // display: block;
                opacity: 1;
                left: 100%;
                transform: rotateZ(-90deg) translateX(-50%) translateY(-50%);
            }
        }

        &.clickDown {
            #cursor__canvas {
                width: 0;
                height: 0;
                .pointer {
                    transform: translateX(-50%) translateY(-50%) rotate(180deg);
                    opacity: 1;
                }
            }
        }

        &.logo {
            #cursor__canvas {
                width: 20px;
                height: 20px;
                background-color: rgba($primarycolor, .8);
            }
        }
        
        &__canvas {
            //  position: relative;
            top: 0px;
            left: 0px;
            background-color: rgba($primarycolor, .8);
            border-radius: 50%;
            transition: .3s ease-in-out;
            width: 10px;
            height: 10px;
            
            .pointer {
                position: absolute;
                width: 60px;
                height: 60px;
                left: 50%;
                top: 50%;
                transform: translateX(-50%) translateY(-50%);
                pointer-events: none;
                transition: opacity .4s ease-in-out, transform .4s cubic-bezier(.52,-0.37,.06,1.37);
                stroke-dasharray: 1000;
                stroke-dashoffset: 0;
                stroke: $primarycolor;
                opacity: 0;
            }

            .thumb {
                position: absolute;
                width: 44px;
                height: 70px;
                left: 100%;
                top: 50%;
                stroke: $primarycolor;
                pointer-events: none;
                transition: stroke-dashoffset .75s ease-in-out, transform .4s cubic-bezier(.52,-0.37,.06,1.37);
                transform: rotate(0deg) translateX(-50%) translateY(-50%);
                transform-origin: top left;
                opacity: 0;
            }

            .text {
                opacity: 0;
                position: absolute;
                left: 50%;
                bottom: -50px;
                transform: translateX(-50%);
                text-transform: uppercase;
                font-size: 1.8rem;
                line-height: 0.9em;
                color: $primarycolor;
                transition: .3s;
                pointer-events: none;
                // display: none;
            }
        }
    }

  }
</style>
