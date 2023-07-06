import Person from './Person'
import type { PersonType } from '../types'

interface CoupleProps {
  data: PersonType[]
  genIndex: number
}

interface CoupleDividerProps {
  genIndex: number
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
    <div className="couple">
      <Person data={data[0]} genIndex={genIndex} />
      <CoupleDivider genIndex={genIndex} />
      <Person data={data[1]} genIndex={genIndex} />
    </div>
  )
}

export default Couple
