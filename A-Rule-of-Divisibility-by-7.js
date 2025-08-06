function seven(m) {
     let steps = 0;

  while (Math.abs(m) > 99) {
    const lastDigit = m % 10;
    const rest = Math.floor(m / 10);
    m = rest - 2 * lastDigit;
    steps++;
  }

  return [m, steps];
}
