import { heroes } from "../data/heroes";
//recibe un publisher, ya sea DC COMICS O MARVEL COMICS
export const getHeroesByPublisher = (publisher) => {
    const validPublisher = ['DC Comics', 'Marvel Comics'];
    //Si el validPublisher no contiene el publisher que recibe en este caso DC Comics y Marvel Comics lanza un error
    if(!validPublisher.includes(publisher)) {
        throw new Error(`${publisher} is not a valid publisher`)
    }
     //en el caso de que si exista retorna todos los heroes que tenga el mismo publisher enviado
    return heroes.filter(hero => hero.publisher === publisher)
}