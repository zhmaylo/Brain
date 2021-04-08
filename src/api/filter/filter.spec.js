import { inputLeftButton, inputMiddleButton, inputRightButton } from "./filter";

describe('inputLeftButton', () => {
    test('"inputLeftButton - return number rounded down', () => {
        outdata = inputLeftButton(24, 10, 1);
        expect(outdata).toBe(20);
    });

    test('"inputLeftButton - return minimum range value ', () => {
        outdata = inputLeftButton(5, 10, 15);
        expect(outdata).toBe(15);
    });
});

describe('inputMiddleButton', () => {
    test('"inputMiddleButton - return minimum range value ', () => {
        outdata = inputMiddleButton(15, 5, true, 50);
        expect(outdata).toBe(5);
    });

    test('"inputMiddleButton - return maximum range value ', () => {
        outdata = inputMiddleButton(15, 5, 50, false);
        expect(outdata).toBe(50);
    });
});

describe('inputRightButton', () => {
    test('"inputRightButton - return number rounded up', () => {
        outdata = inputRightButton(5, 10, 50);
        expect(outdata).toBe(10);
    });

    test('"inputRightButton - return maximum range value ', () => {
        outdata = inputRightButton(50, 10, 50);
        expect(outdata).toBe(50);
    });
});


