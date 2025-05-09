import Footer from './Footer'
import Header from './Header'

export default function Default({ children }: { children: React.ReactNode }) {
  return (
        <div className="flex flex-col min-h-screen justify-between bg-soft-mist">
            <Header />
            <div className="grow">
                {children}
            </div>
            <Footer />
        </div>
  )
}
