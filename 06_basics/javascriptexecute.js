// 1.JS creates Global excution context 
// 2.Next it creates memory phase
// 3.Memory phase - In this phase,the variables are set to undefined 
//   until the execution phase(next phase) and the functions are set to their definitions.
// 4.Next it creates the execution phase
// 5.Execution phase - In this phase,the variables are initialsed to given values and 
//   when the function s are called,it creates a memory phase and execution phase for the function 
//   just like the main one.

// For live demo:
// browser > inspect > Sources
// create a snippet with few functions and visually experience the call stack.

// correct me if there are any mistakes or add to this if something is missing.


// The working of the JavaScript works on three phases:
//     1. Global Execution Context
// 2. Memory phase / Creation phase
// 3. Execution phase

// 🔵 Phase 1: Global Execution Context
// The value of `this`
// keyword is set to Global Execution Context(which is an empty Object in NODE environment, & window object in browser environment)

// 🔵 Phase 2: Memory phase
// During this phase, JS engine scans the code and assigns the initial values
// for the variables, functions, etc..For variables they are 'undefined'
// and
// for functions they are set to their
// function definition

// 🔵 Phase 3: Execution phase
// After the creation phase completed, the execution phase begins where actual values of the variables are set.And when the functions are called it creates a new 'Function Execution'
// context which consists of two phases(they works same as explained above but only
//         for the particular
//         function scope):
//     1. Memory phase
// 2. Execution phase📝 The
// return value of the 'Function Execution'
// context is passed to the Global Execution Context