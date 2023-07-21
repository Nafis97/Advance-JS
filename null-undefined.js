//let name; // not assigning any value
// function add(num1, num2){
//     console.log(num1 + num2);
//     return;
// } because not returning any value
function add(num1, num2){
    console.log(num1, num2);
}

const result = add(13); // 2nd parameter missing so undefined
const friend = {name: "Corey", phone: '0171713552'}
const salary = friend.salary; // didn't define salary
console.log(salary);

null // non-existent