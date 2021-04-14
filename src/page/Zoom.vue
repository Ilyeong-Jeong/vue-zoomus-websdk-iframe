<template>
  <div class="zoom">
    <meta charset="utf-8">

    <link type="text/css" rel="stylesheet" href="node_modules/@zoomus/websdk/dist/css/bootstrap.css" />
    <link type="text/css" rel="stylesheet" href="node_modules/@zoomus/websdk/dist/css/react-select.css" />
    <meta name="format-detection" content="telephone=no">
  </div>
</template>

<script>

  import { ZoomMtg } from "@zoomus/websdk";

  ZoomMtg.setZoomJSLib("https://jssdk.zoomus.cn/1.9.1/lib", "/av"); 
  ZoomMtg.preLoadWasm();
  ZoomMtg.prepareJssdk();
  ZoomMtg.i18n.load('ko-KO');
  ZoomMtg.i18n.reload('ko-KO');

  const API_KEY = "API_KEY";
  const API_SECRET = "API_SECRET";

  export default {
    data () {
      return {
        meetConfig: {},
        signature: {},
      };
    },

    mounted () {
      this.meetConfig = {
        apiKey: API_KEY,
        apiSecret: API_SECRET,
        meetingNumber: this.$route.query.meetingId,
        userName: this.$route.query.name,
        passWord: this.$route.query.meetingPwd,
        leaveUrl: "https://zoom.us",
        role: 0
      };

      this.signature = ZoomMtg.generateSignature({
        meetingNumber: this.meetConfig.meetingNumber,
        apiKey: this.meetConfig.apiKey,
        apiSecret: this.meetConfig.apiSecret,
        role: this.meetConfig.role,
      });

      ZoomMtg.init({
        leaveUrl: "http://www.zoom.us",
        isSupportAV: true,
        success: () => {
          ZoomMtg.join({
            meetingNumber: this.meetConfig.meetingNumber,
            userName: this.meetConfig.userName,
            signature: this.signature,
            apiKey: this.meetConfig.apiKey,
            userEmail: "useremail@email.com",
            passWord: this.meetConfig.passWord,
          });
        }
      });
    },
  };

</script>
