
import './homepage.css'

import First from './sections/first'
import Second from './sections/second'
import Third from './sections/third'
import Fouth from './sections/fouth'
import Five from './sections/five'
import Footer from './sections/footer'
import Six from './sections/six'


export default function Home() {


  return (
    <div className='  text-center text-black overflow-x-hidden' >
      <First></First>
      <Second></Second>
      <Third></Third>
      <Fouth></Fouth>
      <Five></Five>
      <Six></Six>
      <Footer></Footer>
    </div>
  )
}
