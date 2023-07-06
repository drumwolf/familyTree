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
    const fetchData = async () => {
      const data = await fetchUrl()
      setFamilyTree(data)
    }
    fetchData().catch(console.error)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <FamilyTree data={familyTree} />
    </ThemeProvider>
  )
}

export default App
