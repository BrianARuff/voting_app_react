import React from 'react';
import President from './President';
import '../styling/PresidentList.css'

export default class PresidentList extends React.Component {
    state = {
        presidentData: this.props.presidentData,
    }
    handleUpVote = (id) => {
        console.log(this.state.presidentData);
        const nextPresData = this.state.presidentData.map(president => {
            if(id === president.id){
                return Object.assign({}, president, {
                    votes: Number(president.votes) + 1,
                });
            } else {
                return president
            }
        });
        this.setState({presidentData: nextPresData })
        console.log(nextPresData);
    }
    render(){
        const {presidentData} = this.state;
        const uniqueKeyNumber = Math.random().toString(36).substr(2,9);
        const presidentComponent = presidentData.sort((a,b) => b.votes - a.votes).map(president => <President key={'_' + uniqueKeyNumber + president.name + '_' + uniqueKeyNumber} {...president} upVote={this.handleUpVote} />)
        console.log(presidentComponent);
        return(
            <div className="container">
                {presidentComponent}
            </div>
        )
    }
}