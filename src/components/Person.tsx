import { Divider, Stack, Typography } from '@mui/material'
import type { PersonType } from '../types'

export interface PersonProps {
  data: PersonType
  genIndex: number
}

const personWidths   = ['260px','260px','260px','120px','86px']
const personHeights  = ['110px','110px','110px','180px','200px']
const personLineHts  = ['75px','75px','92px','84px','']
const nameFontSize   = ['20px','20px','20px','16px','12px']
const nameLineHts = [null, null, null, '20px', null]
const nameHeights = [null, null, null, '45px', '37px']

const Person = ({ data, genIndex }: PersonProps) => (
  <Stack
    sx={{
      backgroundColor: `#${data?.color || 'FFF'}`,
      border: '1px solid #999',
      borderRadius: '5px',
      height: personHeights[genIndex],
      position: 'relative',
      width:  personWidths[genIndex],
      '&::after': {
        content: '""',
        backgroundColor: 'black',
        bottom: 0,
        right: '50%',
        width: '2px',
        height: personLineHts[genIndex],
        transform: 'translateY(100%)',
        position: 'absolute'
      }
    }}
  >
    {/* ancestor data: name */}
    <Typography
      variant='body2'
      component='h3'
      sx={{
        fontWeight: 'bold',
        fontSize: nameFontSize[genIndex],
        height: nameHeights[genIndex],
        lineHeight: nameLineHts[genIndex],
        padding: '2px 5px',
      }}
    >
      {data?.name || '...'}
    </Typography>

    {/* ancestor data: year of birth */}
    <Typography
      variant='caption'
      component='p'
    >
      {data?.born || '...'}
    </Typography>

    {/* line divider */}
    <Divider
      sx={{ margin: '8px auto', width:'90%' }}
    />

    {/* ancestor data: notes */}
    <Typography
      variant='body2'
      component='p'
      sx={{
        fontSize: '11px',
        fontStyle: 'italic',
        paddingX: '10px',
      }}
    >
      {data?.notes}
    </Typography>
  </Stack>
)

export default Person
