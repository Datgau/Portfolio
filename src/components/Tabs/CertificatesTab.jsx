const CertificatesTab = ({ certificates }) => {
    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            data-aos-delay="600"
            data-aos="fade-down"
        >
            {certificates.map((certificate) => (
                <a
                    key={certificate.id}
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                >

                    <div className="bg-white dark:bg-gray-800 border border-white rounded-lg shadow-lg hover:-translate-y-1 transition-transform overflow-hidden">
                        <img
                            src={certificate.img}
                            alt={certificate.title || "certificate"}
                            className="w-full h-72 object-cover rounded-lg"
                        />
                    </div>
                </a>
            ))}
        </div>
    );
};

export default CertificatesTab;
