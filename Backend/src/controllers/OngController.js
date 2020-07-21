const conections = require('../database/conections');
const crypto = require('crypto');

module.exports = {
    async index (request, response){
        const ongs = await conections('ONGS').select('*');
        return response.json(ongs);
    },

    async create (request, response){
        const {name, email, WhatsApp, city, UF} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        
       await conections('ONGS').insert({
            id,
            name,
            email,
            WhatsApp,
            city,
            UF
        });
     
        return response.json({id});
     },
};