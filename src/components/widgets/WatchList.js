import React from 'react'
import styled from 'styled-components'

import { Widget, WidgetHeading } from '../widgetUtilities'

const WatchlistContainer = styled.div`
  padding: 5px 0;
`

const WatchListItems = styled.ul`
  list-style: none;
  padding: 0;
  overflow-y: auto;

  li {
    strong {
      text-transform: uppercase;
    }

    a {
      width: 100%;
      display: flex;
      align-items: baseline;
      padding: 10px 0 10px 20px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #3c3c5e;
      }
    }

    &:not(:first-child) {
      border-top: 2px solid #3c3c5e;
    }
  }
`

const ListIcon = styled.div`
  margin-right: 10px;
`

const CompanyInfo = styled.div`
  line-height: 20px;
`

const WatchList = () => {
  return (
    <Widget size={4} large={true}>
      <WatchlistContainer>
        <WidgetHeading title="Watchlist" hasButton={true} />

        <WatchListItems>
          <li>
            <a>
              <ListIcon>icon</ListIcon>
              <CompanyInfo>
                <strong>Snap</strong> (Snapchat, Inc.) <br /> <span>vol. 12,148,409</span>
              </CompanyInfo>
            </a>
          </li>
          <li>
            <a>
              <ListIcon>icon</ListIcon>
              <CompanyInfo>
                <strong>Snap</strong> (Snapchat, Inc.) <br /> <span>vol. 12,148,409</span>
              </CompanyInfo>
            </a>
          </li>
          <li>
            <a>
              <ListIcon>icon</ListIcon>
              <CompanyInfo>
                <strong>Snap</strong> (Snapchat, Inc.) <br /> <span>vol. 12,148,409</span>
              </CompanyInfo>
            </a>
          </li>
          <li>
            <a>
              <ListIcon>icon</ListIcon>
              <CompanyInfo>
                <strong>Snap</strong> (Snapchat, Inc.) <br /> <span>vol. 12,148,409</span>
              </CompanyInfo>
            </a>
          </li>
          <li>
            <a>
              <ListIcon>icon</ListIcon>
              <CompanyInfo>
                <strong>Snap</strong> (Snapchat, Inc.) <br /> <span>vol. 12,148,409</span>
              </CompanyInfo>
            </a>
          </li>
        </WatchListItems>
      </WatchlistContainer>
    </Widget>
  )
}

export default WatchList
