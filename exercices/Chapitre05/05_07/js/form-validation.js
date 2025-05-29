document.querySelectorAll("form[novalidate]").forEach( form => {
    form.addEventListener('submit', validateForm);
})

function validateForm( e ) {
    e.preventDefault();
    const form = e.target
    const fields = form.querySelectorAll("[required], [type=email]");
    let valid = true;
    fields.forEach( field => field.checkValidity() ? null : valid = false);
    valid ? form.submit() : null;
}
