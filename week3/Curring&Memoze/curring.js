multiply=(a)=> {
    console.log(a);  

    return (b) => {
        console.log(b);
        console.log(" abc ",a,b);
        
        return (c) => {
            console.log(c);
            console.log(" abc ",a,b,c);
            return a * b * c
        }
    }
}
console.log(multiply(1)(2)(3)) // 6

getInfo=()=>{
    
}