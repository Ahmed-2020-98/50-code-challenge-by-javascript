// Calculate 10!  factorial
fact(3);

function fact(n){
    var fact=1;

    for(var i=1;i<=n;i++) {
    fact=fact*i;
    
    }
    console.log(fact);
}