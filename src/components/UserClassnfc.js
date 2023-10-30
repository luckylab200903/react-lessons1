import React, { Component } from "react";

class UserClassnfc extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData:{
                name:"Keshav",
                location:"NewYork citry"
            }

        };
    }

    async componentDidMount() {
        // this.timer=setInterval(() => {
        //     console.log("timers is there");
        // }, 1000);
            const response = await fetch("https://api.github.com/users/luckylab200903");
                const data = await response.json();
                this.setState({
                    userData:
                        data
                })
                
                console.log(data);
    }

    componentDidUpdate()
    {
        console.log("updated called");
    }
    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("unmounted");
    }
    render() {
        const {name,location}=this.state.userData;
        const {avatar_url}=this.state.userData;
    
        console.log(name);
        return (
            <div>
                <img src={avatar_url} alt="An image" />
            <h1>{name}</h1>
            <h1>{location}</h1>
                
            </div>
        );
    }
}

export default UserClassnfc;


