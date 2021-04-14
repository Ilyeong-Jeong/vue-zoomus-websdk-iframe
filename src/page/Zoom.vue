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
        userName: this.$route.query.name,
        meetingNumber: this.$route.query.meetingId,
        passWord: this.$route.query.meetingPwd,
        leaveUrl: "https://www.zoom.us",
        role: 0
      };

      this.signature = ZoomMtg.generateSignature({
        apiKey: this.meetConfig.apiKey,
        apiSecret: this.meetConfig.apiSecret,
        meetingNumber: this.meetConfig.meetingNumber,
        role: this.meetConfig.role,
      });

      ZoomMtg.init({
        leaveUrl: "https://www.zoom.us",
        isSupportAV: true,
        success: () => {
          ZoomMtg.join({
            apiKey: this.meetConfig.apiKey,
            userName: this.meetConfig.userName,
            meetingNumber: this.meetConfig.meetingNumber,
            passWord: this.meetConfig.passWord,
            signature: this.signature,
            userEmail: "useremail@email.com",
          });
        }
      });
    },
  };

</script>
