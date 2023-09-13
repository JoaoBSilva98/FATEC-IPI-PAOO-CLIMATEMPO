require('dotenv').config()
const axios = require('axios')
//console.log(process.env.appid)

// const appid = process.env.appid
// const q = process.env.q

//deconstrução do objeto
const { appid, q, units, cnt, language, url} = process.env

const end = `${url}?appid=${appid}&q=${q}&units=${units}&cnt=${cnt}&lang=${language}`

axios.get(end).then((res)=>{
    console.log(res)
})