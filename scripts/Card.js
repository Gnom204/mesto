export class Card {
    static selectors = {
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
    constructor(data, handlePopupBigImg) {
        this._data = data
        this._handlePopupBigImg = handlePopupBigImg
    }
    _getTemplate() {
        const cardElement = document
            .querySelector(Card.selectors.template)
            .content
            .querySelector(Card.selectors.card)
            .cloneNode(true);

        return cardElement;
    }
    generateCard() {
        this._element = this._getTemplate();
        this._deleteButton = this._element.querySelector(Card.selectors.deleteButton)
        this._likeButton = this._element.querySelector(Card.selectors.likeButton)
        this._image = this._element.querySelector(Card.selectors.image)
        this._name = this._element.querySelector(Card.selectors.name)

        this._image.src = this._data.link;
        this._name.textContent = this._data.name
        this._setEventListeners();

        return this._element
    }

    _handleDeleteCard(evt) {
        evt.stopPropagation();
        evt.target.closest(Card.selectors.card).remove();
    }
    _handleLike(likeElement) {
        likeElement.stopPropagation();
        likeElement.target.classList.toggle(Card.selectors.activeLike);
    }


    _setEventListeners() {
        this._deleteButton.addEventListener('click', this._handleDeleteCard);
        this._likeButton.addEventListener('click', this._handleLike);
        this._element.addEventListener('click', () => this._handlePopupBigImg(this._data));
    }
}