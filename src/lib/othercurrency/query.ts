const PYDOLAR = 'https://pydolarve.org/api/v1/dollar?page=italcambio&format_date=default' 

export const query = (path: string) => {
    const url = `${PYDOLAR}${path}`
    return fetch(
        url, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(res => res.json())
}
