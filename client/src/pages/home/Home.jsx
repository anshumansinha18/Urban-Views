import { AcUnit } from '@material-ui/icons'
import { useState, useEffect } from 'react'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/navbar/Navbar'
import './home.scss';
import axios from 'axios';

const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(
                    `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjE1Njg2OGU0ZWEyMjBmY2NhZThjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTkxMjQwMywiZXhwIjoxNjMwMzQ0NDAzfQ.ht1WiL6MnIVGjmorB8N0M548bvU3dTcEj4o65HkU9ys"
                    }
                }
                );
                setLists(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getRandomLists();
    }, [type, genre]);


    return (
        <div className="home">
            <Navbar />
            <Featured type={type} />
            {lists.map((list) => (
                <List list={list} />
            ))}

        </div>
    )
}

export default Home
