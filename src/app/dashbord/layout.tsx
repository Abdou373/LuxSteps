import Nav from "@/components/dashbord/nav";


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="max-sm:relative flex">
            <Nav />
            <div className="flex-grow">
                {children}
            </div>
        </div>
    )
}