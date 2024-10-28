let ObjArr = []
let starbukArr = []
let desertArr = []


document.querySelectorAll('.inner-main-box').forEach((btn) => {
    btn.addEventListener('mouseover', function (e) {
        let restaurant = e.target.closest('.inner-main-box');
        let restaurantImg = e.target.closest('.restaurantImg');
        let restaurantDetail = restaurant.querySelector('.most-inner-main-box');

        if (restaurant) {
            restaurant.style.height = '300px';
            restaurant.style.boxShadow = '0 0 10px black';
            restaurant.style.marginLeft = '10px';
        }

        if (restaurantDetail) {
            restaurantDetail.style.display = 'flex';
        }
    });

    btn.addEventListener('mouseout', function (e) {
        let restaurant = e.target.closest('.inner-main-box');
        let restaurantImg = e.target.closest('.restaurantImg');
        let restaurantDetail = restaurant.querySelector('.most-inner-main-box');

        if (restaurant) {
            restaurant.style.height = '170px';
            restaurant.style.boxShadow = '0 0 10px white';
            restaurant.style.marginLeft = '0px';
        }

        if (restaurantDetail) {
            restaurantDetail.style.display = 'none';
        }
    });
});



document.getElementById('menu-cross').addEventListener('click', function () {
    document.getElementById('starbucks-outer-menu').style.display = 'none'
})

document.getElementById('starbucks-open').addEventListener('click', function () {
    document.getElementById('starbucks-outer-menu').style.display = 'flex'
    if (starbukArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})



document.getElementById('menu-cross1').addEventListener('click', function () {
    document.getElementById('DessertClub-outer-menu').style.display = 'none'
})

document.getElementById('Dessert-open').addEventListener('click', function () {
    document.getElementById('DessertClub-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})


//edit

document.getElementById('menu-cross2').addEventListener('click', function () {
    document.getElementById('BaskinRobbins-outer-menu').style.display = 'none'
})

document.getElementById('Baskin-open').addEventListener('click', function () {
    document.getElementById('BaskinRobbins-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross3').addEventListener('click', function () {
    document.getElementById('Bikanervala-outer-menu').style.display = 'none'
})

document.getElementById('Bikanervala-open').addEventListener('click', function () {
    document.getElementById('Bikanervala-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})


document.getElementById('menu-cross4').addEventListener('click', function () {
    document.getElementById('BurgerKing-outer-menu').style.display = 'none'
})

document.getElementById('BurgerKing-open').addEventListener('click', function () {
    document.getElementById('BurgerKing-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross5').addEventListener('click', function () {
    document.getElementById('Barista-outer-menu').style.display = 'none'
})

document.getElementById('Barista-open').addEventListener('click', function () {
    document.getElementById('Barista-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross6').addEventListener('click', function () {
    document.getElementById('Celejor-outer-menu').style.display = 'none'
})

document.getElementById('Celejor-open').addEventListener('click', function () {
    document.getElementById('Celejor-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross7').addEventListener('click', function () {
    document.getElementById('Domino-outer-menu').style.display = 'none'
})

document.getElementById('Domino-open').addEventListener('click', function () {
    document.getElementById('Domino-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross8').addEventListener('click', function () {
    document.getElementById('Haldiram-outer-menu').style.display = 'none'
})

document.getElementById('Haldiram-open').addEventListener('click', function () {
    document.getElementById('Haldiram-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross9').addEventListener('click', function () {
    document.getElementById('WoW-outer-menu').style.display = 'none'
})

document.getElementById('WoW-open').addEventListener('click', function () {
    document.getElementById('WoW-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross10').addEventListener('click', function () {
    document.getElementById('Keventers-outer-menu').style.display = 'none'
})

document.getElementById('Keventers-open').addEventListener('click', function () {
    document.getElementById('Keventers-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross11').addEventListener('click', function () {
    document.getElementById('LaPino-outer-menu').style.display = 'none'
})

document.getElementById('La-Pino-open').addEventListener('click', function () {
    document.getElementById('LaPino-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross12').addEventListener('click', function () {
    document.getElementById('McDonald-outer-menu').style.display = 'none'
})

document.getElementById('Donald-open').addEventListener('click', function () {
    document.getElementById('McDonald-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross13').addEventListener('click', function () {
    document.getElementById('Nik-outer-menu').style.display = 'none'
})

document.getElementById('Nik-open').addEventListener('click', function () {
    document.getElementById('Nik-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross14').addEventListener('click', function () {
    document.getElementById('Subway-outer-menu').style.display = 'none'
})

document.getElementById('Subway-open').addEventListener('click', function () {
    document.getElementById('Subway-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross15').addEventListener('click', function () {
    document.getElementById('Super-outer-menu').style.display = 'none'
})

document.getElementById('Super-open').addEventListener('click', function () {
    document.getElementById('Super-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross16').addEventListener('click', function () {
    document.getElementById('TheBelgianWaffle-outer-menu').style.display = 'none'
})

document.getElementById('TheBelgian-open').addEventListener('click', function () {
    document.getElementById('TheBelgianWaffle-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross17').addEventListener('click', function () {
    document.getElementById('TimHortons-outer-menu').style.display = 'none'
})

document.getElementById('Tim-open').addEventListener('click', function () {
    document.getElementById('TimHortons-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross18').addEventListener('click', function () {
    document.getElementById('Barbeque-outer-menu').style.display = 'none'
})

document.getElementById('Barbeque-open').addEventListener('click', function () {
    document.getElementById('Barbeque-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})
document.getElementById('menu-cross19').addEventListener('click', function () {
    document.getElementById('Dosa-outer-menu').style.display = 'none'
})

document.getElementById('Dosa-open').addEventListener('click', function () {
    document.getElementById('Dosa-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross20').addEventListener('click', function () {
    document.getElementById('Sagar-outer-menu').style.display = 'none'
})

document.getElementById('Sagar-open').addEventListener('click', function () {
    document.getElementById('Sagar-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross21').addEventListener('click', function () {
    document.getElementById('Havmor-outer-menu').style.display = 'none'
})

document.getElementById('Havmor-open').addEventListener('click', function () {
    document.getElementById('Havmor-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross22').addEventListener('click', function () {
    document.getElementById('Dimsum-outer-menu').style.display = 'none'
})

document.getElementById('Dimsum-open').addEventListener('click', function () {
    document.getElementById('Dimsum-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross23').addEventListener('click', function () {
    document.getElementById('Roll-outer-menu').style.display = 'none'
})

document.getElementById('Roll-open').addEventListener('click', function () {
    document.getElementById('Roll-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})








let AddCart = document.querySelectorAll('.AddCart');
let AddCartIcons = document.querySelectorAll('.AddCartIcons');
let RemoveCartIcons = document.querySelectorAll('.RemoveCartIcons');


// Array to store the cart items
AddCart.forEach(function (button) {
    button.addEventListener('click', addItem);
});

AddCartIcons.forEach(function (button) {
    button.addEventListener('click', addItemIcon);
});

RemoveCartIcons.forEach(function (button) {
    button.addEventListener('click', RemoveCartIcons2);
});




function addItem(e) {
    let cart = e.target.closest('.AddCart');
    let pName = cart.getAttribute('data-name');
    let pPrice = cart.getAttribute('data-price');

    // Get corresponding '' button (assuming they are within the same parent container)
    let cartIcon = cart.parentElement.querySelector('.iconsCart');

    // Add item to cart
    let data = {
        name: pName,
        price: pPrice
    };
    ObjArr.push(data);







    //edit
    if (document.getElementById('starbucks-outer-menu').style.display == 'flex') {
        starbukArr.push(data);
    }
    else if (document.getElementById('DessertClub-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('BaskinRobbins-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Bikanervala-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('BurgerKing-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Barista-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Celejor-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Domino-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Haldiram-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('WoW-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Keventers-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('LaPino-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('McDonald-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Nik-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Subway-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Super-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('TheBelgianWaffle-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }

    else if (document.getElementById('TimHortons-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Barbeque-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Dosa-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Sagar-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Havmor-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Dimsum-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Roll-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    




    showData();
    document.querySelectorAll('#inner-cart').forEach((btn) => {
        btn.style.display = 'flex'
    })

    // Hide the 'AddCart' button
    cart.style.display = 'none';

    // Show the corresponding 'AddCartIcons' button
    cartIcon.style.display = 'flex';
}

function addItemIcon(e) {
    let cart = e.target.closest('.AddCartIcons');
    let pName = cart.getAttribute('data-name');
    let pPrice = cart.getAttribute('data-price');

    let data = {
        name: pName,
        price: pPrice
    };








//edit

    if (document.getElementById('starbucks-outer-menu').style.display == 'flex') {
        starbukArr.push(data);
    }
    else if (document.getElementById('DessertClub-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('BaskinRobbins-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Bikanervala-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('BurgerKing-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Barista-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Celejor-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Domino-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Haldiram-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('WoW-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Keventers-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('LaPino-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('McDonald-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Nik-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Subway-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Super-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('TheBelgianWaffle-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('TimHortons-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Barbeque-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Dosa-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Sagar-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Havmor-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Dimsum-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Roll-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
   




    document.querySelectorAll('#inner-cart').forEach((btn) => {
        btn.style.display = 'flex'
    })

    ObjArr.push(data);
    showData();

}

function RemoveCartIcons2(e) {
    let cart = e.target.closest('.RemoveCartIcons');
    let pName = cart.getAttribute('data-name');
    let pPrice = cart.getAttribute('data-price');

    // Find the index of the object that matches the product name or price


    let index = ObjArr.findIndex(obj => obj.name === pName && obj.price === pPrice);







    //edit

    if (document.getElementById('starbucks-outer-menu').style.display == 'flex') {
        let index1 = starbukArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            starbukArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('DessertClub-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('BaskinRobbins-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Bikanervala-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('BurgerKing-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Barista-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Celejor-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Domino-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Haldiram-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('WoW-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Keventers-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('LaPino-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('McDonald-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Nik-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Subway-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Super-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('TheBelgianWaffle-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('TimHortons-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Barbeque-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Dosa-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Sagar-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Havmor-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Dimsum-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Roll-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }


    // If the object is found, remove it from the array
    if (index !== -1) {
        ObjArr.splice(index, 1); // Removes the object at the found index
    }

    showData();
}

function showData() {
    let cartName = []

    let mainPrice = 0;
    document.querySelectorAll('#cart-items').forEach((btn) => {
        btn.innerHTML = ''
    })
    document.querySelectorAll('#totalAmount').forEach((btn) => {
        btn.innerHTML = ''
    })






   // edit

    if (document.getElementById('starbucks-outer-menu').style.display == 'flex') {
        cartName = starbukArr
    }
    else if (document.getElementById('DessertClub-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('BaskinRobbins-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Bikanervala-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('BurgerKing-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Barista-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Celejor-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Domino-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Haldiram-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('WoW-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Keventers-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('LaPino-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('McDonald-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Nik-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Subway-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Super-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('TheBelgianWaffle-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('TimHortons-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Barbeque-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Dosa-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Sagar-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Havmor-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Dimsum-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Roll-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }



    if (cartName.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    }
    for (let i = 0; i < cartName.length; i++) {
        let pName = cartName[i].name
        let pPrice = cartName[i].price
        mainPrice += parseInt(cartName[i].price)
        document.querySelectorAll('#cart-items').forEach((btn) => {
            btn.innerHTML += `
        <li class="cart-item-ele">
            <h4>${pName}</h4>
            <h4>${pPrice}</h4>
          </li>
        `
        })
        document.querySelectorAll('#totalAmount').forEach((btn) => {
            btn.innerHTML = `Total Amount :<span> ₹ ${mainPrice}</span>`
        })
    }
}