import { testCells } from './cells';

describe('cells', function() {
    it('should be dead', function() {
      expect(testCells(0)).toBe(0);
    });
    it('should be alive', function() {
      expect(testCells(1)).toBe(1);
    });
    it('should be dead', function() {
      expect(testCells(2)).toBe(0);
    });
    it('should be dead', function() {
      expect(testCells(3)).toBe(0);
    });
    it('should be alive', function() {
      expect(testCells(4)).toBe(1);
    });
  });