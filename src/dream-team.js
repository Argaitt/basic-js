module.exports = function createDreamTeam(members) {
  let re = /^[A-Z,a-z]/, result = [];
    if (!Array.isArray(members)) {
      return false;
    }
    members.forEach(element => {
        if (typeof(element) == "string" && element != null) {
            result.push(element.trim().match(re)); 
        }
    });
    if (result != null) {
        result.forEach((element, index, arr) => {arr[index] = element.toString().toUpperCase()})
        return result.sort().join('').toUpperCase();
    } else {
        return false;
    }
};