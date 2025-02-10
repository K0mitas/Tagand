import Footer from "../Components/Footer";
import Achive from "../Components/Achive";
import { Achiveked } from "../Components/Data";

export default function Addition() {
  return (
    <div className="addition-countainer">

        <h1 className="title-game">TAGAND</h1>

        <div className="buttomsheet">

        <div className="achive-countainer">
            {Achiveked.map((ach) => <Achive key={ach.id} data={ach} />)}
        </div>
            
            <Footer />
        </div>

    </div>
  )
}
