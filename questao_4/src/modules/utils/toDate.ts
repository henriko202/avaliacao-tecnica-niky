import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import utc from 'dayjs/plugin/utc'

dayjs.extend(customParseFormat)
dayjs.extend(utc)

export function toDate(date: string | Date): Date {
  if (!dayjs(date, 'DD/MM/YYYY').isValid()) {
    throw new Error('Data Inválida')
  }
  const dataNova = dayjs(date, 'DD/MM/YYYY').utc().startOf('day').toDate()
  return dataNova
}
