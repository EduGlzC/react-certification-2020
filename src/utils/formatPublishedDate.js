const FormatPubDate = (originalDate) => {
  let result = '';
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // 2021-01-26
  const dataDate = originalDate.split('T');
  const dataItem = dataDate[0].split('-');
  result = `${dataItem[2]} of ${months[dataItem[1] * 1]}, ${dataItem[0]}`;
  return result;
};

export default FormatPubDate;
