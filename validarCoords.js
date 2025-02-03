function validateCoords(lat, lon) {
    if (lat == String || lon == String) {
        return false;
    } else {
        permitir = false;
        if ((lat >= 17 && lat <= 53) && (lon >= 73 && lon <= 135)) {
            permitir = true;
            return permitir;
        } else {
            permitir = false;
            return permitir;
        }
    }
}

module.exports = {validateCoords}