<template>
    <v-ons-page>
        <v-header @gomenupage="menupage"></v-header>

        <div class="hello_jorge_bg">
            <ons-row align="right">
                <ons-col width="100%">
                    <div class="nay_cross_icon">
                        <!--  <i class="fa fa-times-circle-o" aria-hidden="true"></i> -->
                        <img @click="pop" :src="this.assets.icons.close" alt="close" />
                    </div>
                </ons-col>
            </ons-row>
            <ons-row align="" class="hello_jorge_headding_area">
                <ons-col width="100%">
                    <div class="nay_heading">
                        <h2>uh-ohh :(</h2>
                        <p>Well since you already here why not check out some of our wonderful content.They are a good read :)</p>
                    </div>
                </ons-col>
            </ons-row>
        </div>

        <!--Footer Carousel-->
        <v-carosel id="hellojorge-area" :title="title"></v-carosel>
        <!--Footer Carousel-->
        <!--<div @click="landindpage">-->
            <!--&lt;!&ndash;<img  :src="footerlogo" alt="" />&ndash;&gt;-->
            <!--hello-->
        <!--</div>-->

        <div class="hello_jorge_footer_option">
            <ons-row align="" class="hello_jorge_footer_area">
                <ons-col width="25%">
                    <div @click="landindpage()" class="left_logo">
                        <img  :src="this.assets.icons.footerlogo" alt="" />

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
    import menuicon from "assets/menuicon.svg"
    import closeicon from "assets/close.svg"
    import footerlogos from "assets/appleicon.png"
    import notification from "assets/notification.svg"
    import yay from './yay'
    import reserved from './reserved2'
    import menu from './menu'
    export default {
        name: 'nya',
        data () {
            return {
                title: "The TableCartel Chronicles",
                menuico: menuicon,
                close: closeicon,
                notificationicon: notification,
                footerlogo: footerlogos,
            }
        },
        mixins: [assets],
        methods: {
            yaypage () {
                this.pageStack.push(yay)
            },
            reservedpage () {
                this.pageStack.push(reserved)
            },
            landindpage () {
                this.pageStack.pop()
            },
            pop () {
                this.pageStack.pop()
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
