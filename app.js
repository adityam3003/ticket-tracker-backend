const axios = require('axios')
const cors = require('cors')
const express = require('express')
const app = express()
app.use(cors())
app.get('/gettickets',async(req,res)=>{
    try{
        const data = await axios.get(`https://zendeskcodingchallenge1566.zendesk.com/api/v2/tickets.json?per_page=25&page=${req.query.page || 1}`,{
        headers: {
          authorization: 'Basic bWVodGFhZGlAdXNjLmVkdTpJYnNheWFAMzAwMzE5OTg='
        }
      })
      if (data.status == 200 && data.data && data.data.tickets){
        res.set('Access-Control-Allow-Origin', '*');
        return res.status(200).json({
          tickets:data.data.tickets,
          count:data.data.count,
          per_page:25
        })
      }
    }
    catch(e){
      return res.status(500)
    }
})

module.exports = app
