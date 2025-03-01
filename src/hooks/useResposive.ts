import { useTheme } from "@mui/material/styles"
import { useMediaQuery } from '@mui/material';

const useResponsive = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(750));
    const isTabnet = useMediaQuery(theme.breakpoints.between(750, 1024));
    const isComputer = useMediaQuery(theme.breakpoints.up(1024));
    return { isMobile, isTabnet, isComputer }
}

export default useResponsive;