import JobPostingHomePage from "../components/JobPostings/JobPostingHomePage/JobPostingHomePage";
import JobSeekerHomePage from "../components/JobSeekers/JobSeekerHomePage/JobSeekerHomePage";

function HomePage() {
  const role = localStorage.getItem("role");

  return (
    <>{role == "job seeker" ? <JobSeekerHomePage /> : <JobPostingHomePage />}</>
  );
}

export default HomePage;
