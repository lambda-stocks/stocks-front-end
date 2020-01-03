import React from 'react'
import styled from 'styled-components'

import AppLayout from '../components/layouts/AppLayout'
import { PageHeading, WidgetWrapper, Widget } from '../components/utilities'

const Chart = styled.div`
  height: 367px;
`

const Dashboard = () => (
  <AppLayout>
    <PageHeading title="Dashboard" />
    <WidgetWrapper>
      <Widget size={5}>
        <Chart>fofofofofo</Chart>
      </Widget>
      <Widget size={4}>
        <Chart>fofofofofo</Chart>
      </Widget>
      <Widget size={2.5}>
        <Chart>fofofofofo</Chart>
      </Widget>
    </WidgetWrapper>
  </AppLayout>
)

export default Dashboard
