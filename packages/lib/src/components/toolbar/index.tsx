import React from 'react'
import ExportButton from '../export-button'
import ImportButton from '../import-button'
import ColorPicker from '../color-picker'
import styles from './toolbar.module.css'

const Toolbar: React.FC = () => (
  <div className={styles.toolbar}>
    <ExportButton />
    <ImportButton />
    <ColorPicker />
  </div>
)

export default Toolbar
