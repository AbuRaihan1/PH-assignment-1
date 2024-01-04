1.What are some benefits of using TypeScript over JavaScript in a project?
Ans:Typescript allows us to define specific the data type like type safety, scalability, improve code maintenance, better tooling.

2.What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they 3.3.work? Provide an example for each
Ans: The optional chaining operator (?.) is used to safely access properties of objects that may be null or undefined.
let user: { name: string | undefined } | undefined;
const userName = user?.name;

4.How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?.
Ans: Asynchronous operations in TypeScript can be handled using the async and await keywords. The async keyword marks a function as asynchronous, allowing it to return a Promise.
5.How can you use TypeScript's enums, and what are their advantages?.
Ans:TypeScript enums allow you to define named sets of constants, providing a more structured and readable way to represent fixed values

6.Explain the role of type guards in TypeScript and provide an example of a custom type guard.
Ans:TypeScript type guards play a crucial role in refining the type of a variable within conditional blocks
function add(x: number | string, y: number | string): number {
if (isNumberOrString(x) && isNumberOrString(y)) {
return Number(x) + Number(y);
}
return throw error message
}
7.Can you give an example of how to use "readonly" properties in TypeScript?
In typescript we use readonly for just read the property by use readonly we can change direct the property;
class Person {
readonly name: string;

constructor(name: string) {
this.name = name;
}
}
8.Explain what a union type is in TypeScript and provide an example of its usage.
Ans:Union type data execute first condition or execute second condition;
type NumberOrString = number | string;
