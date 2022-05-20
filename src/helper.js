export const getCardData = (arr) => {
  const totalItems = arr.length;

  // Getting unique values from field/coulmn
  const uniqueItems = [...new Set(arr)];

  var fieldPercentage = [];

  // Calculating percentage of unique value from all the data
  uniqueItems.forEach((item) => {
    const numItems = arr.filter((val) => val === item);
    fieldPercentage.push({
      title: item,
      percentage: ((numItems.length * 100) / totalItems).toFixed(2),
    });
  });

  // Sorting data based on percentage value
  fieldPercentage = fieldPercentage.sort((a, b) => b.percentage - a.percentage);

  const otherCount = arr.filter(
    (val) =>
      val !== fieldPercentage[0].title && val !== fieldPercentage[1].title
  );

  const fieldData = {
    detailCardData: {
      fieldPercentage: fieldPercentage.slice(0, 2),
      otherCount: otherCount.length,
      otherPercentage: ((otherCount.length * 100) / totalItems).toFixed(2),
    },
    progressCardData: {
      uniqueCount: uniqueItems.length,
      commonItem: fieldPercentage[0],
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
    if (!item) missing += 1;
    else if (typeof item !== fieldType) mismatched += 1;
    else valid += 1;
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
