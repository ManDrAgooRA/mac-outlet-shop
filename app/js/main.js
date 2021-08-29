class Items {

    render() {
        let htmlMrkcup = '';

        items.forEach(({ name, imgUrl, price, orderInfo }) => {

            htmlMrkcup += `
                <div class="cards__item">
                    <button class="btn__wish">
                        <span class="wish__status wish__status-transperent active">&#xe906;</span>
                        <span class="wish__status wish__status-red">&#xe908;</span>
                    </button>
                    
                    <div class="card">
                        <div class="card__body">
                                
                            <div class="card__img">
                                <img src="images/${imgUrl}" alt="cards-img">
                            </div>
                            <div class="card__description">
                                <div class="card__title">
                                    <h3>${name}</h3>
                                </div>

                                <div class="card__status">
                                    <span
                                        class="card__status-label card__status-label--present active">&#xe904;</span>
                                    <span
                                        class="card__status-label card__status-label--absent">&#xe900;</span>
                                    <p><span>${orderInfo.inStock}</span> left in stock</p>

                                </div>

                                <div class="card__price">
                                    <p>Price: <span>${price}</span></p>
                                </div>
                            </div>

                            <button class="btn btn__base">Add to cart</button>

                        </div>
                        <div class="card__stats">
                            <div class="card__stats-views">
                                <p><span>${orderInfo.reviews}%</span> Positive reviews</p>
                                <p>Above avarage</p>
                            </div>
                            <div class="card__stats-orders">
                                <span>547</span>
                                <p>orders</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        })


        const cardsContainer = document.querySelector('#cards');
        cardsContainer.innerHTML = htmlMrkcup;

    }

    getCheckCountInStock() {
        let labelPresent = document.querySelectorAll('.card__status-label--present');
        let labelAbsent = document.querySelectorAll('.card__status-label--absent');
        let buttons = document.querySelectorAll('.btn__base');

        items.forEach((item, index) => {
            if (item.orderInfo.inStock === 0) {
                labelPresent[index].classList.toggle('active');
                labelAbsent[index].classList.toggle('active');;
                buttons[index + 1].classList.add('btn__base--disabled');
            }
        })
    }

    addToWishList() {
        const btnWish = document.querySelectorAll('.btn__wish');
        const heartTransperent = document.querySelectorAll('.wish__status-transperent');
        const heartRed = document.querySelectorAll('.wish__status-red');

        btnWish.forEach((item, index) => {
            item.onclick = () => {
                heartTransperent[index].classList.toggle('active');
                heartRed[index].classList.toggle('active');
            }
        })
    }
}

const itemsPage = new Items();
itemsPage.render();
itemsPage.getCheckCountInStock();
itemsPage.addToWishList();
