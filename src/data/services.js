import {nanoid} from "nanoid"
import {FaPencilAlt,FaReact,FaDatabase} from "react-icons/fa"

export const services=[
  {id:nanoid(),title:'UI/UX Design',body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.",icon:<FaPencilAlt className="text-2xl"/>,color:"bg-blue-400",btnDisabled:true},
  {id:nanoid(),title:'Front End',body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.",icon:<FaReact className="text-2xl"/>,color:"bg-green-500",btnDisabled:false},
  {id:nanoid(),title:'Back End',body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.",icon:<FaDatabase className="text-2xl"/>,color:"bg-red-500",btnDisabled:true},
  
]