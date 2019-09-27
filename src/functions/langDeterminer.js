import data from '../data/data' 

const langDeterminer =  (ability, location) => {
    if (location.pathname === "/")
        return data[ability + "En"]
    else if (location.pathname === "/fr")
        return data[ability + "Fr"]
    else
        return data[ability + "Gr"]
}

export default langDeterminer