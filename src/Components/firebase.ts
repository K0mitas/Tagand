import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCX00iXEka5DWeKR9Bd9kdGHX2s7Wmjs30",
  authDomain: "tagand-18c91.firebaseapp.com",
  projectId: "tagand-18c91",
  storageBucket: "tagand-18c91.firebasestorage.app",
  messagingSenderId: "G-P1LKTVJTRS",
  appId: "1:1043227878078:web:215f4c337795d011b6f4ef",
};

export const loadScore = async (userId: string): Promise<number> => {
  try {
    const docSnap = await getDoc(doc(db, "scores", userId));
    if (docSnap.exists()) {
      return docSnap.data().score;
    } else {
      return 0;
    }
  } catch (error) {
    console.error("Ошибка загрузки очков:", error);
    return 0;
  }
};

export const saveScore = async (userId: string, score: number) => {
  try {
    await setDoc(doc(db, "scores", userId), { score });
    console.log("Очки сохранены:", score);
  } catch (error) {
    console.error("Ошибка сохранения очков:", error);
  }
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, doc, setDoc, getDoc };
