import Header from './assets/layout/header'

export default function Layout({children}){
    return(
        <body class="text-white min-h-screen flex flex-col">
            <Header/>
            <main class="pl-[4vh] md:pl-[8vh] pr-[4vh] md:pr-[8vh]">
            {children}
            </main>
        </body>
    )
}