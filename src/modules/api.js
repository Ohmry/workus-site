import axios from 'axios'

export default {
  baseUrl: 'http://localhost:9091',
  get: function (uri) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: uri,
        baseURL: this.baseUrl,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      })
        .then((response) => {
          const data = response.data
          data.status = response.status
          resolve(data)
        })
        .catch((error) => {
          const data = error.response.data
          data.status = error.response.status
          reject(data)
        })
    })
  },
  post: function (uri, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: uri,
        baseURL: this.baseUrl,
        data: payload,
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          const data = response.data
          data.status = response.status
          resolve(data)
        })
        .catch((error) => {
          let data = {}
          if (error.code === 'ERR_NETWORK') {
            data.code = error.code
            data.status = 0
            data.message = '통신 오류'
          } else {
            data = error.response.data
            data.status = error.response.status
          }
          reject(data)
        })
    })
  },
  put: function (uri, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'put',
        url: uri,
        baseURL: this.baseUrl,
        data: payload,
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          const data = response.data
          data.status = response.status
          resolve(data)
        })
        .catch((error) => {
          const data = error.response.data
          data.status = error.response.status
          reject(data)
        })
    })
  },
  delete: function (uri) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'delete',
        url: uri,
        baseURL: this.baseUrl,
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          const data = response.data
          data.status = response.status
          resolve(data)
        })
        .catch((error) => {
          const data = error.response.data
          data.status = error.response.status
          reject(data)
        })
    })
  }
}
