const Page = document.getElementsByClassName('cartWindowConntainer').item(0);

const inner = document.querySelector('.cartWindow');

const cartDraw = document.querySelector('.cartdraw'); 

const uncartDraw = document.querySelector('.uncartdraw'); 

const SendToCart = document.querySelector('.cart');

const cartIcon = document.querySelector('.cart-icon');

const innerMobile = document.querySelector('.mobile');

const innerMobileWindow = document.querySelector('.mobile').querySelector('.cartWindow');

const innerMobileWork = document.querySelector('.mobile').querySelector('.work');

const innerMobileBtn = document.querySelector('.mobile').querySelector('.continueToCheckout').querySelector('button');

const cartDrawMobile = document.querySelector('#cartMobile');

let cartToggle = 0;


(()=>{
    innerMobile.style.opacity = 0;
    window.addEventListener('scroll', ()=>{
        let scrolled = window.scrollY;
        if (scrolled >= window.innerHeight) {
            innerMobile.style.opacity = 1;
        } else {
            innerMobile.style.opacity = 0;
        }
    })
})()


cartDraw.addEventListener('click', ()=>{
    if (inner.style.right === '-48%') {
        inner.style.right = '0px';
    }else{
        inner.style.right = '-48%';
    }
            
})

cartIcon.addEventListener('click', ()=>{
    if (inner.style.right === '-48%') {
        inner.style.right = '0px';
    }else{
        inner.style.right = '-48%';
    }
            
})

cartDrawMobile.addEventListener('click', ()=>{
    if (cartToggle == 0) {
        innerMobileWindow.style.display = 'block';
        innerMobileWindow.style.width = '90vw';
        innerMobileWindow.style.height = '400px';
        innerMobileWindow.style.opacity = '1';
        innerMobileBtn.style.display = 'inherit';
        cartToggle++;
    } else {
        innerMobileWindow.style.opacity = '1';
        innerMobileWindow.style.width = '0px';
        innerMobileWindow.style.height = '0px';
        innerMobileWindow.style.display = 'none';
        cartToggle--;
    }
            
})