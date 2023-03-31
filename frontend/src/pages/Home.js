import { Route, Routes } from 'react-router-dom';
import Comment from '../components/Comment';
import Complaint from '../components/Complaint';
import Sent from './sent';
import CompList from '../components/List';

const Home = () => {

    return (

        <div className="homeContainer">
            <h1>What's wrong <strong>?</strong></h1>
            <Routes>
              <Route path='/' element={ <Complaint />} />
              <Route path='/replies' element={ <Comment />} />
              <Route path='/sent' element={ <Sent />} />
              <Route path='/issues' element={ <CompList />} />
            </Routes>
            <footer>©2022 Spacechip. All rights reserved.</footer>
        </div>
    )
}

export default Home;