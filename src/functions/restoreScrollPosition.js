import { useEffect } from "react"
import $ from 'jquery'

const RestoreScrollPosition = () => {
    useEffect(() => {
    if(window !== undefined) {
        $(window).scroll(() => {
            sessionStorage.scrollTop = $(window).scrollTop();
        });
        
        $(document).ready(() => {
        if (sessionStorage.scrollTop !== "undefined") {
            $(window).scrollTop(sessionStorage.scrollTop);
        }
        });
    }
    }, []);
}

export default RestoreScrollPosition