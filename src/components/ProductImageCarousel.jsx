import React from 'react'
import { Carousel } from 'react-responsive-carousel'

export default function ProductImageCarousel({
    images = []
}) {
    return (
        <Carousel showStatus={false}>
            {images.map(image => (<img src={image} />))}
        </Carousel>
    )
}
