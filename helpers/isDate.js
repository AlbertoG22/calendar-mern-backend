const moment = require('moment');

const isDate = ( value ) => {
    // si no hay fecha, la validación falla
    if ( !value ) return false;

    // verificar que la fecha sea válida
    const fecha = moment(value);
    if ( fecha.isValid() ) {
        return true;
    }
    else {
        return false;
    }
};

module.exports = { isDate };