const User = require("../models/user");
const jwt = require("jsonwebtoken");
const auth = require("../config/auth");

module.exports = {
    async store(req, res){
        const {email, password}= req.body;

        //verificar se o usuário existe
        const user = await User.findOne({
            where:{
                email: email
            }
        });

        //se a senha está correta
        if(!user || user.password !== password)
            return res.status(403).send({error:"usuario e/ou senha inválidos"});

        //gerar token
        const token = jwt.sign({userID: user.id, email:user.email}, auth.secret, {expiresIn: "1h"})

        //enviar reposta
        res.send({
            user:{
                email: user.email,
                name : user.name
            },
            token
        })
    }
}