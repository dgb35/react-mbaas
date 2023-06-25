import React, {useState} from 'react';
import Backendless from "backendless";

const Register = () => {
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [age, setAge] = useState("")
    const [country, setCountry] = useState("")
    const [gender, setGender] = useState("")

    const register = () => {
        const user = new Backendless.User()

        user.email = email
        user.password = password
        user.name = username
        user.age = age
        user.country = country
        user.gender = gender

        Backendless.UserService.register(user).then((response) => {
            Backendless.Files.upload("test.txt", `users/${username}`)
            Backendless.Files.upload("test.txt", `users/${username}/sharedWithMe`)
        })
    }

    return (
        <div className="container" style={{marginTop: "25px", width: "40%", marginBottom: "30px"}}>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputUsername1" className="form-label">Username</label>
                    <input type="text" className="form-control" id="exampleInputUsername1"
                           onChange={(e) => setUserName(e.target.value)} value={username}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputAge1" className="form-label">Age</label>
                    <input type="number" className="form-control" id="exampleInputAge1"
                           onChange={(e) => setAge(e.target.value)} value={age}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputSex1" className="form-label">Sex</label>
                    <select className="form-select" aria-label="Default select example"
                            onChange={(e) => setGender(e.target.value)} value={gender}>
                        <option selected>Open this select menu</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Other</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputCountry1" className="form-label">Country</label>
                    <input type="text" className="form-control" id="exampleInputCountry1"
                           onChange={(e) => setCountry(e.target.value)} value={country}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                           onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">Repeat Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword2"/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={register}>Register</button>
            </form>
        </div>
    );
};

export default Register;