import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col, Carousel} from "react-bootstrap";
import {IMAGES} from "../../code/constants";
import {Link} from "react-router-dom";

const Home = props => {
    return (
        <>
            <Container className={"mt-4"}>
                <Row>
                    <Col>
                        <Carousel>
                            {
                                IMAGES.carousel.map((item, index) =>
                                    <Carousel.Item key={index}>
                                        <img className={"d-block w-100"} src={item} id={`carousel-image-1 ${index}`} alt={`carousel-image-1 ${index}`} />
                                    </Carousel.Item>
                                )
                            }

                        </Carousel>
                    </Col>
                </Row>
            </Container>
            <Container className={"mt-5"}>
                <Row>
                    <Col lg={"10"}>
                        <Row>
                            {
                                IMAGES.cars.categories.map((item, index) =>
                                    <Col lg={"3"} className={"mt-3 me-5"} key={index}>
                                        <Link to={"/"} className={"car-category-content"}>
                                            <img className={"car-category-image"} src={item.image} alt={`image-${index}`} />
                                            <div className={"car-category-name"}>{item.name}</div>
                                        </Link>
                                    </Col>
                                )
                            }
                        </Row>
                    </Col>
                    <Col lg={"2"} className={"bg-primary"}>

                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
        </>
    );
};

Home.propTypes = {

};

export default Home;
