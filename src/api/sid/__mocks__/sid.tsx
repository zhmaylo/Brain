

// mock for testing 'login.tsx'

function* generateSequence() {
    yield ;
    yield '1234567890';
}

let generator = generateSequence();

export const getSid = () => {
    let outdata = generator.next();
    return outdata.value;
}