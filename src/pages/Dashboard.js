import React from 'react'

import AppLayout from '../components/layouts/AppLayout'
import { PageHeading, WidgetWrapper } from '../components/utilities'
import Column from '../components/layouts/Column'

const Dashboard = () => (
  <AppLayout>
    <PageHeading title="Dashboard" />
    <WidgetWrapper></WidgetWrapper>
  </AppLayout>
)

export default Dashboard
