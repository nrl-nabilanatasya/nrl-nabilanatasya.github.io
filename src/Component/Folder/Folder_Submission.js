import Window_Header from '../Main Window/Window_Header';
import Window_Content from '../Main Window/Window_Content';

export default function Folder_Submission() {
    return ( 
        <section className="tab_g">
            <article>
                <Window_Header title="Ask Form" image="images/icons/conversation.png" />
                <Window_Content content={content1} />
            </article>

            <article>
                <Window_Header title="Submission Form" image="images/icons/conversation.png" />
                <Window_Content content={content2} />
            </article>
        </section>
    );
}

// this folder content value
const content1 = (
    <>
        <h1>Ask me anything</h1>
        <p>Ask form here..</p>
    </>
);

const content2 = (
    <>
        <h1>Submit a post</h1>
        <p>Submission form here..</p>
    </>
);