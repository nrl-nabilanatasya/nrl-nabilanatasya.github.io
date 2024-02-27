import Window_Header from '../Main Window/Window_Header';
import Window_Content from '../Main Window/Window_Content';

export default function Folder2() {
    return ( 
        <section className="tab_b">
            {/* <article>
                <Window_Header title="Skills Style 1" image="https://win98icons.alexmeub.com/icons/png/wia_img_check-1.png" />
                <Window_Content content={content1} />
            </article> */}

            <article>
                <Window_Header title="Frontend Stack" image="https://win98icons.alexmeub.com/icons/png/wia_img_check-1.png" />
                <Window_Content content={frontend} />
            </article>

            <article>
                <Window_Header title="Backend Stack" image="https://win98icons.alexmeub.com/icons/png/wia_img_check-1.png" />
                <Window_Content content={backend} />
            </article>

            <article>
                <Window_Header title="Databases" image="https://win98icons.alexmeub.com/icons/png/wia_img_check-1.png" />
                <Window_Content content={database} />
            </article>

            <article>
                <Window_Header title="Development Tools/Platforms" image="https://win98icons.alexmeub.com/icons/png/wia_img_check-1.png" />
                <Window_Content content={devTool} />
            </article>
        </section>
    );
}

// this folder content value
const content1 = (
    <div className="skills flex">
        <table>
            <tbody>
            <tr>
                <td><h4>Skill #1<br />(40%)</h4></td>
                <td><div className="hp"><div className="hpbar one"></div></div></td>
            </tr>
            <tr>
                <td><h4>Skill #2<br />(100%)</h4></td>
                <td><div className="hp"><div className="hpbar two"></div></div></td>
            </tr>
            <tr>
                <td><h4>Skill #3<br />(60%)</h4></td>
                <td><div className="hp"><div className="hpbar three"></div></div></td>
            </tr>
            <tr>
                <td><h4>Skill #4<br />(20%)</h4></td>
                <td><div className="hp"><div className="hpbar four"></div></div></td>
            </tr>
            <tr>
                <td><h4>Skill #5<br />(80%)</h4></td>
                <td><div className="hp"><div className="hpbar five"></div></div></td>
            </tr>
            </tbody>
        </table>
    </div>
);

const frontend = (
    <div className="follows">
        <div className="person flex justify">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
            <div className="f-info flex center">
                <div className="f-title">HTML</div>
                <div className="f-name">Intermediate</div>
            </div>
        </div>

        <div className="person flex justify">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
            <div className="f-info flex center">
                <div className="f-title">CSS</div>
                <div className="f-name">Intermediate</div>
            </div>
        </div>

        <div className="person flex justify">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            <div className="f-info flex center">
                <div className="f-title">Javascript</div>
                <div className="f-name">Intermediate</div>
            </div>
        </div>

        <div className="person flex justify">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            <div className="f-info flex center">
                <div className="f-title">React</div>
                <div className="f-name">Basic</div>
            </div>
        </div>
        
        <div className="person flex justify">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
            <div className="f-info flex center">
                <div className="f-title">Bootstrap</div>
                <div className="f-name">Basic</div>
            </div>
        </div>
    </div>
);

const backend = (
    <div className="follows">
        <div className="person flex justify">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
            <div className="f-info flex center">
                <div className="f-title">Node.js</div>
                <div className="f-name">Basic</div>
            </div>
        </div>

        <div className="person flex justify">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />
            <div className="f-info flex center">
                <div className="f-title">PHP</div>
                <div className="f-name">Basic</div>
            </div>
        </div>

        <div className="person flex justify">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg" />
            <div className="f-info flex center">
                <div className="f-title">codeigniter</div>
                <div className="f-name">Basic</div>
            </div>
        </div>

        <div className="person flex justify">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-original.svg" />
            <div className="f-info flex center">
                <div className="f-title">Fastify</div>
                <div className="f-name">Basic</div>
            </div>
        </div>
    </div>
);

const database = (
    <div className="follows">
        <div className="person flex justify">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" />
            <div className="f-info flex center">
                <div className="f-title">SQLite</div>
                <div className="f-name">Basic</div>
            </div>
        </div>

        <div className="person flex justify">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" />
            <div className="f-info flex center">
                <div className="f-title">Firebase</div>
                <div className="f-name">Basic</div>
            </div>
        </div>

        <div className="person flex justify">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
            <div className="f-info flex center">
                <div className="f-title">MySQL</div>
                <div className="f-name">Basic</div>
            </div>
        </div>

        <div className="person flex justify">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" />
            <div className="f-info flex center">
                <div className="f-title">Oracle</div>
                <div className="f-name">Basic</div>
            </div>
        </div>
    </div>
);

const devTool = (
    <div className="follows">
        <div className="person flex justify">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
            <div className="f-info flex center">
                <div className="f-title">Github</div>
                <div className="f-name">Basic</div>
            </div>
        </div>
        
        <div className="person flex justify">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" />
            <div className="f-info flex center">
                <div className="f-title">Vercel</div>
                <div className="f-name">Basic</div>
            </div>
        </div>
    </div>
);