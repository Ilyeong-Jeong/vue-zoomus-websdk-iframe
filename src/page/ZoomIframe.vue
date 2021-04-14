<style lang="scss">
  .zoom-iframe {
    width: 100%;
    height: 100%;
    background-color: #FAFAFA;
  }
</style>

<template>
  <div class="zoom-iframe d-flex align-center justify-center">
    <iframe 
      width="500" 
      height="500"
      src="http://localhost:8080/#/zoom?name=hi&meetingId=7096480064&meetingPwd=8cUFrm"
    ></iframe>
  </div>  
</template>

<script>
  export default {

  };
</script>