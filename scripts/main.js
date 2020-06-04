// Switching the person yo contact

// Logic of changing form sending attribute
(() => {
    // Choosing the person to contact - global variable
    const formToSend = document.querySelector('.js-form');
    // Choosing the option of selected item
    const selectedOptions = document.querySelector('#contact-choice');

    const submitAndSendForm = () => {
            if (selectedOptions.value === 'Paweł Jarosiewicz') {
                formToSend['action'] = 'mailto:pawlojar@gmail.com';
            } else if (selectedOptions.value === 'Jakub Kruszyński') {
                formToSend['action'] = 'mailto:jakub.kruszynski@vp.pl';
            }
        }
        // Selected option on change 
    selectedOptions.addEventListener('change', submitAndSendForm);
})();