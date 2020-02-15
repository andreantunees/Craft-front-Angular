export async function calcDist(latOrg,longOrg,latDest,longDest){ //By Haversine
    
    const radiusInKm = 6371;

    const distanceLat = distancePoint(latOrg, latDest);
    const distanceLong = distancePoint(longOrg, longDest);

    const OrgLatRad = radian(latOrg);
    const DestLatRad = radian(latDest);

    const calcLat = Math.pow(Math.sin(distanceLat/2),2);
    const calcLong = Math.pow(Math.sin(distanceLong/2),2);

    var formula = calcLat + calcLong * Math.cos(OrgLatRad) * Math.cos(DestLatRad);
    formula = 2 * Math.asin(Math.sqrt(formula));

    return radiusInKm * formula;
}

export async function convertKmToMiles(data){
    return data /= 1.60934;
}

function radian(ang){
    return ang * (Math.PI/180);
}

function distancePoint(pointX, pointY){
    return (pointX - pointY) * (Math.PI/180);
}


