# ITAMARACÁ
*A NOVEL SIMPLE WAY TO GENERATE PSEUDO-RANDOM NUMBERS*

## What is this module about?  
Just a node implementation of Pseudo-Random Number Generator Itamaracá. The concept behind this PRNG was created by Daniel Henrique Pereira from Pontifical Catholic University of Minas Gerais. 

*Note: At this moment, we have exclusivelly implemented the Simplified version of Itamaracá. Future versions may contain SQUARE ROOT(1 < Xrn < 4) but with backward compatibility.*


## About Itamaracá eficiency and statistical tests:  
Paper with detailed explanations and statistical tests of distribution:
https://www.cambridge.org/engage/coe/article-details/61b410fadcbea24f839f0235

And: https://www.researchgate.net/publication/356859572_Itamaraca_A_Novel_Simple_Way_to_Generate_Pseudo-random_Numbers

Example of implementation for portuguese readers:
https://www.slideshare.net/DHPereira1/itamarac-uma-nova-maneira-simples-de-gerar-nmeros-pseudoaleatrios

Further reading about PRNG:
https://en.wikipedia.org/wiki/Pseudorandom_number_generator

## How to use it

### Installation
```
npm install itamaraca
```

### Basic Usage
```
var Itamaraca = require('itamaraca')

// Setup
const ita = new Itamaraca({
    N: 10000, // Max generated number
    s0: 8777, // Starting seed (any number > 0 and < N)
    s1: 11, // Alternating seed 1 (any number > 0 and < N)
    s2: 8, // Alternating seed 2 
    xrn: 1.97 // Any fractionary number very close to 2 (1.97, 1.971, 1.98, 1.981, etc...)
})

const n1 = ita.next()
// with this exact parameters will be 7275

const n2 = ita.next()
// 4310

const n3 = ita.next()
// 1525 etc...

console.log(ita.all())
//[7275, 4310, 1525, etc...]

```
