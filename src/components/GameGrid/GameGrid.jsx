import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

function GameGrid() {

    const sendConsole = () => {
        console.log('wassap');
    }

    return (
        <Box sx={{ display: 'flex', flexDirection:'column', alignItems:'center', mt:'3%', mb:'3%' }}>
            <Box sx={{ display: 'flex' }}>
                <Card variant="outlined" sx={{ height: '4em', width: '4em' }} onClick={sendConsole}>
                    <CardContent sx={{textAlign:'center'}}>
                        <Typography></Typography>
                    </CardContent>
                </Card>
                <Card variant="outlined" sx={{ height: '4em', width: '4em' }}></Card>
                <Card variant="outlined" sx={{ height: '4em', width: '4em' }}></Card>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Card variant="outlined" sx={{ height: '4em', width: '4em' }}></Card>
                <Card variant="outlined" sx={{ height: '4em', width: '4em' }}></Card>
                <Card variant="outlined" sx={{ height: '4em', width: '4em' }}></Card>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Card variant="outlined" sx={{ height: '4em', width: '4em' }}></Card>
                <Card variant="outlined" sx={{ height: '4em', width: '4em' }}></Card>
                <Card variant="outlined" sx={{ height: '4em', width: '4em' }}></Card>
            </Box>
        </Box>
    )
}

export default GameGrid;