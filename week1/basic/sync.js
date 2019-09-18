function main() {
    const hypotenuse = getLengthOfHypotenuse(3, 4)
    console.log(hypotenuse)
}

function getLengthOfHypotenuse(a, b) {
    const squareA = square(a)
    console.log(" squareA", squareA);

    const squareB = square(b)
    console.log(" square b", b);

    const sumOfSquares = squareA + squareB
    console.log(" sum of square", sumOfSquares);

    return Math.sqrt(sumOfSquares)
}

function square(number) {
    return number * number
}

main()