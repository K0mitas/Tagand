import Footer from "../Components/Footer"
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import { useDispatch } from "react-redux";
import { ButtonTalle } from "../Redux/Slice";
import { useState, useEffect } from "react";
import { Contry } from "../Components/Data";
import tangard from "./../Img/coin.png"

const thresholds = [10, 1000, 10000];
const imageIndices = [0, 1, 2];

export default function Game() {
    const [mec, setMec] = useState(0);
    const count = useSelector((state: RootState) => state.counter.value);
    const addbut = useDispatch();

    useEffect(() => {
        let newMec = 0;
        for (let i = 0; i < thresholds.length; i++) {
            if (count >= thresholds[i]) {
                newMec = imageIndices[i];
            } else {
                break;
            }
        }

        if (newMec !== mec) {
            setMec(newMec);
        }
    }, [count, mec]);


    return (
        <div className="game-countainer">

            <h1 className="title-game">TAGAND</h1>

            <div className="buttomsheet">
                <div className="coin-div">
                    <p className="coin-p">
                        <img className="coin-img" src={tangard} alt="coin" /> : {count}
                    </p>
                </div>

                <div className="contry-div">
                    {Contry[mec] && (
                        <img className="contry-img" src={Contry[mec].size} alt="Armenia" />
                    )}
                </div>

                <button onClick={() => addbut(ButtonTalle())} className="game-btn">+</button>

                <Footer />
            </div>
        </div>
    );
}
