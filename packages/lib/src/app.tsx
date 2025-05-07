import '@xyflow/react/dist/style.css'
import { Edge, Node } from '@xyflow/react'
import DiagramCanvas from './components/diagram-canvas'
import Toolbar from './components/toolbar'
import { ColorProvider } from './contexts/color-context'
import { DiagramProvider } from './contexts/diagram-context'
import Layout from './components/layout'
import './app.css'

export interface FlowChartProps {
  nodes?: Node[]
  edges?: Edge[]
  colors?: string[]
}

export default function FlowChart({ colors, nodes = [], edges = [] }: FlowChartProps) {
  return (
    <ColorProvider colors={colors}>
      <DiagramProvider nodes={nodes} edges={edges}>
        <Layout left={<Toolbar />} right={<DiagramCanvas />} />
      </DiagramProvider>
    </ColorProvider>
  )
}
