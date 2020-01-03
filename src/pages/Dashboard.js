import React from 'react'
import styled from 'styled-components'

import AppLayout from '../components/layouts/AppLayout'
import { PageHeading } from '../components/utilities'
import { WidgetWrapper, Widget } from '../components/widgetUtilities'
import WatchList from '../components/widgets/WatchList'

const Chart = styled.div``

const Dashboard = () => (
  <AppLayout>
    <PageHeading title="Dashboard" />
    <WidgetWrapper>
      <Widget size={5} large={true}>
        <Chart>fofofofofo</Chart>
      </Widget>

      <WatchList />

      <Widget size={2.5} large={true}>
        <Chart>fofofofofo</Chart>
      </Widget>
    </WidgetWrapper>
  </AppLayout>
)

export default Dashboard
