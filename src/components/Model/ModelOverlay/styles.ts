import styled from 'styled-components'
import { motion } from 'framer-motion'

    export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: sticky;
    top: 0;
    height: 100vh;
    margin-top: -100vh;
`
