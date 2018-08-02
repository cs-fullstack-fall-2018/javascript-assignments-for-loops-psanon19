
function main() {


var enterNumber = alert(prompt("What is your final number?: "));

for(numberCount=0;numberCount<enterNumber;numberCount++)
{
    if (numberCount%3===0 && numberCount%5===0)
    {
        console.log((numberCount) + "\n");
        console.log("FIZZBUZZ", numberCount)
    }
    else if (numberCount%3===0)
    {
        console.log((numberCount) + "\n");
        console.log("FIZZ", numberCount)
    }
    else if (numberCount%5==0)
    {
        console.log((numberCount) + "\n")
        console.log("BUZZ", numberCount)
    }
    else
    {
        console.log(numberCount)
    }
}
}

main();