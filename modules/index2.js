let studentDetails = {
  name: "Femi",
  age: 4,
  country: "Canada",
};

function displayName() {
  return "Jazz is a student";
}

//module.exports = studentDetails; //node runtime

module.exports = { studentDetails, displayName };

//export default studentDetails js runtime
