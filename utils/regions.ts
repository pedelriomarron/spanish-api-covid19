

export const regionsData = {
    "01": "Andalucía",
    "02": "Aragón",
    "03": "Asturias",
    "04": "Baleares",
    "05": "Canarias",
    "06": "Cantabria",
    "08": "Castilla-La Mancha",
    "07": "Castilla y León",
    "09": "Cataluña",
    "18": "Ceuta",
    "10": "C. Valenciana",
    "11": "Extremadura",
    "12": "Galicia",
    "13": "Madrid",
    "19": "Melilla",
    "14": "Murcia",
    "15": "Navarra",
    "16": "País Vasco",
    "17": "La Rioja",
}


const convertRegionToExport = (regions) => {
    let res = []
    Object.entries(regions).forEach(([key, value]) => {
        let region = { code: key, name: value }
        res.push(region)
    });
    return res
}



export const regionsAlternative = {
    "Andalucía": "01",
    "Aragón": "02",
    "Asturias": "03",
    "Baleares": "04",
    "Canarias": "05",
    "Cantabria": "06",
    "Castilla-La Mancha": "08",
    "Castilla y León": "07",
    "Cataluña": "09",
    "Ceuta": "18",
    "C. Valenciana": "10",
    "Extremadura": "11",
    "Galicia": "12",
    "Madrid": "13",
    "Melilla": "19",
    "Murcia": "14",
    "Navarra": "15",
    "País Vasco": "16",
    "La Rioja": "17",
}


export const regions = convertRegionToExport(regionsData)
