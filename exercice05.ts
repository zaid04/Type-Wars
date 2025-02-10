import {Character} from "./exercice04"
import {Characters} from "./exercice04"
function averageHeight(characters:Character[]){
    const totalheight=characters.reduce((sum,character)=>sum+character.height,0)
    return totalheight/characters.length
}
function Sortbymass(characters:Character[]){
    return characters.sort((a,b)=>a.mass-b.mass)
}
export function sortByMass2(characters: Character[], order: "asc" | "desc" = "asc"): Character[] {
    return [...characters].sort((a, b) => order === "asc" ? a.mass - b.mass : b.mass - a.mass);
}

console.log("Taille moyenne:", averageHeight(Characters));
console.log("Tri par masse ascendant:", Sortbymass(Characters));
console.log("Tri par masse descendant:", sortByMass2(Characters, "desc"));