import CreateJobPosting from "../components/JobPostings/CreateJobPosting/CreateJobPosting"
import Profile from "../components/Profile/Profile"
function ProfilePage() {
    return (
        <section>
            <Profile />
            <CreateJobPosting />
        </section>
    )
}

export default ProfilePage