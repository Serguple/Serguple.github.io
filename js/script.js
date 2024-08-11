// import 'jquery'
// import 'jquery-validation';

const slider = tns({
    container: '.slider__content',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
});

document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
};

document.querySelector('.next').onclick = function () {
    slider.goTo('next');
};

const content = document.querySelectorAll('.catalog-item__content'),
    descr = document.querySelectorAll('.catalog-item__descr'),
    descrBtn = document.querySelectorAll('.catalog-item__back'),
    contentBtn = document.querySelectorAll('.catalog-item__link');


function toggleCardsContent(btn, elem, secondItem, active, activeSecond) {
    btn.forEach((item, i) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            elem[i].classList.toggle(active);
            secondItem[i].classList.toggle(activeSecond);
        });
    });
}

toggleCardsContent(contentBtn, content, descr, "catalog-item__content_active", "catalog-item__descr_active");
toggleCardsContent(descrBtn, content, descr, "catalog-item__content_active", "catalog-item__descr_active");

//Tabs

const tabs = document.querySelectorAll(".catalog__tab"),
    tabsContent = document.querySelectorAll(".catalog__content"),
    tabsActive = "catalog__tab_active",
    tabsContentActive = "catalog__content_active";

function removeActives(items, active) {
    items.forEach(item => {
        item.classList.remove(active)
    })
}

function addActive(item, active) {
    item.classList.add(active);
}


tabs.forEach((item, i) => {
    item.addEventListener("click", () => {

        removeActives(tabs, tabsActive);
        addActive(item, tabsActive)

        removeActives(tabsContent, tabsContentActive);
        addActive(tabsContent[i], tabsContentActive);

        removeActives(descr, "catalog-item__descr_active");
        content.forEach(item => {
            addActive(item, "catalog-item__content_active");
        })
    });
});

//Modal

const modalBtn = document.querySelectorAll('[data-modal="consultation"]'),
    modalClose = document.querySelectorAll('.modal__close'),
    orderBtn = document.querySelectorAll('[data-modal="order"]'),
    overlay = document.querySelector(".overlay"),
    modalConsult = document.querySelector("#consultation"),
    modalOrder = document.querySelector("#order"),
    products = document.querySelectorAll(".catalog-item__title"),
    modalProduct = modalOrder.querySelector(".modal__descr"),
    modals = document.querySelectorAll(".modal");

function openModal(modal) {
    modal.classList.add("show");
    overlay.classList.add("show");
}

function closeModal(modal) {
    modal.classList.remove("show");
    overlay.classList.remove("show");
}

function onBtn(btns, fun, modal) {
    btns.forEach(item => {
        item.addEventListener("click", () => {
            fun(modal);
        });
    });
}

function closeAllModals() {
    modals.forEach(item => {
        closeModal(item);
    });
}

onBtn(modalBtn, openModal, modalConsult);
onBtn(modalClose, closeModal, modalConsult);
onBtn(modalClose, closeModal, modalOrder);

orderBtn.forEach((item, i) => {
    item.addEventListener("click", () => {
        modalProduct.textContent = products[i].textContent;
        openModal(modalOrder);
    });
});

overlay.addEventListener("click", e => {
    if (e.target === overlay) {
        closeAllModals()
    }
});

document.addEventListener("keydown", e => {
    if (e.code === "Escape") {
        closeAllModals()
    }
});

//form-validation

// $('#consultation-form').validate();
// $('#consultation form').validate({
//     rules: {
//         name: {
//             required: true,
//             minLength: 2
//         },
//         phone: "required",
//         email: {
//             required: true,
//             email: true
//         }
//     },
//     messages: {
//         name: {
//             required: "Введіть веше ім'я",
//             minLength: jQuery.validator.format("Введіть хочаб {0} літер")
//         },
//         phone: "Введіть ваш телефон",
//         email: "Неправельно введенна електронна адреса"
//     }
// });
// $('#order form').validate();

$("input[name=phone]").mask("+7 (999) 999-99-99");

var wow = new WOW(
    {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animate__animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true,       // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    }
);
wow.init();



