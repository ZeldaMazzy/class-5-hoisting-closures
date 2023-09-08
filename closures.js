function mainClosure() {
    function innerFunction() {
        console.log("2 + 2 = 4")
    }

    return innerFunction;
}

const callingClosure = mainClosure();

callingClosure()



// const order = factory("Playstations");
order(5); //factory.production(5)

function factory(thingToProduce) {
    function production(numUnitsToProduce) {
        console.log(`This factory is producing ${numUnitsToProduce} ${thingToProduce}`)
    }

    return production;
}



const createBankAccount = (initialBalance) => {
    let userBalance = initialBalance;

    return {
        getBalance: function() {
            return userBalance;
        },
        deposit: function (amount) {
            userBalance += amount;
            return userBalance;
        },
        withdraw: function (amount) {
            userBalance -= amount;
            return userBalance;
        }
    }
}

let myAccount = createBankAccount(100);

console.log("Created a new account with a starting balance of 100.")
console.log(myAccount.getBalance())

myAccount.deposit(50);
console.log("Account after depositing: ", myAccount.getBalance())

myAccount.withdraw(175);
console.log("Account after withdrawing: ", myAccount.getBalance())