/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  let answer = new Array(n).fill(0);
  bookings.forEach(booking => {
    let [begin, end, seats] = booking;
    for (let index = begin; index <= end; index++) {
      answer[index - 1] += seats;
    }
  })
  return answer;
};

let bookings = [[1, 2, 10], [2, 2, 15]], n = 2
console.log(corpFlightBookings(bookings, n));