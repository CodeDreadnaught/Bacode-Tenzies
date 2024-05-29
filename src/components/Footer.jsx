const Footer = () => {
        const currentYear = new Date().getFullYear();

        return (
            <footer className="center">
                <p className="copyright-text">&copy;{currentYear} Bacode Inc.</p>
            </footer>
        );
};

export default Footer;