import { makeStyles } from "@material-ui/core/styles";

const styles=makeStyles({
    container:{
        padding:'0 5%',
        width:'100%',
        margin:0
    },
    card:{
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        padding:'10%',
        borderRadius:10,
        color: 'white'
    }
})
export default styles