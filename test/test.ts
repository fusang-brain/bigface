import { it, describe } from "mocha";
import * as chai from 'chai';
import { pump } from "..";

describe('bigface function pump', () => {
  it('should return promise', () => {
    // console.log()
    // console.log(pump());
    chai.expect(pump()).instanceOf(Promise);
  });
});