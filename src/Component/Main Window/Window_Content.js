export default function Window_Content({content}) {
    return ( 
        <div className="padding">
            <div className="inner-padding">
                {content}
            </div>
        </div>
    );
}