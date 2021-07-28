import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {useSwipeable} from 'react-swipeable'



export const Carousel = ({sliderItems}) => {

    const [index, setIndex] = useState(0)
    const [activeSlider, setActiveSlider] = useState(sliderItems[0])

    const router = useRouter()

    const handlers = useSwipeable({
        onSwipedLeft: (e) => {
            if(index === 0) {
                setIndex(2)
                setActiveSlider(sliderItems[index])
                return
            }
            setIndex((prev) => prev - 1)
            setActiveSlider(sliderItems[index])
        },
        onSwipedRight: (e) => {
            if(index === 2) {
                setIndex(0);
                setActiveSlider(sliderItems[index])
                return
            }
            setIndex((prev) => prev + 1)
            setActiveSlider(sliderItems[index])
        }
    })

    return (
        <div {...handlers} className="banner" >
        <div className="slider">

            <div className="slider__item">
                <div className="slider__item__details">
                    <h1>{activeSlider.title}</h1>
                    <p>
                        {activeSlider.excerpt}
                    </p>
                    <button onClick = {() => router.push('/shop')} className="btn-big btn-green">SHOP NOW</button>
                </div>
                <div className="slider__item__image">
                    <figure>
                        <Image src={activeSlider.image} alt={activeSlider.title} />
                    </figure>
                </div>
            </div>
            <div className="slider__nav">
                <button onClick = {() => {
                    if(index === 0) {
                        setIndex(2)
                        setActiveSlider(sliderItems[index])
                        return
                    }
                    setIndex((prev) => prev - 1)
                    setActiveSlider(sliderItems[index])
                }} className="slider__nav__arrow slider__nav__arrow--slick-prev">
                    <svg viewBox="0 0 12.2 20.2">
                        <use xlinkHref="images/sprite.svg#arrow"></use>
                    </svg>
                </button>
                <button onClick = {() => {
                    if(index === 2) {
                        setIndex(0);
                        setActiveSlider(sliderItems[index])
                        return
                    }
                    setIndex((prev) => prev + 1)
                    setActiveSlider(sliderItems[index])
                }} className="slider__nav__arrow slider__nav__arrow--slick-next">
                    <svg viewBox="0 0 12.2 20.2">
                        <use xlinkHref="images/sprite.svg#arrow"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    )
}