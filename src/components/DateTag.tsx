import Tag from './Tag'
import styles from './DateTag.module.scss'

const ISO_YEAR_MONTH_LENGTH = 7
const ISO_YEAR_MONTH_DAY_LENGTH = 10

interface DateTagProps {
  dateIsoString: string
  includeDay?: boolean
  /** Replaces the default spacing; use when the host provides its own. */
  className?: string
}

const DateTag = ({
  dateIsoString,
  includeDay = false,
  className,
}: DateTagProps) => (
  <Tag className={className ?? styles.dateTag} secondary>
    <time dateTime={dateIsoString}>
      {dateIsoString.slice(
        0,
        includeDay ? ISO_YEAR_MONTH_DAY_LENGTH : ISO_YEAR_MONTH_LENGTH,
      )}
    </time>
  </Tag>
)

export default DateTag
