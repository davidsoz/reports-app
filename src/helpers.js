export function sumTransactions(rows, formatted = true) {
    let sum = rows.reduce((prev, current) => prev + Number(current.amount.slice(0, -4)), 0).toFixed(2);
    if(formatted) {
        return new Intl.NumberFormat('en-US').format(sum);
    }

    return Number(sum);
}