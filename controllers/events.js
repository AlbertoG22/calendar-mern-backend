const { response } = require('express');
const Evento = require('../models/Event');

const getEventos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'getEventos'
    });
};

const crearEvento = async(req, res = response) => {

    const evento = new Evento( req.body );

    try {
        evento.user = req.uid;
        const eventoGuardado = await evento.save();

        res.status(200).json({
            ok: true,
            evento: eventoGuardado
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador.'
        });
    }
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