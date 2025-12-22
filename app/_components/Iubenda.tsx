'use client'

import Script from "next/script";

export default function Iubenda() {
    const iubendaPP = `<script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>`;
    const iubendaCP = `<script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>`;

    return(
        <div className="bg-corpo-blue w-screen">
            <div className="w-[90%] flex items-center justify-center gap-2 mx-auto pb-4">
                <a href="https://www.iubenda.com/privacy-policy/52538338"
                   className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy ">Privacy
                    Policy</a>
                <a href="https://www.iubenda.com/privacy-policy/52538338/cookie-policy"
                   className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Cookie Policy ">Cookie
                    Policy</a>
                <div dangerouslySetInnerHTML={{__html: iubendaPP}}></div>
                <div dangerouslySetInnerHTML={{__html: iubendaCP}}></div>
                <Script src="https://embeds.iubenda.com/widgets/d1d71270-b927-4ea1-8435-fd94280129b2.js"/>
            </div>
        </div>
    )
}