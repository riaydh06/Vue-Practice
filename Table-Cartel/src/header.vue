<template>
    <div class="header_top">
        <ons-row align="top" width="100%">
            <ons-col width="50px" class="header_left_icon"><img :src="this.assets.icons.menuicon" alt="" @click="gomenupage" /></ons-col>
            <ons-col id="table-cartel-heading">Tablecartel.com</ons-col>
            <ons-col width="50px" class="header_right_icon"><img :src="this.assets.icons.notification" alt="" /></ons-col>
        </ons-row>
    </div>
</template>
<script>
    import {assets} from './config'

    export default {
        mixins: [assets],
        methods:{
            gomenupage() {
                this.$emit('gomenupage');
            }
        },
        props: ['pageStack']
    }
</script>