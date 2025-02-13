export const prerender = false;
export const getCurrency = async (currency: string) => {
    const url = `https://pydolarve.org/api/v1/${currency}?format_date=default`
    const res = await fetch(url)
    return await res.json()
    
}

export const getMonitor = async (monitor: string) => {
    const url = `https://pydolarve.org/api/v1/dollar?page=${monitor}&format_date=default`
    const res = await fetch(url)
    return await res.json()

}