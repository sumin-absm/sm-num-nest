function avg(numbers){
    let s=0;
    for(let i=0;i<numbers.length;i++){
        s+=numbers[i];
    }
    return s /numbers.length;
}

function prime(num){
  if(num === 2)
     return true;
      
    for(let i = 2; i<num; i++){
      if(num % i === 0){
         return false;
       }
     }
    return true;
}

function factorial(num){
    let sum=1;
    for(let i=1;i<=num;i++){
        sum=sum*i;
    }
    return sum;
}

exports.avg=avg;
exports.prime=prime;
exports.factorial=factorial;