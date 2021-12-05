import { Logger } from '../../services/logger'

export const reportError: Logger['reportError'] = (e: any) => {
  console.error(e)
}