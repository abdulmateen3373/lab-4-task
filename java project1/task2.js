

let givenPrime = 11;  

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function nextPrime(num) {
  let candidate = num + 1;
  while (!isPrime(candidate)) {
    candidate++;
  }
  return candidate;
}

console.log("The prime after " + givenPrime + " is " + nextPrime(givenPrime) + ".");
