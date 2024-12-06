import flatpickr from "flatpickr";// Описаний в документації
import "flatpickr/dist/flatpickr.min.css";// Додатковий імпорт стилів
import iziToast from "izitoast";// Описаний у документації
import "izitoast/dist/css/iziToast.min.css";// Додатковий імпорт стилів


const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
    event.preventDefault();

    const promiseState = event.target.elements.state.value; // отримуємо rejected або fulfilled
    const delay = event.target.elements.delay.value;

console.log(event);

    // створення
    const promise = new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if (promiseState === "fulfilled") {
                resolve(delay);  //проміс виконується
            } else {
                reject(delay); // проміс не виконується
            }
        }, delay)
    })
    
    console.log(promise);
    
   
// обробка

    promise
        .then(data => {            
            iziToast.show({
                theme: 'dark',
                //iconUrl: iconResolve,
                backgroundColor: '#B5EA7C',
                title: 'Ок',
                titleSize: '16px',
                titleLineHeight: '24px',
                titleColor: '#FFFFFF',
                message: `Fulfilled promise in ${data} ms `,
                messageSize: '16px',
                messageLineHeight: '24px',
                messageColor: '#FFFFFF',
                position: 'topRight',
                timeout: 10000,
            });
        })
        .catch(error => {
            iziToast.show({
                theme: 'dark',
                icon: iconRejected,
                backgroundColor: '#EF4040',
                title: 'Error',
                titleSize: '16px',
                titleLineHeight: '24px',
                titleColor: '#FFFFFF',
                message: `Rejected promise in ${error} ms`,
                messageSize: '16px',
                messageLineHeight: '24px',
                messageColor: '#FFFFFF',
                position: 'topRight',
                timeout: 10000,
            });
        });

}

// ===================================================


//  myPromise
//                 .then((delay) => {
//                     console.log(`✅ Проміс виконано з затримкою ${delay} мс`);
//                 })
//                 .catch((delay) => {
//                     console.error(`❌ Проміс відхилено з затримкою ${delay} мс`);
//                 });


// .catch(error => {
//       iziToast.show({
//         theme: 'dark',
//         iconUrl: iconRejected,
//         backgroundColor: '#EF4040',
//         title: 'Error',
//         titleSize: '16px',
//         titleLineHeight: '150%',
//         message: `${error.value} promise in ${error.delay}ms`,
//         messageSize: '16px',
//         messageLineHeight: '150%',
//         position: 'topRight',

//       });
//     }); (edited) 

// ===================================
// iziToast.show({
//     id: null, 
//     class: '',
//     title: '',
//     titleColor: '',
//     titleSize: '',
//     titleLineHeight: '',
//     message: '',
//     messageColor: '',
//     messageSize: '',
//     messageLineHeight: '',
//     backgroundColor: '',
//     theme: 'light', // dark
//     color: '', // blue, red, green, yellow
//     icon: '',
//     iconText: '',
//     iconColor: '',
//     iconUrl: null,
//     image: '',
//     imageWidth: 50,
//     maxWidth: null,
//     zindex: null,
//     layout: 1,
//     balloon: false,
//     close: true,
//     closeOnEscape: false,
//     closeOnClick: false,
//     displayMode: 0, // once, replace
//     position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
//     target: '',
//     targetFirst: true,
//     timeout: 5000,
//     rtl: false,
//     animateInside: true,
//     drag: true,
//     pauseOnHover: true,
//     resetOnHover: false,
//     progressBar: true,
//     progressBarColor: '',
//     progressBarEasing: 'linear',
//     overlay: false,
//     overlayClose: false,
//     overlayColor: 'rgba(0, 0, 0, 0.6)',
//     transitionIn: 'fadeInUp',
//     transitionOut: 'fadeOut',
//     transitionInMobile: 'fadeInUp',
//     transitionOutMobile: 'fadeOutDown',
//     buttons: {},
//     inputs: {},
//     onOpening: function () {},
//     onOpened: function () {},
//     onClosing: function () {},
//     onClosed: function () {}
// });
