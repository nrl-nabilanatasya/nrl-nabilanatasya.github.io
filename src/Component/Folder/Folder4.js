import Window_Header from '../Main Window/Window_Header';
import Window_Content from '../Main Window/Window_Content';

export default function Folder4() {
    return ( 
        <section className="tab_f">
            <div className="no-posts">
                <article>
                    <Window_Header title="folder 4 title" image="images/icons/folder.png" />
                    <Window_Content content={content} />
                </article>
            </div>
        </section>
    );
}

// this folder content value
const content = (
    <>
        <h1>Opps. There is nothing here.</h1>
        <p>Would you like to go back?</p>
        <div className="go-back flex justify">
            <a className="yes" href="/">Yes</a>
            <a className="no">No</a>
        </div>
    </>
);