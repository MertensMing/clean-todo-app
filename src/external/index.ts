import { env } from 'process'
import { API } from '../services/api'
import { Logger } from '../services/logger'
import * as apiImpl from './api'
import * as loggerImpl from './logger'

export const api: API = env.NODE_ENV === 'test' ? {} as any : apiImpl

export const logger: Logger = env.NODE_ENV === 'test' ? {} as any : loggerImpl

