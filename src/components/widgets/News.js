import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Avatar from '../top-navigation/Avatar'

const Article = styled.div`

    a{
      text-decoration: none;
      color: #fff;

    }
  }
`

const News = () => {
  const [news, setNews] = useState([])
  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=bitcoin&from=2019-12-03&sortBy=publishedAt&apiKey=45c12669899143d4aafda326804d3d1b'
      )
      .then(res => {
        console.log('news', res.data.articles)
        setNews(res.data.articles)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])
  return (
    <div>
      {news &&
        news.map(data => (
          <Article key={data.id}>
            <Avatar className="avatar" size={9} src={data.urlToImage} />
            <h4>{data.title}</h4>
            <p>
              <a href={data.url}>{data.description}</a>
            </p>
            <p>{data.publishedAt}</p>
            <p>{data.author}</p>
          </Article>
        ))}
    </div>
  )
}

export default News
