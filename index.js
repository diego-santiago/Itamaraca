class Itamaraca {

    constructor({ N = 10000, s0 = 8777, s1 = 11, s2 = 8, xrn = 1.97}) {
        
        this.N = N;

        this.s0 = s0;
        this.s1 = s1;
        this.s2 = s2;

        this.xrn = xrn;

        this.nextY = this.s2
        this.result = [];
    }

    nProcess({ x, y }) {
        return Math.abs(x - y);
    }

    finalCalculation({ N, Pn, xrn}){
        return Math.round(Math.abs( N - (Pn * xrn) ))
    }

    next(){
        
        const s1 = this.s1;
        const s2 = this.s2;

        const N = this.N;
        const xrn = this.xrn;

        const x = this.s0
        const y = this.nextY

        const Pn = this.nProcess({ x, y });
        const FRNS = this.finalCalculation({ N, Pn, xrn });

        this.s0 = FRNS;
        this.result.push(FRNS);
        this.nextY = (this.nextY === this.s2) ? this.s1 : this.s2;

        return FRNS;
    }

    all(){
        return this.result;
    }
}

// For Proof of Concept
// https://www.slideshare.net/DHPereira1/itamarac-uma-nova-maneira-simples-de-gerar-nmeros-pseudoaleatrios

const ita = new Itamaraca({ N: 10000, s0: 8777, s1: 11, s2: 8, xrn: 1.97 });