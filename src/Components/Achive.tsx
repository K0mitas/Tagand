import { addTalle } from "../Redux/Slice"
import { AchiveID } from "./Type"
import { useDispatch } from "react-redux"

interface AchiveProps {
  data: AchiveID
}

export default function Achive(props: AchiveProps) {
const dispatch = useDispatch()

  return (
    <div>
        <div className="achive-div" onClick={() => dispatch(addTalle(props.data.coin))}>
            <img className="achive-img" src={props.data.img} alt="coinapp" />
            <p className="achive-title">{props.data.title}</p>

            <div className="achive-coin-div">
                <p className="achive-coin">{props.data.coin}</p>
            </div>
        </div>
    </div>
  )
}
