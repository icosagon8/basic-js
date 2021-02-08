module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let arr = members.filter(item => typeof (item) === 'string');
    let str = arr.map(item => item.trim()[0].toUpperCase()).sort().join('')

    return str;
  }

  return false;
};