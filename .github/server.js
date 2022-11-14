import Handlebars from 'handlebars';

const template = `Hello, {{ name }}`;

document.addEventListener('DOMContentLoaded', () => {
    const compiled = Handlebars.compile(template);
    const html = compiled({ name: "John Snow" });

    const root = document.querySelector('#app');
    root.innerHTML = html;

    setTimeout(() => {
        const newHtml = compiled({ name: 'Elisaveta' });
        root.innerHTML = newHtml;
    }, 3000);
});