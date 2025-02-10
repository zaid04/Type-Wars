import { ExitStatus } from "typescript";

const prompt = "Select your side (1 - Rebels / 2 - Empire) : ";
console.log(prompt);
for await (const line of console) {
  console.log(`You typed: ${line}`);
  const choix=Number(line);
  console.log(choix);
  if(choix==1){
    console.log("You've selected the Rebels");
  }
  else if(choix==2){
    console.log("You've selected the Empire");
  }else{
    console.log("Invalid choice. Please choose 1 or 2");
  }
  break;
  
}