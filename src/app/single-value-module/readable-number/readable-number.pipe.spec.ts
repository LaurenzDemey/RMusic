import { ReadableNumberPipe } from './readable-number.pipe';

describe('ReadableNumberPipe', () => {
  let pipe: ReadableNumberPipe;

  beforeEach(() => {
    pipe = new ReadableNumberPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('undefined returns 0', () => {
    // Arrange
    const input = undefined;
    const expectedOutput = '0';

    // Act
    const result = pipe.transform(input);

    // Assert
    expect(result).toBe(expectedOutput);
  });

  it('0 returns 0', () => {
    // Arrange
    const input = 0;
    const expectedOutput = '0';

    // Act
    const result = pipe.transform(input);

    // Assert
    expect(result).toBe(expectedOutput);
  });

  it('1 returns 1', () => {
    // Arrange
    const input = 1;
    const expectedOutput = '1';

    // Act
    const result = pipe.transform(input);

    // Assert
    expect(result).toBe(expectedOutput);
  });
  it('999 returns 999', () => {
    // Arrange
    const input = 999;
    const expectedOutput = '999';

    // Act
    const result = pipe.transform(input);

    // Assert
    expect(result).toBe(expectedOutput);
  });
  it('1000 returns 1K', () => {
    // Arrange
    const input = 1000;
    const expectedOutput = '1K';

    // Act
    const result = pipe.transform(input);

    // Assert
    expect(result).toBe(expectedOutput);
  });
  it('1100 returns 1K', () => {
    // Arrange
    const input = 1100;
    const expectedOutput = '1.1K';

    // Act
    const result = pipe.transform(input);

    // Assert
    expect(result).toBe(expectedOutput);
  });
  it('999900 returns 999K', () => {
    // Arrange
    const input = 999900;
    const expectedOutput = '999.9K';

    // Act
    const result = pipe.transform(input);

    // Assert
    expect(result).toBe(expectedOutput);
  });
  it('1000000 returns 1M', () => {
    // Arrange
    const input = 1000000;
    const expectedOutput = '1M';

    // Act
    const result = pipe.transform(input);

    // Assert
    expect(result).toBe(expectedOutput);
  });
});
