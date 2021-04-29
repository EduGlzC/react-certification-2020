const Truncate = (str, type) => {
  let result = str;
  let maxSize = 0;

  switch (type) {
    case 'descDetail':
      maxSize = 300;
      break;
    case 'titleRelative':
      maxSize = 40;
      break;
    default:
      maxSize = 10;
  }

  if (str.length > maxSize) {
    result = str.substring(0, maxSize);
    result += '...';
  }
  return result;
};

export default Truncate;
