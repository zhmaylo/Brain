


function* generateSequence() {
    yield '1234567890';
    yield undefined;
}

export const getSid = async () => {
    return generateSequence;
}