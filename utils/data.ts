import unfetch from "isomorphic-unfetch";
import withRetry from "@zeit/fetch-retry";

const fetch = withRetry(unfetch);

/**
 *
 * Fetch a los endpoint
 *
 * @param   {string} url - url a la que hacer el fetch, estos datos se parsearan a objetc pues llegan en plano
 * 
 * @return  {Object} Response del Fetch
 *
 */
export const fetchFeatures = async (url: string) => {
    const endpoint = `${url}`;
    const headers = {};
    const response = await fetch(endpoint, { headers });

    //const { features } = await response.json();
    const data = await response.text();
    return csvJSON(replace(data));
};


/**
 *
 * Convierte un csv a un JSON
 *
 * @param   {string} csv - CSV plano
 * 
 * @return  {Object} JSON del csv
 *
 */
function csvJSON(csv: string) {
    var lines = csv.split("\n");
    var result = [];
    var headers = lines[0].split(",");
    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(",");
        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    return result;
}

/**
 *
 * Pequeño Helper para borrar string raro que se sencuenta en el csv
 *
 * @param   {string} stringToReplace - String
 * 
 * @return  {string} String sano
 *
 */
function replace(stringToReplace: string) {
    return stringToReplace.replace('﻿', '');
}