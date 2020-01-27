import React from 'react'
import styled from 'styled-components'

import { Widget, WidgetHeading, WidgetList } from '../widgetUtilities'

const WatchListItems = styled(WidgetList)`
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
      <WidgetHeading title="Watchlist" hasButton={true} />

      <WatchListItems>
        <li>
          <a /*TODO: needs href */>
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
    </Widget>
  )
}

export default WatchList
