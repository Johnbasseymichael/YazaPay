import { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { GrSubtract } from "react-icons/gr";
function Question() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="question">
      <div className={`title ${isOpen ? 'bg' : ''}`} onClick={() => setIsOpen(prev => !prev)}>
        <h3>What is yazaPay? </h3> {!isOpen ? <IoMdAdd /> : <GrSubtract />}
      </div>

      <div className={`answer ${isOpen ? 'show' : ''}`}>
        <p>yazaPay is a digital payment solution that enables users to make transactions by scanning QR codes with their mobile devices.</p>
      </div>
    </div>
  )
} 

export default Question
