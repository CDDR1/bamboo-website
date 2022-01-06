const form = document.querySelector('#form');

async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        this.reset();
        alert('Gracias por contactarnos! Nos pondremos en contacto tan pronto como nos sea posible');
    }
};

form.addEventListener('submit', handleSubmit);