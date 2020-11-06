/*
Descrizione:
Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
BONUS aggiungere un'immagine presa anch'essa da un data (url dell'immagine)
*/
const root = new Vue ({
  el: '#root',
  data: {
    message: 'Hello World!!!',
    image: 'https://picsum.photos/600',
    shape: 'square',
  },
  methods: {
    changeShape: function () {
      if (this.shape === 'square') {
        this.shape = 'rounded';
      } else {
        this.shape = 'square';
      };
    },
  },
});
