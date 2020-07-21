const conections = require("../database/conections")

module.exports = {
    async index(request, response){
        const ong_id = request.headers.auth;
        const incidents = await conections('Incidents').where('ong_id', ong_id).select("*");
        return response.json(incidents);
    }
}