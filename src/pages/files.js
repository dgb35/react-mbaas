import React, {useEffect, useState} from 'react';

const Files = () => {
    const [user, setUser] = useState("")
    const [image, setImage] = useState("")

    Backendless.UserService.getCurrentUser().then(response => {
        setUser(response)
    })

    const handleFile = () => {
        Backendless.Files.upload(image, `users/${user.username}`)
    }

    const [Folder, setFolder] = useState("")

    const createFolder = () => {
        Backendless.Files.upload("reg.txt", `users/${user.username}/${Folder}`)
    }

    const [nameFolderDelete, setNameFolderDelete] = useState("")

    const deleteFolder = () => {
        Backendless.Files.remove(`users/${user.username}/${nameFolderDelete}`)
    }
    const [list, setList] = useState("")
    const fetchList = () => {
        Backendless.Files.listing(`users/${user.username}/sharedWithMe`).then((response) => {
            setList(response) })
    }

    return (
        <div className="container" style={{marginTop: "25px", width: "40%", marginBottom: "30px"}}>
            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Upload your file</label>
                <input className="form-control" type="file" id="formFile"
                       onChange={ (e) => setImage(e.target.files && e.target.files[0]) }/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleFile}
                    style={{marginBottom: "35px"}}>Upload</button>

            <div className="mb-3">
                <label htmlFor="exampleInputCreate1" className="form-label">Create folder or file</label>
                <input type="text" className="form-control" id="exampleInputCreate1"
                       onChange={(e) => setFolder(e.target.value)} value={Folder}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={createFolder}
                    style={{marginBottom: "35px"}}>Create</button>

            <div className="mb-3">
                <label htmlFor="exampleInputDelete1" className="form-label">Delete folder or file</label>
                <input type="text" className="form-control" id="exampleInputDelete1"
                       onChange={(e) => setNameFolderDelete(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={deleteFolder}
                    style={{marginBottom: "35px"}}>Delete</button>

            <h1>Shared with me</h1>
            <button type="submit" className="btn btn-primary" onClick={fetchList}>Refresh</button>
            <div style={{display: "flex", alignItems: "center"}}>
                {list?.map((item: any) => <div> <img src={item.publicUrl} alt=""/> </div> )}
            </div>
        </div>
    );
};

export default Files;