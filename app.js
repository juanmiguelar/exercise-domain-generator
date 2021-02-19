let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.net', '.us', '.io'];

pronoun.forEach(pronumElement => {
    adj.forEach(adjElement => {
        noun.forEach(nounElement => {
            extension.forEach(elementExtension => {
               console.log(pronumElement + adjElement + nounElement + elementExtension); 
            });
        });
    });
});