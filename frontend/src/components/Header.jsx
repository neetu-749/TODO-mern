import {Box, Typography, styled} from '@mui/material';
import TodoForm from './TodoForm';
import Todos from './Todos';

const Container = styled(Box)`
// background: linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
background: linear-gradient(-70deg, #fa7c30 30%, rgba(0, 0, 0, 0) 30%), url('todo.jpg');
    
    height: 761px;
    padding-left:50px
`

const Text = styled(Typography)`
    font-size: 45px;
    color: orange;
`

const Header = () => {
    return (
        <Container>
            <Text>TODO</Text>
            <TodoForm />
            <Todos />
        </Container>
    )
}

export default Header;