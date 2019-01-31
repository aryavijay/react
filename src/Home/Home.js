import  React, {Component} from 'react';
import Header from "../Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftSection from "../LeftSection/LeftSection";
import MainContainer from "../MainContainer/MainContainer";

class Home extends Component{

    render() {
        return (
           <div className="container">
               <Header/>
               <LeftSection/>
               <MainContainer/>
           </div>
        );
    }
}

export default Home;