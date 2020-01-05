import React from 'react'
import styled from 'styled-components'

import { Widget, WidgetHeading, WidgetList } from '../widgetUtilities'
import Avatar from '../top-navigation/Avatar'
import placeholderImg1 from '../../images/dp.png'
import placeholderImg2 from '../../images/2.png'

const Conversations = [
  {
    id: 0,
    avatar: placeholderImg1,
    username: 'John Doe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },

  {
    id: 1,
    avatar: placeholderImg2,
    username: 'Jane Doe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },

  {
    id: 2,
    avatar: placeholderImg1,
    username: 'John Doe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },

  {
    id: 3,
    avatar: placeholderImg2,
    username: 'Jane Doe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }
]

const ChatTextContainer = styled.div`
  line-height: 20px;
  margin-left: 10px;
  width: 85%;
  background-color: #fff;
  border-radius: 5px;
  color: #000;
  padding: 10px;

  &.reverse {
    margin-right: 10px;
    text-align: right;
  }

  span {
    display: block;
    font-weight: 700;
  }
`

const Chat = () => {
  return (
    <Widget size={4} large={true}>
      <WidgetHeading title="Watchlist" hasButton={true} />

      <WidgetList>
        {Conversations.map(({ avatar, username, text, id }, index) => {
          return (
            <li key={id} className={index % 2 !== 0 ? 'reverse' : ''}>
              <Avatar size={4} src={avatar} />
              <ChatTextContainer className={index % 2 !== 0 ? 'reverse' : ''}>
                <span>{username}</span>
                {text}
              </ChatTextContainer>
            </li>
          )
        })}
      </WidgetList>
    </Widget>
  )
}

export default Chat
