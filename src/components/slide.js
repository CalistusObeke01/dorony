import React, { Component } from 'react';
import Slider from 'react-slick';


class Slide extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (

            <Slider {...settings}>
                <div className="slideOne">
                    
                </div>
                <div>
                    <h3>7</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Slider>
        )
    }
}

export default Slide;