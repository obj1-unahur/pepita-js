class Golondrina {
    constructor() {
        this._energia = 0;
    }

    energia() {
        return this._energia;
    }

    comer() {
        this._energia += 100;
    }

    volar() {
        this._energia -= 50;
    }
}

function darleComidaAPepita() {
    pepita.comer();
    const label = document.getElementById("energia");
    label.innerText = pepita.energia();
}

var pepita = new Golondrina();