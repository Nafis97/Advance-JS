const first = 2;
const second = "2"; // condition true for == but not true for ===
if(first === second){  //typeof is not checked for == only checks for value while === checks both.
    console.log("condition is true") // == if not the same type converts to same type and makes comparision
}
else{
    console.log("condition is false")
}