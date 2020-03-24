import { config } from './config';
import { fetchFeatures } from "./data";
import { getObjByCode, getIndexValue, getFactors, sortByLastValue, addFactorToObject, addToDates } from './utils';

/**
 *
 * Preguntara al endpoint y cogerá los datos ultimos que existan de un codigo concreto
 *
 * @param   {string} code - Codigo por el que se filtrarán los valores
 * @param   {string} endpoints - Endpoint donde están los datos
 * @param   {string} details - campos adiccional con informacion
 * 
 * @return  {Object} Objeto final
 *
 */
export const getLastTotalValue = async (code: string, endpoints: string, details: string = '') => {
    let data = await fetchFeatures(
        endpoints
    )
    let total = getObjByCode(data, code)
    let value = getIndexValue(total, -1)
    let yesterdayValue = getIndexValue(total, -2)
    let { factor, estimateTomorrow } = getFactors(value, yesterdayValue)
    details = `${config.domain}/api${details}`

    return { value, factor, estimateTomorrow, details }
};

/**
 *
 * Preguntara al endpoint y cogerá todos los datos de un codigo concreto
 *
 * 
 * @param   {string} endpoints - Endpoint donde están los datos
 * @param   {string} code - Codigo por el que se filtrarán los valores
 * 
 * @return  {Object} Objeto final
 *
 */
export const getAllTotalValue = async (endpoints, code = "") => {//TODO: cambiar el orden de los argunmentos para guardar integridad con la anterior funcion
    let data = await fetchFeatures(endpoints)
    let dataOk;
    if (code !== "") {
        let total = getObjByCode(data, code)
        dataOk = { total }
    } else {
        dataOk = data
        sortByLastValue(dataOk)
    }
    addFactorToObject(dataOk)
    addToDates(dataOk)
    return dataOk
};



