import React from 'react';
import Foot1 from '../assets/Footer/paypal.png';
import Foot2 from '../assets/Footer/visa.png';
import Foot3 from '../assets/Footer/google-pay.png';
import Foot4 from '../assets//Footer/card.png';

const FooterData = {
    brand: {
        name: "LUMIA",
        description: "Worldwide fashion store with wide collection of styles with over 100 international fashion brands."
    },
    socialLinks: [
        { name: "Facebook", icon: "facebook", url: "#" },
        { name: "Instagram", icon: "instagram", url: "#" },
        { name: "TikTok", icon: "tiktok", url: "#" },
        { name: "YouTube", icon: "youtube", url: "#" },
    ],
    sections: [
        {
            title: "INFORMATION",
            links: [
                { name: "About us", url: "#" },
                { name: "Search", url: "#" },
                { name: "Contacts", url: "#" },
                { name: "Our News", url: "#" },
            ]
        },
        {
            title: "GET SHOPPING",
            links: [
                { name: "Gaming Laptops", url: "#" },
                { name: "Gaming Desktops", url: "#" },
                { name: "Gaming Accessories", url: "#" },
                { name: "Multimedia Products", url: "#" },
            ]
        },
        {
            title: "CONTACTS",
            details: [
                { type: "Phone", value: "+91 9043586739", icon: "phone" },
                { type: "Email", value: "1167ashiq@gmail.com", icon: "mail" },
                { type: "Address", value: "America Japan China India,Nagercoil", icon: "map-pin" },
            ]
        }
    ],
    copyright: "© 2025, Lumia Theme Powered by Bigskups",
    paymentMethods: [

        {
            name: "G Pay",
            imageSrc:  Foot3 
        },

        {
            name: "Visa",
            imageSrc: Foot2
        },

        {
            name: "Mastercard",
            imageSrc: Foot4
        },

        {
            name: "PayPal",
            imageSrc: Foot1
        },

    ]
};

export default FooterData;