import Footer from "../Components/Footer";
import tagand from "./../Img/coin.png"

export default function Other() {
  return (
    <div className="other-countainer">
        <div className="div-other">
            <h1 className="other-h1">Игра Таганд основана в честь царя Великой Армении Тиграна II </h1>

            <p className="other-p">Тапая кнопку и получая определённое количество очков, 
               ты будешь увеличивать размер Великой Армении, нам угрожает Римская Империя и Парфия,
               нельзя подвести Тиграна !
            </p>

            <div className="other-img-div">
                <img className="other-img" src={tagand} alt="coin" />
            </div>
            
             <Footer />
        </div>
    </div>
  )
}
