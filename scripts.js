const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
const errorMessage = document.querySelector("[data-error]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  try {
		const entries = new FormData(event.target);
		let { dividend, divider } = Object.fromEntries(entries);
		//console.log(typeof dividend)
	
		dividend = Number(dividend);
		divider = Number(divider);
	
		if (isNaN(dividend) || isNaN(divider)) {
			throw new Error('⚠️Something critical went wrong. Please reload the page⚠️')
		}

		if (dividend === 0 || divider === 0) {
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
	
		}
		result.innerText = Math.floor(dividend / divider);
	} catch (error) {
		console.error(error);
		
		document.body.textContent = '';

    errorMessage.innerText = error.message;

		errorMessage.style.height = '100vh'
		errorMessage.style.display = 'flex';
		errorMessage.style.alignItems = 'center';
		errorMessage.style.justifyContent = 'center';
    errorMessage.style.color = 'red';
    errorMessage.style.fontSize = '24px';
		errorMessage.style.fontWeight = 'bold'
    //errorMessage.style.textAlign = 'center';

		document.body.appendChild(errorMessage)
	}
});