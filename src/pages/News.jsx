import React, { useState, useEffect } from 'react';
import { NewsWrapper, Heading, Content, Card } from '../StyledComponents/NewsPageElements'
// const dotenv = require('dotenv');
// dotenv.config();

const News = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    let key = process.env.REACT_APP_NEWS_API_KEY;
    let search = 'crypto';
    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${key}`).then((res) => {
            return res.json();
        }).then((data) => {
            setItems(data.articles);
            setIsLoaded(true);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(isLoaded, items);

    return (
        <>
            <NewsWrapper>
                <Heading>Latest News</Heading>
                {
                    isLoaded ? (

                        <Content>
                            {
                                items.map((item, index) => {
                                    return (
                                        <Card key={index}>
                                            <div>{item.title}</div>
                                        </Card>
                                    )
                                })
                            }
                        </Content>
                    ) : (
                        <Content>
                            <div>Loading</div>
                        </Content>
                    )
                }
            </NewsWrapper>
        </>
    )
};

export default News;
