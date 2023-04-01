import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faFaceFlushed } from '@fortawesome/free-solid-svg-icons'
import styles from "@/styles/codeBlock.module.css"

export default function CodeBlock(props:{title:string,code:any,description:string}){

    function handleClick(){

        navigator.clipboard.writeText(props.code);
        
    }
    
    return(
        <div className="bg-zinc-900 rounded p-3 lg:text-base md:text-base text-xs mt-2">
            <div className="text-green-400">{props.title}</div>

            <div className="flex flex-row">
                <code className={`${styles.codeblock}  text-fuchsia-500 whitespace-pre w-full basis 3/4`} >{props.code}</code>
                <div className="text-right basis-1/4"><span onClick={handleClick}  className='text-white hover:cursor-pointer hover:text-gray-400'><FontAwesomeIcon icon={faCopy} /></span></div>
            </div>
            
            <div className="text-pink-500">{props.description}</div>
        </div>
    )
}   



