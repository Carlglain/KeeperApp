import { createContext ,useState} from "react";


export const NoteContext = createContext()
export const NoteContextProvider =({children})=>{
const [data,setData] = useState([])
 return <NoteContext.Provider value ={{data,setData}} >
   {children}
 </NoteContext.Provider>
}