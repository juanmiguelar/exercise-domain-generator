let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoonet', 'bus'];
let extension = ['.com', '.net', '.us', '.io'];

pronoun.forEach(pronumElement => {
    adj.forEach(adjElement => {
        noun.forEach(nounElement => {
            extension.forEach(elementExtension => {
                const domain = pronumElement + adjElement + nounElement + elementExtension;
                hack(domain);
            });
        });
    });
});

function hack(domain) {

    // dividir el dominio por el punto
    const domainPart = domain.split(".");
    // Substring desde el final hasta el tamanno de su correspondiente extension
    const initialIndex = domainPart[0].length - domainPart[1].length;
    const finalIndex = domainPart[0].length;
    const sub = domainPart[0].substring(initialIndex, finalIndex);
    //console.log('Initial ' + initialIndex + ' - FinalIndex ' + finalIndex + ' - ' + sub);

    if (sub == domainPart[1]) {
        let newDomain = domainPart[0].substring(0, initialIndex) + "." + sub;
        //console.error(newDomain);
        console.log("HACK!!! -> " + newDomain);
    } else {
        console.log(domain);
    }
}