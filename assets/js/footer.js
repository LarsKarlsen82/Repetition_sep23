
        function validate(formElm) {

            let state = true;
            const inputs = document.querySelectorAll(':required');

            console.log(inputs);

            for(let input of inputs) {
                if(!input.value) {
                    setError(input);
                    state = false;
                    return false;
                }
            }

            if (state) {
                // alert('Formularen er sendt!');
                document.getElementById('demo').innerHTML = "Formularen er sendt!'"
            }
        }

        function setError(element) {
            console.log(element.previousElementSibling.innerText);
            element.classList.add('error');
            if (!element.nextElementSibling) {
                element.insertAdjacentHTML('afterend', `<span class="errormessage">Du skal udfylde feltet</span>`);
            }
            element.addEventListener('keydown', function() {
                if(element.nextElementSibling) {
                    element.nextElementSibling.remove();
                }
                element.classList.remove('error')
            })
        }
         // Når man klikker på nulstil, så nulstilles siden
         function clearForm() {
        let pTag = (document.getElementById('demo').innerHTML = '');
      }
