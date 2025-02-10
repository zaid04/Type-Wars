import './exercice01';  // Importation du fichier exercice01.ts

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
  
  
  console.log(orderedProganistsByMidiChlorianCountPerCellASC)