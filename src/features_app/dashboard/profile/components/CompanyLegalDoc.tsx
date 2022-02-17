import { Stack, Box, Paper } from '@mui/material'

const CompanyLegalDoc : React.FC<any> = ({ data }) => {
    return (
        <Stack>
        { data.loading ? "Loading.." :
            <Stack mt={1}>
                <Stack flexDirection="row" justifyContent="space-between">
                    <Box fontWeight="700" fontSize={22}>Company Legal Document </Box>
                </Stack>
                { data.data.length === 0 || data.data === null ? "Data not found" :
                <>
                {data.data.legal_docs.map((value:any, i: any) => (
                    <Stack mt={2} key={i}>
                        <Paper elevation={3} sx={{ border: '#3b32da 2px solid' }}>
                            <Box p={3}>
                                <Box fontWeight="600">{value.title}</Box>
                                <Box pt={1}>
                                    Number : {value.value}
                                </Box>
                                <Box pt={1}>
                                    <a href={value.url} target="_blank" rel="noreferrer">Document Link</a>
                                </Box>
                                
                            </Box>
                        </Paper>
                    </Stack>
                ))}
                </> 
                }
            </Stack> 
        }
        </Stack>

    )
}

export default CompanyLegalDoc
