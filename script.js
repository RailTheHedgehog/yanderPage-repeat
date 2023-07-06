var div = document.querySelector(".close_button")
var menu = document.querySelector("#menu")
var change = document.querySelector("#change")
var searchButton = document.querySelector('.search__svg')
var voiceSvg = document.querySelector('.search__svg_voice')
var cameraSvg = document.querySelector('.search__svg_camera')
var services = document.querySelector('.services')
const textarea = document.querySelector('textarea');
const container = document.querySelector('.searchContainer')

div.addEventListener('click', function (event) {
    menu.style.display = "none"
});

change.addEventListener('click', function (event) {
    menu.style.display = "block";
});

textarea.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
});

textarea.addEventListener('input', () => {
    container.style.outline = '2px solid #ffcc00'
    searchButton.style.backgroundColor = '#f5c400'
    searchButton.style.borderRadius = '15px'
    searchButton.style.padding = '15px 30px'
    searchButton.innerHTML = "Найти"
    searchButton.style.fontSize = '24px'
    searchButton.style.fontWeight = '1000'
    searchButton.addEventListener('mouseover', function() {
        searchButton.style.cursor = 'pointer';
    });
    voiceSvg.style.display = 'none'
    cameraSvg.style.display = 'none'
    services.style.visibility = 'visible'
});

textarea.addEventListener('click', () => {
    container.style.outline = '2px solid #ffcc00'
    services.style.visibility = 'visible'
});

textarea.addEventListener('blur', () => {
    container.style.outline = 'none'
    searchButton.style.backgroundColor = ''
    searchButton.style.borderRadius = ''
    searchButton.style.padding = ''
    searchButton.innerHTML = '<svg class="search__svg_voice" viewBox="0 0 32 32" width="37" height="37" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path d="M27.25 14.05ZM14.302 24.92c-5.19-.803-9.18-5.234-9.3-10.62h2a9 9 0 0 0 17.994 0h2c-.12 5.386-4.11 9.817-9.3 10.62l-.186.03-.482 3.85H14.97l-.482-3.85-.186-.03Z" fill="#acacad"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M10 9.05a6 6 0 0 1 12 0v5a6 6 0 0 1-12 0v-5Zm10 5v-5a4 4 0 0 0-8 0v5a4 4 0 1 0 8 0Z" fill="#acacad"></path> </svg> <svg class="search__svg_camera" viewBox="0 0 32 32" width="37" height="37" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path d="m11.502 7.138-.747 1.493-1.4.466c-.902.301-1.446.49-1.796.627-.35.137-.519.226-.66.33a2.7 2.7 0 0 0-.97 1.345c-.054.17-.085.417-.104.84-.017.399-.025.97-.026 1.811H3.7c0-.773.003-1.406.03-1.935.03-.574.09-1.011.202-1.36a4.8 4.8 0 0 1 1.725-2.393c.602-.443 1.384-.707 3.035-1.257l.575-.192.357-.714c.507-1.013.744-1.484 1.073-1.844a3.55 3.55 0 0 1 1.65-1.02c.47-.133.997-.135 2.13-.135h3.047c1.133 0 1.66.002 2.129.135a3.55 3.55 0 0 1 1.65 1.02c.47.513.78 1.179 1.097 1.861v.002c.097.208.195.418.296.621l.037.074.079.027c.261.087.529.169.797.25.984.3 1.958.6 2.735 1.172a4.8 4.8 0 0 1 1.724 2.392c.113.35.172.787.202 1.361.028.53.03 1.162.03 1.935h-2.1a45.917 45.917 0 0 0-.026-1.81c-.019-.424-.05-.67-.104-.84a2.7 2.7 0 0 0-.97-1.347c-.141-.103-.309-.192-.66-.33a42.29 42.29 0 0 0-1.795-.626l-1.4-.466-.747-1.493a31.431 31.431 0 0 0-.551-1.069 1.461 1.461 0 0 0-.194-.297 1.45 1.45 0 0 0-.674-.417 1.465 1.465 0 0 0-.353-.04c-.21-.01-.567-.015-1.202-.015h-3.047c-.636 0-.993.006-1.203.015-.21.009-.286.021-.352.04a1.45 1.45 0 0 0-.675.417 1.461 1.461 0 0 0-.194.297c-.101.184-.266.5-.55 1.069ZM3.7 19.45h2.1c0 1.085.003 1.813.041 2.38.04.58.109.82.164.953a2.7 2.7 0 0 0 1.461 1.461c.133.055.374.124.954.164.6.04 1.383.042 2.58.042h2.3v2.1H11c-1.168 0-2.034 0-2.723-.047-.687-.047-1.184-.14-1.615-.318a4.8 4.8 0 0 1-2.597-2.598c-.179-.431-.272-.928-.319-1.615-.044-.649-.047-1.455-.047-2.522Z" fill="#acacad"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M22.05 16.125a6.05 6.05 0 1 1-12.1 0 6.05 6.05 0 0 1 12.1 0ZM16 20.075a3.95 3.95 0 1 0 0-7.9 3.95 3.95 0 0 0 0 7.9Z" fill="#acacad"></path> <path d="M25.336 26.185c-.43.178-.927.271-1.615.318-.689.047-1.554.047-2.722.047h-2.3v-2.1H21c1.196 0 1.979-.001 2.58-.042.58-.04.82-.109.953-.164a2.7 2.7 0 0 0 1.462-1.46c.055-.133.123-.375.163-.955.039-.567.042-1.294.042-2.379h2.1c0 1.067-.003 1.873-.047 2.522-.047.687-.14 1.184-.318 1.615a4.8 4.8 0 0 1-2.598 2.598Z" fill="#acacad"></path></svg>'
    services.style.visibility = 'hidden'
});