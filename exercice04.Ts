export type side="Rebels"|"Empire";
export type Character={
    firstname:string,
    lastname?:string,
    birthYear:string,
    isHuman:boolean,
    height:number,
    mass:number,
    side:side,
}

const darthVader: Character = {
    firstname: "Darth",
    lastname: "Vader",
    birthYear: "41.9BBY",
    isHuman: true,
    height: 202,
    mass: 136,
    side: "Empire",
};

const lukeSkywalker: Character = {
    firstname: "Luke",
    lastname: "Skywalker",
    birthYear: "19BBY",
    isHuman: true,
    height: 172,
    mass: 77,
    side: "Rebels",
};

const c3po: Character = {
    firstname: "C-3PO",
    birthYear: "112BBY",
    isHuman: false,
    height: 167,
    mass: 75,
    side: "Rebels",
};
export const Characters: Character[] =[darthVader, lukeSkywalker, c3po]