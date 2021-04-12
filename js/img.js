const education = document.querySelector('.education');
let big_img = document.querySelector('.big-img img');

education.addEventListener('click', e => {
    if (e.target.tagName !== 'IMG') return;
    const img = e.target.dataset.img;
    big_img.src = `../video-images/certificate/${img}.png`;
});