const conections = require('../database/conections');
const crypto = require('crypto');

module.exports = {
    async index (request, response){
        //Paginação
        const {page = 1} = request.query;
        const [count] = await conections('Incidents').count();
        const inc = await conections('Incidents').join('ONGS', 'ONGS.id', '=', 'Incidents.ong_id').limit(5).offset((page - 1) * 5).select(['Incidents.*', 'ONGS.name', 'ONGS.email', 'ONGS.WhatsApp', 'ONGS.city', 'ONGS.UF']);
        response.header('Total-Items', count['count(*)'])
        return response.json(inc);
        //Aqui para baixo ele faz o index de todos os casos
        //const inc = await conections('Incidents').select('*');
        //return response.json(inc);
    },

    async create (request, response){
        const {title, description, value} = request.body;
        const ong_id = request.headers.auth;
        
       const [id] = await conections('Incidents').insert({
            title,
            description,
            value,
            ong_id
        });
     
        return response.json({id});
     },

    async delete (request, response){
        const {id} = request.params;
        const ong_id = request.headers.auth;

        const incident = await conections('Incidents').where('id', id).select('ong_id').first();


        await conections('Incidents').where('id', id).delete();
        return response.status(204).send();
    }
};