import { Button, Card, Col, Row } from 'antd';
import React from 'react'
import BarCharts from '../chart/bar';
import AreaCharts from '../chart/area';
import ComposedCharts from '../chart/composedchart';
import CustomCharts from '../chart/custom';
import LineCharts from '../chart/line';
import MultiLineCharts from '../chart/multibar';
import PieCharts from '../chart/pie';
import RadialCharts from '../chart/radial';
import ThreeDimScatterCharts from '../chart/pieangle';
import ScatterCharts from '../chart/scatter';
import TreeCharts from '../chart/treemap';

const MainContent = () => {
  return (
    <div >
      <Button type='primary' className='m-3'>Change Theme</Button>
      <Row gutter={[16, 16]}>
        <Col span={8} >
          <Card className='mb-3 p-8' title="Pie Chart"><PieCharts/></Card>
        </Col>
        <Col span={8}>
          <Card className='mb-3' title="Radial Chart"><RadialCharts/></Card>
        </Col>
        <Col span={8}>
        <Card className='mb-3' title="Bar Chart"><BarCharts/></Card>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col span={16}>
        <Card className='mb-3' title="Compose Chart"><ComposedCharts/></Card>
        </Col>
        <Col span={8}>
          <Card className='mb-3' title="Custom Chart"><CustomCharts/></Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
      <Col span={8}>
          <Card className='mb-3' title="Area Chart"><AreaCharts/></Card>
        </Col>
        <Col span={8}>
          <Card className='mb-3' title="Line Chart"><LineCharts/></Card>
        </Col>
        <Col span={8}>
          <Card className='mb-3' title="Multiline Chart"><MultiLineCharts/></Card>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col span={8}>
          <Card className='mb-3' title="Scatter Chart"><ScatterCharts/></Card>
        </Col>
        <Col span={16}>
          <Card className='mb-3' title="Tree Chart"><TreeCharts/></Card>
        </Col>
      </Row>
        <Row gutter={[16, 16]}>
        <Col span={16}>
        <Card className='mb-3' title="Pie Angle Chart"><ThreeDimScatterCharts/></Card>
        </Col>
        </Row> 
    </div>
  )
}

export default MainContent;
