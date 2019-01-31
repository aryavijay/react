import React, {Component} from 'react';
import Person from "../Person/Person";
import 'bootstrap/dist/css/bootstrap.min.css';

class MainContainer extends Component {
    state = {
        persons: [
            {name: 'Vijay', age: 37},
            {name: 'Suman', age: 36},
            {name: 'Saransh', age: 6}
        ],
        showPerson: false,
        showPersonFlag: false
    }

    changeReceviedName = (event, index) => {
        let perArr  = [...this.state.persons];
        perArr[index].name = event.target.value;
        this.setState({persons:perArr});
    }

    togglePersonListAlt = () => {
        const show = !this.state.showPersonFlag;
        this.setState({
            showPersonFlag: show,
            showPerson: false
        });
    }

    deletePerson =  (index) =>{
        let perArr  = [...this.state.persons];
        perArr.splice(index, 1);
        this.setState({persons:perArr});
    }

    render() {
        let personList2 = null;
        if (this.state.showPersonFlag) {
            personList2 = (
                <div>
                    <p>Type 2</p>
                    {
                        this.state.persons.map((person, index) => {
                            return (<Person key={"person-"+index}
                                perObj={person}
                                clickCross={() =>{this.deletePerson(index)}}
                                changeNameHandler={
                                    (event)=>{
                                        this.changeReceviedName(event, index)
                                    }
                                }
                            />);
                        })
                    }
                </div>
            )
        }

        return (<legend> Family Member
            <br/>

            <button onClick={this.togglePersonListAlt}>
                Toggle List
            </button>
            {personList2}
            <br/>
            {/* {(this.state.showPerson)?(
                <div>
                    <p>Type 1</p>
            <Person perObj={this.state.persons[0]}/>
            <Person perObj={this.state.persons[1]} clickRef={ () => this.onClickChangeNameHandler('Kumar')}>
                My Hobbies are to play games and watch cartoons.
            </Person>
            <Person perObj={this.state.persons[2]} changeNameHandler={this.changeReceviedName}>
                I love to watch TV and play with toys.
            </Person>
                </div>
            ): null}*/}

        </legend>)
    }
}

export default MainContainer;