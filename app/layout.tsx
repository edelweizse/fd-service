import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import getCurrentUser from './actions/getCurrentUser';
import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';
import Navbar from './components/navbar/Navbar';
import './globals.css';

const font = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'FD - food delivery',
  description: 'Food delivery app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang='en'>
      <body className={font.className}>
        <Toaster
          toastOptions={{
            error: {
              className: 'bg-background',
            },
          }}
        />
        <Navbar currentUser={currentUser} />
        <RegisterModal />
        <LoginModal />
        {children}
      </body>
    </html>
  );
}
