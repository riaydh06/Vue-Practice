<template>
    <v-ons-page>
        <v-header @gomenupage="menupage"></v-header>
        <div class="hello_jorge_bg">
            <ons-row align="" class="hello_jorge_headding_area">
                <ons-col width="100%">
                    <div class="hello_jorge_heading">
                        <h2>Hello {{username}}!</h2>
                        <p>Today is good day to<br /> eat out. Why not plan something?</p>
                    </div>
                </ons-col>
            </ons-row>
            <ons-row align="" class="hello_jorge_button_area">
                <ons-col width="100%">
                    <div class="hello_jorge_button">
                        <button class="button button--light nay_button" @click="nyapage">Nay</button>
                        <button class="button button--light yay_button" @click="yaypage">Yay!</button>
                    </div>
                </ons-col>
            </ons-row>
        </div>

        <!--Footer Carousel-->
        <v-carosel id="hellojorge-area" :title="title"></v-carosel>
        <!--Footer Carousel-->
        <div class="hello_jorge_footer_option">
            <ons-row align="" class="hello_jorge_footer_area">
                <ons-col width="25%">
                    <div class="left_logo">
                        <img :src="this.assets.icons.footerlogo" alt="" />
                    </div>
                </ons-col>
                <ons-col width="45%">
                    <div class="discover_button">
                        <button class="button button--light" @click="yaypage">Discover</button>
                    </div>
                </ons-col>
                <ons-col width="25%">
                    <div class="reserve_button">
                        <button class="button button--light reserve_button_customize" @click="reservedpage">Reserve</button>
                    </div>
                </ons-col>
            </ons-row>
        </div>

    </v-ons-page>
</template>



<script>
    import carosel from "./carosel"
    import header from "./header"
    import {assets} from './config'
    import VModal from 'vue-js-modal';
    import yay from "./yay"
    import nya from "./nya"
    import reserved from './reserved2'
    import menu from './menu'
    export default {
        name: 'landing',
        data () {
            return {
                title: "Today's Special",
                loading:false,
                username: this.$session.get('last_name'),
            }
        },
        mixins: [assets],
        created () {
            this.$session.start()

        },
        methods: {
            yaypage () {
                this.pageStack.push(yay)
            },
            nyapage () {
                this.pageStack.push(nya)
            },
            reservedpage () {
                this.pageStack.push(reserved)
            },
            menupage (){
                this.pageStack.push(menu)
            },
        },
        components:{
            'v-carosel':carosel,
            'v-header':header,
        },
        props: ['pageStack']
    }
</script>
