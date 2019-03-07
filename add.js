function add(x, y) {
    let result;
    if ((typeof x && typeof y) !== 'number'){
        throw new Error('Params must be a number.');
    }
result =  x + y;
    if (parseInt(result) !== result) {
    result = parseFloat(result.toFixed(1));
    }

    return result;
}

//Writing expectations in code

//Expect add(0.1, 0.2) to equal 0.3
expect(add(0.1, 0.2)).toBe(0.3);

expect(add(0.1, 0.2)).not.toBe(0.1);

it("should consider this spec", function() {
    expect(true).toBe(true);
    expect(false).not.toBe(false);
});