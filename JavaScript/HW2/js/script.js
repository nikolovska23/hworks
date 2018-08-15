function maxOfThree(first, second, third){
    let max;
   
    if(first>second)
        max=first;
        else max=second;
    if(third>max)
        max=third;
        
return max;
}


console.log(maxOfThree(4,5,1));

