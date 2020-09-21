"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(name, _price) {
        this._name = name;
        this._price = _price;
    }
    Object.defineProperty(Sejour.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "price", {
        get: function () {
            return this._price;
        },
        enumerable: false,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._Sejour = [];
        this._Sejour.push(new Sejour('Montpellier', 550));
        this._Sejour.push(new Sejour('Nantes', 300));
        this._Sejour.push(new Sejour('Paris', 400));
        this._Sejour.push(new Sejour('Bastia', 400));
    }
    SejourService.prototype.FindSejourByName = function (nomSejour) {
        return;
        for (var _i = 0, _a = this._Sejour; _i < _a.length; _i++) {
            var sejour = _a[_i];
            if (sejour.name === nomSejour) {
                console.log(sejour);
            }
            else {
                console.log('No Sejour with name');
            }
        }
    };
    return SejourService;
}());
var SejourService1 = new SejourService();
SejourService1.FindSejourByName('Nantes');
