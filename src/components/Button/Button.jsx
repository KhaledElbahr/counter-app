
export const Button = (props) => {

    // console.log(props);
    let btnClass = `btn btn-outline-${props.bgColor} mx-5`;

    return (
        <button className={btnClass} onClick={props.action}>{props.text}</button>
    );
}