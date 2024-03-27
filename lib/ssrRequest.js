const ssrRequest = async ({url}) => {
    try {
        const data = await fetch(`https://dashboard.ledcoatingsolutions.com/api/${url}`, { cache: 'force-cache' })
        return await data.json()
    }catch (e) {
        console.log(e)
    }
}

export default ssrRequest