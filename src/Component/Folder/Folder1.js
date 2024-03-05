import Window_Header from '../Main Window/Window_Header';
import Window_Content from '../Main Window/Window_Content';

export default function Folder1() {
    return ( 
        <section className="tab_a">
            <div className="about flex justify">
                <article>
                    <Window_Header title="About" image="images/icons/virtual-meeting.png" />
                    <Window_Content content={content} />
                </article>
            </div>
        </section>
    );
}

// this folder content value
const content = (
    <>
        Meet <b>Nurul Nabila</b>, Software Developer with a curious mind and a drive to create well-crafted software solutions. My journey began with a Bachelor's degree in Computer Science, laying the foundation for my current role as a Full-Stack Developer at Cloone Corporation.<br /><br />
        
        Over the past 2 years, I've gained valuable experience in:<br />
        <ul>
            <li>
                Maintaining and enhancing existing systems:<br />
                I wear the "bug slayer" hat, tackling issues and keeping our systems running smoothly.
            </li>
            <li>
                Developing new features and modules:<br />
                Turning client requests into tangible enhancements that improve user experience.
            </li>
            <li>
                Building new systems from scratch:<br />
                Taking on the challenge of architecting and developing fresh solutions.
            </li>
            <li>
                Crafting APIs for mobile apps:<br />
                Connecting backends to mobile experiences seamlessly.
            </li>
        </ul><br />
        
        My trusty tools? <i>HTML, CSS, JavaScript</i> for the front-end, and <i>PHP, MySQL</i> for the back-end. Plus, a dash of <i>Node.js and SQLite</i> for when things get spicy. While I'm comfortable with my current stack, I'm always on the lookout for new challenges. Frameworks like <i>React and Tailwind</i> spark my curiosity and are next on my quest<br />- wish me luck!<br /><br />
        
        When I'm not slinging code, you might find me strategizing world domination in Monopoly Go or exploring the vast landscapes of Genshin Impact (where I may or may not be a secret whale). Building this personal portfolio site is my way of combining my love for coding with a dash of self-expression. Think of it as my digital playground!<br /><br />
        
        I'm excited to connect with fellow developers and explore new opportunities. Let's chat!
    </>
);