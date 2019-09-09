const express = require('express')
const app = express()
const port = 3001

const data = {
  fi: {
    greeting: 'Heippa maailma!',
    information: 'Non nulla ea deserunt adipisicing.Non minim aliquip excepteur dolor consectetur ipsum.',
    dailyPhilisophy: 'Tänään on hyvä päivä koodata'
  },
  en: {
    greeting: 'Hello world!',
    information: 'Voluptate exercitation sint pariatur esse fugiat excepteur sit enim. Quis sit magna sint non culpa. Do et irure eu id mollit qui do enim. Ut aute adipisicing ut est. Pariatur ullamco exercitation adipisicing elit excepteur. Deserunt in laboris reprehenderit do ullamco culpa anim commodo. Velit exercitation occaecat est enim sit dolore adipisicing ullamco.',
    dailyPhilisophy: 'This is a good day to code'
  }
}

app.get('/translations/', (req, res) => res.send(data))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))