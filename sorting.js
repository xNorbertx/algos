////////////////////
// insertion sort //
////////////////////
const insertionSort = arr => {
    //index starts at second element because first one is already sorted
    for (var i = 1; i < A.length; i++) { 
        //temp index because we cannot lose main index
        var j = i; 
        //check if element at index is smaller than index-1
        while (A[j] < A[j-1]) { 
            //do swap
            [A[j-1], A[j]] = [A[j], A[j-1]]; 
            //lower temp index to see if we need another pairwise swap
            j -= 1; 
        }    
    }
}

var A = [3, 1, 4, 5, 6, 2];
console.log(A);

///////////////////////////////////////
// insertion sort with binary search //
///////////////////////////////////////
const insertionSortBinSearch = arr => {
    for (var i = 1; i < A.length; i++) { 
        var j = i;
        //same as above, but start from the middle, rather than do the whole thing recursively
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

////////////////
// merge sort //
////////////////
const mergeSort = (A) => {
    //return single element (and avoid infinite recursion)
    if (A.length <= 1) {
        return A;
    }
    
    //get mid index
    const midIdx = Math.floor(A.length / 2);

    //recursively execute mergesort to cut up arrays 
    const L = mergeSort(A.slice(0, midIdx));
    const R = mergeSort(A.slice(midIdx));

    //Sort by creating new array from L and R
    let ctr = 0;
    while (L.length > 0 || R.length > 0) {
        if (L[0] < R[0] || R.length === 0) {
            //remove first element of L and add to A at index = ctr
            A[ctr] = L.shift();
        } else {
            //remove first element or R and add to A at index = ctr
            A[ctr] = R.shift();
        } 
        ctr += 1;      
    }
    
    return A;
}

var A = [3, 1, 4, 5, 7, 9, 10, 8, 6, 2];
console.log(mergeSort(A));
