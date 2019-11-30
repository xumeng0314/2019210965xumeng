let myPow = (x, n) => {
    for (let i = 1 ;i <= n;i++)
    {
        let item = 1;
        let result = item * x;
        return result
    }
}
let result1 = myPow(2, 10)
console.log(result1)
console.log(myPow(2, -2))
