import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const startBtn = document.querySelector('#start');
const delayInput = document.querySelector('#delay');

startBtn.addEventListener('click', (e) => {
    const delay = Number(delayInput.value);

    const selectedRadio = document.querySelector('input[name="state"]:checked').value;

    function createPromise(delay, state) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (state === "fulfilled") {
                    resolve(
                        iziToast.success({
                            title: '',
                            message: `✅ Fulfilled promise in ${delay}ms`,
                            position: "topRight",
                        })
                    );
                } else {
                    reject(
                        iziToast.error({
                            title: '',
                            message: `❌ Rejected promise in ${delay}ms`,
                            position: "topRight",

                        })
                    );
                }
            }, delay);
        });
    }

    createPromise(delay, selectedRadio)
        .then(result => console.log(result))
        .catch(error => console.log(error));
});