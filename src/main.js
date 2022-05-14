// const user: { name: string; age: number} = { // this is how we initialise variables in tsc
var user = {
    name: 'Benito',
    age: 23,
    getMessage: function () {
        return "Hello" + name;
    }
};
// const user2: { name: string; age: number} = {
var user2 = {
    name: "Jack",
    getMessage: function () {
        return "Hello" + name;
    }
};
console.log(user.name);
/*

const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
};

console.log(getFullName("Moster","Lessons"));

let hello = "world";
hello = "dhd"
console.log("aaa", a);
// tsc main.ts -w
// run in verbose

*/
