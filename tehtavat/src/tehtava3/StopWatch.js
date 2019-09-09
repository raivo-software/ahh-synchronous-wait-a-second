/*
3. Toteuta sekunttikello React-komponenttina (StopWatch)
- Komponenttiin kuuluu tekstikenttä, missä näytetään kulunut aika minuutteina ja sekunteina, tyylinä (hh:mm:ss)
- Komponenttiin kuuluu myös Start-nappi, joka toimii seuraavasti:
  - Jos sekuntikello on nollatussa tilassa, painallus aloittaa ajanotton
  - Jos sekuntikello on pysäytettynä, painallus jatkaa ajanoton siitä ajasta mihin kello on jäänyt
  - Jos sekuntikello on jo käynnissä, nappi ei tee mitään
- Komponenttiin kuuluu myös Stop-nappi, joka toimii seuraavasti:
  - Ensimmäisen kerran painettaessa käynnissä oleva ajanotto pysähtyy
  - Toisen kerran painettaessa sekuntikello nollaantuu
  - Jos sekuntikello on jo nollatussa tilassa, nappi ei tee mitään

Voit määritellä komponentin tyylit makusi mukaan, mutta pääpiirtein komponentin pitäisi nollatussa tilassa rendata seuraavanlainen html-elementti:
<div>
  <h1>0:0:0</h1>
  <button>Start</button>
  <button>Stop</button>
</div>

Vastaavasti jos sekuntikello on ollut käynnissä esim. 5909 sekuntia, sivulle pitäisi rendaantua seuraavanlainen html-elementti:
<div>
  <h1>1:39:29</h1>
  <button>Start</button>
  <button>Stop</button>
</div>
*/

import React, { Component } from 'react';

class StopWatch extends Component {

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default StopWatch;