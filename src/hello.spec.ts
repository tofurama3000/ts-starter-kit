import { hello } from './hello';

describe('Hello Function', () => {
  it('should return hello world', () => {
    const result = hello();
    expect(result).toBe('Hello World!');
  });
});
