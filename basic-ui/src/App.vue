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

                  <md-button class="md-raised md-accent" v-on:click="cancel_operation()">CANCEL </md-button>

        <md-card-content>

        </md-card-content>

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
