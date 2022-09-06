import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../firebase';
import Navigationbar from "./navbar";
import Banner from "./banner";
/*import Booking from './booking';*/
import CardSection from "./cards";
import Specials from "./specials";
/*import Reviews from "./reviews";*/
import Footer from "./footer";


function Home () {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className="home-container">
            <h1>The Manhattan</h1>
            <h1>Welcome {user?.email}</h1>
            <button onClick={()=>auth.signOut()}>Sign Out</button>
            <Navigationbar/>
            <Banner/>
            <CardSection/>
            <Specials/>
            <Footer/>
        </div>
    )
};

export default Home;