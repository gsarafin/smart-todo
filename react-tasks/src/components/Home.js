// src/components/Home.js

// TODO Make a better home

function Home() {
    return (
        <div className="container-fluid" >
            <div className="d-flex justify-content-center">
            <img alt="Home Screen" src={process.env.PUBLIC_URL + "/smarttasker.svg"} width={'50%'} className="block align-top"/>
            </div>
            <div className="my-4 d-flex justify-content-center">
                <main>
                    <p>This is the home of SmartTasker - a smart to do list to help you stay organised.</p>
                </main>
            </div>
        </div>
    );
};

export default Home;