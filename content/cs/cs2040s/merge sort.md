---
tags:
  - cs2040s/chapter2
  - cs/algorithms
complete: false
next: /labyrinth/notes/cs/cs2040s/quick_sort
prev: /labyrinth/notes/cs/cs2040s/insertion_sort

---
### Summary

### Concept
```
method merge(array A, integer low, integer mid, integer high)  
  // subarray1 = a[low..mid], subarray2 = a[mid+1..high], both sorted  
  int N = high-low+1  
  create array B of size N // discuss: why do we need a temp array b?  
  int left = low, right = mid+1, bIdx = 0  
  while (left <= mid && right <= high) // the merging  
    if (A[left] <= A[right])  
      B[bIdx++] = A[left++]   
    else  
      B[bIdx++] = A[right++]  
  while (left <= mid)  
    B[bIdx++] = A[left++] // leftover, if any  
  while (right <= high)  
    B[bIdx++] = A[right++] // leftover, if any  
  for (int k = 0; k < N; ++k)  
    A[low+k] = B[k]; // copy back
```

### Application

### Extra
