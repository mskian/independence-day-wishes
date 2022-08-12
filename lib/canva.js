import slugify from 'slugify';
import '../styles/app.css';

let url = new URL(window.location);
let searchParams = new URLSearchParams(url.search);
const getInput = searchParams.get('name') || 'Your Name';
const random_id = Math.floor(1000 + Math.random() * 9000);
const basename = 'independence-day-wishes-' + random_id;
const seo_title = slugify(getInput, {
    replacement: '-',
    remove: /[$*_+~.()'"!\-:@]+/g,
    lower: false,
    strict: false,
});
const userInput =
    slugify(getInput, {
        replacement: ' ',
        remove: /[*+~.()'"!:@]/g,
        lower: false,
        strict: false,
    }) || 'Your Name';
const pageCatch = encodeURIComponent(seo_title).replace(/%20/g, '-');
if (getInput == 'Your Name') {
    if (window.history.replaceState) {
        window.history.replaceState(null, null, '/');
    }
} else {
    if (window.history.replaceState) {
        window.history.replaceState(null, null, '/?name=' + pageCatch);
    }
}
const word = userInput.replace(/[-]/g, ' ');
document
    .getElementsByTagName('meta')
    .namedItem('description')
    .setAttribute(
        'content',
        `${word} Sending you the Happy Indian Independence Day Wishes Greeting image with Name - Happy Independence Day.`
    );
document.title = `${word} Sending you the Happy Indian Independence Day Wishes.`;

const link = document.querySelector('link[rel="canonical"]')
    ? document.querySelector('link[rel="canonical"]')
    : document.createElement('link');
const pathname = typeof window !== 'undefined' ? window.location.href : '';
link.setAttribute('rel', 'canonical');
link.setAttribute('href', pathname);
document.head.appendChild(link);

const LoadmyFont = new FontFace(
    'Anek Tamil',
    'url(https://fonts.gstatic.com/s/anektamil/v4/XLYJIZH2bYJHGYtPGSbUB8JKTp-_9n55SsLHW0WZez6TjtkDu3uNnCB6qw.ttf)'
);
LoadmyFont.load().then(function (font) {
    document.fonts.add(font);

    const imageObj = new Image();
    const canvas = document.getElementById('Canvas');
    const context = canvas.getContext('2d');
    context.font = '600 30pt Anek Tamil';
    imageObj.onload = function () {
        context.textAlign = 'center';
        context.drawImage(imageObj, 0, 0, 1080, 1080);
        context.fillStyle = '#1e824c';
        context.fillText(word, 536, 900);
        let image = canvas.toDataURL('image/png', 0.5);
        const sharetext = encodeURIComponent(
            word +
                ' Sending You a Happy Indian Independence Day For You ' +
                window.location.href
        );
        const Whatsappshare = 'https://api.whatsapp.com/send?text=' + sharetext;
        const Telegramshare =
            'https://telegram.me/share/url?url=' +
            window.location.href +
            '&text=' +
            sharetext;
        if (word == 'Your Name') {
            document.getElementById('result').innerHTML = `
            <br>
            <div class="flex flex-wrap mt-4 mb-8 items-center justify-center" style="overflow: auto;" role="group">
            <a target="_blank" href=${Whatsappshare} rel="nofollow noopener noreferrer" class="rounded text-white bg-gradient-to-br from-green-500 to-green-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase">
            👉 Whatsapp
            </a>
            <a target="_blank" href=${Telegramshare} rel="nofollow noopener noreferrer" class="rounded text-white bg-gradient-to-br from-blue-500 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase">
            👉 Telegram
            </a>
            </div>`;
        } else {
            document.getElementById('result').innerHTML = `
        <br><div class="flex items-center justify-center"><a class="inline-block px-10 py-3 rounded text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase umami--click--download-image" href="${image}" download="${basename}">⬇ Download image</a></div>
        <div class="flex flex-wrap mt-4 mb-8 items-center justify-center" style="overflow: auto;" role="group">
        <a target="_blank" href=${Whatsappshare} rel="nofollow noopener noreferrer" class="rounded text-white bg-gradient-to-br from-green-500 to-green-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase">
        👉 Whatsapp
        </a>
        <a target="_blank" href=${Telegramshare} rel="nofollow noopener noreferrer" class="rounded text-white bg-gradient-to-br from-blue-500 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase">
        👉 Telegram
        </a>
        </div>`;
        }
    };

    imageObj.setAttribute('crossOrigin', 'anonymous');
    imageObj.src = './independence-day.png';
});
