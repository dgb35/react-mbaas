import React, {useState} from 'react';

const Profile = () => {
    const [user, setUser] = useState("")

    Backendless.UserService.getCurrentUser().then(response => {
        setUser(response)
        console.log(response)
    })

    const updateUser = () => { Backendless.UserService.update(user) }

    const [x, setX] = useState("")
    const [y, setY] = useState("")
    const [desc, setDesc] = useState("")
    const [imgUrl, setImgUrl] = useState("")

    const saveGeoPoint = () => {
        Backendless.Data.of("Place").save({
            location: `POINT (${x} ${y})`,
            description: desc, imgUrl: imgUrl}).then((response) => {
        }).catch((e) => {
            alert(e) })
    }

    if (user) {
    return (
        <div className="container" style="margin-top: 25px; width: 60%; margin-bottom: 30px">
            <div className="row">
                <div className="col">
                    <h1>Hello dean_w</h1>
                    <div>
                        <div className="mb-3" style="width: 40%; margin-bottom: 20px">
                            <label htmlFor="exampleInputCreate1" className="form-label">Age</label>
                            <input type="number" className="form-control" id="exampleInputCreate1" placeholder={user.age}
                            onChange={(e) => setUser({...user, age: e.target.value})}/>
                        </div>

                        <div className="mb-3" style="width: 40%; margin-bottom: 20px">
                            <label htmlFor="exampleInputDelete1" className="form-label">Country</label>
                            <input type="text" className="form-control" id="exampleInputDelete1" placeholder={user.country}
                                   onChange={(e) => setUser({...user, country: e.target.value})}/>
                        </div>

                        <label htmlFor="selectGender" className="form-label" style=" margin-top: 10px">Gender</label>
                        <select className="form-select" aria-label="Default select example"
                                style="width: 40%; margin-bottom: 30px;" id="selectGender"
                                onChange={(e) => setUser({...user, gender: e.target.value})}>
                            <option selected>{user.gender}</option>
                            <option value="1">Female</option>
                        </select>

                        <button type="submit" className="btn btn-primary"
                                style="margin-bottom: 40px" onClick={updateUser}>Update
                        </button>
                    </div>
                </div>
                <div className="col">
                    <h3 style="margin-top: 70px">Set coodrinates</h3>
                    <div className="mb-3" style="width: 40%; margin-bottom: 20px">
                        <input type="number" className="form-control" id="exampleInputCreate1" placeholder="x"
                        value={x} onChange={(e) => setX(e.target.value)}/>
                    </div>
                    <div className="mb-3" style="width: 40%; margin-bottom: 20px">
                        <input type="number" className="form-control" id="exampleInputCreate1" placeholder="y"
                               value={y} onChange={(e) => setY(e.target.value)}/>
                    </div>
                    <div className="mb-3" style="width: 40%; margin-bottom: 20px">
                        <input type="text" className="form-control" id="exampleInputCreate1" placeholder="description"
                               value={desc} onChange={(e) => setDesc(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary"
                            style="margin-bottom: 40px" onClick={saveGeoPoint}>Save
                    </button>
                </div>
            </div>
        </div>
    )};
};

export default Profile;