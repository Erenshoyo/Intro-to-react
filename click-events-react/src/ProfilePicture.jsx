function ProfilePicture(){
    
    const imageURL = './src/assets/DumbLoid.jpg'

    const handleClick = (e) => e.target.style.display = "none";

    return(
        <div>
            <img onClick={(e) => handleClick(e)} src={imageURL} alt="" />
        </div>
    );
}

export default ProfilePicture