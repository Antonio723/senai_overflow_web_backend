const User = require("../models/user");
const bcrypt = require("bcryptjs");

module.exports = {
    async store(req, res){
        const {name, email, password} = req.body;

        //verificar se o usuario já existe
        let user = await User.findOne({
            where:{
                email : email
            }
        })

        if(user.email){
            return res.status(400).send({
                error : "este E-mail já foi cadastardo anterirormente"
            })
        }

        //gerar o hash da senha
        const passwordHashed = bcrypt.hashSync(password);

        //inserir o ususario no banco
        user = await User.create({
            name: name,
            email: email,
            password: passwordHashed
        })

        //gerar um token
        
        //retornar o usuario
        res.send({
            user : {
                id: user.id,
                name: user.name,
                email: user.email
            }
        })
    }
}