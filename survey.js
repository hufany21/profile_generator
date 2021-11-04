const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is your names? Nickanmes are also acceptable ', (answer) => {
  rl.question('What\'s  an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing it? ', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! \n \n ', (answer7) => {
              console.log(  `Hey everyone, you can call me ${answer}. On most day's you can catch me on my couch eating ${answer5} for ${answer4}  and listening to ${answer3}. I love ${answer2} and playing or watching 
              ${answer6}. I'm very into having fun and ${answer7}`)
              rl.close() 
            })   
          })  
        })
      })
    })
  })
});


