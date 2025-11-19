{
  function formatString(input: string, toUpper?: boolean): string {
    const strToUpper = toUpper === undefined ? true : toUpper;
    return strToUpper ? input.toUpperCase() : input.toLowerCase();
  }
}
//
{
  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items.filter((item) => item.rating >= 4);
  }
  const books = [
    { title: "Book A", rating: 4.44 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book d", rating: 3.999 },
    { title: "Book e", rating: 10 },
  ];
}
//
{
  function concatenateArrays<T>(...arrays: T[][]): T[] {
    const concatenate: T[] = [];
    for (const array of arrays) {
      concatenate.push(...array);
    }
    return concatenate;
  }
  concatenateArrays(["a", "b"], ["c"]);
  concatenateArrays([1, 2], [3, 4], [5]);
  concatenateArrays(["muhammad"], ["islam"]);
}
//
{
  class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
    getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }
  class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
    getModel(): string {
      return `Model: ${this.model}`;
    }
  }
  const myCar = new Car("Toyota", 2000, "Corolla");
}
//
{
  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else if (typeof value === "number") {
      return value * 2;
    } else {
      return 0;
    }
  }
}
//
{
  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }
    let mostExpensive = products[0];
    for (let i = 1; i < products.length; i++) {
      if (products[i].price > mostExpensive.price) {
        mostExpensive = products[i];
      }
    }
    return mostExpensive;
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];
  const markets = [
    { name: "laptop", price: 30000 },
    { name: "phone", price: 20000 },
    { name: "smartWatch", price: 4000 },
  ];
}
//
{
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    return day >= Day.Monday && day <= Day.Sunday ? "Weekday" : "Weekend";
  }
}
//
{
  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negative number not allowed"));
        } else {
          resolve(n * n);
        }
      }, 1000);
    });
  }
}
