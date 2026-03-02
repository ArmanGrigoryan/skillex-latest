
export const wait = async (sec: number) => {
    const prom = new Promise(res => setTimeout(res, sec));

    return prom;
}

export const priceFormatter = (price: number) => {
    const formatter = new Intl.NumberFormat('en-GB', { style: "currency", currency: "EUR" });
    
    return formatter.format(price);
}