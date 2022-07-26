class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = new Data(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }

    get volume(){
        return this._quantidade * this._valor;

    }
    get data(){
        return new Date( this._data.getTime());
    }
    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        this._valor;
    }
}