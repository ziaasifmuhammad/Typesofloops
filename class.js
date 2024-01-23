//----------/
//For Find Even Number
for( let i = 0; i < 10; i++){
    if(i % 2 ==0)
    console.log(i)
}
//-----For Find odd number/

for( let z = 0; z < 10; z++){
    if(z % 2 !=0)
    console.log(z)
}
// if you want to run infinite time, remove i++/ incremental

//for( let i = 0; i < 10;){
     //if(i % 2 !=0)
    //console.log(i)
//}
//it may crash your website/

let z = 4;
do{
    console.log(z); z++
}
while(z<10);
object
let places = {
    Name : "karachi",
    distances : 124
};
for(let key in places){
    console.log(key, places[key]);
}


//Arrays

let cars = ["honda", "toyta" , "civic" , "suzuki", "swift"];
for(let index  in cars){
    console.log(index,cars[index]);
}