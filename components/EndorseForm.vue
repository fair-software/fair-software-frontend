<template>
    <div class="m-align-center">
        <div class="page-overlay" :class="{ open: formOpen }">
            <div class="bg" @click="toggleForm()"></div>
            <div ref="notice"  class="notice">
                <h2>Thank you!</h2>
                <p>We are very pleased to have you on board, please tell the world about this initiative</p>
                <svg class="thumb" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 297 377" enable-background="new 0 0 297 377" xml:space="preserve">
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
                </svg>
            </div>
            <form action='/endorse' ref="form" class="e-form" name="endorsement" @submit.prevent="submit">
                <div class="close" @click="toggleForm()">
                    <div></div>
                    <div></div>
                </div>
                <h2>Personal Endorsement</h2>
                <div class="e-form__group">
                    <input type="text" name="firstname" v-model="fields.firstname" @focus="activateInput($event)"/>
                    <label for="firstname">{{ 'First name' }}<sup>*</sup></label>
                    <p class="warning" :class="[errors.firstname == undefined ? '' : 'show']"><span>{{ errors.firstname }}</span></p>
                </div>
                <div class="e-form__group">
                    <input type="text" name="lastname" v-model="fields.lastname" @focus="activateInput($event)"/>
                    <label for="lastname">{{ 'Last name' }}<sup>*</sup></label>
                    <p class="warning" :class="[errors.lastname == undefined ? '' : 'show']"><span>{{ errors.lastname }}</span></p>
                </div>
                <div class="e-form__group">
                    <input type="text" name="email" v-model="fields.email" @focus="activateInput($event)"/>
                    <label for="email">{{ 'E-mail' }}<sup>*</sup></label>
                    <p class="warning" :class="[errors.email == undefined ? '' : 'show']"><span>{{ errors.email }}</span></p>
                </div>
                <div class="e-form__group secret">
                    <input type="text" name="lastname" v-model="fields.secret" @focus="activateInput($event)"/>
                    <label for="secret">{{ 'Secret' }}</label>
                </div>
                <div class="catch-click m-t-half-space">
                    <button type="submit" class="btn">Endorse!</button>
                </div>
            </form>
        </div>
        <h3>{{ 'Personal endorsements' }}</h3>
        <div ref="endorse" class="c-endorse m-t-half-space m-b-half-space" @click="toggleForm()">
            <div class="c-endorse__thumb m-b-quarter-space">
                <div>
                    <svg v-if="$store.state.menuOpen == false"  ref="svgthumb" class="thumb" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 297 377" enable-background="new 0 0 297 377" xml:space="preserve">
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
                    </svg>
                    <p>
                        <span>{{ num_endorsements }}</span>
                    </p>
                </div>
            </div>
            <span class="btn">{{ 'Become an endorser' }}</span>
        </div>
    </div> 
</template>

<script> 
    import Tweenlite from 'gsap'
    import { mapActions } from 'vuex'
    import axios from 'axios'
    export default {
        data () {
            return {
                formOpen: false,
                fields: {},
                errors: {},
                endorsementAmount: 0
            }
        },
        props: {
            num_endorsements: { type: [String, Number] }
        },
        watch: {
            'fields.firstname': function(val, oldVal) {
                this.errors.firstname = undefined;
            },
            'fields.lastname': function(val, oldVal) {
                this.errors.lastname = undefined;
            },
            'fields.email': function(val, oldVal) {
                this.errors.email = undefined;
            },
        },
        methods: {
            toggleForm() {
                this.formOpen = this.formOpen ? false : true
            },
            activateInput() {
                event.target.classList.add('activated')
            },
            endorseMentAnimation() {
                let self = this
                this.$refs.endorse.classList.add('animate');
                TweenLite.to(this.$refs.endorse, 0.4, {scale:1.07, ease:Bounce.easeOut})
                TweenLite.to(this.$refs.endorse, 0.3, {scale:1, delay:0.4})
                this.endorsementAmount ++;
                setTimeout(function(){
                    self.$refs.form.classList.remove('turn')
                    self.$refs.notice.classList.remove('turn')
                    self.$refs.endorse.classList.remove('animate');
                }, 1500);
            },
            submit() {
                let self = this;
                const toPost = {
                    'form-name': 'endorsement',
                    'firstname': this.fields.firstname,
                    'lastname': this.fields.lastname,
                    'email': this.fields.email
                };
                // const formData = new FormData();
                // for ( let key in toPost ) {
                //     formData.append(key, toPost[key]);
                // }
                axios.post(
                    window.location.origin + '/.netlify/functions/submit_endorsement',
                    toPost
                ).then((response) => {
                    // console.log(response.data)
                    if (response.data.errors && Object.keys(response.data.errors).length !== 0) {
                        self.errors = response.data.errors
                    } else {
                        self.$refs.form.classList.add('turn')
                        self.$refs.notice.classList.add('turn')
                        setTimeout(function(){
                            self.formOpen = false
                                let endorsementObj = {
                                title: {
                                    rendered: response.data.firstname +' '+ response.data.lastname
                                }
                            } 
                            self.$store.state.endorsement_list.unshift(endorsementObj)
                            self.endorseMentAnimation()
                        }, 2000);
                    }
                })
                .catch((err) => {
                //    console.log(err)
                })
            }
        },
        created () {
            this.endorsementAmount = 10
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/01-settings/_settings--variables.scss';
    @import '~assets/scss/02-tools/_tools--media-queries.scss';
    .page-overlay {
        left: 0;
        top: 0;
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-color: rgba($dark, .7);
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
        opacity: 0;
        transition: .5s;

        &.open {
            opacity: 1;
            pointer-events: all;

            form {
                margin-top: 0;
                transform: scale(1);
            }
        }
        
        .bg {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
        }

        .notice {
            position: absolute;
            width: 60%;
            max-width: 600px;
            padding: calc(2vw + 2vh + 2rem);
            border: 1px solid rgba(white, .2);
            background-color: $dark;
            pointer-events: none;
            transform: scale(1) rotateY(180deg);
            backface-visibility: hidden;
            transition: .3s ease-in-out;

            svg {
                transform: rotate(-90deg);
                width: 100px;
                height: 100px;
                stroke: white;
                stroke-width: 1px;
                transition: .2s ease-in-out;
                margin-top: 2rem;
            }   

            &.turn {
               transform: scale(1) rotateY(0deg); 
               opacity: 1;
            }

            @include bp( max, $phablet ){
                width: 80%;
            }
        }

        form {
            transition: .2s ease-in-out;
            transform: scale(0.98);
            margin-top: 1rem;
            background-color: $dark;
            padding: calc(2vw + 2vh + 2rem);
            border: 1px solid rgba(white, .2);
            width: 60%;
            max-width: 600px;
            display: block;
            text-align: left;
            position: relative;

            &.turn {
                transform: scale(1) rotateY(180deg);
                backface-visibility: hidden;
                // opacity: 0;
                transition: .3s ease-in-out;
            }

            @include bp( max, $phablet ){
                width: 80%;
            }

            .close {
                position: absolute;
                right: 1rem;
                top: 1rem;
                width: 3.5rem;
                height: 3.5rem;

                div {
                    position: absolute;
                    left: 0;
                    top: 50%;
                    height: 3px;
                    width: 100%;
                    transform: rotate(45deg);
                    background-color: white;

                    &:last-child {
                        transform: rotate(-45deg);
                    }
                }
            }   
        }
    }
</style>
