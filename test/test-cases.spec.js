import { Calcuator } from "../src/index.js";
import { operations } from "../src/index.js";
import { caesarCipher } from "../src";
import { analyzeArray } from "../src";

const { add, divide, multiply } = Calcuator;
const { capitalize, reverseString } = operations;

describe("reverseString", () => {
  test("Reversed String", () => {
    expect(reverseString("name")).toBe("eman");
  });
  //expect(reverseString("name").toBe("eman"));
});

describe("Capitalize", () => {
  test("FirstCapital Letter", () => {
    expect(capitalize("Name")[0]).toBe("N");
  });

  test("First character Integer", () => {
    expect(capitalize("1ne")).toBeNull();
  });

  test("First character punctuation", () => {
    expect(capitalize("?one")).toBeNull();
  });

  test("First character space", () => {
    expect(capitalize(" ne")).toBeNull();
  });
});

describe("Calcuator", () => {
  test("Add", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("add 3 values", () => {
    expect(add(1, 2, 3)).toBenull;
  });
  test("Divide", () => {
    expect(divide(4, 2)).toBe(2);
  });

  test("Multiply", () => {
    expect(multiply(4, 5)).toBe(20);
  });
});

describe("Caesar Cipher", () => {
  test("Cipher", () => {
    expect(caesarCipher("name", 1)).toBe("obnf");
  });

  test("Wtih Numbers", () => {
    expect(caesarCipher("name1", 1)).toBeNull();
  });

  test("With Punctuations ", () => {
    expect(caesarCipher("name?", 1)).toBeNull();
  });
});

describe("Analyze Array", () => {
  test("Normal", () => {
    expect(analyzeArray([1, 2, 3, 4])).toEqual({
      average: 2.5,
      min: 1,
      max: 4,
      length: 4,
    });
  });

  test("Contains String", () => {
    expect(analyzeArray([1, 2, 3, 4, 5, "a"])).toBeNull();
  });

  test("Contains Punctuation", () => {
    expect(analyzeArray([1, 2, 3, 4, 5, "?"])).toBeNull();
  });

  test("Not Array ", () => {
    expect(analyzeArray(2)).toBeNull();
  });
    
    
});
