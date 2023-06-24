import { RoundPipe } from './round.pipe';
describe('RoundPipe', () => {
  let pipe: RoundPipe;
  beforeEach(() => {
    pipe = new RoundPipe();
  });
  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should round down correctly', () => {
    expect(pipe.transform(2.3)).toBe(2);
    expect(pipe.transform(2.5)).toBe(3);
  });
  it('should round up correctly', () => {
    expect(pipe.transform(2.7)).toBe(3);
    expect(pipe.transform(-2.5)).toBe(-2);
  });
  it('should handle negative numbers correctly', () => {
    expect(pipe.transform(-2.3)).toBe(-2);
    expect(pipe.transform(-2.7)).toBe(-3);
  });
  it('should return NaN for non-number inputs', () => {
    expect(pipe.transform(NaN)).toBeNaN();
    expect(pipe.transform(null as any)).toBeNaN();
    expect(pipe.transform(undefined as any)).toBeNaN();
  });
});
