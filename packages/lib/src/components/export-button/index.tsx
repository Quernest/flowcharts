import React from 'react'
import { useDiagramContext } from '../../contexts/diagram-context'
import { useColorContext } from '../../contexts/color-context'
import Button from '../button'

const ExportButton: React.FC = () => {
  const { nodes, edges } = useDiagramContext()
  const { globalColor } = useColorContext()

  const handleExport = () => {
    const json = JSON.stringify({ nodes, edges, globalColor }, null, 2)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'diagram.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <Button variant="contained" color="primary" onClick={handleExport}>
      Export JSON
    </Button>
  )
}

export default ExportButton
