module.exports ={

    add1 (req,res){
        input = parseInt(JSON.stringify(req.body['input']))
        console.log('input = '+ output)
        output = input*input
        res.send(output.toString())
    }

}