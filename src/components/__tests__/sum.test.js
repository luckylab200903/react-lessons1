import { sum } from "../sum"

test("this is usd to calculate the sum of two numbers",()=>{
    const ans=sum(5,6)
    expect(ans).toBe(11)
})