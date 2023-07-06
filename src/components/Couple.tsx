import Box from '@mui/material/Box'
import Person from './Person'
import type { PersonType } from '../types'

interface CoupleProps {
  data: PersonType[]
  genIndex: number
}

interface CoupleDividerProps {
  genIndex: number
}

const bottomRowBorder = {
  content: '""',
  backgroundColor: 'black',
  bottom: '-2px',
  borderRadius: '2px',
  transform: 'translateX(50%)',
  right: '50%',
  position: 'absolute',
  width: '178px',
  height: '2px',
}

const CoupleDivider = ({ genIndex }: CoupleDividerProps) =>
  <div className={`divider divider-${genIndex}`} />

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
        '&::before': genIndex === 4 ? bottomRowBorder : undefined
      }}
    >
      <Person data={data[0]} genIndex={genIndex} />
      <CoupleDivider genIndex={genIndex} />
      <Person data={data[1]} genIndex={genIndex} />
    </Box>
  )
}

export default Couple
