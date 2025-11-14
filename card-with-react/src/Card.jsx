import profilePhoto from './assets/DumbLoid.jpg'

function Card (){

    return(
        <div className="card">
            <img className="card-img" src={profilePhoto} alt="Random Loid Image"/>
            <h2 className="card-title">Asif Shahriar Tauhid</h2>
            <p className="card-text">I am a student studying CSE at NSU. I have a disease named "DOOM SCROLLING"</p>
        </div>
    );
}

export default Card