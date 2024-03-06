import Folder_Post_Header from './Folder_Post_Header';
import Folder_Post_Content from './Folder_Post_Content';

export default function Folder_Post() {
    return ( 
        <section className="tab_e">
            <div className="entry">
                <article post-type="text">
                    <Folder_Post_Header title="Post 1" description="greetings.txt" image="images/icons/blog.png" />
                    <Folder_Post_Content />
                </article>
            </div>
            
        </section>
    );
}