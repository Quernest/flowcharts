import { ConnectionLineComponentProps } from '@xyflow/react'

function ConnectionLine({ fromX, fromY, toX, toY }: ConnectionLineComponentProps) {
  return (
    <>
      <path
        fill="none"
        stroke="#4FACFF"
        strokeWidth={1}
        className="animated"
        d={`M${fromX},${fromY} C ${fromX} ${toY} ${fromX} ${toY} ${toX},${toY}`}
      />
      <circle cx={toX} cy={toY} fill="#fff" r={3} stroke="#4FACFF" strokeWidth={1} />
    </>
  )
}

export default ConnectionLine
