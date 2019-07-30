//insertion sort
const insertionSort = arr => {
    for (var i = 1; i < A.length; i++) { //index starts at second element because first one is already sorted
        var j = i; //temp index because we cannot lose main index
        while (A[j] < A[j-1]) { //check if element at index is smaller than index-1
            [A[j-1], A[j]] = [A[j], A[j-1]]; //do swap
            j -= 1; //lower temp index to see if we need another pairwise swap
        }    
    }
}

var A = [3, 1, 4, 5, 6, 2];
console.log(A);

//insertion sort with binary search
const insertionSortBinSearch = arr => {
    for (var i = 1; i < A.length; i++) { 
        var j = i;
        var binIdx = Math.floor(j/2);
        if (A[j] < A[binIdx]) {
            while (A[j] < A[binIdx]) { 
                binIdx -= 1;
            }
        } else {
            while (A[j] > A[binIdx]) { 
                binIdx += 1;
            }
        }
        A.splice(binIdx+1, 0, A[j]);
        A.splice(j+1, 1);
    }
    return arr;
}

var A = [3, 1, 4, 5, 7, 9, 10, 8, 6, 2];
console.log(insertionSortBinSearch(A));

//merge sort
// var A = [3, 1, 4, 5, 6, 2];

// var L = [], R = [];
// for (var i = 0; i < (A.length / 2); i++) {
//     L.append(A[i]);
// }