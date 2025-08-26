/** @type {import('tailwindcss').Config} */

import { addDynamicIconSelectors } from "@iconify/tailwind";

const rem = (px) => `${px / 16}rem`;

export default {
    darkMode: "class",
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.antlers.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./content/**/*.md",
    ],

    theme: {
        fontFamily: {
            // TODO - Project Setup - Align fonts with design file
            body: ["DM Sans", "sans-serif"],
            header: ["DM Sans", "sans-serif"],
            subheader: ["Nunito Sans", "sans-serif"],
        },
        fontSize: {
            "-ms-3": rem(11),
            "-ms-2": rem(12),
            "-ms-1": rem(14),
            "ms-0": rem(16),
            "ms-1": rem(18),
            "ms-2": rem(20),
            "ms-3": rem(22),
            "ms-4": rem(25),
            "ms-5": rem(28),
            "ms-6": rem(32),
            "ms-7": rem(36),
            "ms-8": rem(41),
            "ms-9": rem(46),
            "ms-10": rem(51),
            "ms-11": rem(58),
            "ms-12": rem(65),
            "ms-13": rem(73),
        },
        colors: {
            /*
             * Primary, secondary, tertiary should have the main brand colors,
             * then up-shade and down-shade for the light and dark versions
             */
            // TODO - Project Setup - Align colors with design file, remove unnecessary color groups
            primary: {
                light: "",
                DEFAULT: "",
                dark: "",
                fg: "",
            },
            secondary: {
                light: "",
                DEFAULT: "",
                dark: "",
                fg: "",
            },
            tertiary: {
                light: "",
                DEFAULT: "",
                dark: "",
                fg: "",
            },
            // TODO - Project Setup - Align Add accents from design file, remove if unnecessary
            accent: {},
            // TODO - Project Setup - Align greyscale with design file
            grey: {
                100: "#DFDFE3", // Grey 1
                300: "#909098", // Grey 2
                500: "#4D4D59", // Grey 3
                700: "#28282F", // Grey 4
                900: "#1B1C1D",
            },
            black: {
                transparent: "rgba(0,0,0,0.7)",
                DEFAULT: "#1a1818",
            },
            white: {
                transparent: "rgba(255,255,255,0.7)",
                DEFAULT: "#fefefe",
            },
            transparent: "rgba(0,0,0,0)",
            feedback: {
                success: "#6dcff6",
                warning: "#fdf0a9",
                error: "#f69679",
            },
            social: {
                facebook: "#3b5998",
                flickr: "#ff0084",
                houzz: "#7ac142",
                instagram: "#833ab4",
                linkedin: "#0976b4",
                medium: "rgba(0, 0, 0, 0.84)",
                pinterest: "#cc2127",
                rss: "#f26522",
                tumblr: "#35465c",
                twitter: "#000000",
                youtube: "#b31217",
                vimeo: "#1ab7ea",
                yelp: "#f43939",
                tiktok: "#000000",
            },
            color: {
                // TODO - Project Setup - Align field colors with design file
                field: "",
                "field-required": "",
            },
        },
        containers: {
            // TODO - Project Setup - Align containers with design file
            sm: rem(536),
            md: rem(936),
            lg: rem(1176),
            xl: rem(1464), // 1416px + padding
            /*
             * '2xl': rem(1536), // Not In Use, add if needed
             * '3xl': rem(1800),
             */
            DEFAULT: rem(1464), // 1416px + padding
            padding: "1.5rem",
        },
        extend: {
            lineHeight: {
                header: 1,
            },
            borderWidth: {
                3: "3px",
            },
            // TODO - Project Setup - Align shadow with design file. If unnecessary, remove.
            boxShadow: {
                DEFAULT: "0px 3px 6px #00000029",
            },
        },
        richtext: ({ theme }) => ({
            spacing: {
                DEFAULT: "1rem",
                hr: "2rem",
                header: "2.5rem",
                gallery: "3rem",
                list: "1rem",
            },
            backgroundColors: {
                "table-td": "inherit",
                "table-th": theme("colors.primary.DEFAULT"),
            },
            borderColors: {
                "table-td": theme("colors.grey.300"),
                "table-th": theme("colors.primary.light"),
            },
            colors: {
                base: theme("colors.grey.900"),
                bullet: theme("colors.primary.DEFAULT"),
                blockquote: theme("colors.grey.900"),
                link: theme("colors.primary.DEFAULT"),
                "table-td": theme("colors.grey.900"),
                "table-th": theme("colors.white.DEFAULT"),
            },
            fontFamily: {
                "table-td": theme("fontFamily.body"),
                "table-th": theme("fontFamily.subheader"),
            },
            fontSize: {
                blockquote: rem(20),
                "heading-1": rem(36),
                "heading-2": rem(31),
                "heading-3": rem(28),
                "heading-4": rem(25),
                "heading-5": rem(22),
                "heading-6": rem(20),
                "table-td": rem(20),
                "table-th": rem(22),
            },
            fontWeight: {
                base: 400,
                blockquote: 700,
                bullet: 700,
                "heading-1": 700,
                "heading-2": 700,
                "heading-3": 700,
                "heading-4": 700,
                "heading-5": 700,
                "heading-6": 700,
                "table-td": 400,
                "table-th": 700,
            },
        }),
    },
    corePlugins: {
        container: false,
    },
    plugins: [addDynamicIconSelectors()],
};
