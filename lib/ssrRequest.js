const ssrRequest = async () => {
    try {
        const data = await fetch('https://palmyra-staging.up.railway.app/store/products?limit=100', { cache: 'force-cache' })
        return await data.json()
    }catch (e) {
        console.log(e)
    }
}

export default ssrRequest