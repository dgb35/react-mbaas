import React, {useState} from 'react';

const Login = () => {
    const [usernameLog, setUsernameLog] = useState("")
    const [passwordLog, setPasswordLog] = useState("")
    const [checkMe, setCheckMe] = useState("")

    const signIn = () => {
        Backendless.UserService.login(usernameLog, passwordLog,
            false).then((response: any) => {
            console.log(response) }).catch((e) => {
            alert(e)
        })
    }

    return (
        <div className="container" style={{marginTop: "25px", width: "25%", marginBottom: "30px"}}>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputUsername1" className="form-label">Username</label>
                    <input type="text" className="form-control" id="exampleInputUsername1"
                           onChange={(e) => setUsernameLog(e.target.value)} value={usernameLog}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                           onChange={(e) => setPasswordLog(e.target.value)} value={passwordLog}/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"
                           onChange={(e) => setCheckMe(e.target.value)} value={checkMe}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={signIn}>Sign In</button>
            </form>
        </div>
    );
};

export default Login;