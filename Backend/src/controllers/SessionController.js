const conections = require("../database/conections")

module.exports = {
    async create(request, response){
        const {id} = request.body;
        const Ong = await conections('ONGS').where('id', id).select("name").first();
        if(!Ong){
            return response.status(400).json({error: "Bad Request."});
        }
        return response.json(Ong);
    }
}