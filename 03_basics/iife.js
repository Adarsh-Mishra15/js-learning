// Immediately Invoked Function Expression(IIFE): function that execute immediately

// to remove the global pollution in the scope we use IIFE
(function chai() { // named iife
    console.log(`DB Connected`);
})(); // semicolon must otherwise throw an error

//(function definition)() // immediate call

((name) => {
    console.log(`db connected two , ${name}`);
})("Adarsh") // (function definition)(argument)