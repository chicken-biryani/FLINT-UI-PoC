<template>
  <div id="app">
      <md-card>
        <md-card-header>
            <div class="md-title">
            FLINT UI
            </div>
        </md-card-header>
        <md-card-content>
          <md-button class="md-raised md-primary" v-on:click="apiRoute_spec()">Spec </md-button>

          <md-button class="md-raised md-primary" v-on:click="apiRoute_help()">Help </md-button>

          <md-button class="md-raised md-primary" v-on:click="apiRoute_version()">Version </md-button>

          <md-button class="md-raised md-accent" v-on:click="apiRoute_point()">Point </md-button>

          <md-button class="md-raised md-accent" v-on:click="apiRoute_rothc()">RothC </md-button>

        </md-card-content>

          <md-button class="md-raised md-accent" v-on:click="apiRoute_point()">Point </md-button>

          <md-button class="md-raised md-accent" v-on:click="send_point_config()">Send Point config </md-button>

      </md-card>

      <md-card>
        <md-card-header>
          <div class="md-title">{{title}}</div>
        </md-card-header>
      </md-card>

  </div>
</template>

<script>
import './main.js'
const axios = require('axios')

export default {
  name: 'App',
  data: function () {
    return {
      title: 'Displays the current execution'
    }
  },
  methods: {
    uploadFile () {
      this.Images = this.$refs.file.files[0]
    },
    submitFile () {
      const formData = new FormData()
      formData.append('file', this.Images)
      const headers = { 'Content-Type': 'multipart/form-data' }
      axios.post('http://127.0.0.1:8080/point', formData, { headers }).then((res) => {
        console.log(res.data.files) // binary representation of the file
        console.log(res.status) // HTTP status
      })
    },
    apiRoute_spec: function () {
      // fetch('http://127.0.0.1:8080/spec')
      // .then(response => response.json())
      // .then(json => console.log(json))
      axios.get('http://127.0.0.1:8080/spec')
        .then(response => console.log(response))
        .catch(error => console.log(error))
      this.title = 'SPEC route invoked'
      return this.title
    },
    apiRoute_help: function () {
      axios.get('http://127.0.0.1:8080/help/all')
        .then(response => console.log(response))
        .catch(error => console.log(error))
      this.title = 'HELP route invoked'
      return this.title
    },
    apiRoute_version: function () {
      axios.get('http://127.0.0.1:8080/version')
        .then(response => console.log(response))
        .catch(error => console.log(error))
      this.title = 'VERSION route invoked'
      return this.title
    },
    apiRoute_point: function () {
      axios.post('http://127.0.0.1:8080/point')
        .then(response => console.log(response))
        .catch(error => console.log(error))
      this.title = 'POINT route invoked'
      return this.title
    },
    apiRoute_rothc: function () {
      axios.post('http://127.0.0.1:8080/rothc')
        .then(response => console.log(response))
        .catch(error => console.log(error))
      this.title = 'ROTHC route invoked'
      return this.title
    },
    send_point_config: function () {
      var file = require('./FLINT_configs/point_example.json')
      var formData = new FormData()
      formData.append('modified_point_example.json', file)
      // console.log([...formData])
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8080/point',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (response) {
          console.log(response)
        })

      this.title = 'Config sent'
      return this.title
    },
    cancel_operation: function () {
      this.title = 'Operation was cancelled'
      return this.title
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
