const cofeePrice = 1.25;

function totalBill(orderList) {
    let total = 0;
    orderList.forEach(element => {
        total += element * cofeePrice;
    });

    return `total bill is ${total}`

}

console.log(totalBill([2, 3, 1, 5]))

// ********* Using reduce ******

function getBill(orderList) {
    let total = orderList.reduce(
        (totalCofeeSum, numCofeeElem) => (totalCofeeSum +=(numCofeeElem *1.25))
    );
    return `total bill is ${total}`

}
console.log(getBill([2, 3, 1, 5]))