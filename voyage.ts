class Sejour {

    private _name: string;
    private _price: number;

    constructor(name: string, _price: number) {
        this._name = name;
        this._price = _price;
    }


    get name(): string {
        return this._name;
    }

    get price(): number {
        return this._price;
    }

}

class SejourService {


    private _Sejour: Sejour[] = [];

    constructor() {

        this._Sejour.push(new Sejour('Montpellier', 550));
        this._Sejour.push(new Sejour('Nantes', 300));
        this._Sejour.push(new Sejour('Paris', 400));
        this._Sejour.push(new Sejour('Bastia', 400));

    }

    FindSejourByName(nomSejour: string): Sejour | void {
        return
        for (let sejour of this._Sejour) {
            if (sejour.name === nomSejour) {
                console.log(sejour);
            } else { console.log('No Sejour with name') }
        }
    }
}

let SejourService1 = new SejourService();
SejourService1.FindSejourByName('Nantes');




