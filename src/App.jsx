
import { Suspense } from 'react'
import './App.css'
import Index from './components/bottles'
import Bottles from './components/bottles/Bottles'


// const bottlesPromise = fetch('./Bottles.json').then(res => res.json())
// const bottlesPromise2 = fetch('https://raw.githubusercontent.com/wdmoriom/bottles.data2/refs/heads/main/public/Bottles.json').then(res => res.json())

const bottlesPromise = fetch('Bottles.json').then(res => res.json())

function App() {

  // const bottles = [
  //   {id:1, name : "nike bottoles", price: 300, colour : 'pink'}
  //   {id:2, name : "nike bottoles", price: 300, colour : 'pink'}
  //   {id:3, name : "nike bottoles", price: 300, colour : 'pink'}
  //   {id:4, name : "nike bottoles", price: 300, colour : 'pink'}
  //   {id:5, name : "nike bottoles", price: 300, colour : 'pink'}
  // ]

 
  

  return (
    <>

      <h1>Bye Awesome Water Bottles</h1>
      <Index/>
      <Suspense fallback={<h3>Bottles are loading....</h3>}>
        <Bottles  bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
     

 
    </>
  )
}

export default App
