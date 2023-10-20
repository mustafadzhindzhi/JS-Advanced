function currencyFormatter(separator, symbol, symbolFirst, value) {
    const intValue = Math.trunc(value);
    const decimalPart = (value % 1).toFixed(2).substr(-2, 2);

    const result = symbolFirst
        ? `${symbol} ${intValue}${separator}${decimalPart}`
        : `${intValue}${separator}${decimalPart} ${symbol}`;

    return result;
}

const formattedCurrency = currencyFormatter(',', '$', true, 5345);
console.log(formattedCurrency);