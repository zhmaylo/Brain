import { getDealerPercent, getDealerUAH } from "./prodCard";


test('getDealerPercent - get dealer margin percentage', () => {
    let outdata = getDealerPercent(100, 120);
    expect(outdata).toBe("20.00");
});

test('getDealerUAH - get dealer margin in UAH', () => {
    let outdata = getDealerUAH(100, 120);
    expect(outdata).toBe("20");
});


