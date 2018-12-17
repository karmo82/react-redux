const axios = require('axios');

export function getInstance(){

    var instance = axios.create({
        baseURL: 'http://localhost:57714/',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
            },
        crossdomain: true
      });

      return instance;
}