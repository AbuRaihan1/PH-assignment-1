// this is not necessory for see this. this is extraa section


// function calculateLengthOrMultiply(value: string | number) {
//     if (typeof value === "string") {
//         return value.length;
//     } else if (typeof value === "number") {
//         return value * value;
//     } else {
//         throw new Error("invalid input ");
//     }
// }
// const result = calculateLengthOrMultiply(5);
// console.log(result);

// interface Person {
//     address?: {
//         city?: string;
//         street?: string;
//     };
//     phone?: string;
// }
// const person1: Person = {
//     address: {
//         city: "New York",
//         street: "Broadway",
//     },
//     phone: "123-456-7890",
// };
// const person2: Person = {
//     phone: "987-654-3210",
// };
// function getAddressCity(person: Person): string | undefined {
//     return person?.address?.city;
// }
// console.log(getAddressCity(person1));
// console.log(getAddressCity(person2));

// function mixedFunction(mixedData: (string | number)[]): number {
//     let total = 0;
//     for (const item of mixedData) {
//         if (typeof item === "number") {
//             total += item as number;
//         }
//     }
//     return total;
// }
// const mixedData: (string | number)[] = [1, "two", 3, "four", 5, 55];
// const result = mixedFunction(mixedData);
// console.log(result);

// interface Car {
//     make: string;
//     model: string;
//     year: number;
// }
// interface Driver {
//     name: string;
//     licenseNumber: string;
// }
// function combineCarAndDriver(car: Car, driver: Driver): CarWithDriver {
//     return {
//         car: car,
//         driver: driver,
//     };
// }
// type CarWithDriver = {
//     car: Car;
//     driver: Driver;
// };
// const myCar: Car = { make: "Toyota", model: "Camry", year: 2022 };
// const myDriver: Driver = { name: "John Doe", licenseNumber: "ABC123" };
// const combinedData = combineCarAndDriver(myCar, myDriver);
// console.log(combinedData);

// function calculateSumOrLogError(data: unknown): void {
//     if (
//         Array.isArray(data) &&
//         data.every((item: any) => typeof item === "number")
//     ) {
//         const sum = data.reduce(
//             (accumulator: number, currentValue: number) => accumulator + currentValue,
//             0
//         );
//         console.log("Sum of numbers:", sum);
//     } else {
//         console.error("Invalid data type: Expected an array of numbers");
//     }
// }
// calculateSumOrLogError([1, 2, 3, 4, 5]);
// calculateSumOrLogError(["one", 2, 3, "four"]);

// function findFirstOccurrence<T>(array: T[], value: T): number {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === value) {
//             return i;
//         }
//     }
//     return -1;
// }
// const numbers: number[] = [5, 2, 4, 1, 3];
// const index = findFirstOccurrence(numbers, 3);
// console.log("Index of 3 in numbers:", index);
// const strings: string[] = ["apple", "orange", "banana", "grape"];
// const stringIndex = findFirstOccurrence(strings, "banana");
// console.log('Index of "banana" in strings:', stringIndex);

// interface Product {
//     name: string;
//     price: number;
//     quantity: number;
// }

// function calculateTotalPrice(products: Product[]): number {
//     let totalPrice = 0;
//     for (const product of products) {
//         totalPrice += product.price * product.quantity;
//     }
//     return totalPrice;
// }
// const shoppingCart: Product[] = [
//     {
//         name: "Laptop",
//         price: 1000,
//         quantity: 1,
//     },
//     {
//         name: "Headphones",
//         price: 50,
//         quantity: 2,
//     },
//     {
//         name: "Keyboard",
//         price: 30,
//         quantity: 1,
//     },
// ];
// const totalCost = calculateTotalPrice(shoppingCart);
// console.log("Total cost of shopping cart:", totalCost);
