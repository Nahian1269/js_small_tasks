/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */


let num = 200 ; 

for(let i=0; i<=num ; i++){
    if(i%2!=0){
        
        if(i>=61 && i<=100)
        {
            console.log('odd:'+i);
        }
    }
    if(i%2===0){
        
        if(i>=78 && i<=98)
        {
            console.log('Even:'+i);
        }
    }
}