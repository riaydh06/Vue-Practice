<template>
  <div>
    <h1>Animation</h1>
    <div class="animationbox"></div>
    <h1>Animation delay</h1>
    <div class="animation-delay"></div>
    <h1>Animation direction</h1><br>
    <p>animation direction normal</p>
    <div class="animation-direction-normal"></div>
    <p>animation direction reverse</p>
    <div class="animation-direction-reverse"></div>
    <p>animation direction alternate</p>
    <div class="animation-direction-alternate"></div>
    <p>animation direction alternate-reverse</p>
    <div class="animation-direction-alternate-reverse"></div>
    <h1>Animation duration</h1>
    <div class="animation-duration"></div>
  </div>
</template>
<script>
export default {
  name: 'Animation',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
  .animationbox {
    width: 100px;
    height: 100px;
    background: red;
    position: relative;
    animation: mymove 10s infinite;
  }
  .animation-delay {
    width: 100px;
    height: 100px;
    background: red;
    position: relative;
    animation: mymove 10s infinite;
    animation-delay: 5s;
  }
  .animation-direction-normal {
    width: 100px;
    height: 100px;
    background: red;
    position: relative;
    animation: mymove 10s infinite;
    animation-direction: normal;
  }
  .animation-direction-reverse {
    width: 100px;
    height: 100px;
    background: red;
    position: relative;
    animation: mymove 10s infinite;
    animation-direction: reverse;
  }
  .animation-direction-alternate {
    width: 100px;
    height: 100px;
    background: red;
    position: relative;
    animation: mymove 10s infinite;
    animation-direction: alternate;
  }
  .animation-direction-alternate-reverse {
    width: 100px;
    height: 100px;
    background: red;
    position: relative;
    animation: mymove 10s infinite;
    animation-direction: alternate-reverse;
  }
  .animation-duration{
    width: 100px;
    height: 100px;
    background: red;
    position: relative;
    animation: mymove infinite;
    animation-duration: 1s;
  }
  @keyframes mymove {
    from{left: 0px;}
    to{left: 300px;}
  }
</style>
