const Footer = () => {
    return(
        <footer className="w-3/4 h-[693px] bg-blue-200 desktop:pb-[80px]">
            {
                    Array.from({ length: 30 }).map((_, i) => (
                        <div key={i} className="h-4 bg-blue-500 mb-1 flex justify-end">
                            {i*20}
                        </div>
                    ))
                }
        </footer>
    )
}

export default Footer;