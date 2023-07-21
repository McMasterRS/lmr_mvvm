import styled from '@emotion/styled'
import MuiButton, {ButtonProps} from '@mui/material/Button'

// Custom Button
interface CustomButtonProps extends ButtonProps {
    mainColor: string
}

export const CustomButton = styled(MuiButton, {shouldForwardProp: (prop) => prop !== "mainColor"})<CustomButtonProps>(props => ({
    backgroundColor: props.mainColor === 'green' ? '#77DD77' : '#FF6961',
    ':hover': {
        backgroundColor: props.mainColor === 'green' ? '#18A558':'#A80900',
    },
    borderRadius: 28
}));