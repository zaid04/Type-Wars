for(let i = 1;i<7;i++){
    console.log("R2-D"+i)
}
function makeRobots(){
let a:String[]=[];
for(let i = 1;i<7;i++){
    a.push("R2-D"+i);

}

return a;
}

const a: String[]=makeRobots()
console.log(a)
a.forEach((element)=>console.log(element.split("D")));
function iseven(a:number){
if(a%2==0){
    return true;
}
else{
    return false;
}
}

const eventrobots=a.filter((robot)=>{
    return iseven(Number(robot.split("D")[1]));
});

console.log(eventrobots);
// reversed robots list

const reversedRobot:String[]=a.map((robot)=>robot.toLowerCase()).reverse();
    
console.log(reversedRobot);
