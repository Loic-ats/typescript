"use strict";
var Meteo = /** @class */ (function () {
    function Meteo(_ville, _temperature) {
        this._ville = _ville;
        this._temperature = _temperature;
    }
    Meteo.prototype.toString = function () {
        return this._ville + " - " + this._temperature + "\u00B0C";
    };
    return Meteo;
}());
var nantesCeMatin = new Meteo('Nantes', 12);
//Erreur de compilation car on attent pour construire un objet Meteo 2 parametres et on lui en fournit aucuns...
console.log(nantesCeMatin.toString());
