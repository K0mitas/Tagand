import { NavLink } from "react-router-dom"
import home from "./../Img/home.png"
import shop from "./../Img/shop.png"
import info from "./../Img/info.png"

export default function Footer() {
  return (
    <div className="foot">
        <ul className="foot-ul">

            <NavLink to="/">
                <li className="foot-li"><img className="panel-btn-img" src={home} alt="" /></li>
            </NavLink>

            <NavLink to="/addition">
                <li className="foot-li"><img className="panel-btn-img" src={shop} alt="" /></li>
            </NavLink>

            <NavLink to="/other">
                <li className="foot-li"><img className="panel-btn-img" src={info} alt="" /></li>
            </NavLink>
        </ul>
    </div>
  )
}
