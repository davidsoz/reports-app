export function sumTransactions(rows) {
    let sum = rows.reduce((prev, current) => prev + Number(current.amount.slice(0, -4)), 0).toFixed(2);
    return new Intl.NumberFormat('en-US').format(sum);
}