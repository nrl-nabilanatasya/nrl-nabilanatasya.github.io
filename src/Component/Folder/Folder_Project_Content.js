export const content1 = (selectedFilter, handleFilter) => {

    // Array of filter options
    const filterOptions = [
        { id: 'a_filter', label: 'All' },
        { id: 'b_filter', label: 'Option 1' },
        { id: 'c_filter', label: 'Option 2' },
        { id: 'd_filter', label: 'Option 3' }
    ];

    // Click handler for filter buttons
    const handleFilterClick = (id) => {
        handleFilter({ target: { id } });
    };
    
    return (
        <div className="content1">
            <span>Filter: </span>
            {filterOptions.map(option => (
                <label key={option.id} htmlFor={option.id} className={`filter-label ${selectedFilter === option.id ? 'active' : ''}`}>
                    <button id={option.id} className={`radio ${selectedFilter === option.id ? 'act' : ''}`} onClick={() => handleFilterClick(option.id)}>
                        <div className="linfo flex center">
                            <div className="ltitle">{option.label}</div>
                        </div>
                    </button>
                </label>
            ))}
        </div>

        // <div className="content1">
        // <span>Filter: </span>
        
        // <label htmlFor='a_filter' className='aa_filter'>
        //     <button className={`radio ${selectedFilter === 'a_filter' ? 'act' : ''}`} onClick={() => handleFilter({ target: { id: 'a_filter' } })}>
        //         <div className="linfo flex center">
        //             <div className="ltitle">All</div>
        //         </div>
        //     </button>
        // </label>
        
        // <label htmlFor='b_filter' className='bb_filter'>
        //     <button className={`radio ${selectedFilter === 'b_filter' ? 'act' : ''}`} onClick={() => handleFilter({ target: { id: 'b_filter' } })}>
        //         <div className="linfo flex center">
        //             <div className="ltitle">Option 1</div>
        //         </div>
        //     </button>
        // </label>

        // <label htmlFor='c_filter' className='cc_filter'>
        //     <button className={`radio ${selectedFilter === 'c_filter' ? 'act' : ''}`} onClick={() => handleFilter({ target: { id: 'c_filter' } })}>
        //         <div className="linfo flex center">
        //             <div className="ltitle">Option 2</div>
        //         </div>
        //     </button>
        // </label>

        // <label htmlFor='d_filter' className='dd_filter'>
        //     <button className={`radio ${selectedFilter === 'd_filter' ? 'act' : ''}`} onClick={() => handleFilter({ target: { id: 'd_filter' } })}>
        //         <div className="linfo flex center">
        //             <div className="ltitle">Option 3</div>
        //         </div>
        //     </button>
        // </label>
        // </div>
    );
    
};

export const content2 = (
    <>
        <img src="images/header1.jpeg" alt='' />
    </>
);

export const content3 = (
    <>
        <img src="images/header1.jpeg" alt='' />
    </>
);

export const content4 = (
    <>
        <img src="images/header1.jpeg" alt='' />
    </>
);