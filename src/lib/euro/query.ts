const PYDOLAR = 'https://pydolarve.org/api/v1/euro?format_date=default' 
// 'https://pydolarve.org/api/v1/dollar?       monitor=bcv&format_date=default' \

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


