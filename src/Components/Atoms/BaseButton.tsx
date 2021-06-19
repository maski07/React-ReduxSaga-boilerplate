import { Button } from "@material-ui/core";


const BaseButton = (props: any): JSX.Element => {

    return <Button variant="contained" {...props}>Default</Button>
};

export default BaseButton;