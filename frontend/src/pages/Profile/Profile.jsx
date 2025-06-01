import "./Profile.css";


const Profile = () => {
    return (<>
        <div className="profile-container">
            <div>
                <h1>Account</h1>
                <p>pfp</p>
                <div className="container text-center">
                    <div class="row mb-3">
                        <div class="col-4"> 
                            <label for="inputPassword6" class="col-form-label">Username</label>
                        </div>
                        <div class="col-8">
                            <input type="text" class="form-control"></input>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-4"> 
                            <label for="inputPassword6" class="col-form-label">Email</label>
                        </div>
                        <div class="col-8">
                            <input type="email" class="form-control"></input>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-4"> 
                            <label for="inputPassword6" class="col-form-label">Phone Number</label>
                        </div>
                        <div class="col-8">
                            <input type="number" class="form-control"></input>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-4"> 
                            <label for="inputPassword6" class="col-form-label">Password</label>
                        </div>
                        <div class="col-8">
                            <input type="password" class="form-control"></input>
                        </div>
                    </div>
                        <div class="row mb-3">
                            <div className="col-4">
                                <button type="button" class="btn btn-danger logout">Log Out</button>
                            </div>
                            <div className="col-8">
                                <button type="button" class="btn btn-info edit">Edit</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Profile;