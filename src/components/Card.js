export class Card {
    constructor(template, data, handlePopupBigImg, handleDeleteCard, { handleLikeCardFun, handleDislikeCardFun }) {
        this._template = template
        this._data = data
        this._handlePopupBigImg = handlePopupBigImg
        this._handleDeleteCard = handleDeleteCard
        this._handleLikeCardFun = handleLikeCardFun
        this._handleDislikeCardFun = handleDislikeCardFun
        this._allLikes = data.likes;
        this._likesCount = data.likes.length;
        this._selectors = {
            template: '#card-template',
            image: '.element__img',
            name: '.element__heading',
            card: '.element',
            likeButton: '.element__like',
            deleteButton: '.element__trash-can',
            activeLike: 'element__like_type_active',
            bigImg: '.popup__picture',
            popupBigImg: '.popup-img',
            likesCount: '.element__like-amount'
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
        this._like = this._element.querySelector(this._selectors.likesCount);
        this._like.textContent = this._likesCount
        this._somethingId = this._data.owner._id
        this._setEventListeners();
        if (this._isMyLike()) {
            this._likeButton.classList.add(this._selectors.activeLike)
        }
        if (this._isNotMyCard()) {
            this._deleteButton.remove()
        }

        return this._element
    }

    handleDeleteCard(evt) {
        evt.stopPropagation();
        evt.target.closest(this._selectors.card).remove();
    }

    handleLike(count) {
        this._likeButton.classList.add(this._selectors.activeLike);
        this._like.textContent = count
    }
    handleDislike(count) {
        this._likeButton.classList.remove(this._selectors.activeLike);
        this._like.textContent = count
    }
    _isMyLike() {
        return this._allLikes.some((item) => item._id === 'e227fafc6ef9b690d9956113')
    }

    _isNotMyCard() {
        return (this._somethingId != 'e227fafc6ef9b690d9956113')
    }

    _setEventListeners() {

        this._deleteButton.addEventListener('click', this._handleDeleteCard);
        this._likeButton.addEventListener('click', () => {
            if (!this._likeButton.classList.contains(this._selectors.activeLike)) {
                this._handleLikeCardFun();
            }
            else {
                this._handleDislikeCardFun()
            }
        });
        this._image.addEventListener('click', () => this._handlePopupBigImg(this._data));
    }
}