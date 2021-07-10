/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable import/no-webpack-loader-syntax */
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
                  <md-button class="md-raised md-accent" v-on:click="send_point_config_as_json()"> Send Point Config as JSON </md-button>
                  <md-button class="md-raised md-accent" v-on:click="send_rothc_config_as_json()"> Send RothC Config as JSON</md-button>

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
// eslint-disable-next-line no-unused-vars
import file_point from 'raw-loader!./FLINT_configs/point_example.json'
// eslint-disable-next-line import/no-webpack-loader-syntax
import file300 from 'raw-loader!./FLINT_configs/point_example(300).json'
import file_rothc from 'raw-loader!./FLINT_configs/point_rothc_example.json'

const axios = require('axios')
export default {
  name: 'App',
  data: function () {
    console.log({ file300 })
    return {
      title: 'Displays the current execution'
    }
  },
  methods: {
    apiRoute_spec: function () {
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

    send_point_config_as_json: function () {
      axios.post('http://127.0.0.1:8080/point', file300)
        .then(response => console.log(response))
        .catch(error => console.log(error))

      this.title = 'Point config sent'
      return this.title
    },
    send_rothc_config_as_json: function () {
      axios.post('http://127.0.0.1:8080/rothc', file_rothc)
        .then(response => console.log(response))
        .catch(error => console.log(error))

      this.title = 'RothC config sent'
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
