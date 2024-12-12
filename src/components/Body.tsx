'use client';

import { use, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const BottomInput = () => {
    return createPortal(
        <div
            className={
                'flex w-full items-start gap-4 fixed bottom-0 left-0 right-0 z-10 border-t bg-white px-5 py-4'
            }
        >
            <div
                className={
                    'flex h-full w-full items-center justify-center rounded-2xl bg-white border py-2.5 pl-4 pr-2 transition-colors duration-150 focus-within:border-primary'
                }
            >
                <textarea
                    placeholder="무엇이든 물어보세요."
                    className="w-full resize-none pr-2 text-body1 outline-none scrollbar-list placeholder:text-gray-300"
                    rows={1}
                />
            </div>
            <button>search</button>
        </div>,
        document.getElementById('portal')!
    );
};
    

const Body = () => {
    const [rendered, setRendered] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [screenHeight, setScreenHeight] = useState(0);
    useEffect (() => {
        setRendered(true);
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setScreenHeight(window.screenY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }
    , []);
    if (!rendered) return null;

    return (<>
    <span className="fixed bottom-0 right-0 z-20 w-10 text-white bg-green-900">
        {scrollY}
        </span>
        <span className="fixed bottom-0 right-10 z-20 w-10 text-white bg-black">
        {screenHeight}
        </span>
        <div className="box-border desktop:pt-[149px] pt-[145px] bg-w-white desktop:bg-w-gray-50">
            <div className="box-border h-[558px] bg-green-200 pb-12 pt-8 desktop:pb-[120px] desktop:pt-[60px] bg-w-white desktop:bg-inherit">
                {
                    Array.from({ length: 25 }).map((_, i) => (
                        <div key={i} className="h-4 bg-green-500 mb-1 flex justify-end">
                            {i*20}
                        </div>
                    ))
                }
                <BottomInput />
            </div>
        </div></>
    );
};

export default Body;