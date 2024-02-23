import Window_Header from '../Main Window/Window_Header';
import Window_Content from '../Main Window/Window_Content';

export default function Folder1() {
    return ( 
        <section className="tab_a">
            <div className="about flex justify">
                <article>
                    <Window_Header title="folder 1 title" image="images/cat.png" />
                    <Window_Content />
                </article>
            </div>
        </section>
    );
}