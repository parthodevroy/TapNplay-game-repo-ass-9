const Gamesbanner = () => {
    return (
        <div className="w-screen h-[400px] overflow-hidden">
            <video
                src="https://cdn.pixabay.com/video/2024/03/24/205519-927335684_tiny.mp4"
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
