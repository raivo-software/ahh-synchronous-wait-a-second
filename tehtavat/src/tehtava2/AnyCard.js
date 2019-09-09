/*
2. Toteuta React-komponentti (AnyCard), joka eroaa edellisen tehtävän React-komponentista siten, että content-propertyn sijaan käytät "children" -propertyä, joka tulostetaan <section> -tagien sisälle, esim:

<div>
  <h1>Otsikko</h1>
  <section>Children</section>
</div>

Jos komponentille siis annetaan esim. seuraavat propertyt:
- title: "Tekstiotsikko"
- children: "Tekstisisältö"

...niin tällöin sivulle pitäisi rendaantua seuraavanlainen html-elementti:
<div>
  <h1>Tekstiotsikko</h1>
  <section>Tekstisisältö</section>
</div>

Toisaalta children-propertylle voidaan antaa myös monimutkaisempaakin dataa, esim. jos komponentille annetaan seuraavat propertyt:
- title: "Listaotsikko"
- children: <ul>
  <li>Ensimmäinen rivi</li>
  <li>Toinen rivi</li>
  <li>Viimeinen rivi</li>
</ul>

...niin tällöin sivulle pitäisi rendaantua seuraavanlainen html-elementti:
<div>
  <h1>Otsikko</h1>
  <section>
    <ul>
      <li>Ensimmäinen rivi</li>
      <li>Toinen rivi</li>
      <li>Viimeinen rivi</li>
    </ul>
  </section>
</div>
*/

import React from 'react';

const textCard = (props) => {
  return (
    <div>
      
    </div>
  )
}

export default textCard;