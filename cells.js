let testCases = [
    {
      cell: 0,
      neighbors: [0, 1, 0]
    },
    {
      cell: 1,
      neighbors: [1, 1, 1]
    },
    {
      cell: 0,
      neighbors: [0, 0, 1]
    },
    {
      cell: 0,
      neighbors: [1, 0, 0]
    },
    {
      cell: 1,
      neighbors: [0, 1, 1]
    }
  ];

function testCells(testCase) {
    return testCases[testCase].cell 
}

export {
    testCells
}

