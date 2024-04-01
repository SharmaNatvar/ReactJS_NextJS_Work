async function fatchDat(){
const res = await fetch("https://fakestoreapi.com/products/")
return res.json()
}

const LearnFatchData = async () => {
    const storeData = await fatchDat()
    return (
    <>

    </>
  )
}

export default LearnFatchData