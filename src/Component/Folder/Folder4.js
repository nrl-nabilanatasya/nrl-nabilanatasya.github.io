import Window_Header from '../Main Window/Window_Header';
import Window_Content from '../Main Window/Window_Content';

export default function Folder4() {
    return ( 
        <section className="tab_d">
            <div className="about flex justify">
                <article>
                    <Window_Header title="folder 4 title" image="images/cat.png" />
                    <Window_Content />
                </article>
            </div>
        </section>
    );
}