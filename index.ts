let a: number = 5;
let b: number = 3;
let arr: string[] = [];
let bol: boolean = false;
let bole: boolean[] = [false, true, false];
interface User {
    name: string,
        password: string,
        age: number
}

for (let i: number = 0; i < 5; i++) {

}
let obj: User = {
    name: "nakul",
    password: "$^%FHFG",
    age: 23
}
let operator: string = "+";

function add(a: number, b: number): number {
    return a + b;
}
if (operator == "+") {
    let result: number = add(a, b);
    console.log(result);
}