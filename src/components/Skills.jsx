export default function Skills() {
    const skills = {
    frontend: ["React", "HTML", "CSS", "JavaScript"],
    backend: ["PHP"],
    database: ["MySQL"],
    tools: ["GitHub"],
    others: ["Typing Expert", "Problem Solving (CodeChef, LeetCode)"]
};

    return (
        <>
            <section className="section" id="skills">
                <h2 className="section-title">Skills</h2>
                <div className="skill-grid">
                    {Object.entries(skills).map(([category, items]) => (
                        <div className="skill-category" key={category}>
                            <h4>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </h4>
                            <div className="skill-items">
                                {items.map((item, index) => (
                                    <div className="skill-card" key={index}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>      
        </>
    );
}