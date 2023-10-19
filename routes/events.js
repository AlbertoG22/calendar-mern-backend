/* 
    Rutas de Events
    host + /api/events
*/

const { Router } = require('express');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validateJWT } = require('../middlewares/validate-jwt');
const router = Router();

// todas deben tener token válido
router.use( validateJWT );

// obtener eventos
router.get('/', getEventos);

// crear nuevo evento
router.post('/', crearEvento);

// actualizar evento
router.put('/:id', actualizarEvento);

// borrar evento
router.delete('/:id', eliminarEvento);


module.exports = router;