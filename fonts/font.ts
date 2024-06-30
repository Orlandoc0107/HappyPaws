import {Roboto} from "next/font/google";

export const roboto = Roboto ({
    subsets: ['latin','latin-ext', 'cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'vietnamese'],
    weight:['100','300','400','500', '700','900'],
    style:['italic', 'normal'],
})