const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  if (dividend === "" || divider === "") {
    alert('Division not performed. Both values are required in inputs. Try again.')
    return; //stop function execution
  }
  result.innerText = Math.floor(dividend / divider);
});