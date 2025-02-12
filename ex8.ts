export class Starship{
name:string="";
cost:number=0;
isflying:boolean=false;
constructor(name:string, cost:number){
    this.name=name;
    this.cost=cost;
}
public toString(){
    console.log(`Starship Name: ${this.name}, Cost: ${this.cost}, Flying: ${this.isflying}`);

}
fly(){
    if(this.isflying==true){
        throw new StarshipError(StarshipErrorMessages.ALREADY_FLYING);
    }
    this.isflying=true;
}
land(){
    if(this.isflying==false){
        throw new StarshipError(StarshipErrorMessages.ALREADY_LANDED);
    }
    this.isflying=false;
}
}

let starship1=new Starship("X-wing", 100000);

starship1.toString()
starship1.fly()

starship1.toString()

starship1.land()

starship1.toString()

enum StarshipErrorMessages {
    ALREADY_FLYING = "The starship is already flying.",
    ALREADY_LANDED = "The starship is already landed."
}
export class StarshipError extends Error {
    constructor(message: StarshipErrorMessages) {
        super(message); 
        this.name = "StarshipError"; 
    }
}
starship1.toString()   

try{
    let s=new Starship("zaid",100000);
    s.fly()
    s.fly()
}

catch(StarshipError){
    console.log(StarshipError.message);
}