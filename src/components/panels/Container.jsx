const Container = ({ children }) => {
    return (
        <section className="container mx-auto 
                            px-4 py-6 
                            max-w-7xl 
                            bg-black 
                            dark:bg-gray-900 
                            text-black 
                            dark:text-white 
                            rounded-lg 
                            shadow-md mb-4 mt-4">
            {children}
        </section>
    );
};

export default Container;
