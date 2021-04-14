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
      :src="src"
    ></iframe>
  </div>  
</template>

<script>
  export default {
    computed: {
      src () {
        return `http://localhost:8080/zoom?name=${this.$route.query.name}&meetingId=${this.$route.query.meetingId}&meetingPwd=${this.$route.query.meetingPwd}`;
      }
    }
  };
</script>