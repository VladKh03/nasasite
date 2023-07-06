import { gsap } from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import ScrollSmoother from "gsap-trial/ScrollSmoother";

const wrapperAddGsap = () => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
    if (ScrollTrigger.isTouch !==1) {
        ScrollSmoother.create({
            wrapper: '.wrapper',
            content: '.content',
            smooth: 1.5,
            effects: true
        })
    
        gsap.fromTo('.hero-section', { opacity: 1 }, {
            opacity: 0.1,
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'center',
                end: '1020',
                scrub: true
            }
        })
    
        let itemsNameL = gsap.utils.toArray('.gallery__left .gallery__item__name')

        itemsNameL.forEach(item => {
            gsap.fromTo(item, { opacity: 0, x: -50 }, {
                opacity: 0.9, x: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-850',
                    end: '-100',
                    scrub: true
                }
            })
        })

        let itemsNameR = gsap.utils.toArray('.gallery__right .gallery__item__name')

        itemsNameR.forEach(item => {
            gsap.fromTo(item, { opacity: 0, x: -50 }, {
                opacity: 0.9, x: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-850',
                    end: '-100',
                    scrub: true
                }
            })
        })

        let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')
    
        itemsL.forEach(item => {
            gsap.fromTo(item, { opacity: 0.01, x: -50 }, {
                opacity: 1, x: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-850',
                    end: '-100',
                    scrub: true
                }
            })
        })
    
        let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')
    
        itemsR.forEach(item => {
            gsap.fromTo(item, { opacity: 0.01, x: 50 }, {
                opacity: 1, x: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-750',
                    end: 'top',
                    scrub: true
                }
            })
        })
    }
}

export default wrapperAddGsap
