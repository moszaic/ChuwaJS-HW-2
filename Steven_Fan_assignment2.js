const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
const string =
  " Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ";
const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];
const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

/*-------------------------------------*/

let oneA = itemsObject.map(oneAFunc);
let oneB = itemsObject.filter(oneBFunc);
let oneC = oneCFunc(itemsObject);
let two = twoFunc(string);
let three = threeFunc(first, second);

/*-------------------------------------*/

function oneAFunc(a) {
  let b = {};
  b[Object.keys(a)[0]] = a.quantity * 2;
  b[Object.keys(a)[1]] = a.price * 2;
  return b;
}

function oneBFunc(a) {
  return a.quantity > 2 && a.price > 300;
}

function oneCFunc(a) {
  let sum = 0;
  for (let i = 0; i < itemsObject.length; i++) {
    sum += a[i].quantity * a[i].price;
  }
  return sum;
}

function twoFunc(a) {
  let b = a.replace(/[^a-z0-9]/gi, "");
  return b.toLowerCase();
}

function threeFunc(a, b) {
  //merge 2 lists
  let c = a.slice(0, a.length);
  for (i = 0; i < b.length; i++) {
    c.push(b[i]);
  }
  //bubble sort by uuid
  for (i = 0; i < c.length - 1; i++) {
    for (j = 0; j < c.length - i - 1; j++) {
      if (c[j].uuid > c[j + 1].uuid) {
        let holder = c[j];
        c[j] = c[j + 1];
        c[j + 1] = holder;
      }
      //merge if identical uuid
      if (c[j].uuid == c[j + 1].uuid) {
        c.splice(j, 2, { ...c[j], ...c[j + 1] });
      }
    }
  }
  //find obj with most/all properties
  var k = 0;
  for (i = 0; i < c.length; i++) {
    if (Object.keys(c[i]).length >= Object.keys(c[k]).length) {
      k = i;
    }
  }
  //fill in null for missing properties
  for (i = 0; i < c.length; i++) {
    for (l = 0; l < Object.keys(c[k]).length; l++) {
      if (!Object.keys(c[i]).includes(Object.keys(c[k])[l])) {
        c[i][Object.keys(c[k])[l]] = null;
      }
    }
  }
  return c;
}

console.log(itemsObject);
console.log(oneA);
console.log(oneB);
console.log(oneC);
console.log(two);
console.log(three);
