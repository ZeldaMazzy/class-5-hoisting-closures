let demoVariable;

function assignVariable() {
    console.log("This is the value of demoVariable before assignment: ", demoVariable)
    demoVariable = 5;
    console.log("This is the value of demoVariable after assignment: ", demoVariable)
}

const whatIsMyScope = "Initiated Globally";

function differentiateBetweenScopes() {
    const whatIsMyScope = "Initiated Locally";
    console.log("This is the value of whatIsMyScope when called by differentiateBetweenScopes: ", whatIsMyScope);
}

differentiateBetweenScopes();

let isListening = false;

function startConversation(topic) {
    if(topic === "Lord of the Rings") {
        isListening = true;
    }
}

startConversation("The Sound of Music");

console.log("The conversation is about The Sound of Music. Is this person listening? ", isListening);

startConversation("Lord of the Rings");

console.log("The conversation is about LOTR. Is this person listening? ", isListening);