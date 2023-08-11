const msg = "Just found this cool website on fire ecology. It's all about how fires impact ecosystems and keep things balanced. Thought you might find it interesting too! Check it out! The link is https://codeclash.sreenath.org 🔥🌿🌍"

const onThemeChange = () => {
    const theme = window.localStorage.getItem('theme');
    const newTheme = theme ? (theme === 'dark' ? 'light' : 'dark') : 'light';
    window.localStorage.setItem('theme', newTheme);
    if (newTheme === 'light') {
        document.documentElement.style.setProperty('--primary-color', 'black');
        document.documentElement.style.setProperty('--secondary-color', 'black');
        document.documentElement.style.setProperty('--background-color', 'white');
    }
    else {
        document.documentElement.style.setProperty('--primary-color', '#6EEB83');
        document.documentElement.style.setProperty('--secondary-color', 'white');
        document.documentElement.style.setProperty('--background-color', 'black');
    }
}

const share = () => {
    navigator.clipboard.writeText(msg);
    shareMessage.style.display = 'block';
}

onThemeChange();
onThemeChange();

const themeButton = document.querySelector('.theme');
const shareButton = document.querySelector('.share');
const shareMessage = document.querySelector('.share-msg');
themeButton.addEventListener('click', onThemeChange);
shareButton.addEventListener('click', share);
document.querySelector('.close-button').addEventListener('click', () => {
    shareMessage.style.display = 'none';
})