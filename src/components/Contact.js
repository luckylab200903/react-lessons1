import React from "react";
import UserClassnfc from "./UserClassnfc";
import Userfunc from "./Userfunc";
import UserContext from "../utils/UserContext";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
      <div className="p-4 d-flex justify-center self-center">
        <form action="process_form.php" method="post">
          {/* Text Input */}
          <label htmlFor="name">Name:</label>
          <input className="border border-solid border-blue-950" type="text" id="name" name="name" required />
          <br /><br />

          {/* Email Input */}
          <label htmlFor="email">Email:</label>
          <input className="border border-solid border-blue-950" type="email" id="email" name="email" required />
          <br /><br />

          {/* Password Input */}
          <label htmlFor="password">Password:</label>
          <input className="border border-solid border-blue-950" type="password" id="password" name="password" required />
          <br /><br />

          {/* Radio Buttons */}
          <label>Gender:</label>
          <input className="border border-solid border-blue-950" type="radio" id="male" name="gender" value="male" />
          <label htmlFor="male">Male</label>
          <input  className="border border-solid border-blue-950" type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female">Female</label>
          <br /><br />

          {/* Checkboxes */}
          <label>Interests:</label>
          <input className="border border-solid border-blue-950" type="checkbox" id="sports" name="interests[]" value="sports" />
          <label htmlFor="sports">Sports</label>
          <input className="border border-solid border-blue-950" type="checkbox" id="music" name="interests[]" value="music" />
          <label htmlFor="music">Music</label>
          <input className="border border-solid border-blue-950" type="checkbox" id="travel" name="interests[]" value="travel" />
          <label htmlFor="travel">Travel</label>
          <br /><br />

          {/* Textarea */}
          <label htmlFor="comments">Comments:</label>
          <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
          <br /><br />

          {/* Submit Button */}
          <input  className="border border-solid border-blue-950" type="submit" value="Submit" />
        </form>
</div>
        <div className="About-us">
          <h1>Contact us through these</h1>
          <UserClassnfc name={"mansi thakur"} />
          <UserContext.Consumer>
            {data => (
              <h1 className="text-xl font-semibold">{data.loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default ContactUs;






















// import React from "react";
// import UserClassnfc from "./UserClassnfc";
// import Userfunc from "./Userfunc";
// import UserContext from "../utils/UserContext";

// class ContactUs extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {}

//   render() {
//     return (



//       <form action="process_form.php" method="post">
//     <!-- Text Input -->
//     <label for="name">Name:</label>
//     <input type="text" id="name" name="name" required>
//     <br><br>

//     <!-- Email Input -->
//     <label for="email">Email:</label>
//     <input type="email" id="email" name="email" required>
//     <br><br>

//     <!-- Password Input -->
//     <label for="password">Password:</label>
//     <input type="password" id="password" name="password" required>
//     <br><br>

//     <!-- Radio Buttons -->
//     <label>Gender:</label>
//     <input type="radio" id="male" name="gender" value="male">
//     <label for="male">Male</label>
//     <input type="radio" id="female" name="gender" value="female">
//     <label for="female">Female</label>
//     <br><br>

//     <!-- Checkboxes -->
//     <label>Interests:</label>
//     <input type="checkbox" id="sports" name="interests[]" value="sports">
//     <label for="sports">Sports</label>
//     <input type="checkbox" id="music" name="interests[]" value="music">
//     <label for="music">Music</label>
//     <input type="checkbox" id="travel" name="interests[]" value="travel">
//     <label for="travel">Travel</label>
//     <br><br>

//     <!-- Textarea -->
//     <label for="comments">Comments:</label>
//     <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
//     <br><br>

//     <!-- Submit Button -->
//     <input type="submit" value="Submit">
// </form>







//       <div className="About-us">
//         <h1>Contact us through these</h1>
//         <UserClassnfc name={"mansi thakur"} />
//         <UserContext.Consumer>
//           {(data) => (
            
//             <h1 className="text-xl font-semibold">{data.loggedInUser}</h1>
//           )}
//         </UserContext.Consumer>
        
            







//       </div>
//     );
//   }
// }

// export default ContactUs;















// import UserClassnfc from "./UserClassnfc";
// import Userfunc from "./Userfunc";
// import  React from "react";
// import UserContext from "../utils/UserContext";

// class ContactUs extends React.Component{
//     constructor(props)
//     {
//         super(props)
//     }

//     componentDidMount(){
        
//     }
//     render()
//     {
//         return (
//             <div className="About-us">
//             <h1>Contact us through these</h1>
//             <UserClassnfc  name={"mansi thakur"}/>
//             <UserContext.Consumer>
//                 {(data)=>console.log(data)}
//             </UserContext.Consumer>
//             </div>
//         )
//     }
    
// }



// export default ContactUs;