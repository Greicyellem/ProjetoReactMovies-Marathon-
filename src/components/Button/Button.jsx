import { Container } from './stylesButton';


export function Button (props){
    return (
    <Container onClick={props.onClick} type="button" title='Abrir menu'> 
    {props.title}
    </Container>
    );
}