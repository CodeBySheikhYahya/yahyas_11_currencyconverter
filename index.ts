#! /usr/bin/env node
import inquirer from "inquirer";

// on starting we make a  object called currenCYConvert and their keys are "PKR","INR,"IRR","EUR",USD,"GBP AND HAVE SOME VALUES"

let currenCYConvertion = {

    "PKR": {
      "USD": 0.0036,
      "GBP":0.0029 ,
      "EUR":0.0033,
      "INR":0.30,
      "IRR":151.26,
      "PKR": 1
    },
    "GBP": {
      "USD": 1.26,
      "PKR": 348.79,
      "EUR":1.17,
      "IRR":52758.13,
      "INR":104.73,
      "GBP": 1
    },
    "USD": {
      "PKR": 277.90,
      "GBP": 0.80,
      "INR":83.44,
      "IRR":42035.00,
      "EUR":0.93,
      "USD": 1
    },

   "EUR": {"PKR": 277.90,
   "GBP": 0.86,
   "INR":89.92,
   "IRR":45147.48,
   "EUR":1,
   "USD": 1.07

    },

  "INR":  {
 "PKR": 3.33,
   "GBP": 0.0096,
   "INR":1,
   "IRR":503.77,
   "EUR":0.011,
   "USD": 0.012

    },

    "IRR":{
   "PKR": 0.0066,
   "GBP": 0.000019,
   "INR":0.0020,
   "IRR":1,
   "EUR":0.000022,
   "USD": 0.000024



    }


  }

  const answer: {
    from: "PKR"| "USD" | "GBP"| "INR" | "IRR"|"EUR",  /// YAHAN PER UNION LAGANAY KII WAJA HII YAHI HAY K SPECIFICALLY STRING K ANDAR BHII YAHI TYPE HOGIII WRNA SRTING K ANDAR THO BHT KUCH AASAKTA HAY
    to: "PKR"| "USD" | "GBP"| "INR" | "IRR"|"EUR",
    amount: number
  } = await inquirer.prompt([   /// THIS LINE WE USE FOR USER INPUT
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP","INR","EUR","IRR"],
        message: "Please select the currency you want to convert to:"    //  // YE FIRST CURRENCY HOGGII JO WO SELECT KAREGA
  
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP","INR","EUR","IRR"],
        message: "Select your convertion currency: "                           // YE JISMAY WO CONVERT KARNA CHAH RAHA HAY
    },
    {
        type: "number",
        name: "amount",
        message: " How much money do you want to convert?"     // yahan hamay amount select karnii hay k kithnii amounnt covert karnii hay
        // yahan per choices nahi hongii q k coNvert kis say kis may karna hay wo upper hay yahAN just amount select karna hay
    }
  ]);

  const {from, to, amount} = answer;

  if(from && to && amount) {
    let CURresult = currenCYConvertion[from][to] * amount;
    console.log(`You converted ${amount} ${from} to ${to}. The result is ${CURresult} ${to}`);

  } else {
    console.log("Invalid inputs")
  }
  /// NOTE
  //`These currency rates are based on April 2, 2024.





  // In TypeScript, the `&&` operator is a logical operator that evaluates two expressions. It returns `true` if both expressions are truthy, and `false` otherwise. If the first expression evaluates to a falsy value, the second expression is not evaluated due to short-circuiting behavior. This operator is commonly used in conditional statements to ensure that multiple conditions are met before executing a block of code. In the provided code, `&&` is used to check if the variables `from`, `to`, and `amount` all have truthy values before proceeding with the currency conversion calculation. If any of these variables are falsy, the code inside the `else` block is executed, indicating that the inputs are invalid.