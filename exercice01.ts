import type { forEachChild } from "typescript";

console.log("May the force be with you!")

type Protagonist = {
    name:string,
    midicountpercell:number;
}
type ProtagonistType = "Living Being" | "Potentially Force Sensitive" | "Force Sensitive" | "Master";

export function getProtagonistTypeFromMidiChlorianCountPerCell(midiChlorianCount: number): ProtagonistType {
  if (midiChlorianCount<5000) {
    return "Living Being";
  }
  if (midiChlorianCount>=5000 && midiChlorianCount<10000) {
    return "Potentially Force Sensitive";
  }
  if (midiChlorianCount>=10000 && midiChlorianCount<20000) {
    return "Force Sensitive";
  }
  else {
  return "Master";
  }
}
console.log(getProtagonistTypeFromMidiChlorianCountPerCell(7000))

const protagonists: Protagonist[] = [
    { name: "Qui-Gon Jinn", midicountpercell: 10000 },
    { name: "Han Solo", midicountpercell: 1500 },
    { name: "Yoda", midicountpercell: 17700 },
    { name: "Lando Calrissian", midicountpercell: 3300 },
    { name: "Dark Maul", midicountpercell: 12000 },
    { name: "Padme Amidala", midicountpercell: 4700 },
    { name: "Leia Organa", midicountpercell: 14500 },
    { name: "Dark Sidious", midicountpercell: 20500 },
    { name: "General Grievous", midicountpercell: 11900 },
    { name: "Chewbacca", midicountpercell: 7200 },
    { name: "Anakin Skywalker", midicountpercell: 27700 },
    { name: "Obi-Wan Kenobi", midicountpercell: 13400 },
    { name: "Boba Fett", midicountpercell: 1500 },
    { name: "Luke Skywalker", midicountpercell: 15000 },
  ];

  const orderedProganistsByMidiChlorianCountPerCellASC=protagonists.sort((n, m) => n.midicountpercell - m.midicountpercell);
  
  
  console.log(orderedProganistsByMidiChlorianCountPerCellASC);
  const masters=protagonists.filter((a)=>getProtagonistTypeFromMidiChlorianCountPerCell(a.midicountpercell)=="Master");
  console.log("list of masters");
  console.log(masters);
console.log("________________________________________________________________")
const  forces =protagonists.filter((a)=>getProtagonistTypeFromMidiChlorianCountPerCell(a.midicountpercell)=="Force Sensitive")
  console.log("list of forces");
  console.log(forces);
console.log(forces.filter((a)=>a.midicountpercell))

const midiforce: number[] = forces.reduce((a: number[], b) => {
  a.push(b.midicountpercell);
  return a;
}, []);

console.log(midiforce)
const summ=midiforce.reduce((acc, a) => acc+a,0)

const forceSensitiveAverageMidiChlorianCountPerCell =summ/(midiforce.length)

console.log("Force Sensitive average midiChlorian count per cell:", forceSensitiveAverageMidiChlorianCountPerCell);

    