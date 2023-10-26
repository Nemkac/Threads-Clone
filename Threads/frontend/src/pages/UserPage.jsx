import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"

const UserPage = () => {
    return (
        <>
            <UserHeader />
            <UserPost likes={1120} replies={41} postImg="/post1.png" postTitle="Let's talk about threads"/>
            <UserPost likes={1200} replies={412} postImg="/post2.png" postTitle="Nice tutorial"/>
            <UserPost likes={1231} replies={4112} postImg="/post3.png" postTitle="I love this guy"/>
            <UserPost likes={1310} replies={541} postTitle="This is my first thread"/>
        </>
    )
}

export default UserPage