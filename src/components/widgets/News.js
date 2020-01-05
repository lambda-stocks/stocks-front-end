import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Avatar from '../top-navigation/Avatar'
import { Widget, WidgetHeading, WidgetList } from '../widgetUtilities'

const NewsList = styled(WidgetList)`
  li {
    font-size: 12px;
    margin-bottom: 0;

    &:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }

    a {
      display: flex;
      text-decoration: none;
      color: #fff;
      line-height: 20px;
      transition: background-color 0.3s ease;
      padding-top: 10px;

      &:hover {
        background-color: #3c3c5e;
      }

      span {
        text-align: center;
        opacity: 0.5;
      }

      h4 {
        margin: 0;
        font-weight: 300;
      }

      div {
        display: flex;
        flex-direction: column;
        margin-left: 10px;

        span {
          margin: 5px 0 10px;
        }
      }
    }
  }
`

const News = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=45c12669899143d4aafda326804d3d1b'
      )
      .then(res => {
        setNews(res.data.articles)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <Widget size={3.833} large={true}>
      <WidgetHeading title="News" />
      <NewsList>
        {news &&
          news.map(({ id, url, title, publishedAt, urlToImage }) => {
            const date = new Date(publishedAt)
            const today = new Date()
            const day = today.getDay() - ('0' + date.getDate()).slice(-2)

            return (
              <li key={url}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <Avatar size={6} src={urlToImage} />
                  <div>
                    <h4>{title}</h4>
                    <span>{`${day} days ago`}</span>
                  </div>
                </a>
              </li>
            )
          })}
      </NewsList>
    </Widget>
  )
}

export default News
