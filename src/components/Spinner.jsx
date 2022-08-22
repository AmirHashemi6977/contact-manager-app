import SpinnerGif from '../assets/Spinner2.gif';

const Spinner = () => {
    return (
        <>
            <div >
                <img
                    src={SpinnerGif}
                    alt="loading"
                    className="d-block m-auto"
                    style={{ width: "200px", opacity: 0.50 }}
                />
            </div>
        </>

    )
}
export default Spinner;