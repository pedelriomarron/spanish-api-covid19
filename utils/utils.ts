import moment from 'moment';


/**
 *
 * Ordena un objeto por el ultimo valor
 *
 * @param   {Object} obj - Object con los datos
 *
 */
export function sortByLastValue(obj: any) {
    obj.sort(function (a, b) {
        let valuea: any = getIndexValue(a, -1)
        let valueb: any = getIndexValue(b, -1)
        return valueb - valuea;
    });
}

/**
 *
 * Añade los campos de factor y estimacion a un objeto basandose en los ultimos dias
 *
 * @param   {Object} obj - Object con los datos
 *
 */
export function addFactorToObject(obj) {
    for (var prop in obj) {
        let total = obj[prop]
        let value = getIndexValue(total, -1)
        let yesterdayValue = getIndexValue(total, -2)
        let { factor, estimateTomorrow } = getFactors(value, yesterdayValue)
        total["factor"] = factor
        total['estimateTomorrow'] = estimateTomorrow
    }
}

/**
 *
 * Cogera el objeto que tenga un determiado id
 *
 * @param   {Object} obj - Object con los datos
 * @param   {string} code - Codigo que se buscará
 * @param   {string} key - key por la que se buscará
 * 
 * @return  {Object} Objeto encontrado
 *
 */
export function getObjByCode(obj, code: string, key: string = 'cod_ine') {
    let findObj = obj.find(stats => stats[key] === code);
    return findObj ? findObj : undefined;
}


/**
 *
 * Cogera el objeto con el index buscado
 *
 * @param   {Object} obj - Object con los datos
 * @param   {number} n - numero de orden del objeto ( -1,0,1,2)
 * 
 * @return  {Object} Ultimo bjeto encontrado
 *
 */
export function getIndexValue(obj, n: number) {
    var keys = Object.values(obj);
    return keys.slice(n)[0];
}
/**
 *
 *  devolvera porpiedades de factor
 *
 * @param   {Object} value - Object con los datos de dia actual 
 * @param   {Object} yesterdayValue -Object con los datos de ayer 
 * 
 * @return  {factor,estimateTomorrow} Objeto con factor y estimacion
 *
 */
export function getFactors(value, yesterdayValue) {
    let factor = value / yesterdayValue;
    let estimateTomorrow = Math.round(value * factor);
    return { factor, estimateTomorrow }
}

/**
 *
 *  Añadirá al objeto, un objeto con las propiedades que sean dias validos
 *
 * @param   {Object} obj - Object con los datos de dia actual 
 * @param   {Object} yesterdayValue -Object con los datos de ayer 
 * 
 *
 */
export function addToDates(obj, formatDate = 'YYYY-MM-DD') {
    for (let prop in obj) {
        let current = obj[prop]
        current['dates'] = {}
        Object.entries(current).forEach(([key, value]) => {
            if (moment(key, formatDate, true).isValid()) {
                current["dates"][key] = value
                delete current[key]
            }
        });
    }
}

