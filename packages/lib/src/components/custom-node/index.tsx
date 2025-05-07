import { memo, useState, FC } from 'react'
import { Handle, Position, NodeProps, Connection, Edge, IsValidConnection } from '@xyflow/react'
import { useColorContext } from '../../contexts/color-context'
import { Fragment } from 'react'
import styles from './custom-node.module.css'

interface CustomNodeData {
  label: string
}

const isValidConnection: IsValidConnection = (connection: Connection | Edge): boolean => {
  return 'source' in connection && 'target' in connection && connection.source !== connection.target
}

const CustomNode: FC<NodeProps> = ({ data }) => {
  const [hovered, setHovered] = useState(false)
  const { globalColor } = useColorContext()
  const { label } = data as unknown as CustomNodeData

  const handlePositions = [
    { id: 'top', position: Position.Top, className: styles.handleTop },
    { id: 'bottom', position: Position.Bottom, className: styles.handleBottom },
    { id: 'left', position: Position.Left, className: styles.handleLeft },
    { id: 'right', position: Position.Right, className: styles.handleRight },
  ]

  return (
    <div
      className={`${styles.nodeContainer} ${hovered ? styles.hovered : ''}`}
      style={{
        borderColor: hovered ? '#237FD7' : undefined,
        backgroundColor: globalColor,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className={styles.label}>{label}</span>
      {handlePositions.map(({ id, position, className }) => (
        <Fragment key={id}>
          <Handle
            id={`${id}-target`}
            type="target"
            position={position}
            className={`${styles.handle} ${className}`}
            isValidConnection={isValidConnection}
          />
          <Handle
            id={`${id}-source`}
            type="source"
            position={position}
            className={`${styles.handle} ${className}`}
            isValidConnection={isValidConnection}
          />
        </Fragment>
      ))}
    </div>
  )
}

export default memo(CustomNode)
