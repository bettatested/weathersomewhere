document.addEventListener('DOMContentLoaded', () => {
    getImage();
});

async function getImage() {
    const images = [
        "AkureyriIS",
        "AlessandriaIT",
        "AtikokanCA",
        "AtlantaUS",
        "AucklandNZ",
    ];

    const imageID = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url('images/${imageID}.jpeg')`;
}
