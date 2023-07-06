import { useState, useEffect } from 'react'
import { createTheme, ThemeProvider } from '@mui/material';
import { fetchUrl } from './services'
import { FamilyTree } from './components'
import type { PersonType } from './types'
import './App.css'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Inter','system-ui','Avenir','Helvetica','Arial','sans-serif',
    ].join(','),
  },
})

function App() {
  const [familyTree, setFamilyTree] = useState<PersonType[][][]>([])

  useEffect(() => {
    fetchUrl().then((data) => setFamilyTree(data))
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <FamilyTree data={familyTree} />
    </ThemeProvider>
  )
}

export default App
