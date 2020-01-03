import React from 'react'
import styled from 'styled-components'

import AppLayout from '../components/layouts/AppLayout'
import { PageHeading } from '../components/utilities'
import { WidgetWrapper, Widget, WidgetHeading } from '../components/widgetUtilities'
import WatchList from '../components/widgets/WatchList'

const Chart = styled.div``

const Dashboard = () => (
  <AppLayout>
    <PageHeading title="Dashboard" />
    <WidgetWrapper>
      <Widget size={5} large={true}>
        <Chart>A FANCY CHART WITH FANCY DATA</Chart>
      </Widget>

      <WatchList />

      <Widget size={2.5} large={true}>
        <Chart>
          <WidgetHeading title="Notifications" />
        </Chart>
      </Widget>

      <Widget size={3.833} small={true}>
        <Chart>
          <WidgetHeading title="Learning Center" />
        </Chart>
      </Widget>

      <Widget size={3.833} small={true}>
        <Chart>
          <WidgetHeading title="Chat" hasButton={true} />
        </Chart>
      </Widget>

      <Widget size={3.833} small={true}>
        <Chart>
          <WidgetHeading title="News" />
        </Chart>
      </Widget>
    </WidgetWrapper>
  </AppLayout>
)

export default Dashboard
