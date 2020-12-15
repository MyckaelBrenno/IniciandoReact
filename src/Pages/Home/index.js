import Recat from 'react';
import Header from './Components/Header';
import './style.css';

function Home() {
    return (
        <div>
           <Header/>
            <main className='main'>
                <div className='navbar'>navbar</div>
                <div className='feed'>feed</div>
            </main>
        </div>

    );
}
export default Home;