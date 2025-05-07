import React, { useCallback } from 'react'
import { ReactFlow, addEdge, Background, MarkerType, Connection } from '@xyflow/react'
import CustomNode from '../custom-node'
import ConnectionLine from '../custom-connection-line'
import { useDiagramContext } from '../../contexts/diagram-context'

const nodeTypes = { custom: CustomNode }

const DiagramCanvas: React.FC = () => {
  const { nodes, onNodesChange, edges, setEdges, onEdgesChange } = useDiagramContext()

  const onConnect = useCallback(
    (params: Connection) => {
      const { source, target } = params

      if (source !== target) {
        setEdges((eds) =>
          addEdge(
            {
              ...params,
              markerEnd: {
                type: MarkerType.ArrowClosed,
                width: 16,
                height: 16,
                color: '#000',
              },
              style: { strokeWidth: 1, stroke: '#000' },
            },
            eds,
          ),
        )
      }
    },
    [setEdges],
  )

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      connectionLineComponent={ConnectionLine}
      fitView
    >
      <Background bgColor="#FBFBFB" />
    </ReactFlow>
  )
}

export default DiagramCanvas
