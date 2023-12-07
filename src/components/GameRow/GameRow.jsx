import { Box, Card, CardContent, Typography } from "@mui/material";

function GameRow() {


    return (
        <Box sx={{ display:'flex' }}>
                <Card variant="outlined" sx={{ height: '4em', width: '4em' }}>
                    <CardContent sx={{ textAlign: 'center' }}>
                        <Typography></Typography>
                    </CardContent>
                </Card>
                <Card variant="outlined" sx={{ height: '4em', width: '4em' }}>
                    <CardContent sx={{ textAlign: 'center' }}>
                        <Typography></Typography>
                    </CardContent>
                </Card>
                <Card variant="outlined" sx={{ height: '4em', width: '4em' }}>
                    <CardContent sx={{ textAlign: 'center' }}>
                        <Typography></Typography>
                    </CardContent>
                </Card>
            </Box>
    )
}

export default GameRow;