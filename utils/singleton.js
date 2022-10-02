// 참고자료: https://docs.google.com/presentation/d/1cD6-3e1cJSE8WNoEYTFllCtfmnAIYRjw9eGTI5z-tLY/edit#slide=id.g1479088a913_0_6

class Singleton {
  static #_instance;
  #name;
  #map;
  constructor() {
    if (Singleton.#_instance) return Singleton.#_instance;
    this.#name = 'SINGLETON';
    this.load();
    Singleton.#_instance = this;
  }

  static getInstance() {
    return this.#_instance || new this();
  }

  load() {
    // query(res => (this.#map = res));
  }

  reload() {
    this.#map = null;
    this.load();
  }

  print() {
    console.log(this.#name);
  }
}

const s1 = Singleton.getInstance();
const s2 = new Singleton();
console.log('s1 === s2', s1 === s2);
const s3 = Singleton.getInstance();
console.log('s3 === s2', s3 === s2);
s3.print();
