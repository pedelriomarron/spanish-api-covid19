import { config } from './config';
import { fetchFeatures } from "./data";
import moment from 'moment';


export const getLastTotalValue = async (code, endpoints, details = '') => {
    let data = await fetchFeatures(
        endpoints
    )
    let total = getObjByCode(data, code)
    let value = getLastValue(total)
    let yesterdayValue = getIndexValue(total, -2)
    let { factor, estimateTomorrow } = getFactors(value, yesterdayValue)
    details = `${config.domain}/api${details}`

    return { value, factor, estimateTomorrow, details }
};

export const getAllTotalValue = async (endpoints, code = "") => {
    let data = await fetchFeatures(
        endpoints
    )

    let dataOk;

    if (code !== "") {
        let total = getObjByCode(data, code)
        dataOk = { total }

    } else {
        dataOk = data
        dataOk.sort(function (a, b) {
            let valuea: any = getLastValue(a)
            let valueb: any = getLastValue(b)

            return valueb - valuea;
        });
    }

    for (var prop in dataOk) {
        let total = dataOk[prop]
        let value = getLastValue(total)
        let yesterdayValue = getIndexValue(total, -2)
        let { factor, estimateTomorrow } = getFactors(value, yesterdayValue)
        total["factor"] = factor
        total['estimateTomorrow'] = estimateTomorrow
    }
    addToDates(dataOk)

    return dataOk
};



function getObjByCode(data, code) {
    let director = data.find(stats => stats['cod_ine'] === code);
    return director ? director : undefined;
}


function getLastValue(obj) {
    var keys = Object.values(obj);
    return keys.slice(-1)[0];
}
function getIndexValue(obj, n) {
    var keys = Object.values(obj);
    return keys.slice(n)[0];
}

function getFactors(value, yesterdayValue) {

    let factor = value / yesterdayValue;
    let estimateTomorrow = Math.round(value * factor);
    return { factor, estimateTomorrow }
}

function addToDates(data) {

    for (let prop in data) {
        let total = data[prop]
        total['dates'] = {}
        Object.entries(total).forEach(([key, value]) => {
            if (moment(key, 'DD/MM/YYYY', true).isValid()) {
                total["dates"][key] = value
                delete total[key]
            }
        });
    }
}

