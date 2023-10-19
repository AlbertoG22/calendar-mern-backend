const { response } = require('express');

const getEventos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'getEventos'
    });
};
const crearEvento = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'crearEvento'
    });
};
const actualizarEvento = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'actualizarEvento',
        // id: req.params.id
    });
};
const eliminarEvento = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'eliminarEvento',
        // id: req.params.id
    });
};


module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
};
