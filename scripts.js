const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

 console.log(divider)
  if (dividend === "" || divider === "") {
    result.innerText = 'Division not performed. Both values are required in inputs. Try again.';
    return; //stop function execution
  }
  if (divider === 0) {
    try {
      throw new Error('Division not performed. Invalid number provided. Try again');
    } catch (error) {
			result.innerText = error.message
      console.error(error);
    }
    return;
  }
  result.innerText = Math.floor(dividend / divider);
});