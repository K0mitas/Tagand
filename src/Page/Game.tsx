import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import { useDispatch } from "react-redux";
import { ButtonTalle, addTalle } from "../Redux/Slice"; // Добавляем setCount для обновления состояния
import { useState, useEffect } from "react";
import { Contry } from "../Components/Data";
import tangard from "./../Img/coin.png";
import { db, doc, setDoc, getDoc } from "./../Components/firebase";

const thresholds = [10, 1000, 10000];
const imageIndices = [0, 1, 2];

export default function Game() {
    const [mec, setMec] = useState(0);
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    const userId = "user1"; // Можно заменить на ID реального пользователя

    // 📌 Функция сохранения очков
    const saveScore = async (score: number) => {
        try {
            await setDoc(doc(db, "scores", userId), { score });
            console.log("Очки сохранены в Firebase:", score);
        } catch (error) {
            console.error("Ошибка сохранения очков:", error);
        }
    };

    // 📌 Функция загрузки очков
    const loadScore = async (): Promise<number> => {
        try {
            const docSnap = await getDoc(doc(db, "scores", userId));
            if (docSnap.exists()) {
                console.log("Загруженные очки:", docSnap.data().score);
                return docSnap.data().score;
            } else {
                return 0;
            }
        } catch (error) {
            console.error("Ошибка загрузки очков:", error);
            return 0;
        }
    };

    // 📌 Загружаем очки при запуске игры
    useEffect(() => {
        const fetchScore = async () => {
            const savedScore = await loadScore(); // Теперь функция найдена
            dispatch(addTalle(savedScore));
        };
    
        fetchScore();
    }, [dispatch]);

    // 📌 Сохраняем очки при их изменении
    useEffect(() => {
        saveScore(count);
    }, [count]);

    // 📌 Логика изменения картинки при наборе очков
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

                <button onClick={() => dispatch(ButtonTalle())} className="game-btn">+</button>

                <Footer />
            </div>
        </div>
    );
}
