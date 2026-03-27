import { sum } from "./sum"


describe("", ()=> {
  test("add 2+2 to equal to 4 ", ()=>{
    expect(sum(2,2)).toBe(4);
  })
  test("add -5+-5 to equal to -10 ", ()=>{
    expect(sum(-5,-5)).toBe(-10);
  })

})

