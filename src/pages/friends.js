import React, {useState} from 'react';

const Friends = () => {
    const [users, setUsers] = useState("")
    const [user, setUser] = useState("")
    const [friends, setFriends] = useState("")
    const [findUser, setFindUser] = useState("")
    const [username, setUsername] = useState("")

    Backendless.UserService.getCurrentUser().then(response => {setUser(response) })
    Backendless.Data.of("Users").find().then(response => setUsers(response))
    Backendless.Data.of("Friends").find().then(response => setUsers(response))

    const findByUsername = () => {
        Backendless.Data.of("Users").findByUsername({username: username}).then((response) => {
            setFindUser(response)
        }) }

    return (
        <div className="row">
            <div className="col">
                <h1>Friend list</h1>
                <div>
                    {friends.map((friend: { id: string, accept: boolean }) =>
                        <div className="friend" style="margin-top: 30px" key={friend.id}>
                            <p>username: {users.findById({objectId: friend.friendId}).username}</p>
                            <p>status: <b>{friend.status}</b></p>
                            <button type="submit" className="btn btn-primary">Delete</button>
                        </div>
                    )}
                </div>
            </div>
            <div className="col">
                <h4 style="margin-top: 70px">Add/find new friends</h4>
                <div className="mb-3" style="width: 40%; margin-bottom: 20px">
                    <input type="number" className="form-control" id="exampleInputCreate1" placeholder="username"
                           onChange={(e) => setUsername(e.target.value)}/>/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={findByUsername}>Search</button>

                <div className="friendNew" style="margin-top: 30px">
                    <p>username: {findUser?.username}</p>
                    <p>email: {findUser?.email}</p>
                    <p>gender: {findUser?.gender}</p>
                    <p>age: {findUser?.age}</p>
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </div>
        </div>
        );
};

export default Friends;

const log = () => {
    Backendless.UserService.login(emailLog, passwordLog, true).then((response: any) => {
        console.log(response)
    }).catch((e) => {
        Backendless.Logging.getLogger("SingIn").error(e.message)
    })
}
const saveGeoPoint = () => {
    Backendless.Data.of("Place").save({location: `POINT (${x} ${y})`,
        description: desc, imgUrl: imgUrl}).then((response) => {

    }).catch((e) => {
        Backendless.Logging.getLogger("GeoPoint").error(e.message)
    })
}

const handleFile = () => {
    Backendless.Files.upload(image, `users/${user.name}`).then(() => {
    }).catch((e) => {
        Backendless.Logging.getLogger("createFile").error(e.message)
    })
}