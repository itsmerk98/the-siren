
import Articles from "../Articles"
import Latest from "../Latest"
import Main from "../Main"
import Stories from "../Stories"


const Home = () => {
    return (
        <>
            <Main />
            <Latest />
            {/* <Articles title="Latest Articals"/> */}
            <Articles 
                title="Latest Articals"
                blogheading="Catch waves with an adventure guide"
                comment="Gujavart is vastly underrated and it's a mystery to us why the region isn't more well-known us why the region isn't more well-known"
            />
            <Stories />
        </>
    )
}

export default Home;
