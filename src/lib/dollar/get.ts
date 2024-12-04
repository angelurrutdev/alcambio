import { query } from "./query"

export const get = () => {
    return query('format_date=default')
}