//insertion sort
var A = [3, 1, 4, 5, 6, 2];

for (var i = 1; i < A.length; i++) { //index starts at second element because first one is already sorted
    var j = i; //temp index because we cannot lose main index
    while (A[j] < A[j-1]) { //check if element at index is smaller than index-1
        [A[j-1], A[j]] = [A[j], A[j-1]]; //do swap
        j -= 1; //lower temp index to see if we need another pairwise swap
    }    
}
console.log(A);