import React from 'react';
import '../styling/President.css';
import {
     Card, CardImg, CardText, CardBody,
     CardTitle, CardSubtitle, CardFooter, Button 
    } from 'reactstrap';

export default class President extends React.Component {
    handleUpVote = () => {
        this.props.upVote(this.props.id);
    }
    render() {
        const {name, startDate, endDate, vicePresident, image, votes, id} = this.props;
        return (
          <div style={{margin: '1rem', background: "#000", width: '250px', color: 'white'}}>
            <Card>
                <CardImg top width="250px" src={image} alt="Card image cap" />
                <CardBody style={{margin: '1rem'}}>
                <CardTitle>
                    {name}
                </CardTitle>
                <CardSubtitle>
                    <p>{startDate} - {endDate}</p>
                </CardSubtitle>
                <CardText>
                    Vice Presidents
                    <ul>
                        {vicePresident.map((vp, i) => {
                            return <li key={i}>{vp}</li>
                        })}
                    </ul>
                    <div>
                        <h3>Votes 
                            <span> {votes}</span>
                        </h3>
                    </div>
                </CardText>
                </CardBody>
                <CardFooter>
                    <Button onClick={this.handleUpVote} style={{background: 'green', padding: '1rem', width: '250px', borderRadius: '5px', cursor: 'pointer'}}> 
                        Up Vote 
                    </Button>
                </CardFooter>
            </Card>
        </div>  
        )
    }
}