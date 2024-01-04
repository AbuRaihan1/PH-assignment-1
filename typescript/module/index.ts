function calculateLengthOrMultiply(value: string | number) {
  if (typeof value === "string") {
    return value.length;
  } else if (typeof value === "number") {
    return value * value;
  } else {
    throw new Error("invalid input ");
  }
}

interface Person {
  address?: {
    city?: string;
    street?: string;
  };
  phone?: string;
}

const person1: Person = {
  address: {
    city: "New York",
    street: "Broadway",
  },
  phone: "123-456-7890",
};


const person2: Person = {
  phone: "987-654-3210",
};

function getAddressCity(person: Person): string | undefined {
  return person?.address?.city;
}

function mixedFunction(mixedData: (string | number)[]): number {
  let total = 0;
  for (const item of mixedData) {
    if (typeof item === "number") {
      total += item as number;
    }
  }
  return total;
}

interface Car {
  make: string;
  model: string;
  year: number;
}

interface Driver {
  name: string;
  licenseNumber: string;
}
function combineCarAndDriver(car: Car, driver: Driver): CarWithDriver {
  return {
    car: car,
    driver: driver,
  };
}
type CarWithDriver = {
  car: Car;
  driver: Driver;
};

function calculateSumOrLogError(data: unknown): void {
  if (
    Array.isArray(data) &&
    data.every((item: any) => typeof item === "number")
  ) {
    const sum = data.reduce(
      (accumulator: number, currentValue: number) => accumulator + currentValue,
      0
    );
    console.log("Sum of numbers:", sum);
  } else {
    console.error("Invalid data type: Expected an array of numbers");
  }
}

function findFirstOccurrence<T>(array: T[], value: T): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

interface Product {
  name: string;
  price: number;
  quantity: number;
}

function calculateTotalPrice(products: Product[]): number {
  let totalPrice = 0;
  for (const product of products) {
    totalPrice += product.price * product.quantity;
  }
  return totalPrice;
}
