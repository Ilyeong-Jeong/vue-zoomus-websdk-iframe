<style lang="scss">
  .join {
    width: 100%;
    height: 100%;
    background-color: #FAFAFA;

    .join-sheet {
      padding: 16px;

      p {
        font-size: 16px;
      }
    }
  }
</style>

<template>
  <div class="join d-flex align-center justify-center">
    <v-sheet
      class="join-sheet d-flex flex-column align-center justify-center"
      width="500"    
      height="400"
      elevation="1"
      rounded
    >
      <p>Please write down the zoom meeting information.</p>

      <div>
        <v-text-field
          label="Name"
          placeholder="Placeholder"
          v-model="name"
        ></v-text-field>

        <v-text-field
          label="Meeting ID"
          placeholder="Placeholder"
          v-model="meetingId"
        ></v-text-field>

        <v-text-field
          label="Meeting Password"
          placeholder="Placeholder"
          v-model="meetingPwd"
        ></v-text-field>
      </div>

      <div class="d-flex">
        <v-btn
          class="mr-2" 
          elevation="2"
          color="primary"
          @click="zoom()"
        >
          Zoom Join
        </v-btn>

        <v-btn
          elevation="2"
          color="teal"
          @click="zoomIframe()"
        >
          Iframe Join
        </v-btn>
      </div>  
    </v-sheet>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        name: '',
        meetingId: '',
        meetingPwd: '',
      }
    },

    methods: {
      zoom () {
        this.$router.push({ 
          name: 'zoom', 
          query: { 
            name: this.name, 
            meetingId: this.meetingId, 
            meetingPwd: this.meetingPwd, 
          } 
        });
      },

      zoomIframe () {
        this.$router.push({ 
          name: 'zoomIframe',
          query: { 
            name: this.name, 
            meetingId: this.meetingId, 
            meetingPwd: this.meetingPwd, 
          } 
        });
      }
    }
  }
  
</script>