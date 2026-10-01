

function absMe(...args) {
  if (args.length === 0) return 0;
  if (args.length === 1) return Math.abs(args[0]);
  return args.map(function (num) { return Math.abs(num); });
}

function ceilMe(...args) {
  if (args.length === 0) return 0;
  if (args.length === 1) return Math.ceil(args[0]);
  return args.map(function (num) { return Math.ceil(num); });
}

function floorMe(...args) {
  if (args.length === 0) return 0;
  if (args.length === 1) return Math.floor(args[0]);
  return args.map(function (num) { return Math.floor(num); });
}

console.log(absMe(-4.7));         
console.log(absMe(-4.7, -2.3));    

console.log(ceilMe(4.2));          
console.log(ceilMe(4.2, 2.1));     

console.log(floorMe(4.7));         
console.log(floorMe(4.7, 2.9));   