const { response } = require('express');

// esto del 'express.response' es solo para tener el autocompletado dentro de la función
const crearUsuario = (req, res = response) => { 
    res.json({
        ok: true,
        msg: 'registro'
    });
}

const loginUsuario = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'login'
    });
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