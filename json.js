const questions = [
    {
      question:
        "Which data structure is used to store a collection of values of the same type?",
      answers: [
        { text: "Stack", correct: "false" },
        { text: "Object", correct: "false" },
        { text: "Array", correct: "true" },
        { text: "Variable", correct: "false" },
      ],
    },
  
    {
      question: "What is a variable in programming?",
      answers: [
        { text: "A type of loop", correct: false },
        { text: "A storage location for data", correct: true },
        { text: "A function name", correct: false },
        { text: "An error type", correct: false },
      ],
    },
    {
      question: "Which of the following is a loop structure?",
      answers: [
        { text: "if-else", correct: false },
        { text: "for", correct: true },
        { text: "switch", correct: false },
        { text: "case", correct: false },
      ],
    },
    {
      question: "Which keyword is used to create a function in JavaScript?",
      answers: [
        { text: "function", correct: true },
        { text: "def", correct: false },
        { text: "func", correct: false },
        { text: "method", correct: false },
      ],
    },
    {
      question: "What does the 'if' statement do?",
      answers: [
        { text: "Repeats a block of code", correct: false },
        { text: "Executes code based on a condition", correct: true },
        { text: "Declares a variable", correct: false },
        { text: "Ends a program", correct: false },
      ],
    },
    {
      question: "What does 'else' provide in an if-else statement?",
      answers: [
        { text: "An alternative if the 'if' condition is false", correct: true },
        { text: "A function call", correct: false },
        { text: "A loop structure", correct: false },
        { text: "A new variable", correct: false },
      ],
    },
    {
      question: "What is an array?",
      answers: [
        { text: "A single value", correct: false },
        { text: "A collection of key-value pairs", correct: false },
        { text: "A collection of values of the same type", correct: true },
        { text: "A loop structure", correct: false },
      ],
    },
    {
      question: "How do you access the third element in an array named 'arr'?",
      answers: [
        { text: "arr[2]", correct: true },
        { text: "arr(3)", correct: false },
        { text: "arr[3]", correct: false },
        { text: "arr{2}", correct: false },
      ],
    },
    {
      question: "What is the purpose of a return statement in a function?",
      answers: [
        { text: "To exit the function", correct: false },
        { text: "To define a variable", correct: false },
        { text: "To return a value from the function", correct: true },
        { text: "To declare a function", correct: false },
      ],
    },
    {
      question: "What does a 'while' loop do?",
      answers: [
        { text: "Executes a block of code once", correct: false },
        {
          text: "Repeats a block of code while a condition is true",
          correct: true,
        },
        { text: "Calls a function", correct: false },
        { text: "Declares a variable", correct: false },
      ],
    },
    {
      question: "What is a function parameter?",
      answers: [
        { text: "A loop condition", correct: false },
        { text: "A variable declared inside a function", correct: false },
        { text: "An input to a function", correct: true },
        { text: "A type of data structure", correct: false },
      ],
    },
    {
      question: "What does the 'continue' statement do in a loop?",
      answers: [
        { text: "Stops the loop", correct: false },
        {
          text: "Skips the current iteration and continues with the next",
          correct: true,
        },
        { text: "Exits the loop", correct: false },
        { text: "Repeats the current iteration", correct: false },
      ],
    },
    {
      question:
        "Which of the following is not a primitive data type in JavaScript?",
      answers: [
        { text: "String", correct: false },
        { text: "Number", correct: false },
        { text: "Boolean", correct: false },
        { text: "Object", correct: true },
      ],
    },
    {
      question: "How can you declare a variable in JavaScript?",
      answers: [
        { text: "variable x", correct: false },
        { text: "var x", correct: true },
        { text: "x = var", correct: false },
        { text: "declare x", correct: false },
      ],
    },
    {
      question: "What is recursion in programming?",
      answers: [
        { text: "A function that calls itself", correct: true },
        { text: "A function with a loop", correct: false },
        { text: "A function that returns a value", correct: false },
        { text: "A function with multiple parameters", correct: false },
      ],
    },
    {
      question: "What does 'JSON' stand for?",
      answers: [
        { text: "JavaScript Online Notation", correct: false },
        { text: "JavaScript Object Notation", correct: true },
        { text: "JavaScript Object Namespace", correct: false },
        { text: "JavaScript Object Network", correct: false },
      ],
    },
    {
      question: "What is a closure in JavaScript?",
      answers: [
        { text: "A function defined inside another function", correct: false },
        {
          text: "A function that has access to its own scope, the outer function's scope, and the global scope",
          correct: true,
        },
        { text: "A method to close a program", correct: false },
        { text: "A type of loop", correct: false },
      ],
    },
    {
      question: "Which of the following best describes recursion?",
      answers: [
        {
          text: "A function that calls itself directly or indirectly",
          correct: true,
        },
        { text: "A function with a loop that runs indefinitely", correct: false },
        { text: "A function that only runs once", correct: false },
        { text: "A function that returns a promise", correct: false },
      ],
    },
    {
      question: "What is the purpose of a 'callback' function in JavaScript?",
      answers: [
        { text: "To create loops", correct: false },
        {
          text: "To execute code after another function has completed execution",
          correct: true,
        },
        { text: "To define a new object", correct: false },
        { text: "To start a new thread", correct: false },
      ],
    },
    {
      question: "Which of the following best describes a higher-order function?",
      answers: [
        {
          text: "A function that returns another function or takes a function as an argument",
          correct: true,
        },
        {
          text: "A function that performs arithmetic operations",
          correct: false,
        },
        { text: "A function that has a complex data type", correct: false },
        { text: "A function that is called recursively", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'async' keyword in JavaScript?",
      answers: [
        { text: "To declare a variable", correct: false },
        {
          text: "To define a function that operates asynchronously, returning a promise",
          correct: true,
        },
        { text: "To define a loop that runs in parallel", correct: false },
        { text: "To declare a function that never stops", correct: false },
      ],
    },
  ];
  