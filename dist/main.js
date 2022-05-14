var statuses = {
  notStarted: 0,
  inProgress: 1,
  done: 2,
};
console.log(statuses.inProgress); // 1
var StatusEnum;
(function (StatusEnum) {
  // NotStarted; // when called it will print 0
  StatusEnum['NotStarted'] = 'notStarted';
  // values are with "=" sign
  // inProgress; // 1
  StatusEnum['inProgress'] = 'inProgress';
  // Done; // 2
  StatusEnum['Done'] = 'done';
})(StatusEnum || (StatusEnum = {}));
// Enum - a reserved word to create enumerable
// Names with capital letter is a default code style
// We can use enum as a value and a datatype
var notStartedStatus = StatusEnum.NotStarted;
notStartedStatus = StatusEnum.Done;
console.log(StatusEnum.inProgress); // inprogress
/*
/**************************
THE BELOW CONTENT ARE NOTES
/**************************

/**
 * Returns a new list containing the contents of the given list, followed by the given element
 
 *export function append<T>(el: T, list: readonly T[]): T[];
 *export function append<T>(el: T): <T>(list: readonly T[]) => T[];

 */
/**
 * Returns true if atleast one of elements of the list match the predicate, false otherwise.
 
 *export function any<T>(fn: (a: T) => boolean, list: readonly T[]): boolean;
 *export function any<T>(fn: (a: T) => boolean): (list: readonly T[]) => boolean;

 

// const updateArray = append<string>("baz",["foo", "baz"]);
// Append in Ramda returns a new array of different type

const searchStr = "foo";
const hasSearchedString = any<string>((el:string) => el.contains(searchStr), [
    "foooooo",
    "bar",
    "baz",
]);
const addId = <T extends object>(obj:T) => {
    const id = Math.random().toString(16);
    return {
        ...obj,
        id,
    };
};

interface UserInterface<T, V> {
    name: string;
    data: T;
    meta: V;
}
const user: UserInterface<{meta: string}, string> = { // meta is property and with one generic initialise we have to use only one argument with two vice versa
    name: "Jack",
    data: {
        meta: "foo",
    },
    meta: "bar",
};

const user2: UserInterface<string[], string> = {
    name: "John",
    data: ["foo", "bar", "baz"],
    meta: "bar",
};


/***************************

// const addId = (obj:) => { .. we get an error because obj doesn't have datatype
// const addId = <T>(obj:T) => { // All generic data types are written inside "<>"
const addId = <T extends object>(obj:T) => { // only objects can be generic
    const id = Math.random().toString(16);
    return {
        ...obj,
        id,
    };
};

interface UserInterface<T, V> { // pick any letter defining a generic
    name: string;
    data: T; // data property of type T
    meta: V;
}
// Generics allow us to provide different data types
const user: UserInterface<{meta: string}, string> = { // meta is property and with one generic initialise we have to use only one argument with two vice versa
    name: "Jack",
    data: { // this is the meta
        meta: "foo",
    },
    meta: "bar",
};

const user2: UserInterface<string[], string> = {
    name: "John",
    data: ["foo", "bar", "baz"],
    meta: "bar",
};

// const result = addId<string>("foo"); // this will gives an error because only objects are generic
// const result = addId<UserInterface>(user); // this is okay because userInterface defines an object
const result = addId(user);
console.log("result", result);

/***************************

Append adds an element to the end of a list


interface UserInterface {
    getFullname(): string;
}

class User implements UserInterface { // if we initialise that this class has to follow our interface the error is invoked that property 'getFullname' is missing in type 'User' but required in type 'UserInterface'
    firstName: string;
    private lastName: string;
    protected address: string;
    readonly unchangeableName: string;
    static readonly maxAge = 50;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    }

    changeUnchangeableName(): void {
        // this.unchangeableName = "foo"; // we get error because firsname is readonly
    }

    getFullname(): string {
        return this.firstName + " " + this.lastName;
    }
}

class Admin extends User {
    private editor: string

    setEditor(editor: string): void {
        this.editor = editor
    }

    getEditor(): string {
        return this.editor
    }
}

const user = new User("Monster", "lessons");
console.log(user.firstName); // we cannot get access to firstName when it is private
console.log(User.maxAge); // you can access static tingzzzzz directly from class not from object

const admin = new Admin('Foo', 'Bar')
console.log(admin.firstName)

/**************************

const someElement = document.querySelector(".foo");

someElement.addEventListener("blur", (event) => {
    const target = event.target as HTMLInputElement;
    console.log("event", target.value);
});

/**************************

const someElement = document.querySelector(".foo") as HTMLInputElement;

console.log("someElement", someElement.value);
//console.log("someElement", (someElement as any).value); // using any is not the right way to instead use htmlinputelement method

/**************************
 
let page: any = "1";
let pageNumber = page as string;

let vAny: any = 10;
let vUnknown: unknown = 10;

/***************************

let s1: string = vAny;
let s2: string = vUnknown as string;
// let s2: string = vUnknown; // we can't assign unknown directly in other type

let pageNumber: string = "1";
let numericPageNumber: number = (pageNumber as unknown) as number;
// console.log(vAny.foo());
// console.log(vUnknown.foo());

/******************************

const doSomething = (): never => { // we can't have some code that will end so js can't read our code
    throw "never"; // never is something that will never happen it never end
    // console.log("doSomething");
};

/***************************

const doSomething = (): void => {
    console.log("doSomething");
};

let foo: any = "foo";
console.log(foo.bar());
// let foo: void = undefined;
// foo = "foo";

/***************************

type ID = string;
type PopularTag = string;
type MaybePopularTag = string | null;
// type MaybePopularTag = PopularTag | null;

interface UserInterface {
    id: ID;
    name: string;
    surname: string;
}

const popularTags: PopularTag[] = ["dragon", "coffee"];

const dragonsTag: MaybePopularTag = "dragon";

let username: string = "alex";

let pageName: string | number = "1";

let errorMessage: string | null = null;

let user: UserInterface | null = null;

let someProp: string | number | null | undefined | string[] | object

/******************************

interface UserInterface {
    name: string;
    age?: number; // "?" means that age is not mandatory
    getMessage(): string;
}

// const user: { name: string; age: number} = { // this is how we initialise variables in tsc
const user: UserInterface = {
    name: 'Benito',
    age: 23,
    getMessage() {
        return "Hello" + name;
    },
};

// const user2: { name: string; age: number} = {
const user2: UserInterface = {
    name:"Jack",
    getMessage() {
        return "Hello" + name;
    },
};
console.log(user.getMessage());
// console.log(user.name)

/*************************

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
