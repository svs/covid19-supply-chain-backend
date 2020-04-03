import React from "react"
import PropTypes from "prop-types"
import { Carousel, Space, Typography } from 'antd'
import './Intro.css';

const { Text } = Typography;

const Intro = () => {
    return (
        <section className="Intro">
            <Text>
                We will get through COVID-19 but an essential part of that is having a working supply chain for essentials. 
                And if we can't visualise the supply chain and build tools to manage demand and supply it is quite likely 
                that we find out about breakages too late with the attendant risks of hunger, 
                lack of medical supplies and social unrest.
            </Text>
            <Carousel className="Intro__carousel" autoplay dotPosition='bottom'>
                <div class="Intro__item">
                    <h3>1</h3>
                </div>
                <div class="Intro__item">
                    <h3>2</h3>
                </div>
                <div class="Intro__item">
                    <h3>3</h3>
                </div>
                <div class="Intro__item">
                    <h3>4</h3>
                </div>
            </Carousel>
        </section>
        );
    }
    
    export default Intro;
    