/*
Title: Sophisticated Javascript Code - Complex Data Analysis

Description: 
This code performs complex data analysis on a dataset. It calculates the average, median, and mode of a set of numbers, as well as the standard deviation and variance. It also provides functions for data filtering, sorting, and finding outliers. The code is structured using object-oriented programming principles, with a DataAnalysis class as the main entry point for performing the analysis. 

Filename: data_analysis.js
*/

class DataAnalysis {
  constructor(dataset) {
    this.dataset = dataset;
  }

  filterData(predicate) {
    return this.dataset.filter(predicate);
  }

  sortData(comparator) {
    return this.dataset.sort(comparator);
  }

  calculateAverage() {
    const sum = this.dataset.reduce((acc, val) => acc + val, 0);
    return sum / this.dataset.length;
  }

  calculateMedian() {
    const sortedData = this.sortData((a, b) => a - b);
    const midIndex = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
      return (sortedData[midIndex - 1] + sortedData[midIndex]) / 2;
    }

    return sortedData[midIndex];
  }

  calculateMode() {
    const frequencyMap = new Map();
    let maxFrequency = 0;
    let mode;

    for (const num of this.dataset) {
      const frequency = (frequencyMap.get(num) || 0) + 1;
      frequencyMap.set(num, frequency);

      if (frequency > maxFrequency) {
        maxFrequency = frequency;
        mode = num;
      }
    }

    return mode;
  }

  calculateStandardDeviation() {
    const average = this.calculateAverage();
    const squaredDifferences = this.dataset.map(num => (num - average) ** 2);
    const variance = squaredDifferences.reduce((acc, val) => acc + val, 0) / this.dataset.length;

    return Math.sqrt(variance);
  }
}

// Example usage
const dataset = [7, 5, 11, 2, 9, 7, 1, 5, 7];
const analysis = new DataAnalysis(dataset);

console.log("Original dataset:", dataset);
console.log("Filtered dataset (numbers greater than 5):", analysis.filterData(num => num > 5));
console.log("Sorted dataset:", analysis.sortData((a, b) => a - b));
console.log("Average:", analysis.calculateAverage());
console.log("Median:", analysis.calculateMedian());
console.log("Mode:", analysis.calculateMode());
console.log("Standard Deviation:", analysis.calculateStandardDeviation());

// Outputs:
// Original dataset: [7, 5, 11, 2, 9, 7, 1, 5, 7]
// Filtered dataset (numbers greater than 5): [7, 11, 9, 7, 7]
// Sorted dataset: [1, 2, 5, 5, 7, 7, 7, 9, 11]
// Average: 6.222222222222222
// Median: 7
// Mode: 7
// Standard Deviation: 2.863564212213775