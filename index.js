// Code your solutions in this file
function writeCards(names, eventName) {
    const thankYouMessages = []; 
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message); 
    }
  
    return thankYouMessages;
  }
  
  const names = ["Alice", "Bob", "Charlie"];
  const eventName = "birthday";
  const messages = writeCards(names, eventName);
  console.log(messages);
  function countDown(number) {
    if (number >= 0) {
      for (let i = number; i >= 0; i--) {
        console.log(i);
      }
    } else {
      console.log("Please provide a non-negative number.");
    }
  }
  
  countDown(5); 
