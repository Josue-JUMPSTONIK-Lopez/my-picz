import {Button} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

export const NavigateButton = (props) => {

  const navigate = useNavigate();

    const ColorButton = styled(Button)(({ theme }) => ({
        color: '#FFF',
        backgroundColor: `${props.btnColor1}`,
        width: props.width,
        '&:hover': {
            backgroundColor: `${props.btnColor2}`,
        },
      }));
  return (
    <ColorButton  size='large' onClick={() => navigate(props.path)}>{props.content}</ColorButton>
  )
}
//#FFD5EC
//#FFD8E