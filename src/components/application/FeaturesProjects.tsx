import ProjectCard from "./ProjectCard"

const FeaturesProjects = async () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    )
}

export default FeaturesProjects
