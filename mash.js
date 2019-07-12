

function gethome(){
    let favorite = process.argv[2];
    if(favorite == undefined){
        return 'kennel';
    }
    let Homes = ['Mansion', 'Apartment', 'Shack', 'House', favorite,'Street'];
    return Homes[Math.floor(Math.random()*Homes.length)];   
}
function getChildrenCount(){    
    let randomnumber = process.argv[3];
if(randomnumber == undefined){
    return 'infinite';
};
if(Math.random() > 0.5){
    return Math.floor(Math.random() * 100);
}else{
    return randomnumber;
}    
    
};
getChildrenCount();
function getcar(){
    let car = process.argv[4];
if(car == undefined){
    return 'air';
}
    let cars = ['a Lambo', 'a convertible', ' a box with wheels', 'nothing', car,'a toy car'];
    return cars[Math.floor(Math.random()*cars.length)];   
}
function mash(){
    return 'You will live in a ' + gethome() +', have '+ getChildrenCount() + ' kids and drive ' + getcar()+ '!';
}
console.log(mash());