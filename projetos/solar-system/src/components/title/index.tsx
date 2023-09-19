type titleProps = { headline: string }
/* é necessário tipar as props */

function Title(props: titleProps) {
    const { headline } = props;

       return(
        <>
        <h1>{ headline }</h1>
        </>
    )
}

export default Title