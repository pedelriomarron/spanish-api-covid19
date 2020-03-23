import unfetch from "isomorphic-unfetch";
import withRetry from "@zeit/fetch-retry";

const fetch = withRetry(unfetch);


export const fetchFeatures = async (url) => {
    const endpoint = `${url}`;
    const response = await fetch(endpoint);

    //const { features } = await response.json();
    const data = await response.text();
    return csvJSON(replace(data));
};


function csvJSON(csv) {
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


function replace(stringToReplace: any) {
    return stringToReplace.replace('﻿', '');
}