import type { PersonType } from '../types'

const customClasses = [null, null, 'ancestor-md', 'ancestor-sm', 'ancestor-xs']

export interface PersonProps {
  data: PersonType
  genIndex: number
}

const Person = ({ data, genIndex }: PersonProps) => (
  <div
    className={`ancestor ${customClasses[genIndex]}`}
    style={{ backgroundColor: `#${data?.color}` }}
  >
    <div className="name">{data?.name || '...'}</div>
    <div className="year">{data?.born || '...'}</div>
    <div className="notes">
      <p>{data?.notes}</p>
    </div>
  </div>
)

export default Person
