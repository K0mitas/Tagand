import { AchiveID, ContryID } from "./Type";
import alphabet from "./../Img/alphabet.png"
import aac from "./../Img/aac.png"
import solider from "./../Img/solider.png"
import history from "./../Img/history.png"
import union from "./../Img/union.png"
import chruch from "./../Img/church.png"
import tigranakert from "./../Img/tigranakert.png"

import greatarmeniaone from "./../Img/greatarmeniaone.png"
import greatarmeniatwo from "./../Img/greatarmeniatwo.png"
import greatarmeniafri from "./../Img/greatarmeniafri.png"

export const Contry: ContryID [] = [
    {
        id: 1,
        size: greatarmeniaone
    },

    {
        id: 2,
        size: greatarmeniatwo
    },

    {
        id: 3,
        size: greatarmeniafri
    },
]

export const Achiveked: AchiveID [] = [
    {
        id: 1,
        img: alphabet,
        title: "Создание алфавита",
        coin: 5
    },

    {
        id: 2,
        img: aac,
        title: "На стороне истины",
        coin: 15
    },

    {
        id: 3,
        img: solider,
        title: "За Великую Армению !",
        coin: 10
    },

    {
        id: 4,
        img: history,
        title: "История Армении",
        coin: 8
    },

    {
        id: 5,
        img: union,
        title: "За братский союз",
        coin: 12
    },

    {
        id: 6,
        img: chruch,
        title: "Построим церковь",
        coin: 10
    },

    {
        id: 7,
        img: tigranakert,
        title: "Построим столицу",
        coin: 10
    },
]