import React from "react";

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>ⓒ Nestor López, {year}</p>
        </footer>
    )
};