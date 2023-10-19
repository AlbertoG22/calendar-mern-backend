/* 
    Rutas de Events
    host + /api/events
*/

const { Router } = require('express');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validateJWT } = require('../middlewares/validate-jwt');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { isDate } = require('../helpers/isDate');
const router = Router();

// todas deben tener token válido
router.use( validateJWT );

// obtener eventos
router.get('/', getEventos);

// crear nuevo evento
router.post(
    '/',
    [
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'Fecha de fin es obligatoria').custom( isDate ),
        validateFields
    ],
    crearEvento
);

// actualizar evento
router.put('/:id', actualizarEvento);

// borrar evento
router.delete('/:id', eliminarEvento);


module.exports = router;