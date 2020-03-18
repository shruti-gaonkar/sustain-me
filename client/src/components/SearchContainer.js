import React, { useState, useLayoutEffect } from 'react';
import { Container, Row, Col } from 'react-materialize';
import API from "../utils/API";
import FishList from "../components/FishList";

function SearchContainer(props) {
    //const [hasError, setErrors] = useState(false);
    const [results, setResults] = useState([]);

    useLayoutEffect(() => {
        loadResults();
    }, [props.query]);

    const loadResults = () => {
        API.search(props.query)
            .then(res => {
                //console.log(res.data);
                setResults(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Row>
                <Col s={12}>
                    {
                        !results.length ? (
                            <h1 className="text-center">No Results to Display</h1>
                        ) : (
                                results.map((fish, i) => {
                                    return (
                                        <FishList
                                            fish={fish}
                                        />
                                    );
                                })
                            )
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default SearchContainer;