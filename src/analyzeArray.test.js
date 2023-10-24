const analyzeArray = require('./analyzeArray.js');

it("should handle an array with duplicate values", () => {
    const inputArray = [1,8,3,4,2,6];
    const result = new analyzeArray(inputArray);

    const expectedObject = {
        average: 4,
        min: 1,
        max: 8,
        length: 6
    };

    expect(result).toEqual(expectedObject);
  });
