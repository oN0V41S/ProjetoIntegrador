import Footer from './assets/layout/footer.js'
import Header from './assets/layout/header.js'

export default function Layout({children}){
    return(
        <body class="text-white min-h-screen flex flex-col">
            <Header/>
            <main class="pl-[2vh] lg:pl-[8vh] pr-[4vh] md:pl-[6vh] md:pr-[6vh] lg:pr-[8vh]">
            {children}
            </main>
            <Footer/>
        </body>
    )
}