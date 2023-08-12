const msg = "Just found this cool website on fire ecology. It's all about how fires impact ecosystems and keep things balanced. Thought you might find it interesting too! Check it out! The link is https://codeclash.sreenath.org 🔥🌿🌍"

function locations(substring,string){
    if (substring === '') {
        return [];
    }
    var a=[],i=-1;
    while((i=string.indexOf(substring,i+1)) >= 0) a.push(i);
    return a;
    //https://stackoverflow.com/questions/10710345/finding-all-indexes-of-a-specified-character-within-a-string
}

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
const searchInput = document.querySelector('.search-input');
const mainContent = document.querySelector('.main-content');
themeButton.addEventListener('click', onThemeChange);
shareButton.addEventListener('click', share);
document.querySelector('.close-button').addEventListener('click', () => {
    shareMessage.style.display = 'none';
})

const context = document.querySelector('.main-content:not(.heading-primary):not(.heading-secondary)');
const instance = new Mark(context);

searchInput.addEventListener('input', (e)=> {
    const searchWord = e.target.value.toLowerCase();
    let blocks = Array.from(mainContent.children).splice(1);
    let results = 0;
    for (let i of blocks) {
        let show = i.innerText.toLowerCase().includes(searchWord)
        if (!show) {
            i.style.display = 'none';
        }
        else {
            i.style.display = 'block';
            results++;
        }
    }
    if (results === 0) {
        document.querySelector('.search').style.setProperty('--error-display','block');
    }
    else {
        document.querySelector('.search').style.setProperty('--error-display','none');
    }
    instance.unmark();
    instance.markRegExp(new RegExp(searchWord, 'gi'));
})