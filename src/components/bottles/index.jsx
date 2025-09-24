import React, { Suspense } from 'react'

const fetchData = ( async () => {
 const data = await fetch ('http://localhost:3000/products')
 return  data.json();
}
) ()

const Index = () => {
  return (
    <div>Safrin</div>

    

  )
}

export default Index;