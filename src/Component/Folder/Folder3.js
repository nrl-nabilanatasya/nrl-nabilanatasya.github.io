import { useState } from 'react';

import Window_Header from '../Main Window/Window_Header';
import Window_Content from '../Main Window/Window_Content';
import Window_Footer from '../Main Window/Window_Footer';

import { content1, content2, content3, content4 } from './Folder3_Content'; // Importing content constants

export default function Folder3() {
    const [selectedFilter, setSelectedFilter] = useState('a_filter'); // Initial selection

    const handleFilter = (event) => {
        setSelectedFilter(event.target.id);
    };

    // Filters and corresponding option classes
    const mini_windows = [
        { filter: 'b_filter', optionClass: 'option_1', title: 'First title', content: content2 },
        { filter: 'b_filter', optionClass: 'option_1', title: 'Second title', content: content3 },
        { filter: 'c_filter', optionClass: 'option_2', title: 'Third title', content: content4 },
        { filter: 'd_filter', optionClass: 'option_3', title: 'Fourth title', content: content4 }
    ];

    // Function to determine whether an option should be hidden
    const hideOption = (filter) => selectedFilter !== filter && selectedFilter !== 'a_filter';

    return ( 
        <section className="tab_c">
            <div className="explore flex justify">
                <article>
                    <Window_Header title="Folder Filter" image="images/icons/project.png" />
                    <Window_Content content={content1(selectedFilter, handleFilter)} />
                </article>

                {mini_windows.map(({ filter, optionClass, title, content }) => (
                    <div key={title} className={`half ${optionClass} ${hideOption(filter) ? 'hidden' : ''}`}>
                        <article>
                            <Window_Header title={title} image="images/icons/project.png" />
                            <Window_Content content={content} />
                            <Window_Footer />
                        </article>
                    </div>
                ))}
            </div>
        </section>
    );
}