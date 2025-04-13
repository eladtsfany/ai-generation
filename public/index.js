// forms
const metaForm = document.querySelector('.meta-form');
const imageForm = document.querySelector('.image-form');

// output elements
const description = document.querySelector('.description p');
const thumbnail = document.querySelector('.thumbnail img');

// meta description
metaForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const res = await fetch('/openai/meta', {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: metaForm.metaText.value }),
        method: 'POST'
    });

    const data = await res.json();
    // console.log(data);
    console.log(data + '\n Data.output: \n' + data.output);

    description.textContent = data.output;
});

// image generation
imageForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const res = await fetch('/openai/image', {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: imageForm.desc.value }),
        method: 'POST'
    });

    const data = await res.json();
    console.log(data);

    thumbnail.setAttribute('src', data.url);
});