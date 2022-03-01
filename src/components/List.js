import { useSelector, useDispatch } from "react-redux"
import { delItem, activePassive, Selector } from "../redux/todolist/todolist"

const List = () => {
    const dispatch = useDispatch()
    const items = useSelector(Selector)
    console.log(items)
    return (
        <div>
            <table>
                {items.map((item) => (
                    <tr key={item.id}>
                        <input type="checkbox" defaultChecked={item.active ? true : false} onChange={() => dispatch(activePassive(item.id))} />
                        <td style={{ textDecoration: item.active === true ? "line-through" : "" }}>{item.name}
                            <span style={{ color: "red" }} onClick={() => dispatch(delItem(item.id))} >
                                x
                            </span>
                        </td>
                    </tr>
                ))}
            </table>
        </div >
    )
}
export default List