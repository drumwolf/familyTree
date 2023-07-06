import { Box, Divider } from '@mui/material'
import Person from './Person'
import type { PersonType } from '../types'

interface CoupleProps {
  data: PersonType[]
  genIndex: number
}

interface CoupleDividerProps {
  genIndex: number
}

const dividerWidths = ['', '500px', '127px', '74px', '12px', '3px']
const dividerTop = ['', '52px', '52px', '70px', '63px']

const CoupleDivider = ({ genIndex }: CoupleDividerProps) => (
  <Divider
    flexItem
    sx={{
      backgroundColor: 'black',
      height: '2px',
      top: dividerTop[genIndex],
      width: dividerWidths[genIndex],
      position: 'relative',
    }}
  />
)

const Couple = ({ data, genIndex }: CoupleProps) => {
  if (data.length === 1) {
    return (
      <Person data={data[0]} genIndex={genIndex} />
    )
  }
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        marginTop: '10px',
        position: 'relative',
        '&::before': genIndex === 4 ? {
          content: '""',
          backgroundColor: 'black',
          bottom: '-2px',
          borderRadius: '2px',
          transform: 'translateX(50%)',
          right: '50%',
          position: 'absolute',
          width: '178px',
          height: '2px',
        } : undefined
      }}
    >
      <Person data={data[0]} genIndex={genIndex} />
      <CoupleDivider genIndex={genIndex} />
      <Person data={data[1]} genIndex={genIndex} />
    </Box>
  )
}

export default Couple
