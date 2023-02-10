

//Print odd numbers in an array

/////////////////////////////////////
// Anonymous Function  : 
/////////////////////////////////////
var odd=function(oddNumber){
    var  result="";
    for(i=0;i<oddNumber.length-1;i++)
    {
        if(oddNumber[i]%2!==0)
        {
            result+=oddNumber[i]+" ";
        }
    }
    result+=oddNumber[oddNumber.length-1];
    return result;
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]))

/////////////////////////////////////
// IIFE Function:       
/////////////////////////////////////
(function(oddNumber){
    var  result="";
    for(i=0;i<oddNumber.length-1;i++)
    {
        if(oddNumber[i]%2!==0)
        {
            result+=oddNumber[i]+" "
        }
    }
    result+=oddNumber[oddNumber.length-1]
    console.log(result);
})([1,2,3,4,5,7,8,9,10]);

/////////////////////////////////////         
// Arrow Function    
/////////////////////////////////////
var odd = (oddNumber)=>{
    var  result="";
    for(i=0;i<oddNumber.length-1;i++)
    {
        if(oddNumber[i]%2!==0)
        {
            result+=oddNumber[i]+" ";
        }
    }
    result+=oddNumber[oddNumber.length-1];
    return result;
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]))

// /////////////////////////////////////

// // Convert all the strings to title caps in a string array

// /////////////////////////////////////
// // Anonymous Function  : 
////////////////////////////////////////
var str=function (string) {
    var titlecaps = string.toLowerCase().split(" ");
    for(var i = 0; i< titlecaps.length; i++){
       titlecaps[i] = titlecaps[i][0].toUpperCase() + titlecaps[i].slice(1);
    }
 titlecaps.join(" ");
 var result="";
 for(let i=0;i<titlecaps.length-1;i++)
 {
     result+=titlecaps[i]+" "
 }
 result+=titlecaps[titlecaps.length-1]
 return result;
 }
 console.log(str("hi i'am srimonicaa"));

// /////////////////////////////////////
// // IIFE Function:   
// /////////////////////////////////////
(function (string) {
    var titlecaps = string.toLowerCase().split(" ");
    for(var i = 0; i< titlecaps.length; i++){
        titlecaps[i] = titlecaps[i][0].toUpperCase() + titlecaps[i].slice(1);
    }
    titlecaps.join(" ");
 var result="";
 for(let i=0;i<titlecaps.length-1;i++)
 {
     result+=titlecaps[i]+" "
 }
 result+=titlecaps[titlecaps.length-1]
 console.log(result);
 }) ("hi i'am srimonicaa");

// /////////////////////////////////////         
// // Arrow Function 
// /////////////////////////////////////
var str= (string) => {
    var titlecaps = string.toLowerCase().split(" ");
    for(var i = 0; i< titlecaps.length; i++){
       titlecaps[i] = titlecaps[i][0].toUpperCase() + titlecaps[i].slice(1);
    }
 titlecaps.join(" ");
 var result="";
 for(let i=0;i<titlecaps.length-1;i++)
 {
     result+=titlecaps[i]+" "
 }
 result+=titlecaps[titlecaps.length-1]
 return result;
 }
 console.log(str("hi i'am srimonicaa"));

/////////////////////////////////////////

//Sum of all numbers in an array//

// /////////////////////////////////////
// // Anonymous Function  : 
////////////////////////////////////////
var sum =function(numbers){
    var  result=0;
    for(i=0;i<numbers.length;i++)
    {
            result+=numbers[i]
    }
    return result;
 
}
console.log(sum([1,2,3,4,5,6,7,8,9,10]))

//////////////////////////////////////
// // IIFE Function:   
/////////////////////////////////////
(function(numbers){
    var  result=0;
    for(i=0;i<numbers.length;i++)
    {
            result+=numbers[i]
    }
    console.log(result);
})([1,2,3,4,5,7,8,9,10]);

// /////////////////////////////////////         
// // Arrow Function 
// /////////////////////////////////////
var sum =(numbers) => {
    var  result=0;
    for(i=0;i<numbers.length;i++)
    {
            result+=numbers[i]
    }
    return result;
 
}
console.log(sum([1,2,3,4,5,6,7,8,9,10]))

////////////////////////////////////////

//Return all the prime numbers in an array

// /////////////////////////////////////
// // Anonymous Function  : 
////////////////////////////////////////
var sum =function(numbers){
    var  result="";
    for(i=0;i<numbers.length;i++)
    {
        var count=0;
        for(j=1;j<=numbers[i];j++)
        {
            if(numbers[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            result+=numbers[i]+" "
        }
    }
    return result;
 
}
console.log(sum([1,2,3,4,5,6,7,8,9,10]))

//////////////////////////////////////
// // IIFE Function:   
/////////////////////////////////////
(function(numbers){
    var  result="";
    for(i=0;i<numbers.length;i++)
    {
        var count=0;
        for(j=1;j<=numbers[i];j++)
        {
            if(numbers[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            result+=numbers[i]+" "
        }
    }
    console.log(result);
 
})([1,2,3,4,5,6,7,8,9,10]);

// /////////////////////////////////////         
// // Arrow Function 
// /////////////////////////////////////
var sum =(numbers)=>{
    var  result="";
    for(i=0;i<numbers.length;i++)
    {
        var count=0;
        for(j=1;j<=numbers[i];j++)
        {
            if(numbers[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            result+=numbers[i]+" "
        }
    }
    return result;
 
}
console.log(sum([1,2,3,4,5,6,7,8,9,10]))

////////////////////////////////////////

//Return all the palindromes in an array

// /////////////////////////////////////
// // Anonymous Function  : 
////////////////////////////////////////
var palindrome=function(palind){
    var result="";
    var ans="";
    for(i=0;i<palind.length;i++)
    {
        result+=palind[i];
        var count=0
        
        for(j=0;j<result.length;j++)
        {
            if(result[j]===result[((result.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===result.length)
        {
            ans+=result+" "
        }
        result="";
    }
    return ans;
 
}
console.log(palindrome(["mam", 343 , "don", 5678, "mom", 710017, "madam"]))

//////////////////////////////////////
// // IIFE Function:   
/////////////////////////////////////
(function(palind){
    var result="";
    var ans="";
    for(i=0;i<palind.length;i++)
    {
        result+=palind[i];
        var count=0
        
        for(j=0;j<result.length;j++)
        {
            if(result[j]===result[((result.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===result.length)
        {
            ans+=result+" "
        }
        result="";
    }
    console.log(ans);
 
}) (["mam", 343 , "don", 5678, "mom", 710017, "madam"]);

// /////////////////////////////////////         
// // Arrow Function 
// /////////////////////////////////////
var palindrome=(palind)=>{
    var result="";
    var ans="";
    for(i=0;i<palind.length;i++)
    {
        result+=palind[i];
        var count=0
        
        for(j=0;j<result.length;j++)
        {
            if(result[j]===result[((result.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===result.length)
        {
            ans+=result+" "
        }
        result="";
    }
    return ans;
 
}
console.log(palindrome(["mam", 343 , "don", 5678, "mom", 710017, "madam"]))

/////////////////////////////////////////

//Return median of two sorted arrays of the same size.

// /////////////////////////////////////
// // Anonymous Function  : 
////////////////////////////////////////
var arr=function(a,b){
    var c=[];
    var n=a.length;
    var p=b.length;
    var i=0;
    var j=0;
    var med=0;
    while(i<n && j<p)
    {
        if(a[i]<b[j])
        {
            c.push(a[i])
            i++
        }
        else
        {
            c.push(b[j])
            j++
        }
    }
    
     if(i<n)
     {
         for(let k=i;k<n;k++)
         {
             c.push(a[k])
         }
     }
     else if(j<p)
     {
         for(let m=j;m<p;m++)
         {
             c.push(b[m])
         }
     }
     if(c.length%2===0)
     {
         med=(c[(c.length/2)-1]+c[c.length/2])/2
     }
     else
     {
         med=c[Math.floor(c.length/2)]
     }
     return med;
    
}
console.log(arr([1,2,3,4,5],[6,7,8,9,10]));

//////////////////////////////////////
// // IIFE Function:   
/////////////////////////////////////
(function(a,b){
    var c=[];
    var n=a.length;
    var p=b.length;
    var i=0;
    var j=0;
    var med=0;
    while(i<n && j<p)
    {
        if(a[i]<b[j])
        {
            c.push(a[i])
            i++
        }
        else
        {
            c.push(b[j])
            j++
        }
    }
    
     if(i<n)
     {
         for(let k=i;k<n;k++)
         {
             c.push(a[k])
         }
     }
     else if(j<p)
     {
         for(let m=j;m<p;m++)
         {
             c.push(b[m])
         }
     }
     if(c.length%2===0)
     {
         med=(c[(c.length/2)-1]+c[c.length/2])/2
     }
     else
     {
         med=c[Math.floor(c.length/2)]
     }
     console.log(med);
    
}) ([1,2,3,4,5],[6,7,8,9,10]);

// /////////////////////////////////////         
// // Arrow Function 
// /////////////////////////////////////
var arr=(a,b)=>{
    var c=[];
    var n=a.length;
    var p=b.length;
    var i=0;
    var j=0;
    var med=0;
    while(i<n && j<p)
    {
        if(a[i]<b[j])
        {
            c.push(a[i])
            i++
        }
        else
        {
            c.push(b[j])
            j++
        }
    }
    
     if(i<n)
     {
         for(let k=i;k<n;k++)
         {
             c.push(a[k])
         }
     }
     else if(j<p)
     {
         for(let m=j;m<p;m++)
         {
             c.push(b[m])
         }
     }
     if(c.length%2===0)
     {
         med=(c[(c.length/2)-1]+c[c.length/2])/2
     }
     else
     {
         med=c[Math.floor(c.length/2)]
     }
     return med;
    
}
console.log(arr([1,2,3,4,5],[6,7,8,9,10]));

/////////////////////////////////////////

//Remove duplicates from an array

// /////////////////////////////////////
// // Anonymous Function  : 
////////////////////////////////////////
var arr=function(a){
    var b=[];
    var n=a.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(a[i]===a[j])
            {
                delete a[j]
            }
        }
    }
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%10===Math.floor(a[i]%10))
        {
            b.push(a[i])
        }
    }
    let c=""
    for(let i=0;i<b.length-1;i++)
     {
         c+=b[i]+" ";
    }
    c+=b[b.length-1];
     return c;
    
}
console.log(arr([1,2,3,3,3,4,3,5,3,5,2,6,7,6,8,9,7]));

//////////////////////////////////////
// // IIFE Function:   
/////////////////////////////////////
(function(a){
    var b=[];
    var n=a.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(a[i]===a[j])
            {
                delete a[j]
            }
        }
    }
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%10===Math.floor(a[i]%10))
        {
            b.push(a[i])
        }
    }
    let c=""
    for(let i=0;i<b.length-1;i++)
     {
         c+=b[i]+" ";
    }
    c+=b[b.length-1];
     console.log(c);
    
})([1,2,3,3,3,4,3,5,3,5,2,6,7,6,8,9,7]);

// /////////////////////////////////////         
// // Arrow Function 
// /////////////////////////////////////
var arr=(a)=>{
    var b=[];
    var n=a.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(a[i]===a[j])
            {
                delete a[j]
            }
        }
    }
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%10===Math.floor(a[i]%10))
        {
            b.push(a[i])
        }
    }
    let c=""
    for(let i=0;i<b.length-1;i++)
     {
         c+=b[i]+" ";
    }
    c+=b[b.length-1];
     return c;
    
}
console.log(arr([1,2,3,3,3,4,3,5,3,5,2,6,7,6,8,9,7]));

/////////////////////////////////////////

//Rotate an array by k times

// /////////////////////////////////////
// // Anonymous Function  : 
////////////////////////////////////////
var rotate=function(a,k){
    n=a.length;
 c=[];
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+k)%(n)]=a[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d+=c[c.length-1]
  return d;
}
console.log(rotate([1,2,3,4,5,6,7,8,9],1))

//////////////////////////////////////
// // IIFE Function:   
/////////////////////////////////////
(function(a,k){
    n=a.length;
 c=[];
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+k)%(n)]=a[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d+=c[c.length-1]
  console.log(d);
}) ([1,2,3,4,5,6,7,8,9],1);

// /////////////////////////////////////         
// // Arrow Function 
// /////////////////////////////////////
var rotate=(a,k)=>{
    n=a.length;
 c=[];
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+k)%(n)]=a[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d+=c[c.length-1]
  return d;
}
console.log(rotate([1,2,3,4,5,6,7,8,9],1))



/////////////////////////////////////////
