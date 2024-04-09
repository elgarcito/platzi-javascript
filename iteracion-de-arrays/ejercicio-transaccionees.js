const transactions=[
    {id:1,description:'salad win',amount:5000},
    {id:2,description:'salad lose',amount:-2000},
    {id:3,description:'salad win twice',amount:1000},
    {id:4,description:'meat',amount:526},
    {id:5,description:'chicken',amount:336},
    {id:6,description:'salad loses a lot',amount:-1984}
];

//Calculate balance
function calculateBalance(){
    let balance= transactions.reduce((accumulator,currentValue)=>{
        return accumulator+=currentValue.amount;
    },0);
    console.log('The total balance is:',balance);
    return balance;
};



//Find largest transaction
function findLargestTransaction(){
    let biggestOperation= transactions.reduce((maxTransaction,actualTransaction)=>{
        return Math.abs(actualTransaction.amount)>=Math.abs(maxTransaction.amount) ? actualTransaction:maxTransaction;
    },{id:0,amount:0});
    console.log('The biggest operation is :',biggestOperation);
    return biggestOperation;
}

//Filter purchase only
function filterPurchases(){
    let purchaseList= transactions.filter(transaction=>transaction.amount<0);
    console.log('The list of purchases is:',purchaseList);
};
//Find index by amount
function findIndexByAmount(operation){
    let foundedOperationIndex= transactions.findIndex(operationAmount=>operationAmount.amount===operation);
    if(foundedOperationIndex>=0){
        console.log('The index of this operation is: ', foundedOperationIndex);
    }else{
        console.log('Operation not found');
    }
}

//6.Update transactions descriptions:
function updateTransactions(){
    transactions.forEach((transaction)=>{
        if (transaction.amount>0){
            let previousMessage=transaction.description;
            transaction.description='Income: '+previousMessage;
        }else{
            let previousMessage=transaction.description;
            transaction.description='Expense: '+previousMessage;
        }
    });
    console.log('The updated list is:',transactions);
};


calculateBalance();
findLargestTransaction();
filterPurchases();
findIndexByAmount(500000);
updateTransactions();
