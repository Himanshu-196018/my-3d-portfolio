import { Poppins, Work_Sans } from "next/font/google";

export const poppins = Poppins({ 
    weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'], 
    subsets: ['latin'],
    display: 'swap'
});

export const work_sans = Work_Sans({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--font-work-sans',
    display: 'swap'
})