import { TestPipe } from './test.pipe';

describe('TestPipe', () => {
  let pipe: TestPipe
  beforeEach(() => {
    pipe = new TestPipe();
  });

  it('Poor Rating', () => {
    expect(pipe.transform(2)).toEqual('Poor rating : 2');
  });

  it('Good Rating', () => {
    expect(pipe.transform(3)).toEqual('Good rating : 3');
  });

  it('Excellent Rating', () => {
    expect(pipe.transform(5)).toEqual('Excellent rating : 5');
  });
});
