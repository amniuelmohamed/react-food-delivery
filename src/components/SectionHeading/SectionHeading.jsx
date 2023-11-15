import "./SectionHeading.css";

const SectionHeading = (props) => {
    return (
        <div
            className={`section-heading mb-5 ${
                props.centered ? "text-center mx-auto" : ""
            }`}
        >
            {props.subtitle ? (
                <h5 className="color-primary">{props.subtitle}</h5>
            ) : null}
            <h2>{props.title}</h2>
            {props.description ? (
                <p
                    className={`${
                        props.centered ? "mx-auto" : ""
                    } mb-0 mt-4 color-grey`}
                >
                    {props.description}
                </p>
            ) : null}
        </div>
    );
};

export default SectionHeading;
