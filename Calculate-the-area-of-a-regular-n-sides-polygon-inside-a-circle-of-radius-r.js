function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
    const area = 0.5 * numberOfSides * circleRadius ** 2 * Math.sin((2 * Math.PI) / numberOfSides);
  return +area.toFixed(3);
}
