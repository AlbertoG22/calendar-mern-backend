const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/User');

const crearUsuario = async(req, res = response) => {
    const { email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email });
        
        if ( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario existente con ese correo'
            });
        }

        usuario = new Usuario( req.body );

        // encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt );
    
        // guardar en la bd
        await usuario.save(); // <-- Promise

        // generar JWT
        
    
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el admin.'
        });
    }

}

const loginUsuario = async(req, res = response) => {
    const { email, password } = req.body;

    try {

        const usuario = await Usuario.findOne({ email });
        
        if ( !usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario no existente con ese correo'
            });
        }

        // confirmar la contraseña
        const validPassword = bcrypt.compareSync( password, usuario.password );

        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            });
        }

        // generar JWT

        res.json({
            ok: true,
            uid: usuario.id,
            name: usuario.name
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el admin.'
        });
    }
};

const revalidarToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'renew'
    });
};

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
};