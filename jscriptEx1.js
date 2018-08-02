//self documenting it stating its the main function
function main()
{
    console.log(largestNumber([12, 2112, 9000, 1999, 24]));
}

function largestNumber(myNumberList)
{
    var largestNumber = 0;


    for (arrayIndex = 0; arrayIndex < myNumberList.length; arrayIndex++)
    {
            if (myNumberList[arrayIndex] > largestNumber)
            {
                largestNumber = myNumberList[arrayIndex];
            }
    }
    return largestNumber;
}

main();