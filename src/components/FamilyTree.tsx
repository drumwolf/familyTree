import Box from '@mui/material/Box'
import { ReactNode } from 'react'
import '../App.css'
import Generation from './Generation'
import type { PersonType } from '../types'

interface FamilyTreeContainerProps {
  children: ReactNode
}
interface FamilyTreeProps {
  data: PersonType[][][]
}
type GenerationType = PersonType[][]

const setGenerationKey = (generation: GenerationType) => {
  const firstAncestor = generation[0][0]
  const { born } = firstAncestor
  return `generation-${born || 0}`
}

const FamilyTreeContainer = ({ children }: FamilyTreeContainerProps) => (
  <Box sx={{
    width: 1600,
    height: 900,
    backgroundColor: '#B7B7B7',
    borderRadius: 10,
    boxSizing: 'border-box',
    paddingTop: 5,
    paddingX: 2,
  }}>
    {children}
  </Box>
)

const FamilyTree = ({ data }: FamilyTreeProps) => (
  <FamilyTreeContainer>
  {
    data?.map((generation: GenerationType, index: number) =>
      <Generation
        key={setGenerationKey(generation)}
        data={generation}
        index={index}
      />
    )
  }
  </FamilyTreeContainer>
)

export default FamilyTree
