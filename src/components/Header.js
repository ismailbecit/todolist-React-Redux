import { useState } from "react"
import { useDispatch } from "react-redux"
import { addItem } from "../redux/todolist/todolist"

const Header = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState()

    const handlerForm = (e) => {
        e.preventDefault()
        if (!name) {
            return
        }
        dispatch(addItem({ name: name }))
        setName("")
    }


    return (
        <div>
            <form onSubmit={handlerForm}>
                <input type="search" value={name ?? ""} onChange={(e) => setName(e.target.value)} />

                <button type="submit">Ekle</button>
            </form>


        </div>
    )
}
export default Header