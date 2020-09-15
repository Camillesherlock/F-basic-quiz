import { TestScheduler } from "jest";
import { getInformation, getEducation } from "../request";

jest.mock("../request")
describe("getInformation",()=>{
test("should fetch data when called getInformation", async()=>{
  getInformation.mockImplementation(()=>{});
  getInformation(1);
  expect(getInformation).toHaveBeenCalled();
});

test("should fetch education data when called getEducation",async()=>{
  getEducation.mockImplementation(()=>{});
  getEducation(1);
  expect(getInformation).toHaveBeenCalled();
})
})