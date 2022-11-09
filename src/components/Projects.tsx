import {DiDjango,DiReact} from "react-icons/di";
import {SiDjango} from "react-icons/si";

const Projects = ()=>{
    const styles = {
        tag:"flex items-center space-x-1 bg-indigo-800 rounded-md py-1 px-3 text-white mx-2 my-1",
        card:"max-w-sm border-2 border-indigo-800 rounded-lg p-3 shadow-lg my-4 mx-2",
        cardTitle:"font-bold text-2xl text-indigo-800",
        tagsContainer:"flex items-center whitespace-nowrap flex-wrap items-center justify-start"
    }

    return (
        <div className={"text-center"}>
            <div id={"projects"} className={"text-indigo-800 font-bold text-3xl my-2"}>Projects</div>
            <div className={"flex flex-col items-center md:flex-row md:justify-center flex-wrap"}>
                <div className={styles.card}>
                    <div className={styles.cardTitle}>Aarbi Corner</div>
                    <div>An eCommerce Site with backend in Django and Frontend in React. For API's, Django Rest Framework is used</div>
                    <div className={styles.tagsContainer}>
                        <div className={styles.tag}><SiDjango /><span>Django</span></div>
                        <div className={styles.tag}><DiDjango /><span>Django Rest Framework</span></div>
                        <div className={styles.tag}><DiReact/><span>React</span></div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardTitle}>Aarbi Corner</div>
                    <div>An eCommerce Site with backend in Django and Frontend in React. For API's, Django Rest Framework is used</div>
                    <div className={styles.tagsContainer}>
                        <div className={styles.tag}><SiDjango /><span>Django</span></div>
                        <div className={styles.tag}><DiDjango /><span>Django Rest Framework</span></div>
                        <div className={styles.tag}><DiReact/><span>React</span></div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardTitle}>Aarbi Corner</div>
                    <div>An eCommerce Site with backend in Django and Frontend in React. For API's, Django Rest Framework is used</div>
                    <div className={styles.tagsContainer}>
                        <div className={styles.tag}><SiDjango /><span>Django</span></div>
                        <div className={styles.tag}><DiDjango /><span>Django Rest Framework</span></div>
                        <div className={styles.tag}><DiReact/><span>React</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects;