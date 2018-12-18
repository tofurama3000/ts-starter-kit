import { hello } from './hello';
import {} from 'jest';

describe('Hello Function', () => {
  it('should return hello world', () => {
    const result = hello();
    expect(result).toBe('Hello World!');
  });
});
