const Box = (props) => {
    const remove = () => props.handleRemove(props.id);
    return (
        <>
            <div style={{
                backgroundColor: props.backgroundColor,
                height: `${props.height}px`,
                width: `${props.width}px`
            }}>
                <button onClick={remove}>X</button>
            </div>
        </>
    )
}

export default Box