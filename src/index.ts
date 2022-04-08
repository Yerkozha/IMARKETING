import './styles/style.scss'
import  Swiper, { Pagination ,SwiperOptions } from 'swiper'
import 'swiper/css/bundle'
import 'swiper/css/pagination'

require('./components/custom-header.ts')

const benefitsFirst = require('./assets/benefits-first.png')
const benefitsSecond = require('./assets/benefits-second.png')
const benefitsThird = require('./assets/benefits-third.png')
const curlyHairImg = require('./assets/curly-hair.png')
const helperImg = require('./assets/helper.png')
const strategy = require('./assets/strategy.png')
const designImg = require('./assets/design.png')
const protImg = require('./assets/prot.png')
const bitmapImg = require('./assets/bitmap.png')
const firstSliderImgTwo = require('./assets/firstslider-2.png')
const firstSliderImgThree = require('./assets/firstslider-3.png')
const secondSliderImgOne = require('./assets/second-slider-1.png')
const secondSliderImgTwo = require('./assets/second-slider-2.png')
const secondSliderImgThree = require('./assets/second-slider-3.png')

const headerIcon = require('./assets/icons/icon-header.svg')
const firstStarterImg = require('./assets/people-first.png')

interface IImage extends HTMLImageElement {
    dataset: any,
}
document.querySelectorAll('.expert__list-item').forEach((el) => {

    el.firstElementChild.childNodes.forEach((el: IImage) => {
        if (el.dataset?.name) {
            switch (el.dataset.name) {
                case 'curly-hair':
                    el.src = curlyHairImg;
                    el.parentElement.parentElement.style.top = '154px'
                    el.parentElement.parentElement.style.left = '-17px'
                    break;
                case 'prot':
                    el.src = protImg;
                    el.parentElement.parentElement.style.top = '364px'
                    el.parentElement.parentElement.style.left = '818px'
                    break;
                case 'design':
                    el.src = designImg;
                    el.parentElement.parentElement.style.top = '380px'
                    el.parentElement.parentElement.style.left = '179px'
                    break;
                case 'strategy':
                    el.src = strategy;
                    el.parentElement.parentElement.style.top = '102px'
                    el.parentElement.parentElement.style.left = '744px'
                    break;
                case 'helper':
                    el.src = helperImg;
                    el.parentElement.parentElement.style.top = '456px'
                    el.parentElement.parentElement.style.left = '529px'
                    break;
                default: return null
            }
        }
    })
})
document.querySelectorAll('.tips__list-img').forEach((img: HTMLImageElement) => {
    switch(img.dataset.name){
        case 'head-slider-one': img.src = bitmapImg; break;
        case 'head-slider-two': img.src = firstSliderImgTwo; break;
        case 'head-slider-three': img.src = firstSliderImgThree; break;

        case 'middle-slider-one': img.src = secondSliderImgOne; break;
        case 'middle-slider-two': img.src = secondSliderImgTwo; break;
        case 'middle-slider-three': img.src = secondSliderImgThree; break;
        default: return
    }
})
document.querySelectorAll('.benefits__img').forEach((img: IImage) => {
    switch (img.dataset.name) {
        case 'first': img.src = benefitsFirst; break;
        case 'second': img.src = benefitsSecond; break;
        case 'third': img.src = benefitsThird; break;
        default: return null
    }
})
document.querySelector<HTMLImageElement>('.footer__img').src = headerIcon
document.querySelector<HTMLImageElement>('.starter__right-img').src = firstStarterImg

// slider
const swiperParams: SwiperOptions = {
    modules: [Pagination],
    speed: 400,
    spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
  };
  
const swiper = new Swiper('.swiper', swiperParams)

const playIcon = `<svg style="height: 20px; width: 20px; line-height: 20px; position: absolute; bottom: 8px;" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">
<path fill="#FF9900"  id="XMLID_308_" d="M37.728,328.12c2.266,1.256,4.77,1.88,7.272,1.88c2.763,0,5.522-0.763,7.95-2.28l240-149.999
c4.386-2.741,7.05-7.548,7.05-12.72c0-5.172-2.664-9.979-7.05-12.72L52.95,2.28c-4.625-2.891-10.453-3.043-15.222-0.4
C32.959,4.524,30,9.547,30,15v300C30,320.453,32.959,325.476,37.728,328.12z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
`
document.querySelector('.starter__navigation-link').insertAdjacentHTML('beforebegin', playIcon)