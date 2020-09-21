class Meteo {
    
    constructor(private _ville: string, private _temperature: number) {    

    }

    toString(): string { return `${this._ville} - ${this._temperature}°C`
  
    }

}


let nantesCeMatin = new Meteo('Nantes', 12);
//Erreur de compilation car on attent pour construire un objet Meteo 2 parametres et on lui en fournit aucuns...

console.log(nantesCeMatin.toString());

