import './_Title.scss';

export const Title = ({ title, icon }) => {
    return (
        <div className="title-container">
            {icon}
            <h1>{title}</h1>
        </div>
    );
};
