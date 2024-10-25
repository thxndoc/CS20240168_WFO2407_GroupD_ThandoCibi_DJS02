const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  try {
		const entries = new FormData(event.target);
		let { dividend, divider } = Object.fromEntries(entries);
		//console.log(typeof dividend)
	
		dividend = Number(dividend);
		divider = Number(divider);
	
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
	
			if (isNaN(dividend) || isNaN(divider)) {
				throw new Error('Something critical went wrong. Please reload the page')
			}
			return;
		}
		result.innerText = Math.floor(dividend / divider);
	} catch (error) {
		console.error(error);
		
	}
});