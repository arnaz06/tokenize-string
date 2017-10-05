var Token = require("../models/token")

module.exports = {

  create: function(req,res,next){
    var result = {
      success: false,
      status: "ERROR",
      token: null
    }
    var _token = req.body.string.split(/[\s,]+/)
    var i = 0
    var key = []
    var token = new Token({
        key : _token

    })

    token.save(function(err){
      if(err){
        console.log(err)
        result.msg = err
      }else {
        result.success = true
        result.status = "OK"
        result.token = token
      }
      res.json(result)
    })
  }

}
