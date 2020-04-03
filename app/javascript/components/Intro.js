import React from "react"
import PropTypes from "prop-types"
import { Carousel, Space } from 'antd'

const Intro = () => {
    return (
            <Carousel autoplay dotPosition='bottom'>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Carousel>
        );
    }
    
    export default Intro;
    