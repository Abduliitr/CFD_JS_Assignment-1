// function to return the updated solution using Gauss-Siedel Method
function gaussSiedel(a, x, b){
    n = a.length;

    var x1 = new Array(n);
    for(var j=0;j<n;j++){
        d = b[j];

        for(var i=0;i<n;i++){
            if(j!=i){
                d-=a[j][i] * x[i] 
            }
        }
        
        // updating the value of our solution    
        x1[j] = d / a[j][j] 
    }

    // returning our updated solution     
    return x1;
}

// function to calculate the Norm val of two given position vectors
function normVal(x,x1){
    var normal = 0;
    for(var i=0;i<x.length;i++){
        normal += (x[i]-x1[i])*(x[i]-x1[i]);
    }

    normal = Math.sqrt(normal);

    return normal;
}

var n = 4                              
var a = []                             
var b = []         

// initial solution depending on n(here n=3)                      
var x = [0, 0, 0, 0]                         
a = [[5,-2, 3, 0],[-3,9,1,-2],[2,-1,-7,1],[4,3,-5,7]] 
b = [-1,2,3,0.5] 

// Taking the tolerance value as 1e-5
var tol = 0.00001;
var x1 = x;

// to count number of iterations
var itr = 0;

// Do-while loop for doing the iterations
do{

    x1 = gaussSiedel(a,x,b);

    norm = normVal(x1,x);
    x = x1;

    itr += 1;

}while(norm > tol);

console.log('Solution is: ', JSON.stringify(x) , " ,  In ", itr, ' iterations!')

// OUTPUT:
// Solution is:  [0.1786981555383653,0.2302923293770414,-0.477635190889295,-0.4705499566998724]  ,  In  12  iterations!