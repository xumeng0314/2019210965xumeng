 var arr = [-4,-1,0,3,10];

 static let[] sortedSquares(int[] A) {
 
    for (let i=0;i<A.length;i++)    //求平方
        A[i] = A[i]*A[i];

    for (let i=0;i<A.length-1;i++)    //排序
        for (let j=0;j<A.length-i-1;j++)
            if (A[j]>A[j+1])
            {
                let temp = A[j];
                A[j] = A[j+1];
                A[j+1] = temp;
            }
            
            return A;
}