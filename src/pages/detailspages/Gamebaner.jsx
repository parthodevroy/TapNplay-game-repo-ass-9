const Gamesbanner = () => {
    return (
        <div className="max-w-6xl mx-auto pt-2 h-[300px] overflow-hidden">
            <video
                src="https://cdn.pixabay.com/video/2022/07/12/123875-729425496_large.mp4"
                className="w-full h-full object-cover object-fill"
                autoPlay
                muted
                loop
                playsInline
            />
        </div>
    );
};

export default Gamesbanner;
