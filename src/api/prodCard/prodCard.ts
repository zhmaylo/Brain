

// getDealerPercent - get dealer margin percentage
// price_uah - dealer price in UAH 
// retail_price_uah - retail price in UAH 
export const getDealerPercent = (price_uah: number, retail_price_uah: number) => {
    return (((retail_price_uah / price_uah) - 1) * 100).toFixed(2);
}

// getDealerUAH - get dealer margin in UAH
// price_uah - dealer price in UAH 
// retail_price_uah - retail price in UAH 
export const getDealerUAH = (price_uah: number, retail_price_uah: number) => {
    return String(retail_price_uah - price_uah);
}

