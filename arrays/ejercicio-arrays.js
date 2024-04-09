let stackOfBooks=Array();
let removedBook;
let newBook;
let leaveApp=false;
let option=0;


while (leaveApp==false){
    option=parseInt(prompt(`Welcome to bookStack manager
If you want to add a book press 0
If you want to remove the last book added press 1
If you want to see the stack press 2
If you want to leave press 9
Have a nice day
`))
    switch(option){
        case 0:
            newBook=prompt('Add the new book name');
            stackOfBooks.push(newBook);
            alert(`The book ${newBook} has been added`);
            break;
        case 1:
            removedBook=stackOfBooks.pop();
            alert(`The removed book ${removedBook} has been removed`);
            break;
        case 2:
            if(stackOfBooks.length==0){
                alert('The stack is empty')
            }else{
                alert(stackOfBooks);
            }
            break;
        case 9:
            leaveApp=true;
            break;
        default:
            alert('Please select a valid option between 0,1,2 and 9')
    }    
}






