import axios from "axios";

const fetchProjects = async () => {
  try {
    const response = await axios.get(
      "https://api.github.com/users/hennyfeliz/repos?sort=stars&order=desc"
    );
    const sortedProjects = response.data
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6);

    const projectsWithTopics = await Promise.all(
      sortedProjects.map(async (project) => {
        const topicsResponse = await axios.get(
          `https://api.github.com/repos/hennyfeliz/${project.name}/topics`,
          {
            headers: { Accept: "application/vnd.github.mercy-preview+json" },
          }
        );
        return { ...project, topics: topicsResponse.data.names };
      })
    );
    return projectsWithTopics;
  } catch (error) {
    console.error("Error fetching GitHub projects", error);
  }
};

export default fetchProjects;
