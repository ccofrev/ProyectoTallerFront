class TrendingItem {
  constructor(name, tweetCount) {
    this.name = name;
    this.images = [];
    this.urls = [];
    this.summary = '';
    this.tweetCount = tweetCount;
  }

  // Getter y Setter para 'name'
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  // Getter y Setter para 'images'
  get images() {
    return this._images;
  }

  set images(value) {
    this._images = value;
  }

  // Getter y Setter para 'urls'
  get urls() {
    return this._urls;
  }

  set urls(value) {
    this._urls = value;
  }

  // Getter y Setter para 'summary'
  get summary() {
    return this._summary;
  }

  set summary(value) {
    this._summary = value;
  }

  // Getter y Setter para 'tweetCount'
  get tweetCount() {
    return this._tweetCount;
  }

  set tweetCount(value) {
    this._tweetCount = value;
  }
}

export default TrendingItem


// Creación de un objeto TrendingItem
// const item = new TrendingItem();

// Uso de los getter y setter
// item.name = 'Bukele';
// item.images = ['imagen1.jpg', 'imagen2.jpg'];
// item.urls = ['https://ejemplo.com/noticia1', 'https://ejemplo.com/noticia2'];
// item.summary = 'Resumen del tema trending';
// item.tweetCount = 58400;

// console.log(item.name); // Salida: Bukele
// console.log(item.images); // Salida: ['imagen1.jpg', 'imagen2.jpg']
// console.log(item.urls); // Salida: ['https://ejemplo.com/noticia1', 'https://ejemplo.com/noticia2']
// console.log(item.summary); // Salida: Resumen del tema trending
// console.log(item.tweetCount); // Salida: 58400
