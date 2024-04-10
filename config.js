import {config} from 'dotenv'

config()
export const PORT = process.env.PORT || 3000
export const DB_PORT  = process.env.DB_PORT || 3306
export const DB_HOST  = process.env.DB_HOST || '31.22.4.50'
export const DB_USER  = process.env.DB_USER || 'mnsolutions_mmc'
export const DB_PASSWORD  = process.env.DB_PASSWORD || 'vXmfL5TuLxaV6PM'
export const DB_NAME  = process.env.DB_NAME || 'mnsolutions_clients'
