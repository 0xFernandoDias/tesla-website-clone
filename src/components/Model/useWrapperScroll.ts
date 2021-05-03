import {useMotionValue} from 'framer-motion'
import {useContext, useEffect} from 'react'
import ModelsContext from './ModelsContext'

export default function useWrapperScroll() {
    const {} = useContext(ModelsContext)
    const scrollY = useMotionValue(0)
    const scrollYProgress = useMotionValue(0)

    useEffect(() => {

    }, [])

    return {scrollY, scrollYProgress}
}