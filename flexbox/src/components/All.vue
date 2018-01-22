<template>
  <div>
    <h1>No all property:</h1>
    <div id="ex1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

    <h1>all: inherit:</h1>
    <div id="ex2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

    <h1>all: initial:</h1>
    <div id="ex3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

    <h1>all: unset:</h1>
    <div id="ex4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
  </div>
</template>
<script>
export default {
  name: 'All',
  data () {
    return {

    }
  }
}
</script>
<style>
  body {
    font-size: small;
    color: blue;
  }

  #ex1 {
    background-color: yellow;
    color: red;
  }

  #ex2 {
    background-color: yellow;
    color: red;
    all: inherit;
  }

  #ex3 {
    background-color: yellow;
    color: red;
    all: initial;
  }

  #ex4 {
    background-color: yellow;
    color: red;
    all: unset;
  }
</style>
