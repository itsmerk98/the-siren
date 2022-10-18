import React, { createContext } from "react";
import Articles from "../Articles"
import Latest from "../Latest"
import Main from "../Main"
import Stories from "../Stories"
// import Posts from "../../media/Posts";


const BioData = createContext();

const Home = () => {

    return (
        <>
            <Main />
            <Latest />
            {/* <Articles title="Latest Articals"/> */}
            <Articles
                title="Latest Articals"
                display="flex"
            />
            <Stories />
        </>
    )
}

export default Home;
export { BioData };
