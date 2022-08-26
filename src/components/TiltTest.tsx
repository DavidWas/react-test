import React, {useEffect, useRef} from "react";
import VanillaTilt from "vanilla-tilt";

const TiltTest = () => {
    const tiltRef = useRef<HTMLElement>(null);
    useEffect(()=> {
        const tiltNode = tiltRef.current;
        if (tiltNode == undefined) return;
        VanillaTilt.init(tiltNode,
            {
                max: 25,
                speed: 400,
                glare: true,
                'max-glare': 0.5
            })
        return () => {
            // @ts-ignore
            tiltNode.vanillaTilt.destroy();
        }
    },[])
    return (
        // @ts-ignore

        <div ref={tiltRef}>
            <button type={"button"} style={{borderStyle:"solid", borderWidth:2, borderColor:"black",height:100, width: 200}}>Push me</button>
        </div>
    )
}

export default TiltTest;