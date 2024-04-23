import React from "react";

class UserProfile2 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userInfo: {
                name: "dummy",
                avatar_url: "https//user.com",
                location: "faridabad",
                email: "rohitkumar9643016@gmail.com",
                bio:"dummy data",
            }
        }
    }

    async componentDidMount() {
        // best place to make an Api call
        const data = await fetch("https://api.github.com/users/RohitTheCoderr")
        const json = await data.json()
        this.setState(
            { userInfo: json }
        )
    }

    // whenever we go to another page component like home page component and contact ect then componentWillUnmount is called
    componentWillUnmount(){
        console.log("componentWillUnMount is called");
    }

    render(props) {
        const { name, avatar_url, location,bio } = this.state.userInfo
        return (<>
            <div id="user-card">
                <h2>{name}</h2>
                <img className="UserImg" src={avatar_url} alt="img" />
                 <p><span>Bio:- </span>{bio}</p>
                <p><span>Email: </span>{this.props.email}</p>
                <p><span>Location: </span> {location}</p>
            </div>
        </>)
    }
}

export default UserProfile2;