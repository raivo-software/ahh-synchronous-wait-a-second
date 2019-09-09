/*
4. Toteuta lämpömittari React-komponenttina (TemperatureMeter)
- Komponenttiin kuuluu lämpömittari-ikoni, joka on annettu valmiiksi toteutettuna
- Komponentti hakee fetch -funktiolla localhostista lämpötilan, ja antaa sen parametrina lämpötila-ikonille. Ikonin värin pitäisi muuttua lämpötilan mukaan.
    - Haetun JSON-objektin oletetaan sisältävän kenttä nimeltä "temperature", joka sisältää lämpötilan numero-muotoisena
- Komponentti tulostaa lämpötilan myös tekstikenttään
- HUOM: Jos testaat sovellusta verkkoselaimessasi, sinun pitää myös käynnistää tehtävänannon mukana annettu palvelin, joka palauttaa lämpötilan JSON-objektina

Voit määritellä komponentin tyylit makusi mukaan, mutta pääpiirtein komponentin pitäisi haettuaan lämpötilan rendata seuraavanlainen html-elementti:
<div>
  <p>
    <span><TemperatureIcon /></span> Lämpötila: 28.2
  </p>
</div>

Huomaa että myös TemperatureIcon rendaantuu todellisuudessa html:ksi, mutta tässä tehtävässä sinun ei tarvitse määritellä TemperatureIconia itse.
*/

import React, {Component} from 'react';
import TemperatureIcon from './TemperatureIcon';

class TemperatureMeter extends Component {

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default TemperatureMeter;