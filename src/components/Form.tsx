import React, { FC,ChangeEvent,MouseEvent,useState, Dispatch, SetStateAction } from 'react';
import { SeriesProps } from '../interfaces/SeriesProps';

interface Props {
    seriesList: SeriesProps["seriesList"],
    setSeriesList: Dispatch<SetStateAction<SeriesProps["seriesList"]>>
}

const Form: FC<Props> = ({ seriesList, setSeriesList }) => {

    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [cover, setCover] = useState("")
    const [imdb, setImdb] = useState(0)
    const [seasons, setSeasons] = useState(0)

    const setNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    const setSeasonsHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSeasons(Number(event.target.value));
    }
    const setSeasonsHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSeasons(Number(event.target.value));
    }
    const setSeasonsHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSeasons(Number(event.target.value));
    }
    const setSeasonsHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSeasons(Number(event.target.value));
    }

    return (
        <div>
            form
        </div>
    )
}

export default Form
