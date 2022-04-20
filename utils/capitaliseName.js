// function to capitalise first letter of each word in name
function capitaliseName(name) {
  return name.replace(/\w\S*/g, function (nameCap) {
    return nameCap.charAt(0).toUpperCase() + nameCap.substr(1).toLowerCase();
  });
}

module.exports = capitaliseName;
