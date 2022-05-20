export const getCardData = (arr) => {
  const totalItems = arr.length;

  // Getting unique values from field/coulmn
  const uniqueItems = new Set(arr);

  let fieldPercentages = [];

  // Calculating percentage of unique value from all the data
  const itemsMap = {};
  arr.forEach((item) => {
    if (itemsMap[item]) {
      ++itemsMap[item];
    } else {
      itemsMap[item] = 1;
    }
  });

  Object.keys(itemsMap).forEach((key) => {
    fieldPercentages.push({
      title: key,
      percentage: ((itemsMap[key] * 100) / totalItems).toFixed(2),
    });
  });

  // Sorting data based on percentage value
  fieldPercentages = fieldPercentages.sort(
    (a, b) => b.percentage - a.percentage
  );

  const otherCount = arr.filter(
    (val) =>
      val !== fieldPercentages[0].title && val !== fieldPercentages[1].title
  );

  const fieldData = {
    detailCardData: {
      fieldPercentages: fieldPercentages.slice(0, 2),
      otherCount: otherCount.length,
      otherPercentage: ((otherCount.length * 100) / totalItems).toFixed(2),
    },
    progressCardData: {
      uniqueCount: uniqueItems.length,
      commonItem: fieldPercentages[0],
      totalItems: totalItems,
    },
  };

  return fieldData;
};

export const findProgressInfo = (colVal) => {
  const fieldType = typeof colVal[0];
  let mismatched = 0;
  let missing = 0;
  let valid = 0;

  // checking for mismatched & missing values
  colVal.forEach((item) => {
    if (!item || !item.trim()) {
      missing += 1;
    } else if (typeof item !== fieldType) {
      mismatched += 1;
    } else {
      valid += 1;
    }
  });

  return {
    valid: {
      total: valid,
      percentage: ((valid * 100) / colVal.length).toFixed(2),
    },
    mismatched: {
      total: mismatched,
      percentage: ((mismatched * 100) / colVal.length).toFixed(2),
    },
    missing: {
      total: missing,
      percentage: ((missing * 100) / colVal.length).toFixed(2),
    },
  };
};
