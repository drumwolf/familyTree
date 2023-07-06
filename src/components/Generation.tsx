import Couple from './Couple'
import type { PersonType } from '../types'

interface GenerationProps {
  data: PersonType[][]
  index: number
}
type CoupleType = PersonType[]

const setCoupleKey = (couple: CoupleType, genIndex: number) => {
  const { name, born } = couple[0]
  return `couple-gen${genIndex}-${name?.toLowerCase().split(' ').join('-')}-${born || 0}`
}

const Generation = ({ data, index }: GenerationProps) => (
  <div className="generation">
  {
    data?.map((couple) =>
      <Couple data={couple} genIndex={index} key={setCoupleKey(couple, index)} />
    )
  }
  </div>
)

export default Generation