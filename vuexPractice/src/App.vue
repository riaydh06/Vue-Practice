<template>
  <div id="app">
    <app-registration></app-registration>
    <app-registrations></app-registrations>
    <!--<vsearch></vsearch>-->
    <!--<appMyComponent></appMyComponent>-->
    <!--<v-select :value.sync="selected" :searchable="false" :options="options" placeholder="Search GitHub Repositories..."></v-select>-->
    <picture-input
            ref="pictureInput"
            @change="onChange"
            width="600"
            height="600"
            margin="16"
            accept="image/jpeg,image/png"
            size="10"
            buttonClass="btn"
            :customStrings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Drag a 😺 GIF or GTFO'
      }">
    </picture-input>
  </div>
</template>

<script>
  import Registration from './components/Registration.vue';
  import Registrations from './components/Registrations.vue';
  import search from './components/search.vue';
  import PictureInput from 'vue-picture-input'
  // import MyComponent from './components/MyComponent.vue';
  // import vSelect from "vue-select"


export default {
    data() {
        return {
            selected: null,
            options: ['foo','bar','baz']
        }
    },
    components: {
        appRegistration: Registration,
        appRegistrations: Registrations,
        vsearch: search,  PictureInput
        // appMyComponent: MyComponent,
        // "v-select" : vSelect
    },
    methods: {
        onChange () {
            console.log('New picture selected!')
            if (this.$refs.pictureInput.image) {
                console.log('Picture loaded.')
            } else {
                console.log('FileReader API not supported: use the <form>, Luke!')
            }
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
