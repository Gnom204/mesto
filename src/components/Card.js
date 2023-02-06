export class Card {
    constructor(template, data, handlePopupBigImg) {
        this._template = template
        this._data = data
        this._handlePopupBigImg = handlePopupBigImg
        this._selectors = {
            template: '#card-template',
            image: '.element__img',
            name: '.element__heading',
            card: '.element',
            likeButton: '.element__like',
            deleteButton: '.element__trash-can',
            activeLike: 'element__like_type_active',
            bigImg: '.popup__picture',
            popupBigImg: '.popup-img'
        }
    }
    _getTemplate() {
        const cardElement = document.querySelector(this._template)
            .content
            .querySelector(this._selectors.card)
            .cloneNode(true);

        return cardElement;
    }
    generateCard() {
        this._element = this._getTemplate();
        this._deleteButton = this._element.querySelector(this._selectors.deleteButton)
        this._likeButton = this._element.querySelector(this._selectors.likeButton)
        this._image = this._element.querySelector(this._selectors.image)
        this._name = this._element.querySelector(this._selectors.name)
        this._image.alt = this._data.name
        this._image.src = this._data.link;
        this._name.textContent = this._data.name
        this._setEventListeners();

        return this._element
    }

    _handleDeleteCard(evt) {
        evt.stopPropagation();
        evt.target.closest(this._selectors.card).remove();
    }
    _handleLike(event) {
        event.classList.toggle(this._selectors.activeLike);
    }


    _setEventListeners() {
        this._deleteButton.addEventListener('click', this._handleDeleteCard);
        this._likeButton.addEventListener('click', () => this._handleLike(this._likeButton));
        this._image.addEventListener('click', () => this._handlePopupBigImg(this._data));
    }
}