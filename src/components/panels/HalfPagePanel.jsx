const HalfPagePanel = ({ leftNodes, rightNodes, invert = false }) => {
    return (
        <section
            className={`half-panel flex flex-col md:flex-row gap-6 ${invert ? 'md:flex-row-reverse' : ''
                }`}
        >
            <section className="flex-1 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
                {leftNodes}
            </section>
            <section className="flex-1 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
                {rightNodes}
            </section>
        </section>
    );
};

export default HalfPagePanel;
