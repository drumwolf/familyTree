import { useState, useEffect } from 'react'
import { fetchUrl } from './services'
import { FamilyTree } from './components'
import type { PersonType } from './types'
import './App.css'

function App() {
  const [familyTree, setFamilyTree] = useState<PersonType[][][]>([])

  useEffect(() => {
    fetchUrl().then((data) => setFamilyTree(data))
  }, [])

  return (
    <FamilyTree data={familyTree} />
  )
}

export default App
