import Axios from "axios"

 
 flask_app_post = async(req, res, next) => {
     console.log('req.body', req.body)
    try{
        const flaskPostResult = await Axios.post('https://cannabis-api-1.herokuapp.com/', req.body)

        console.log('flaskPostResult', flaskPostResult)
        req.flaskPostResult = flaskPostResult
        next()
    }
    catch{
        res.status(500).json({error: `failed flask post`})
    }
}


module.exports =  flask_app_post
