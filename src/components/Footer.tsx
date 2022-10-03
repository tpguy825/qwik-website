import { component$ } from '@builder.io/qwik';
import Icons from './FooterIcons'

/**
 * General footer for the website
 */
export default component$(() => {
    return(
        <div className="container"> 
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3"> 
                <span className="mb-4 mb-md-0"> 
                    Made with <Icons.Heart /> by tpguy825 -  <a rel="noopener" target="_blank" title="Twitter" href="https://twitter.com/tobypayneyt"><Icons.Twitter /></a> <a rel="noopener" target="_blank" title="Youtube" href="https://youtube.com/verydankmemes"><Icons.Youtube /></a> <a rel="noopener" target="_blank" title="Github" href="https://github.com/tpguy825"><Icons.Github /></a> - <a rel="noopener" target="_blank" href="https://github.com/tpguy825/website" className="footer-icon"><Icons.Code /> Source Code</a>
                </span> 
            </footer> 
        </div>
    );
})
