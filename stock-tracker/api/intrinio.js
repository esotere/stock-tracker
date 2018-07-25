

const params = Object.assign({
    identifier: 'AAPL'
  })
  const auth = Object.assign({
    username: keys.intrinioUsername,
    password: keys.intrinoPassword
  })
  axios
    .get('/prices', {
      auth,
      baseURL: 'https://api.intrinio.com',
      params
    })