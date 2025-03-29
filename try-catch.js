function checkAge() {
  const agefield = document.getElementById("age");
  const ageText = agefield.value;
  const errortag = document.getElementById("errorTag");

  try {
    const age = parseInt(ageText);
    if (isNaN(age)) {
      throw "please enter a number";
    }
  } catch (error) {
    console.log("ERROR:", error);
    errortag.innerHTML = "Something Wrong: " + error;
  } finally {
    console.log("always executed");
  }
  console.log(11111);
}
