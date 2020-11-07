const listIcon = document.querySelector('.open-tag-list');
const tagList = document.querySelector('.show-tag-list');
const closeIcon = document.querySelector('.btn-close-tag-list');

const searchIcon = document.querySelector('.open-search');
const searchBox = document.querySelector('.show-search-box');
const closeSearchIcon = document.querySelector('.btn-close-search');


listIcon.addEventListener('click', () => {
    tagList.classList.add('show-tags');

})
closeIcon.addEventListener('click', () => {
    tagList.classList.remove('show-tags');
})

searchIcon.addEventListener('click', () => {
    searchBox.classList.add('show-search');
})
closeSearchIcon.addEventListener('click', () => {
    searchBox.classList.remove('show-search');
})


const icons = document.querySelectorAll('.tag-icon');
icons.forEach(icon => {
    icon.addEventListener('click', () => {
        const tag = icon.nextElementSibling;
        tag.classList.toggle('show-tag-box');
    });

});



function showButtons() {
    const postButtons = document.querySelectorAll('[data-animation]');
    const y = window.pageYOffset + window.innerHeight;

    postButtons.forEach(element => {
        if (y > element.offsetTop) {
            element.classList.add('buttons-animation');
        }
    });
}
window.addEventListener('scroll', showButtons);
