function countBy(x, n) {
  let z = [];
  
  let elem = x;
  for ( let i = 0; i < n ; i++ ) {
      z.push(elem);
      elem += x;
  }
  
  return z;
}