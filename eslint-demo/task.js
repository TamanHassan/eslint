import fs from "fs/promises";

//Task 1
const greet = (firstName) => {
  return `Hello, ${firstName}!`;
}
greet("Student");

//Task 2
const double = (n) =>  {
  return n * 2;
};
console.log(`Double is ${double(5)}`);

//Task 3
const isEven = (num) => {
  return num % 2 === 0;
};
console.log(`Is 4 even? ${isEven(4)}`);

//Task 4
const square = (x) => {
  return x * x;
};
console.log(`Square is ${square(5)}`);

//Task 5
const getAge = (year) => {
  return 2026 - year;
}
console.log(`Age is ${getAge(2000)}`);

//Task 6
const prices = [10, 20, 30];
let total = 0;

prices.forEach((p) => {
  total += p;
});
console.log(`Total price is ${total}`);

//Task 7
const user = {name: "John" };
const sayHi = () => {
  console.log(`Hi, ${user.name}!`);
}
sayHi();

//Task 8
const color = ["red", "blue"];
color.forEach((c) => {
  console.log(`Color: ${c}`);
});

//Task 9
const items = [1, 2, 3];
const doubled = items.map((i) => {
  return i * 2;
  });

console.log(`Doubled items: ${doubled}`);

//Task 10
const checkAuth = (user) => {
  return user.isAdmin;
};

//Task 11
const read = async (path) => {
  try {
    const data = await fs.readFile(path, "utf-8");
    console.log(`File content: ${data}`);
  } catch (error) {
    console.error(`Failed to read file: ${error.message}`);
  }
};

//Task 12
const getData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(`Fetch error: ${error.message}`);
  }
};

//Task 13
const processData = (data) => {
  return data
   .filter ((x) => {
    return x > 10;
   })
    .map((x) => {
      return x * 2;
    });
}

// Task 14
const timer = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const runTimer = async () => {
  console.log(`Timer started`);
  await timer(1000);
  console.log(`Timer finished`);
};
runTimer();

  //Task 15
  const logErr = (m) => {
    console.error (`Error: ${m}`);
  };

