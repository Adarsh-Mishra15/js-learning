console.log(Math.PI)

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor); // 3

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvaialbele: true,

    orderChai: function() {
        console.log("Code fat gya");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false // name will not be iterable or enumerbale
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (let [key, value] of Object.entries(chai)) {

    if (typeof value != 'function') {
        console.log(`key:${key}, value: ${value}`);
    }
}