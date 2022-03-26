let a=document.querySelectorAll('address');
let b=document.querySelectorAll('email');
let n=document.querySelectorAll('names');
let p=document.querySelectorAll('phone');
    
function callme()
{
   if((names.value.length) <= 1)
   {
      alert("invalid name");
   }  
    if((address.value.length) === 0)
     {
        alert("enter the address");
     }
   
     if(email.value.length === 0)
     {
        alert("enter mail");
    }
    if(phone.value!=10)
    {
        alert("invalid number");
    }
    
    
    }