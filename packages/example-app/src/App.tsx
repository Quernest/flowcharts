import { FlowChart, type Node } from 'lib'

const colors = [
  '#FFFFFF',
  '#B3B3B3',
  '#D9D9D9',
  '#FFD7D4',
  '#FFE5CC',
  '#FFEFC7',
  '#D7F4DB',
  '#D2FAF7',
  '#D4EDFF',
  '#E7DBFF',
  '#FFD4F2',
]

const nodes: Node[] = [
  {
    id: 'a',
    type: 'custom',
    position: { x: 120, y: 100 },
    data: { label: 'Node A' },
  },
  {
    id: 'b',
    type: 'custom',
    position: { x: 400, y: 100 },
    data: { label: 'Node B' },
  },
  {
    id: 'c',
    type: 'custom',
    position: { x: 680, y: 100 },
    data: { label: 'Node C' },
  },
  {
    id: 'd',
    type: 'custom',
    position: { x: 120, y: 300 },
    data: { label: 'Node D' },
  },
  {
    id: 'e',
    type: 'custom',
    position: { x: 400, y: 300 },
    data: { label: 'Node E' },
  },
  {
    id: 'f',
    type: 'custom',
    position: { x: 680, y: 300 },
    data: { label: 'Node F' },
  },
  {
    id: 'g',
    type: 'custom',
    position: { x: 260, y: 480 },
    data: { label: 'Node G' },
  },
  {
    id: 'h',
    type: 'custom',
    position: { x: 540, y: 480 },
    data: { label: 'Node H' },
  },
]

export default function App() {
  return <FlowChart colors={colors} nodes={nodes} />
}
