import React from "react";

export class UserProfile2 extends React.Component {
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
            <div id="user-card" className="border-2 border-black rounded-[10px] p-2 text-center bg-green-400">
                <h2 className="italic text-[rgb(0, 102, 255)] font-bold text-blue-800">{name}</h2>
                <img  className="UserImg m-auto cursor-pointer h-[200px] w-[150px] border-2 border-black rounded-lg hover:scale-200 transition-all duration-2000" src={avatar_url} alt="img"/>
                <p className="text-blue-600"><span className="text-green-600">BIO:- </span>{bio}</p>
                <p className="text-blue-600"><span className="text-red-400">Email: </span>{this.props.email}</p>
                <p><span className="text-red-600 ">Location: </span> {location}</p>
            </div>
        </>)
    }
}

// export default UserProfile2;