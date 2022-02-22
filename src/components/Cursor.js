import React from "react"

function Cursor(props) {

    // cursorRef is for desktop cursor
    const cursorRef = React.useRef(null)

    const followCursor = React.useRef(null)

    const positionRef = React.useRef({
        mouseX: 0,
        mouseY: 0,
        destinationX: 0,
        destinationY: 0,
        distanceX: 0,
        distanceY: 0,
        key: -1,
    })

    React.useEffect(() => {
        document.addEventListener('mousemove', (event) => {
            const {clientX, clientY} = event
            const mouseX = clientX
            const mouseY = clientY

            positionRef.current.mouseX = mouseX - followCursor.current.clientWidth / 2
            positionRef.current.mouseY = mouseY - followCursor.current.clientHeight / 2
            // cursorRef.current.style.transform = `translate3d(${mouseX - cursorRef.current.clientWidth / 2}px, ${mouseY - cursorRef.current.clientHeight / 2}px, 0)`
        })

        const followMouse = () => {
            positionRef.current.key = requestAnimationFrame(followMouse)
            const {mouseX, mouseY, destinationX, destinationY, distanceX, distanceY} = positionRef.current

            if (!destinationX | !destinationY) {
                positionRef.current.destinationX = mouseX
                positionRef.current.destinationY = mouseY
            } else {
                positionRef.current.distanceX = (mouseX - destinationX) * 0.04
                positionRef.current.distanceY = (mouseY - destinationY) * 0.04

                if (Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) < 0.1) {
                    positionRef.current.destinationX = mouseX
                    positionRef.current.destinationY = mouseY
                } else {
                    positionRef.current.destinationX += distanceX
                    positionRef.current.destinationY += distanceY
                }
            }

            followCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`
        }

        followMouse()
    }, [])

    return (
        <div>
            {/* <div className="cursor" ref={cursorRef}></div> */}
            <div className="followCursor" ref={followCursor}></div>
        </div>)
}

export default Cursor