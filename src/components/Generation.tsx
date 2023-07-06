import Box from '@mui/material/Box'
import Couple from './Couple'
import type { PersonType } from '../types'

interface GenerationProps {
  data: PersonType[][]
  index: number
}
type CoupleType = PersonType[]

const setCoupleKey = (couple: CoupleType, genIndex: number) => {
  const { name, born } = couple[0]
  const nameString = name?.toLowerCase().split(' ').join('-') || ''
  const bornString = born || 0
  return `couple-gen${genIndex}-${nameString}-${bornString}`
}

const Generation = ({ data, index }: GenerationProps) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-around',
      paddingY: '5px',
    }}
  >
  {
    data?.map((couple) =>
      <Couple data={couple} genIndex={index} key={setCoupleKey(couple, index)} />
    )
  }
  </Box>
)

export default Generation