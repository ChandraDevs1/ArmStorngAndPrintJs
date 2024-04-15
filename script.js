// function isPrime(c){
    
//     if(c < 2){
//         return false;
//     }
   
    
//      if(c == 2){
//         return true;
//      }

//      if(c % 2 == 0){
//         return false;
//     }

//      for(let x = 3 ; x <= Math.sqrt(c) ; x+= 2){
//         if( c % x == 0){
//             return false;
//         }
//      }
//      return true;
// }

// function IsNumberChecker(n){
//      if(!isPrime(n)){
//         console.log(`${n} is  Not A Prime Number `);
       
//      }
//      else{
//         console.log(`${n} is  A Prime Number `);
//      }

//      for(let x = 2 ; x <=n ; x++){
//         if(isPrime(x)){
//             console.log(x);
//         }
//      }
// }

// IsNumberChecker(7);
// IsNumberChecker(17);
// IsNumberChecker(19);
// IsNumberChecker(15);
// IsNumberChecker(11);


// function isArmStrongNum(n){
//     let OriginlNum = n;
//     let Num = String(n);
//     let power = Num.length;

//    let sum = 0;

//    while(n > 0){
//     s = n%10;
//     sum += s**power;
//     n = Math.floor(n/10);
//    }
//    if(sum == OriginlNum){
//     console.log(`${OriginlNum} is A ArmStrong Number`);
//    }
//    else{
//     console.log(`${OriginlNum} is  Not A ArmStrong Number`);
//    }
// }

// isArmStrongNum(153);
// isArmStrongNum(370);
// isArmStrongNum(199);
// isArmStrongNum(371);
// isArmStrongNum(174);




function isPrime(numy){

    if(numy < 2 ){
        return false;
    }

    if(numy == 2){
        return true;
    }

    if(numy % 2 == 0){
        return false;
    }

    for(let i = 3 ; i <= Math.sqrt(numy) ; i++){
        if(numy % i == 0){
            return false;
        }
    }
    return true;
}


function isNumberPrimePrinter(n){
    if(!isPrime(n)){
        console.log(`${n} is Not a Prime Number`);
    }
    else{
        console.log(`${n} is a Prime Number`);
    }

    for(let i = 2 ; i <= n ; i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}
 
isNumberPrimePrinter(17);     
isNumberPrimePrinter(29);     
isNumberPrimePrinter(39);     
isNumberPrimePrinter(45);     
isNumberPrimePrinter(5);     


function isArmStrongNum(n){
  let OriginlNum = n , num = String(n) , power = num.length , sum = 0;

   while( n > 0){
    let digit = n%10;
    sum+= Math.pow( digit, power);
    n = Math.floor(n/10);
   }

   if(sum == OriginlNum){
    console.log(`${OriginlNum} is A ArmStrong Number`);
   }else{
    console.log(`${OriginlNum} is Not A ArmStrong Number`);
   }
}

isArmStrongNum(153);
isArmStrongNum(2851);
isArmStrongNum(516);
isArmStrongNum(151);
isArmStrongNum(170);
    
    
  
