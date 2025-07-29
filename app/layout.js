import { IBM_Plex_Sans, DM_Sans } from 'next/font/google';
import './globals.css';
import { MotionConfig } from 'framer-motion'; // For global animation config

const ibm = IBM_Plex_Sans({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm' 
});

const dm = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dm'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ibm.variable} ${dm.variable}`}>
      <body>
        <MotionConfig reducedMotion="user"> {/* Respect user motion preferences */}
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}
