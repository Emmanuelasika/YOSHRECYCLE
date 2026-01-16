const nextSanity = require('next-sanity');
console.log(Object.keys(nextSanity));
try {
    const ve = require('next-sanity/visual-editing');
    console.log('Found next-sanity/visual-editing exports:', Object.keys(ve));
} catch (e) {
    console.log('next-sanity/visual-editing not found');
}
