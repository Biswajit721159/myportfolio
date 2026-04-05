import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark-bg border-t border-dark-border py-8 text-center mt-auto">
            <p className="text-sm font-medium text-dark-muted">
                &copy; {new Date().getFullYear()} Biswajit Ghosh. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;